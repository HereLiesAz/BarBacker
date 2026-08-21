package com.hereliesaz.barbacker.data

/**
 * On-device text recognition for a bottle label.
 *
 * On-device is the point, matching the web client's use of tesseract.js:
 * the photo and the text read off it never leave the device just to
 * identify a brand. Only the "Send Alert" action uploads anything, and
 * only to this bar's own bucket.
 */
interface BottleRecognizer {
    /**
     * Whether this platform can read a label at all.
     *
     * False is a supported outcome, not a failure — the desktop build has
     * no OCR engine, and the scanner falls back to typing the brand.
     */
    val isSupported: Boolean

    /**
     * Lines of text read off [image], trimmed, one-character lines
     * dropped.
     *
     * Returns empty rather than throwing when nothing legible is found: a
     * blurry photo is an ordinary outcome, and the caller's next step —
     * offering manual entry — is the same either way.
     */
    suspend fun recognizeLines(image: ByteArray): List<String>
}

expect fun createBottleRecognizer(platformContext: Any?): BottleRecognizer

/**
 * Splits an OCR engine's blob of text into candidate lines.
 *
 * The one-character filter is the web client's, and it earns its place:
 * OCR routinely emits stray single glyphs from a label's border or
 * embossing, and each one is another chance for [
 * com.hereliesaz.barbacker.logic.matchBrand] to find a spurious
 * substring hit.
 */
fun recognizedLinesOf(text: String): List<String> =
    text.split('\n')
        .map { it.trim() }
        .filter { it.length > 1 }
