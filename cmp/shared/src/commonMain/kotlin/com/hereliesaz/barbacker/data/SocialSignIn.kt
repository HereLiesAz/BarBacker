package com.hereliesaz.barbacker.data

import io.ktor.client.HttpClient

/** The identity providers this client can sign in with, besides email. */
enum class SocialProvider(
    /** Firebase's provider id, and the label shown on the button. */
    val wire: String,
    val label: String,
) {
    Google("google.com", "Google"),
    Apple("apple.com", "Apple"),
}

/**
 * What a platform sign-in flow produced, ready to hand to Firebase.
 *
 * Deliberately just tokens. Every platform gets these a different way —
 * Credential Manager, a browser round trip, a native Apple sheet — and the
 * only thing the shared layer needs is the result.
 */
class SocialCredential(
    val provider: SocialProvider,
    val idToken: String,
    val accessToken: String? = null,
    /**
     * Apple only: the UN-hashed nonce whose SHA-256 was sent in the
     * request.
     *
     * Firebase re-hashes this and compares, which is what stops a stolen
     * identity token being replayed. Sending the hash here instead — an
     * easy mistake, since the hash is what went to Apple — fails with a
     * generic invalid-credential error that says nothing about why.
     */
    val rawNonce: String? = null,
)

/**
 * The user backed out of the platform's sign-in sheet.
 *
 * Distinct from a failure because it is not one, and the UI must not show
 * an error for it — someone changing their mind is the flow working.
 */
class SocialSignInCancelledException : Exception("Sign-in cancelled")

/** No credential could be obtained, with a reason worth showing. */
class SocialSignInException(message: String, cause: Throwable? = null) :
    Exception(message, cause)

interface SocialSignIn {
    /**
     * Whether [provider] can actually be used on this platform and build.
     *
     * False is an ordinary answer, not a defect: Google's flow needs an
     * OAuth client id this build may not have been given, and Apple's,
     * away from iOS, needs Cloud Functions this project may not have
     * deployed. The sign-in screen hides a button rather than offering
     * one that fails.
     */
    fun isSupported(provider: SocialProvider): Boolean

    /**
     * @throws SocialSignInCancelledException if the user backed out.
     * @throws SocialSignInException on anything else.
     */
    suspend fun authenticate(provider: SocialProvider): SocialCredential
}

/**
 * OAuth client ids for Google sign-in.
 *
 * Absent for a build that was never given them, in which case Google
 * sign-in reports itself unsupported. These are client ids, not secrets —
 * a desktop OAuth client's "secret" is explicitly not confidential, since
 * it ships inside the binary; PKCE is what actually protects that flow.
 */
data class GoogleOAuthConfig(
    /**
     * The **web** client id from the Firebase project.
     *
     * Android's Credential Manager wants this one — not the Android client
     * id — because it is the audience Firebase expects in the ID token.
     * Passing the Android client id yields a token Firebase rejects.
     */
    val serverClientId: String,

    /** Desktop's own "Desktop app" OAuth client, if this build has one. */
    val desktopClientId: String? = null,
    val desktopClientSecret: String? = null,

    /** iOS's own OAuth client, if this build has one. */
    val iosClientId: String? = null,
)

/**
 * @param httpClient and [urls] are passed in rather than built here so the
 *   browser-based flows reuse the engine, timeouts, and user agent the
 *   rest of the app already uses. Android ignores both — Credential
 *   Manager does its own transport.
 */
expect fun createSocialSignIn(
    platformContext: Any?,
    config: GoogleOAuthConfig?,
    httpClient: HttpClient,
    urls: UrlOpener,
): SocialSignIn

/**
 * A [SocialSignIn] that can do nothing, for a build with no OAuth config.
 *
 * Shared by every platform's fallback path so the "not configured" answer
 * is identical everywhere rather than three near-copies.
 */
internal object UnsupportedSocialSignIn : SocialSignIn {
    override fun isSupported(provider: SocialProvider): Boolean = false

    override suspend fun authenticate(provider: SocialProvider): SocialCredential =
        throw SocialSignInException("${provider.label} sign-in is not configured in this build.")
}
