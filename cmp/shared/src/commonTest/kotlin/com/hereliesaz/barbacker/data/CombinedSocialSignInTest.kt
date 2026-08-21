package com.hereliesaz.barbacker.data

import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * The decorator that lets Apple's browser flow reach Android and desktop
 * without any `actual` knowing it exists.
 *
 * Which half runs is the whole behaviour, and getting it backwards would
 * send iOS — the one platform with a native Apple sheet — out to a
 * browser round trip instead.
 */
class CombinedSocialSignInTest {

    private class Fake(
        private val supported: Set<SocialProvider>,
        private val name: String,
    ) : SocialSignIn {
        override fun isSupported(provider: SocialProvider) = provider in supported

        override suspend fun authenticate(provider: SocialProvider) =
            SocialCredential(provider = provider, idToken = name)
    }

    private val googleOnly = Fake(setOf(SocialProvider.Google), "platform")
    private val appleOnly = Fake(setOf(SocialProvider.Apple), "fallback")

    @Test
    fun supports_the_union_of_both_halves() {
        val combined = CombinedSocialSignIn(googleOnly, appleOnly)
        assertTrue(combined.isSupported(SocialProvider.Google))
        assertTrue(combined.isSupported(SocialProvider.Apple))
    }

    @Test
    fun supports_nothing_neither_half_does() {
        val combined = CombinedSocialSignIn(
            Fake(emptySet(), "platform"),
            Fake(emptySet(), "fallback"),
        )
        assertFalse(combined.isSupported(SocialProvider.Google))
        assertFalse(combined.isSupported(SocialProvider.Apple))
    }

    @Test
    fun routes_a_provider_to_the_half_that_supports_it() = runTest {
        val combined = CombinedSocialSignIn(googleOnly, appleOnly)
        assertEquals("platform", combined.authenticate(SocialProvider.Google).idToken)
        assertEquals("fallback", combined.authenticate(SocialProvider.Apple).idToken)
    }

    /**
     * iOS is the case this protects. Its native sheet supports Apple, and
     * the fallback must not get a look in — a browser round trip on a
     * platform with `ASAuthorizationController` would be a worse flow and
     * would need server configuration iOS does not otherwise require.
     */
    @Test
    fun the_platform_half_wins_wherever_both_support_a_provider() = runTest {
        val combined = CombinedSocialSignIn(
            Fake(setOf(SocialProvider.Google, SocialProvider.Apple), "platform"),
            appleOnly,
        )
        assertEquals("platform", combined.authenticate(SocialProvider.Apple).idToken)
    }

    /**
     * With neither half supporting it, the call still has to fail
     * somewhere. It falls through, so the message comes from the
     * fallback — an error, not a silently absent credential.
     */
    @Test
    fun an_unsupported_provider_still_fails_rather_than_returning_nothing() = runTest {
        val combined = CombinedSocialSignIn(
            Fake(emptySet(), "platform"),
            UnsupportedSocialSignIn,
        )
        assertFailsWith<SocialSignInException> {
            combined.authenticate(SocialProvider.Apple)
        }
    }
}
