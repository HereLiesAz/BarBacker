package com.hereliesaz.barbacker.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import com.hereliesaz.barbacker.data.MAX_LOGO_BYTES
import com.hereliesaz.barbacker.data.PickedImage
import com.hereliesaz.barbacker.data.pickedImageOrNull
import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import platform.Foundation.NSData
import platform.Foundation.NSURL
import platform.Foundation.dataWithContentsOfURL
import platform.UIKit.UIApplication
import platform.UIKit.UIDocumentPickerDelegateProtocol
import platform.UIKit.UIDocumentPickerViewController
import platform.UIKit.UIViewController
import platform.UniformTypeIdentifiers.UTTypeImage
import platform.darwin.NSObject
import platform.posix.memcpy

/**
 * A document picker limited to images.
 *
 * `UIDocumentPickerViewController` rather than a photo picker on purpose:
 * a bar's logo is usually a file someone was emailed, not a camera roll
 * entry, and the document picker hands back the original bytes and file
 * name — which is what keeps an SVG an SVG.
 *
 * Unverified. There is no Xcode project in this repository yet (see
 * `cmp/iosApp/README.md`) and CI has no macOS runner, so this file has
 * never been compiled. Treat it as a first draft of the iOS path, not as
 * something known to work.
 */
@OptIn(ExperimentalForeignApi::class)
@Composable
actual fun rememberImagePicker(
    onPicked: (PickedImage) -> Unit,
    onError: (String) -> Unit,
): ImagePickerLauncher {
    val picked by rememberUpdatedState(onPicked)
    val failed by rememberUpdatedState(onError)

    // UIKit holds its delegate weakly, so this reference is what keeps the
    // object alive between presenting the picker and the callback. Held in
    // `remember` rather than a local, or it would be collected the instant
    // the composition that created it settles.
    val delegate = remember { LogoPickerDelegate() }

    DisposableEffect(delegate) {
        delegate.onPick = { url ->
            when (val result = readLogo(url)) {
                is IosReadResult.Ok -> picked(result.image)
                is IosReadResult.Failed -> failed(result.message)
            }
        }
        onDispose { delegate.onPick = {} }
    }

    return remember(delegate) {
        ImagePickerLauncher {
            val host = topViewController()
            if (host == null) {
                failed("Could not open the file picker.")
                return@ImagePickerLauncher
            }
            val controller = UIDocumentPickerViewController(
                forOpeningContentTypes = listOf(UTTypeImage),
                // A copy in the app's own sandbox, so the bytes stay
                // readable after the picker's security scope closes.
                asCopy = true,
            )
            controller.delegate = delegate
            host.presentViewController(controller, animated = true, completion = null)
        }
    }
}

private class LogoPickerDelegate : NSObject(), UIDocumentPickerDelegateProtocol {
    var onPick: (NSURL) -> Unit = {}

    override fun documentPicker(
        controller: UIDocumentPickerViewController,
        didPickDocumentsAtURLs: List<*>,
    ) {
        val url = didPickDocumentsAtURLs.firstOrNull() as? NSURL ?: return
        onPick(url)
    }

    // Cancelling calls nothing: backing out of a picker is not a failure.
    override fun documentPickerWasCancelled(controller: UIDocumentPickerViewController) = Unit
}

private sealed interface IosReadResult {
    data class Ok(val image: PickedImage) : IosReadResult
    data class Failed(val message: String) : IosReadResult
}

@OptIn(ExperimentalForeignApi::class)
private fun readLogo(url: NSURL): IosReadResult {
    val data = NSData.dataWithContentsOfURL(url)
        ?: return IosReadResult.Failed("Could not read that image.")
    if (data.length.toLong() > MAX_LOGO_BYTES) {
        return IosReadResult.Failed("Logo must be under 2MB.")
    }
    val image = pickedImageOrNull(
        bytes = data.toByteArray(),
        fileName = url.lastPathComponent,
        contentType = null,
    ) ?: return IosReadResult.Failed("Logo must be a PNG, JPG, WebP, or SVG.")
    return IosReadResult.Ok(image)
}

@OptIn(ExperimentalForeignApi::class)
private fun NSData.toByteArray(): ByteArray {
    val size = length.toInt()
    if (size == 0) return ByteArray(0)
    return ByteArray(size).apply {
        usePinned { pinned -> memcpy(pinned.addressOf(0), bytes, length) }
    }
}

/**
 * The controller to present from: the deepest one already presenting
 * something, so the picker does not try to open behind a dialog that is
 * already up.
 */
private fun topViewController(): UIViewController? {
    var controller = UIApplication.sharedApplication.keyWindow?.rootViewController
    while (controller?.presentedViewController != null) {
        controller = controller.presentedViewController
    }
    return controller
}
