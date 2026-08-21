package com.hereliesaz.barbacker.data

import android.content.Context
import androidx.credentials.CredentialManager
import androidx.credentials.GetCredentialRequest
import androidx.credentials.exceptions.GetCredentialCancellationException
import androidx.credentials.exceptions.GetCredentialException
import androidx.credentials.exceptions.NoCredentialException
import com.google.android.libraries.identity.googleid.GetSignInWithGoogleOption
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential
import com.google.android.libraries.identity.googleid.GoogleIdTokenParsingException
import com.hereliesaz.barbacker.secureRandomHex
import io.ktor.client.HttpClient

/**
 * Google sign-in through Credential Manager.
 *
 * `GetSignInWithGoogleOption`, not `GetGoogleIdOption`: the latter shows a
 * one-tap sheet that silently returns nothing when the device has no
 * eligible account, which reads as a dead button. This one always shows
 * the full account picker, which is what someone tapping "Sign in with
 * Google" expects.
 *
 * Apple is absent from this class rather than unavailable on Android.
 * Its flow runs through the browser and is identical on every platform
 * without a native sheet, so it lives in common code — see
 * [AppleWebSignIn], which [CombinedSocialSignIn] layers on top of this
 * one when the server half is deployed. Nothing here needs to know.
 */
private class AndroidSocialSignIn(
    private val context: Context?,
    private val config: GoogleOAuthConfig,
) : SocialSignIn {

    override fun isSupported(provider: SocialProvider): Boolean =
        provider == SocialProvider.Google && context != null

    override suspend fun authenticate(provider: SocialProvider): SocialCredential {
        // Only reachable if something called this for a provider
        // isSupported already said no to; Apple is handled by the
        // fallback this class is composed with, not here.
        if (provider != SocialProvider.Google) {
            throw SocialSignInException("${provider.label} sign-in is not available here.")
        }
        val host = context ?: throw SocialSignInException("Could not open the account picker.")

        val option = GetSignInWithGoogleOption
            .Builder(config.serverClientId)
            // Binds this request to a value the server also sees, so a
            // response captured from another request cannot be replayed
            // into this one.
            .setNonce(secureRandomHex(NONCE_BYTES))
            .build()

        val response = try {
            CredentialManager.create(host).getCredential(
                context = host,
                request = GetCredentialRequest.Builder().addCredentialOption(option).build(),
            )
        } catch (e: GetCredentialCancellationException) {
            throw SocialSignInCancelledException()
        } catch (e: NoCredentialException) {
            // Distinct from a cancel: there was nothing to choose from.
            throw SocialSignInException("No Google account is available on this device.", e)
        } catch (e: GetCredentialException) {
            throw SocialSignInException("Google sign-in failed.", e)
        }

        val credential = response.credential
        if (credential.type != GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL) {
            throw SocialSignInException("Google sign-in returned an unexpected credential.")
        }

        val googleCredential = try {
            GoogleIdTokenCredential.createFrom(credential.data)
        } catch (e: GoogleIdTokenParsingException) {
            throw SocialSignInException("Google sign-in returned a token we could not read.", e)
        }

        return SocialCredential(
            provider = SocialProvider.Google,
            idToken = googleCredential.idToken,
        )
    }

    private companion object {
        const val NONCE_BYTES = 16
    }
}

actual fun createSocialSignIn(
    platformContext: Any?,
    config: GoogleOAuthConfig?,
    httpClient: HttpClient,
    urls: UrlOpener,
): SocialSignIn = when {
    config == null -> UnsupportedSocialSignIn
    else -> AndroidSocialSignIn(platformContext as? Context, config)
}
