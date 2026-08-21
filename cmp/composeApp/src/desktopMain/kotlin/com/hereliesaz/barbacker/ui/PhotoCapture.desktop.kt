package com.hereliesaz.barbacker.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember

/**
 * No camera on the JVM build.
 *
 * Compose Desktop has no camera API, and there is no OCR here either
 * (see `BottleRecognizer.desktop.kt`), so the scanner's whole point is
 * absent rather than merely degraded. Reported as unsupported so the
 * screen says the brand has to be typed instead of offering a dead
 * button.
 */
@Composable
actual fun rememberPhotoCapture(
    onCaptured: (ByteArray) -> Unit,
    onError: (String) -> Unit,
): PhotoCaptureLauncher = remember {
    object : PhotoCaptureLauncher {
        override val isSupported: Boolean = false
        override fun launch() = onError("Scanning isn't available on desktop.")
    }
}
