package com.hereliesaz.barbacker.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.rememberUpdatedState
import com.hereliesaz.barbacker.data.LOGO_EXTENSIONS
import com.hereliesaz.barbacker.data.MAX_LOGO_BYTES
import com.hereliesaz.barbacker.data.pickedImageOrNull
import com.hereliesaz.barbacker.data.PickedImage
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.swing.Swing
import kotlinx.coroutines.withContext
import java.io.File
import javax.swing.JFileChooser
import javax.swing.filechooser.FileNameExtensionFilter

@Composable
actual fun rememberImagePicker(
    onPicked: (PickedImage) -> Unit,
    onError: (String) -> Unit,
): ImagePickerLauncher {
    val scope = rememberCoroutineScope()
    val picked by rememberUpdatedState(onPicked)
    val failed by rememberUpdatedState(onError)

    return remember(scope) {
        ImagePickerLauncher {
            scope.launch {
                // showOpenDialog is modal and must run on the AWT event
                // thread. Compose Desktop's own frame lives there too, so
                // dispatching explicitly is what keeps the chooser from
                // deadlocking against it when this is called from a
                // background context.
                val file = withContext(Dispatchers.Swing) { chooseImageFile() }
                    ?: return@launch

                val outcome = withContext(Dispatchers.IO) {
                    runCatching {
                        // Length first: reading a multi-gigabyte file the
                        // user picked by mistake would exhaust the heap
                        // before any size check downstream could fire.
                        if (file.length() > MAX_LOGO_BYTES) null else file.readBytes()
                    }
                }

                outcome.fold(
                    onSuccess = { bytes ->
                        when {
                            bytes == null -> failed("Logo must be under 2MB.")
                            else -> {
                                val image = pickedImageOrNull(bytes, file.name, contentType = null)
                                if (image == null) {
                                    failed("Logo must be a PNG, JPG, WebP, or SVG.")
                                } else {
                                    picked(image)
                                }
                            }
                        }
                    },
                    onFailure = { failed("Could not read ${file.name}.") },
                )
            }
        }
    }
}

/** Returns the chosen file, or null if the user cancelled. */
private fun chooseImageFile(): File? {
    val chooser = JFileChooser().apply {
        dialogTitle = "Choose a logo"
        isMultiSelectionEnabled = false
        // Set as the *only* filter, with "All files" suppressed, so the
        // list the user sees matches what the upload will actually accept.
        isAcceptAllFileFilterUsed = false
        fileFilter = FileNameExtensionFilter(
            "Images (PNG, JPG, WebP, SVG)",
            *LOGO_EXTENSIONS.toTypedArray(),
        )
    }
    return if (chooser.showOpenDialog(null) == JFileChooser.APPROVE_OPTION) {
        chooser.selectedFile
    } else {
        null
    }
}
