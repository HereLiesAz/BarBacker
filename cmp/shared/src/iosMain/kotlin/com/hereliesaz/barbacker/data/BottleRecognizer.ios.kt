package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import kotlinx.coroutines.suspendCancellableCoroutine
import platform.Foundation.NSData
import platform.Foundation.create
import platform.Vision.VNImageRequestHandler
import platform.Vision.VNRecognizeTextRequest
import platform.Vision.VNRecognizedTextObservation
import platform.Vision.VNRequestTextRecognitionLevelAccurate
import kotlin.coroutines.resume

/**
 * Apple's Vision framework, on-device.
 *
 * Unverified. There is no Xcode project in this repository (see
 * `cmp/iosApp/README.md`) and CI has no macOS runner, so this file has
 * never been compiled. Treat it as a first draft of the iOS path.
 */
@OptIn(ExperimentalForeignApi::class)
private class IosBottleRecognizer : BottleRecognizer {

    override val isSupported: Boolean = true

    override suspend fun recognizeLines(image: ByteArray): List<String> =
        suspendCancellableCoroutine { continuation ->
            val request = VNRecognizeTextRequest { request, error ->
                if (error != null) {
                    logWarning("Vision text recognition failed: ${error.localizedDescription}")
                    if (continuation.isActive) continuation.resume(emptyList())
                    return@VNRecognizeTextRequest
                }
                val lines = request?.results.orEmpty()
                    .filterIsInstance<VNRecognizedTextObservation>()
                    // topCandidates(1) is the highest-confidence reading
                    // of each observed line; anything below that is noise
                    // for a brand match.
                    .mapNotNull { it.topCandidates(1u).firstOrNull() }
                    .mapNotNull { candidate ->
                        (candidate as? platform.Vision.VNRecognizedText)?.string
                    }
                if (continuation.isActive) {
                    continuation.resume(recognizedLinesOf(lines.joinToString("\n")))
                }
            }
            request.recognitionLevel = VNRequestTextRecognitionLevelAccurate

            val handler = VNImageRequestHandler(image.toNSData(), mapOf<Any?, Any?>())
            try {
                handler.performRequests(listOf(request), null)
            } catch (e: Exception) {
                logWarning("Could not run Vision over the captured photo", e)
                if (continuation.isActive) continuation.resume(emptyList())
            }
        }
}

@OptIn(ExperimentalForeignApi::class)
private fun ByteArray.toNSData(): NSData {
    if (isEmpty()) return NSData()
    return usePinned { pinned ->
        NSData.create(bytes = pinned.addressOf(0), length = size.toULong())
    }
}

actual fun createBottleRecognizer(platformContext: Any?): BottleRecognizer =
    IosBottleRecognizer()
