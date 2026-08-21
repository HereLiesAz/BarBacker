package com.hereliesaz.barbacker.ui

import android.content.Context
import android.net.Uri
import android.provider.OpenableColumns
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.ui.platform.LocalContext
import com.hereliesaz.barbacker.data.MAX_LOGO_BYTES
import com.hereliesaz.barbacker.data.PickedImage
import com.hereliesaz.barbacker.data.pickedImageOrNull
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

@Composable
actual fun rememberImagePicker(
    onPicked: (PickedImage) -> Unit,
    onError: (String) -> Unit,
): ImagePickerLauncher {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()

    // rememberUpdatedState so the launcher registered on first composition
    // still calls the CURRENT callbacks. Without it the picker would post
    // its result into whichever lambda existed when the dialog opened,
    // which is a stale closure over the theme editor's earlier state.
    val picked by rememberUpdatedState(onPicked)
    val failed by rememberUpdatedState(onError)

    val launcher = rememberLauncherForActivityResult(
        ActivityResultContracts.GetContent(),
    ) { uri ->
        // A null Uri is a cancel, not a failure.
        if (uri == null) return@rememberLauncherForActivityResult
        scope.launch {
            val outcome = withContext(Dispatchers.IO) {
                runCatching { context.readPickedImage(uri) }
            }
            outcome.fold(
                onSuccess = { result ->
                    when (result) {
                        is ReadResult.Ok -> picked(result.image)
                        is ReadResult.Failed -> failed(result.message)
                    }
                },
                // Typically a SecurityException: the content Uri's grant is
                // scoped to the activity result and dies with a
                // configuration change mid-read.
                onFailure = { failed("Could not read that image.") },
            )
        }
    }

    return remember(launcher) { ImagePickerLauncher { launcher.launch("image/*") } }
}

private sealed interface ReadResult {
    data class Ok(val image: PickedImage) : ReadResult
    data class Failed(val message: String) : ReadResult
}

private fun Context.readPickedImage(uri: Uri): ReadResult {
    var displayName: String? = null
    var declaredSize: Long = -1
    contentResolver.query(
        uri,
        arrayOf(OpenableColumns.DISPLAY_NAME, OpenableColumns.SIZE),
        null,
        null,
        null,
    )?.use { cursor ->
        if (cursor.moveToFirst()) {
            if (!cursor.isNull(0)) displayName = cursor.getString(0)
            if (!cursor.isNull(1)) declaredSize = cursor.getLong(1)
        }
    }

    // Checked before the read, not after: the provider's reported size is
    // advisory, but when it is present it spares us pulling a 40MB
    // panorama into memory only to reject it.
    if (declaredSize > MAX_LOGO_BYTES) return ReadResult.Failed("Logo must be under 2MB.")

    val bytes = contentResolver.openInputStream(uri)?.use { it.readBytes() }
        ?: return ReadResult.Failed("Could not read that image.")

    if (bytes.size > MAX_LOGO_BYTES) return ReadResult.Failed("Logo must be under 2MB.")

    val image = pickedImageOrNull(bytes, displayName, contentResolver.getType(uri))
        ?: return ReadResult.Failed("Logo must be a PNG, JPG, WebP, or SVG.")
    return ReadResult.Ok(image)
}
