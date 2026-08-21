package com.hereliesaz.barbacker.data

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

class FirebaseConfigKeysTest {

    private val required = FirebaseConfigKeys.ALL.associateWith { "value-for-$it" }

    private fun build(extra: Map<String, String> = emptyMap()) =
        FirebaseConfigKeys.build { key -> (required + extra)[key] }

    @Test
    fun a_complete_lookup_produces_a_config() {
        assertNotNull(build())
    }

    /**
     * A missing required value is a null config, not a partial one — the
     * app shows a "not configured" screen instead of failing somewhere
     * inside the Firebase SDK with the first call that needs the value.
     */
    @Test
    fun a_missing_required_value_produces_nothing() {
        val incomplete = required - FirebaseConfigKeys.API_KEY
        assertNull(FirebaseConfigKeys.build { key -> incomplete[key] })
    }

    // A resource lookup that finds an empty string is a value that was
    // never filled in, and treating it as present would send an empty
    // API key to Firebase.
    @Test
    fun a_blank_required_value_counts_as_missing() {
        assertNull(build(mapOf(FirebaseConfigKeys.API_KEY to "   ")))
    }

    @Test
    fun optional_values_are_absent_rather_than_fatal() {
        val config = assertNotNull(build())
        assertNull(config.icalFeedBaseUrl)
        assertNull(config.googleOAuth)
        assertFalse(config.appleWebSignIn)
    }

    /**
     * The Google block hangs off the server client id: without it there
     * is no Credential Manager audience, so the rest is unusable even
     * when a desktop client id is present.
     */
    @Test
    fun google_config_appears_only_with_a_server_client_id() {
        assertNull(build(mapOf(FirebaseConfigKeys.GOOGLE_DESKTOP_CLIENT_ID to "d")).let { it?.googleOAuth })

        val config = assertNotNull(
            build(
                mapOf(
                    FirebaseConfigKeys.GOOGLE_SERVER_CLIENT_ID to "web-id",
                    FirebaseConfigKeys.GOOGLE_DESKTOP_CLIENT_ID to "desktop-id",
                ),
            ),
        )
        assertEquals("web-id", config.googleOAuth?.serverClientId)
        assertEquals("desktop-id", config.googleOAuth?.desktopClientId)
        assertNull(config.googleOAuth?.iosClientId)
    }

    @Test
    fun the_apple_flag_reads_the_spellings_a_dotenv_actually_contains() {
        for (value in listOf("true", "TRUE", " true ", "1", "yes", "on")) {
            assertTrue(
                assertNotNull(build(mapOf(FirebaseConfigKeys.APPLE_SIGN_IN to value))).appleWebSignIn,
                "expected $value to enable Apple sign-in",
            )
        }
    }

    /**
     * Anything unrecognised is off. A flag nobody deliberately set must
     * not draw a button whose server half may not be deployed — and
     * "false" landing in a `== "true"`-style check that someone later
     * inverts is exactly how that goes wrong.
     */
    @Test
    fun the_apple_flag_is_off_for_anything_else() {
        for (value in listOf("false", "0", "no", "off", "", "  ", "maybe")) {
            assertFalse(
                assertNotNull(build(mapOf(FirebaseConfigKeys.APPLE_SIGN_IN to value))).appleWebSignIn,
                "expected $value to leave Apple sign-in off",
            )
        }
    }
}
