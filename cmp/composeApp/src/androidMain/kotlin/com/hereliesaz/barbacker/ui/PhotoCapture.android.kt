package com.hereliesaz.barbacker.ui

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import com.hereliesaz.barbacker.data.MAX_BOTTLE_PHOTO_BYTES
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.File

@Composable
actual fun rememberPhotoCapture(
    onCaptured: (ByteArray) -> Unit,
    onError: (String) -> Unit,
): PhotoCaptureLauncher {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val captured by rememberUpdatedState(onCaptured)
    val failed by rememberUpdatedState(onError)

    // Where the camera app writes. Held across the round trip because the
    // result callback gets only a success flag — the bytes are wherever
    // we told the camera to put them.
    var target by remember { mutableStateOf<File?>(null) }

    val takePicture = rememberLauncherForActivityResult(
        ActivityResultContracts.TakePicture(),
    ) { success ->
        val file = target
        target = null
        if (!success || file == null) {
            // Cancelled. Still clean up: the empty placeholder is already
            // on disk by this point.
            file?.delete()
            return@rememberLauncherForActivityResult
        }
        scope.launch {
            val result = withContext(Dispatchers.IO) {
                runCatching {
                    val bytes = file.readBytes()
                    file.delete()
                    bytes
                }
            }
            result.fold(
                onSuccess = { bytes ->
                    when {
                        bytes.isEmpty() -> failed("The camera returned an empty photo.")
                        bytes.size > MAX_BOTTLE_PHOTO_BYTES ->
                            failed("That photo is too large to send.")
                        else -> captured(bytes)
                    }
                },
                onFailure = { failed("Could not read the photo.") },
            )
        }
    }

    fun startCapture() {
        val outcome = runCatching {
            val file = context.newPhotoFile()
            target = file
            takePicture.launch(context.uriFor(file))
        }
        if (outcome.isFailure) {
            target = null
            failed("Could not open the camera.")
        }
    }

    // The manifest declares CAMERA, which means ACTION_IMAGE_CAPTURE
    // requires it to be GRANTED — an app that never declares it can use
    // the intent freely, but one that does must hold it.
    val requestPermission = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission(),
    ) { granted ->
        if (granted) {
            startCapture()
        } else {
            failed("Camera access is needed to scan a bottle.")
        }
    }

    return remember(takePicture, requestPermission, context) {
        object : PhotoCaptureLauncher {
            override val isSupported: Boolean = true

            override fun launch() {
                val granted = ContextCompat.checkSelfPermission(
                    context,
                    Manifest.permission.CAMERA,
                ) == PackageManager.PERMISSION_GRANTED

                if (granted) startCapture() else requestPermission.launch(Manifest.permission.CAMERA)
            }
        }
    }
}

/**
 * A fresh file in the cache directory.
 *
 * The cache, not files/: a scan is transient, the bytes are read back and
 * deleted immediately, and anything left behind by a crash is the
 * system's to reclaim.
 */
private fun Context.newPhotoFile(): File {
    val directory = File(cacheDir, "bottle-scans").apply { mkdirs() }
    return File.createTempFile("scan", ".jpg", directory)
}

private fun Context.uriFor(file: File): Uri =
    FileProvider.getUriForFile(this, "$packageName.fileprovider", file)
