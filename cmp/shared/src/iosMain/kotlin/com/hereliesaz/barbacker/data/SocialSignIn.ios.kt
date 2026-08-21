package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.base64UrlEncode
import com.hereliesaz.barbacker.secureRandomHex
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.forms.submitForm
import io.ktor.http.Parameters
import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import platform.AuthenticationServices.ASAuthorization
import platform.AuthenticationServices.ASAuthorizationAppleIDCredential
import platform.AuthenticationServices.ASAuthorizationAppleIDProvider
import platform.AuthenticationServices.ASAuthorizationController
import platform.AuthenticationServices.ASAuthorizationControllerDelegateProtocol
import platform.AuthenticationServices.ASAuthorizationScopeEmail
import platform.AuthenticationServices.ASAuthorizationScopeFullName
import platform.AuthenticationServices.ASWebAuthenticationSession
import platform.CoreCrypto.CC_SHA256
import platform.CoreCrypto.CC_SHA256_DIGEST_LENGTH
import platform.Foundation.NSError
import platform.Foundation.NSString
import platform.Foundation.NSURL
import platform.Foundation.NSURLComponents
import platform.Foundation.NSURLQueryItem
import platform.Foundation.NSUTF8StringEncoding
import platform.Foundation.dataUsingEncoding
import platform.darwin.NSObject
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

private const val AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth"
private const val TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token"

/**
 * Google via `ASWebAuthenticationSession`, Apple via the native sheet.
 *
 * **Unverified.** There is no Xcode project in this repository (see
 * `cmp/iosApp/README.md`) and CI has no macOS runner, so this file has
 * never been compiled. Treat it as a first draft.
 *
 * Google needs an iOS OAuth client, whose redirect is the reversed client
 * id as a custom URL scheme — that scheme must also be listed under
 * `CFBundleURLTypes` in `Info.plist`, or the browser sheet completes and
 * nothing comes back. Apple additionally needs the "Sign in with Apple"
 * capability on the target.
 */
@OptIn(ExperimentalForeignApi::class)
private class IosSocialSignIn(
    private val config: GoogleOAuthConfig,
    private val httpClient: HttpClient,
) : SocialSignIn {

    @Serializable
    private data class TokenResponse(
        @SerialName("id_token") val idToken: String? = null,
        @SerialName("access_token") val accessToken: String? = null,
    )

    // Held for the lifetime of this object: ASWebAuthenticationSession and
    // ASAuthorizationController are both retained only weakly by UIKit
    // while presenting, and a collected one silently never calls back.
    private var webSession: ASWebAuthenticationSession? = null
    private var appleDelegate: AppleSignInDelegate? = null

    override fun isSupported(provider: SocialProvider): Boolean = when (provider) {
        SocialProvider.Google -> config.iosClientId != null
        // Native on iOS, so it needs no OAuth client of ours at all.
        SocialProvider.Apple -> true
    }

    override suspend fun authenticate(provider: SocialProvider): SocialCredential =
        when (provider) {
            SocialProvider.Google -> authenticateGoogle()
            SocialProvider.Apple -> authenticateApple()
        }

    private suspend fun authenticateGoogle(): SocialCredential {
        val clientId = config.iosClientId
            ?: throw SocialSignInException("Google sign-in is not configured in this build.")

        val verifier = secureRandomHex(CODE_VERIFIER_BYTES)
        val challenge = verifier.sha256Base64Url()
        val expectedState = secureRandomHex(STATE_BYTES)

        // Google's iOS convention: the redirect scheme is the client id
        // with its dot-separated parts reversed.
        val scheme = clientId.split('.').reversed().joinToString(".")
        val redirectUri = "$scheme:/oauth2redirect"

        val callback = suspendCancellableCoroutine { continuation ->
            val session = ASWebAuthenticationSession(
                uRL = NSURL(string = buildAuthUrl(clientId, redirectUri, challenge, expectedState)),
                callbackURLScheme = scheme,
            ) { url, error ->
                when {
                    // Any error here is a cancel in practice: the only
                    // other outcome ASWebAuthenticationSession reports is
                    // "presentation context invalid", which a user cannot
                    // cause and cannot act on.
                    error != null -> continuation.resumeWithException(
                        SocialSignInCancelledException(),
                    )

                    url == null -> continuation.resumeWithException(
                        SocialSignInException("Google returned nothing."),
                    )

                    else -> continuation.resume(url)
                }
            }
            session.prefersEphemeralWebBrowserSession = false
            webSession = session
            if (!session.start()) {
                continuation.resumeWithException(
                    SocialSignInException("Could not open the sign-in sheet."),
                )
            }
            continuation.invokeOnCancellation { session.cancel() }
        }

        val query = NSURLComponents(uRL = callback, resolvingAgainstBaseURL = false)
            .queryItems
            .orEmpty()
            .filterIsInstance<NSURLQueryItem>()
            .associate { it.name to it.value }

        if (query["state"] != expectedState) {
            throw SocialSignInException("Sign-in could not be verified.")
        }
        if (query["error"] != null) throw SocialSignInCancelledException()
        val code = query["code"] ?: throw SocialSignInException("Google returned no code.")

        val response = try {
            httpClient.submitForm(
                url = TOKEN_ENDPOINT,
                formParameters = Parameters.build {
                    append("client_id", clientId)
                    append("code", code)
                    append("code_verifier", verifier)
                    append("grant_type", "authorization_code")
                    append("redirect_uri", redirectUri)
                },
            ).body<TokenResponse>()
        } catch (e: Exception) {
            throw SocialSignInException("Could not complete sign-in with Google.", e)
        }

        val idToken = response.idToken
            ?: throw SocialSignInException("Google returned no identity token.")
        return SocialCredential(SocialProvider.Google, idToken, response.accessToken)
    }

    private suspend fun authenticateApple(): SocialCredential {
        // Apple signs the HASH; Firebase re-hashes the raw value and
        // compares. Both have to be kept: send the hash, keep the raw.
        val rawNonce = secureRandomHex(NONCE_BYTES)

        val identityToken = suspendCancellableCoroutine { continuation ->
            val request = ASAuthorizationAppleIDProvider().createRequest().apply {
                requestedScopes = listOf(ASAuthorizationScopeEmail, ASAuthorizationScopeFullName)
                nonce = rawNonce.sha256Hex()
            }
            val delegate = AppleSignInDelegate(
                onToken = { continuation.resume(it) },
                onError = { continuation.resumeWithException(it) },
            )
            appleDelegate = delegate

            ASAuthorizationController(authorizationRequests = listOf(request)).apply {
                this.delegate = delegate
                performRequests()
            }
        }

        return SocialCredential(
            provider = SocialProvider.Apple,
            idToken = identityToken,
            rawNonce = rawNonce,
        )
    }

    private fun buildAuthUrl(
        clientId: String,
        redirectUri: String,
        challenge: String,
        state: String,
    ): String {
        val parameters = listOf(
            "client_id" to clientId,
            "redirect_uri" to redirectUri,
            "response_type" to "code",
            "scope" to "openid email profile",
            "code_challenge" to challenge,
            "code_challenge_method" to "S256",
            "state" to state,
        )
        return parameters.joinToString("&", prefix = "$AUTH_ENDPOINT?") { (key, value) ->
            "$key=${value.percentEncoded()}"
        }
    }

    private companion object {
        const val CODE_VERIFIER_BYTES = 48
        const val STATE_BYTES = 16
        const val NONCE_BYTES = 16
    }
}

