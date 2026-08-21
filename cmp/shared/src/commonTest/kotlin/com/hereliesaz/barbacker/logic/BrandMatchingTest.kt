package com.hereliesaz.barbacker.logic

import com.hereliesaz.barbacker.DEFAULT_SPIRITS
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class BrandMatchingTest {

    private val candidates = listOf("Jameson", "Jack Daniel's", "Hendrick's Gin", "Tanqueray", "Corona")

    @Test
    fun matches_an_exact_line() {
        assertEquals("Jameson", matchBrand(listOf("Jameson"), candidates))
    }

    @Test
    fun matches_case_and_punctuation_insensitively() {
        assertEquals("Jack Daniel's", matchBrand(listOf("JACK DANIELS"), candidates))
    }

    @Test
    fun finds_a_brand_buried_in_label_noise() {
        // The realistic case: OCR returns the whole label line.
        assertEquals(
            "Jameson",
            matchBrand(listOf("JAMESON IRISH WHISKEY 750ML 40% ABV"), candidates),
        )
    }

    @Test
    fun tolerates_ocr_character_errors() {
        assertEquals("Tanqueray", matchBrand(listOf("TANQUERAV"), candidates))
    }

    @Test
    fun rejects_a_short_generic_fragment_of_a_longer_brand() {
        // "GIN" is a substring of "Hendrick's Gin". Accepting it would make
        // every unrelated gin bottle confidently match Hendrick's — a wrong
        // answer rather than a fall-through to manual entry.
        assertNull(matchBrand(listOf("GIN"), candidates))
    }

    @Test
    fun returns_null_when_nothing_is_close() {
        assertNull(matchBrand(listOf("ABSOLUTELY UNRELATED TEXT"), candidates))
        assertNull(matchBrand(listOf("Heineken"), listOf("Jameson", "Tanqueray")))
    }

    @Test
    fun ignores_blank_and_unmatchable_lines() {
        assertEquals("Corona", matchBrand(listOf("", "   ", "!!!", "Corona"), candidates))
        assertNull(matchBrand(emptyList(), candidates))
        assertNull(matchBrand(listOf("Jameson"), emptyList()))
    }

    @Test
    fun prefers_the_best_scoring_candidate_across_all_lines() {
        // A weak fuzzy hit on line one must lose to the exact hit on line two.
        assertEquals(
            "Tanqueray",
            matchBrand(listOf("TANQUERAV", "Tanqueray"), candidates),
        )
    }

    @Test
    fun an_exact_match_beats_a_containment_match() {
        // "Corona" is contained in "Corona Extra"; an exact line must not be
        // hijacked by the longer candidate.
        val both = listOf("Corona Extra", "Corona")
        assertEquals("Corona", matchBrand(listOf("Corona"), both))
    }

    @Test
    fun works_against_the_real_candidate_list() {
        assertEquals("Tito's Handmade Vodka", matchBrand(listOf("TITOS HANDMADE VODKA"), DEFAULT_SPIRITS))
        assertEquals("Jägermeister", matchBrand(listOf("JAGERMEISTER"), DEFAULT_SPIRITS))
    }

    @Test
    fun normalizes_by_stripping_punctuation_and_collapsing_space() {
        assertEquals("jack daniels", normalizeForMatching("  Jack   Daniel's!!  "))
        assertEquals("bulleit rye 95", normalizeForMatching("Bulleit Rye (95)"))
        assertEquals("", normalizeForMatching("---"))
    }

    @Test
    fun levenshtein_computes_known_distances() {
        assertEquals(0, levenshtein("kitten", "kitten"))
        assertEquals(3, levenshtein("kitten", "sitting"))
        assertEquals(4, levenshtein("", "abcd"))
        assertEquals(4, levenshtein("abcd", ""))
        // Guards against the two-row buffer swap losing a row.
        assertEquals(1, levenshtein("abcdefghij", "abcdefghix"))
    }
}
