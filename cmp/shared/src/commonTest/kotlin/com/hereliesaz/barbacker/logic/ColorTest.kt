package com.hereliesaz.barbacker.logic

import kotlin.test.Test
import kotlin.test.assertEquals

class ColorTest {

    @Test
    fun picks_black_on_light_backgrounds() {
        assertEquals("#000000", contrastColorFor("#FFFFFF"))
        assertEquals("#000000", contrastColorFor("#EAB308")) // the approvals-badge yellow
    }

    @Test
    fun picks_white_on_dark_backgrounds() {
        assertEquals("#FFFFFF", contrastColorFor("#000000"))
        assertEquals("#FFFFFF", contrastColorFor("#1E1E1E")) // the surface-container grey
    }

    @Test
    fun accepts_hex_without_a_leading_hash() {
        assertEquals("#000000", contrastColorFor("FFFFFF"))
        assertEquals("#FFFFFF", contrastColorFor("000000"))
    }

    @Test
    fun expands_three_digit_shorthand_rather_than_misreading_it() {
        // Reading "#fff" two characters at a time without expanding would
        // take "f" as the green channel — 6% instead of 100% — and wrongly
        // return white-on-white.
        assertEquals("#000000", contrastColorFor("#fff"))
        assertEquals("#FFFFFF", contrastColorFor("#000"))
    }

    @Test
    fun is_case_insensitive() {
        assertEquals(contrastColorFor("#abcdef"), contrastColorFor("#ABCDEF"))
    }

    @Test
    fun uses_the_wcag_crossover_not_a_naive_midpoint() {
        // 0x7A is below the 0x80 midpoint, so a naive "is this byte in the
        // top half" test would call it dark and pick white. Its WCAG
        // luminance is 0.195 — above the 0.179 crossover — so black is the
        // readable choice. The crossover sits near 0x75, not 0x80.
        assertEquals("#000000", contrastColorFor("#7A7A7A"))
        assertEquals("#FFFFFF", contrastColorFor("#6E6E6E"))
    }

    @Test
    fun weights_green_most_heavily() {
        // Pure green is bright enough for black text; pure blue is not.
        // Anything treating the channels equally would get one of these wrong.
        assertEquals("#000000", contrastColorFor("#00FF00"))
        assertEquals("#FFFFFF", contrastColorFor("#0000FF"))
    }

    @Test
    fun falls_back_to_white_on_malformed_input() {
        // The TypeScript original leans on NaN comparisons failing through
        // to white. Kotlin's toInt(16) throws instead, so this asserts the
        // explicit fallback rather than a crash.
        assertEquals("#FFFFFF", contrastColorFor(""))
        assertEquals("#FFFFFF", contrastColorFor("#12"))
        assertEquals("#FFFFFF", contrastColorFor("#zzzzzz"))
        assertEquals("#FFFFFF", contrastColorFor("not a color"))
    }
}
