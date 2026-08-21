package com.hereliesaz.barbacker.data

/**
 * No OCR on the JVM build.
 *
 * ML Kit is Android-only and Vision is Apple-only; the alternatives are a
 * bundled Tesseract native library per desktop platform or a cloud vision
 * API, and the latter would break the on-device promise the other two
 * platforms keep.
 *
 * Reported explicitly rather than returning an empty result, so the
 * scanner can say the brand has to be typed rather than looking as though
 * it read a label and found nothing.
 */
private object UnsupportedBottleRecognizer : BottleRecognizer {
    override val isSupported: Boolean = false
    override suspend fun recognizeLines(image: ByteArray): List<String> = emptyList()
}

actual fun createBottleRecognizer(platformContext: Any?): BottleRecognizer =
    UnsupportedBottleRecognizer
