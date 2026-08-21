package com.hereliesaz.barbacker.data

import android.graphics.BitmapFactory
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import com.hereliesaz.barbacker.logWarning
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume

/**
 * ML Kit's on-device Latin text recogniser.
 *
 * The bundled model, not the Play-Services-downloaded one: a bar's
 * back-of-house Wi-Fi is exactly where a first-use model download fails,
 * and a scanner that works only after an unexplained delay is worse than
 * one that works immediately.
 */
private class AndroidBottleRecognizer : BottleRecognizer {

    override val isSupported: Boolean = true

    private val recognizer by lazy {
        TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)
    }

    override suspend fun recognizeLines(image: ByteArray): List<String> {
        val bitmap = try {
            BitmapFactory.decodeByteArray(image, 0, image.size)
        } catch (e: Exception) {
            logWarning("Could not decode the captured photo", e)
            null
        } ?: return emptyList()

        return suspendCancellableCoroutine { continuation ->
            // Rotation is 0 because the capture path writes an
            // already-upright JPEG; ML Kit would otherwise read a
            // sideways label as gibberish.
            recognizer.process(InputImage.fromBitmap(bitmap, 0))
                .addOnSuccessListener { result ->
                    if (continuation.isActive) {
                        continuation.resume(recognizedLinesOf(result.text))
                    }
                }
                .addOnFailureListener { error ->
                    logWarning("Text recognition failed", error)
                    // Empty, not an exception: an unreadable label is an
                    // ordinary outcome and the caller offers manual entry
                    // either way.
                    if (continuation.isActive) continuation.resume(emptyList())
                }
        }
    }
}

actual fun createBottleRecognizer(platformContext: Any?): BottleRecognizer =
    AndroidBottleRecognizer()
