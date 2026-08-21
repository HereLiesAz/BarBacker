package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.sun.net.httpserver.HttpServer
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.TimeoutCancellationException
import kotlinx.coroutines.withContext
import kotlinx.coroutines.withTimeout
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.forms.submitForm
import io.ktor.http.Parameters
import java.net.InetSocketAddress
import java.net.URLEncoder
import java.nio.charset.StandardCharsets
import java.security.MessageDigest
import java.security.SecureRandom
import java.util.Base64

private const val AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth"
private const val TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token"

/** How long to wait at the loopback listener before giving the port back. */
private const val CONSENT_TIMEOUT_MILLIS = 5L * 60 * 1000

/**
 * Google sign-in over a loopback redirect with PKCE.
 *
 * This is the flow Google documents for installed applications, and the
 * only one available to a desktop app: there is no Credential Manager, and
 * embedding a web view for OAuth is both against Google's policy and a
 * phishing surface. So the system browser runs the consent screen and
 * redirects to a one-shot HTTP listener on 127.0.0.1.
 *
 * PKCE is what makes that safe. The redirect lands on the loopback
 * interface, which any local process could in principle race for — the
 * code alone is useless without the verifier, which never leaves this
 * process.
 *
 * The port is **not** fixed: it is whatever the OS hands out, which is why
 * the redirect URI is built after the server is bound rather than being a
 * constant. Google allows any port on a loopback redirect precisely so
 * installed apps do not have to squat on one.
 *
 * Apple is not offered. Its flow requires a client secret that is a JWT
 * signed with a private key — a real confidential credential, which a
 * program shipped to users has nowhere safe to keep.
 */
