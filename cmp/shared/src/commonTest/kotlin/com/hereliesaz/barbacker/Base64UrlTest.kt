package com.hereliesaz.barbacker

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Vectors from RFC 4648 §10, with `+`/`/` mapped to `-`/`_` and the
 * padding stripped, since that is exactly the difference between standard
 * base64 and the base64url PKCE wants.
 */
class Base64UrlTest {

    private fun encode(text: String) = text.encodeToByteArray().base64UrlEncode()

    @Test
    fun empty_input_encodes_to_nothing() {
        assertEquals("", encode(""))
    }

    /** Length ≡ 0 (mod 3): the whole-chunk path, no tail. */
    @Test
    fun exact_multiples_of_three_bytes() {
        assertEquals("Zm9v", encode("foo"))
        assertEquals("Zm9vYmFy", encode("foobar"))
    }

    /** Length ≡ 1 (mod 3): the two-character tail, where padding would go. */
    @Test
    fun one_leftover_byte_yields_two_characters() {
        assertEquals("Zg", encode("f"))
        assertEquals("Zm9vYg", encode("foob"))
    }

    /** Length ≡ 2 (mod 3): the three-character tail. */
    @Test
    fun two_leftover_bytes_yield_three_characters() {
        assertEquals("Zm8", encode("fo"))
        assertEquals("Zm9vYmE", encode("fooba"))
    }

    @Test
    fun never_emits_padding() {
        for (length in 0..24) {
            val encoded = ByteArray(length) { it.toByte() }.base64UrlEncode()
            assertTrue('=' !in encoded, "padding leaked at length $length: $encoded")
        }
    }

    /**
     * The whole reason this is not Foundation's base64: `+` and `/` are
     * valid there and would be re-interpreted by Google's token endpoint,
     * which takes the challenge straight out of a URL.
     */
    @Test
    fun uses_the_url_safe_alphabet() {
        // 0xFB 0xFF encodes to "+/8=" in standard base64.
        val encoded = byteArrayOf(0xFB.toByte(), 0xFF.toByte()).base64UrlEncode()
        assertEquals("-_8", encoded)
    }

    @Test
    fun output_length_is_the_unpadded_formula() {
        for (length in 0..24) {
            val expected = (length * 8 + 5) / 6
            assertEquals(
                expected,
                ByteArray(length).base64UrlEncode().length,
                "wrong length for $length input bytes",
            )
        }
    }
}
