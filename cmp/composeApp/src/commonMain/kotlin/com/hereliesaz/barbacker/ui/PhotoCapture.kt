package com.hereliesaz.barbacker.ui

import androidx.compose.runtime.Composable

/** Opens the platform camera. Safe to call more than once. */
interface PhotoCaptureLauncher {
    /**
     * Whether this platform can take a photo at all.
     *
     * False on desktop. Reported so the scanner can say the brand has to
     * be typed, rather than offering a button that does nothing.
     */
    val isSupported: Boolean

    fun launch()
}

/**
 * A camera capture, wired to the calling composable's lifetime.
 *
 * Yields JPEG bytes rather than a platform handle, for the same reason
 * [rememberImagePicker] does: a content `Uri`, a `java.io.File`, and an
 * `NSURL` behind a security scope have nothing in common that survives
 * being handed to shared code.
 *
 * Cancelling calls neither callback — backing out of the camera is not a
 * failure. Denying the camera permission does call [onError], because
 * that one leaves the user looking at a button that will keep doing
 * nothing until they change their mind.
 */
@Composable
expect fun rememberPhotoCapture(
    onCaptured: (ByteArray) -> Unit,
    onError: (String) -> Unit,
): PhotoCaptureLauncher
