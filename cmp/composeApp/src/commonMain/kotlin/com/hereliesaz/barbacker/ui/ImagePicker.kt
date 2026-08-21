package com.hereliesaz.barbacker.ui

import androidx.compose.runtime.Composable
import com.hereliesaz.barbacker.data.PickedImage

/** Opens the platform's file chooser. Safe to call more than once. */
fun interface ImagePickerLauncher {
    fun launch()
}

/**
 * A file chooser scoped to images, wired to the calling composable's
 * lifetime.
 *
 * Cancelling calls neither callback: a user backing out of the chooser has
 * not failed at anything, and a "no image selected" toast for a deliberate
 * cancel is noise.
 *
 * [onError] carries a message meant for the user, not a log line — the
 * three platforms fail differently (a revoked content Uri, an unreadable
 * path, a format nobody accepts) and the caller shows whichever text
 * arrives here.
 */
@Composable
expect fun rememberImagePicker(
    onPicked: (PickedImage) -> Unit,
    onError: (String) -> Unit,
): ImagePickerLauncher
