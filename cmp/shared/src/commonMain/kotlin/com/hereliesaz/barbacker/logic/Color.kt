package com.hereliesaz.barbacker.logic

import kotlin.math.pow

private const val BLACK = "#000000"
private const val WHITE = "#FFFFFF"

/**
 * Luminance above which black text is more readable than white.
 *
 * 0.179 rather than a naive 0.5 — this is the crossover point of the WCAG
 * contrast formula, so a mid-grey background correctly gets white text.
 */
private const val LUMINANCE_THRESHOLD = 0.179

/**
 * Picks `#000000` or `#FFFFFF` for readable text on [hex], via WCAG
 * relative luminance.
 *
 * Malformed input yields white. That is not an arbitrary choice: the
 * TypeScript original relies on `parseInt` returning `NaN`, which makes
 * every comparison false and falls through to white. Kotlin's `toInt(16)`
 * throws instead, so the fallback is spelled out explicitly here to keep
 * a bad theme colour from crashing the app on a background thread.
 */
fun contrastColorFor(hex: String): String {
    // JS `String.replace` with a string argument removes only the first
    // occurrence; `replaceFirst` matches that rather than stripping every
    // '#' in a malformed value.
    var clean = hex.replaceFirst("#", "")

    // Expand 3-digit shorthand so the fixed-width reads below cannot
    // misparse it — for "#fff", reading a single "f" as the green channel
    // would give 6% where 100% is meant.
    if (clean.length == 3) {
        clean = clean.map { "$it$it" }.joinToString("")
    }

    if (clean.length < 6) return WHITE

    val r = clean.hexChannel(0) ?: return WHITE
    val g = clean.hexChannel(2) ?: return WHITE
    val b = clean.hexChannel(4) ?: return WHITE

    val luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
    return if (luminance > LUMINANCE_THRESHOLD) BLACK else WHITE
}

/** Reads two hex digits at [start] as a 0..1 channel, or null if unparseable. */
private fun String.hexChannel(start: Int): Double? =
    substring(start, start + 2).toIntOrNull(16)?.let { it / 255.0 }

/** sRGB companding — the gamma curve, not a plain linear scale. */
private fun toLinear(c: Double): Double =
    if (c <= 0.03928) c / 12.92 else ((c + 0.055) / 1.055).pow(2.4)