private class DesktopSocialSignIn(
    private val config: GoogleOAuthConfig,
    private val httpClient: HttpClient,
    private val urls: UrlOpener,
) : SocialSignIn {

    @Serializable
    private data class TokenResponse(
        @SerialName("id_token") val idToken: String? = null,
        @SerialName("access_token") val accessToken: String? = null,
    )

    override fun isSupported(provider: SocialProvider): Boolean =
        provider == SocialProvider.Google && config.desktopClientId != null

    override suspend fun authenticate(provider: SocialProvider): SocialCredential {
        if (provider != SocialProvider.Google) {
            throw SocialSignInException("Apple sign-in is not available on desktop.")
        }
        val clientId = config.desktopClientId
            ?: throw SocialSignInException("Google sign-in is not configured in this build.")

        val verifier = randomUrlSafe(CODE_VERIFIER_BYTES)
        val challenge = verifier.sha256UrlSafe()
        // Echoed back by Google and compared, so a redirect this app did
        // not start cannot complete a sign-in it did.
        val expectedState = randomUrlSafe(STATE_BYTES)

        val server = withContext(Dispatchers.IO) {
            // Port 0 asks the OS for any free port.
            HttpServer.create(InetSocketAddress("127.0.0.1", 0), 0)
        }
        val redirectUri = "http://127.0.0.1:${server.address.port}"
        val code = CompletableDeferred<Result<String>>()

        server.createContext("/") { exchange ->
            val query = exchange.requestURI.rawQuery.orEmpty().parseQuery()
            val body = when {
                query["state"] != expectedState ->
                    "Sign-in could not be verified. Close this tab and try again."

                query["error"] != null ->
                    "Sign-in was declined. Close this tab and try again."

                query["code"] == null -> "Sign-in returned nothing. Close this tab."
                else -> "Signed in. You can close this tab and go back to BarBacker."
            }
            val bytes = body.toByteArray(StandardCharsets.UTF_8)
            exchange.responseHeaders.add("Content-Type", "text/plain; charset=utf-8")
            exchange.sendResponseHeaders(200, bytes.size.toLong())
            exchange.responseBody.use { it.write(bytes) }

            when {
                query["state"] != expectedState -> code.complete(
                    Result.failure(SocialSignInException("Sign-in could not be verified.")),
                )

                query["error"] == "access_denied" ->
                    code.complete(Result.failure(SocialSignInCancelledException()))

                query["error"] != null -> code.complete(
                    Result.failure(SocialSignInException("Google declined the sign-in.")),
                )

                else -> {
                    val value = query["code"]
                    code.complete(
                        if (value == null) {
                            Result.failure(SocialSignInException("Google returned no code."))
                        } else {
                            Result.success(value)
                        },
                    )
                }
            }
        }
        server.start()

        try {
            val opened = urls.open(
                buildAuthUrl(clientId = clientId, redirectUri = redirectUri, challenge = challenge, state = expectedState),
            )
            if (!opened) throw SocialSignInException("Could not open a browser for sign-in.")

            // Bounded, so an abandoned tab eventually releases the port
            // and the coroutine instead of pinning both until the app
            // exits.
            val authorizationCode = try {
                withTimeout(CONSENT_TIMEOUT_MILLIS) { code.await() }
            } catch (e: TimeoutCancellationException) {
                throw SocialSignInException("Sign-in timed out.", e)
            }.getOrElse { throw it }

            return exchangeCode(
                clientId = clientId,
                code = authorizationCode,
                verifier = verifier,
                redirectUri = redirectUri,
            )
        } finally {
            // Always: the listener holds a port and a thread pool, and
            // leaking one per abandoned attempt would eventually exhaust
            // both.
            runCatching { server.stop(0) }
                .onFailure { logWarning("Could not stop the sign-in listener", it) }
        }
    }

    private fun buildAuthUrl(
        clientId: String,
        redirectUri: String,
        challenge: String,
        state: String,
    ): String {
        val parameters = mapOf(
            "client_id" to clientId,
            "redirect_uri" to redirectUri,
            "response_type" to "code",
            "scope" to "openid email profile",
            "code_challenge" to challenge,
            "code_challenge_method" to "S256",
            "state" to state,
            // Without this an already-signed-in browser skips straight
            // past the picker, so a second account can never be chosen.
            "prompt" to "select_account",
        )
        return parameters.entries.joinToString("&", prefix = "$AUTH_ENDPOINT?") { (key, value) ->
            "$key=${URLEncoder.encode(value, StandardCharsets.UTF_8)}"
        }
    }

    private suspend fun exchangeCode(
        clientId: String,
        code: String,
        verifier: String,
        redirectUri: String,
    ): SocialCredential {
        val response = try {
            httpClient.submitForm(
                url = TOKEN_ENDPOINT,
                formParameters = Parameters.build {
                    append("client_id", clientId)
                    // Present because Google's token endpoint asks for it
                    // on a desktop client, not because it protects
                    // anything — it ships in the binary. PKCE is the
                    // actual protection.
                    config.desktopClientSecret?.let { append("client_secret", it) }
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
        return SocialCredential(
            provider = SocialProvider.Google,
            idToken = idToken,
            accessToken = response.accessToken,
        )
    }

    private companion object {
        const val CODE_VERIFIER_BYTES = 64
        const val STATE_BYTES = 16
    }
}

private val random = SecureRandom()

private fun randomUrlSafe(byteCount: Int): String =
    Base64.getUrlEncoder().withoutPadding()
        .encodeToString(ByteArray(byteCount).also(random::nextBytes))

private fun String.sha256UrlSafe(): String =
    Base64.getUrlEncoder().withoutPadding().encodeToString(
        MessageDigest.getInstance("SHA-256").digest(toByteArray(StandardCharsets.US_ASCII)),
    )

/** Splits a raw query string. Values are percent-decoded; keys are not expected to need it. */
private fun String.parseQuery(): Map<String, String> =
    split('&')
        .filter { it.isNotEmpty() }
        .mapNotNull { pair ->
            val index = pair.indexOf('=')
            if (index <= 0) {
                null
            } else {
                val key = pair.substring(0, index)
                val value = java.net.URLDecoder.decode(
                    pair.substring(index + 1),
                    StandardCharsets.UTF_8,
                )
                key to value
            }
        }
        .toMap()

actual fun createSocialSignIn(
    platformContext: Any?,
    config: GoogleOAuthConfig?,
    httpClient: HttpClient,
    urls: UrlOpener,
): SocialSignIn = when {
    // No desktop OAuth client means no flow to run. Reported as
    // unsupported so the sign-in screen hides the button rather than
    // offering one that opens a browser to an error page.
    config?.desktopClientId == null -> UnsupportedSocialSignIn
    else -> DesktopSocialSignIn(config, httpClient, urls)
}