private class AppleSignInDelegate(
    private val onToken: (String) -> Unit,
    private val onError: (Throwable) -> Unit,
) : NSObject(), ASAuthorizationControllerDelegateProtocol {

    override fun authorizationController(
        controller: ASAuthorizationController,
        didCompleteWithAuthorization: ASAuthorization,
    ) {
        val credential = didCompleteWithAuthorization.credential as? ASAuthorizationAppleIDCredential
        if (credential == null) {
            onError(SocialSignInException("Apple returned an unexpected credential."))
            return
        }
        val token = credential.identityToken?.utf8String()
        if (token == null) {
            onError(SocialSignInException("Apple returned no identity token."))
            return
        }
        onToken(token)
    }

    override fun authorizationController(
        controller: ASAuthorizationController,
        didCompleteWithError: NSError,
    ) {
        // Apple reports a user-initiated cancel as error 1001. Everything
        // else is worth surfacing.
        if (didCompleteWithError.code == APPLE_CANCELLED) {
            onError(SocialSignInCancelledException())
        } else {
            onError(SocialSignInException(didCompleteWithError.localizedDescription))
        }
    }

    private companion object {
        const val APPLE_CANCELLED = 1001L
    }
}

@OptIn(ExperimentalForeignApi::class)
private fun platform.Foundation.NSData.utf8String(): String? =
    platform.Foundation.NSString.create(data = this, encoding = NSUTF8StringEncoding) as String?

@OptIn(ExperimentalForeignApi::class)
private fun String.sha256(): ByteArray {
    val data = (this as NSString).dataUsingEncoding(NSUTF8StringEncoding)
        ?: return ByteArray(0)
    val digest = ByteArray(CC_SHA256_DIGEST_LENGTH)
    digest.usePinned { pinned ->
        CC_SHA256(data.bytes, data.length.toUInt(), pinned.addressOf(0).reinterpret())
    }
    return digest
}

private fun String.sha256Hex(): String =
    sha256().joinToString("") { byte ->
        (byte.toInt() and 0xFF).toString(16).padStart(2, '0')
    }

/** Base64url with no padding, as PKCE requires. */
private fun String.sha256Base64Url(): String =
    sha256().base64UrlEncode()

/** Percent-encodes everything outside the unreserved set. */
private fun String.percentEncoded(): String = buildString {
    for (byte in encodeToByteArray()) {
        val value = byte.toInt() and 0xFF
        val char = value.toChar()
        if (char.isLetterOrDigit() && value < 0x80 || char in "-._~") {
            append(char)
        } else {
            append('%')
            append(value.toString(16).uppercase().padStart(2, '0'))
        }
    }
}

actual fun createSocialSignIn(
    platformContext: Any?,
    config: GoogleOAuthConfig?,
    httpClient: HttpClient,
    urls: UrlOpener,
): SocialSignIn = when {
    config == null -> UnsupportedSocialSignIn
    else -> IosSocialSignIn(config, httpClient)
}
