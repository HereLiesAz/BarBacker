package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logic.matchBrand
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class RecognizedLinesTest {

    @Test
    fun splits_and_trims() {
        assertEquals(
            listOf("JAMESON", "IRISH WHISKEY", "750ML"),
            recognizedLinesOf("  JAMESON \n IRISH WHISKEY\n750ML  "),
        )
    }

    @Test
    fun blank_lines_are_dropped() {
        assertEquals(listOf("CORONA"), recognizedLinesOf("\n\n  \nCORONA\n\n"))
    }

    /**
     * OCR routinely emits a stray glyph from a label's border or
     * embossing. Each one is another chance for [matchBrand] to find a
     * spurious substring hit, so single characters never reach it.
     */
    @Test
    fun single_character_lines_are_dropped() {
        assertEquals(listOf("GIN"), recognizedLinesOf("|\nGIN\n®\n7"))
    }

    @Test
    fun nothing_legible_yields_an_empty_list() {
        assertTrue(recognizedLinesOf("").isEmpty())
        assertTrue(recognizedLinesOf("\n \n|").isEmpty())
    }

    /**
     * The two halves have to work together: the filter must not strip a
     * line the matcher needed, and the matcher must survive the noise the
     * filter lets through.
     */
    @Test
    fun a_realistic_label_resolves_to_the_brand() {
        val ocr = "|\nJAMESON\nIRISH WHISKEY\n750ML 40% ABV\n®"
        val candidates = listOf("Jameson", "Jack Daniel's", "Tanqueray")
        assertEquals("Jameson", matchBrand(recognizedLinesOf(ocr), candidates))
    }

    @Test
    fun an_unrelated_label_resolves_to_nothing() {
        val ocr = "SPARKLING MINERAL WATER\n1 LITRE"
        assertNull(matchBrand(recognizedLinesOf(ocr), listOf("Jameson", "Tanqueray")))
    }
}
