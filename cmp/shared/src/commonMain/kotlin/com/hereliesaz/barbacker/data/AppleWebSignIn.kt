package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.secureRandomHex
import com.hereliesaz.barbacker.sha256Hex
import dev.gitlive.firebase.functions.FirebaseFunctions
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.TimeoutCancellationException
import kotlinx.coroutines.delay
import kotlinx.coroutines.withTimeout
import kotlinx.serialization.Serializable

/**
 * Apple sign-in on the platforms with no native sheet, through the
 * browser and three Cloud Functions.
 *
 * iOS has `ASAuthorizationController` and needs none of this. Android and
 * desktop have to run Apple's web flow, and the received wisdom about
 * that flow — that it needs a client secret which is a JWT signed with a
 * .p8 private key, and therefore a confidential credential no shipped app
 * can hold — is true only of the *token exchange*. Asking Apple for
 * `response_type=code id_token` returns the identity token directly in
 * the callback, and the identity token is the only thing Firebase wants.
 * The exchange, and the private key it would need, are skipped entirely.
 *
 * What is still needed is a public HTTPS endpoint, because Apple refuses
 * to redirect to a custom scheme or to loopback, so the redirect cannot
 * land on the device. Hence the round trip through
 * `appleAuthBegin` / `appleAuthCallback` / `appleAuthClaim`: the browser
 * finishes at a Cloud Function, and this polls for the result.
 *
 * All of it is common code. That is the payoff of routing through the
 * browser rather than a platform SDK — one implementation covers both
 * targets, and the only per-platform part is [UrlOpener], which every
 * target already had.
 */
internal class AppleWebSignIn(
    private val functions: FirebaseFunctions,
    private val urls: UrlOpener,
) : SocialSignIn {

    @Serializable
    private data class BeginRequest(
        val sessionId: String,
        val claimSecretHash: String,
        val nonce: String,
    )

    @Serializable
    private data class BeginResponse(val authorizeUrl: String)

    @Serializable
    private data class ClaimRequest(val sessionId: String, val claimSecret: String)

    @Serializable
    private data class ClaimResponse(
        val status: String,
        val idToken: String? = null,
        val message: String? = null,
    )

    override fun isSupported(provider: SocialProvider): Boolean =
        provider == SocialProvider.Apple

    override suspend fun authenticate(provider: SocialProvider): SocialCredential {
        if (provider != SocialProvider.Apple) {
            throw SocialSignInException("${provider.label} sign-in is not available here.")
        }

        // Three separate secrets, because they defend against three
        // different things. The session id is public — it goes to Apple
        // as `state` and therefore into the browser's history. The claim
        // secret never leaves this process except as a hash, and is what
        // stops anyone else collecting the token. The nonce goes to Apple
        // hashed and to Firebase raw, which is what stops an identity
        // token issued for someone else's request being replayed here.
        val sessionId = secureRandomHex(SESSION_ID_BYTES)
        val claimSecret = secureRandomHex(CLAIM_SECRET_BYTES)
        val rawNonce = secureRandomHex(NONCE_BYTES)

        val authorizeUrl = try {
            functions.httpsCallable("appleAuthBegin")
                .invoke(
                    BeginRequest(
                        sessionId = sessionId,
                        claimSecretHash = sha256Hex(claimSecret),
                        nonce = sha256Hex(rawNonce),
                    ),
                )
                .data<BeginResponse>()
                .authorizeUrl
        } catch (e: CancellationException) {
            throw e
        } catch (e: Exception) {
            throw SocialSignInException("Could not start sign-in with Apple.", e)
        }

        if (!urls.open(authorizeUrl)) {
            throw SocialSignInException("Could not open a browser for sign-in.")
        }

        return awaitCredential(sessionId, claimSecret, rawNonce)
    }

    /**
     * Polls until the browser half finishes, or the wait runs out.
     *
     * Polling rather than a Firestore listener because the document being
     * waited on holds an identity token, so the rules deny the client any
     * read of it — and there is no signed-in identity to scope such a
     * read to, this being sign-in.
     *
     * Any failure of the poll itself is terminal rather than retried. A
     * dropped connection mid-consent does mean starting over, which is
     * the cost of not swallowing the one error that says what actually
     * went wrong — a session collected twice, or expired, reports itself
     * exactly once.
     */
    private suspend fun awaitCredential(
        sessionId: String,
        claimSecret: String,
        rawNonce: String,
    ): SocialCredential {
        val response = try {
            withTimeout(CONSENT_TIMEOUT_MILLIS) {
                var result: ClaimResponse
                do {
                    delay(POLL_INTERVAL_MILLIS)
                    result = try {
                        functions.httpsCallable("appleAuthClaim")
                            .invoke(ClaimRequest(sessionId, claimSecret))
                            .data<ClaimResponse>()
                    } catch (e: CancellationException) {
                        // The timeout below, or the screen going away.
                        // Swallowing this would report a cancelled wait
                        // as a server failure and leave the coroutine
                        // running past its own cancellation.
                        throw e
                    } catch (e: Exception) {
                        throw SocialSignInException("Sign-in with Apple could not be completed.", e)
                    }
                } while (result.status == STATUS_PENDING)
                result
            }
        } catch (e: TimeoutCancellationException) {
            throw SocialSignInException("Sign-in timed out.", e)
        }

        return when (response.status) {
            STATUS_READY -> SocialCredential(
                provider = SocialProvider.Apple,
                idToken = response.idToken
                    ?: throw SocialSignInException("Apple returned no identity token."),
                // Raw, never the hash. Firebase re-hashes this and
                // compares it against the token's nonce claim; sending
                // the hash fails with a generic invalid-credential error
                // that says nothing about why.
                rawNonce = rawNonce,
            )

            STATUS_CANCELLED -> throw SocialSignInCancelledException()

            else -> throw SocialSignInException(
                response.message ?: "Sign-in with Apple could not be completed.",
            )
        }
    }

    private companion object {
        const val SESSION_ID_BYTES = 16
        const val CLAIM_SECRET_BYTES = 32
        const val NONCE_BYTES = 16

        const val STATUS_PENDING = "pending"
        const val STATUS_READY = "ready"
        const val STATUS_CANCELLED = "cancelled"

        /**
         * Matched to the server's session TTL. Waiting longer would only
         * poll a document that has already been swept.
         */
        const val CONSENT_TIMEOUT_MILLIS = 10L * 60 * 1000
        const val POLL_INTERVAL_MILLIS = 2_000L
    }
}

/**
 * Adds a provider the platform flow cannot do itself.
 *
 * The platform's own implementation always wins where it supports a
 * provider, so iOS keeps its native Apple sheet and only Android and
 * desktop fall through to the browser flow. Composed here rather than
 * threaded into `createSocialSignIn` so no `actual` has to know the web
 * flow exists.
 */
internal class CombinedSocialSignIn(
    private val platform: SocialSignIn,
    private val fallback: SocialSignIn,
) : SocialSignIn {

    override fun isSupported(provider: SocialProvider): Boolean =
        platform.isSupported(provider) || fallback.isSupported(provider)

    override suspend fun authenticate(provider: SocialProvider): SocialCredential =
        if (platform.isSupported(provider)) {
            platform.authenticate(provider)
        } else {
            fallback.authenticate(provider)
        }
}
