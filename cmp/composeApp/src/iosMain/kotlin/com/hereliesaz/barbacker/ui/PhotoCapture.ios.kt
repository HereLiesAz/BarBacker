package com.hereliesaz.barbacker.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import com.hereliesaz.barbacker.data.MAX_BOTTLE_PHOTO_BYTES
import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import platform.Foundation.NSData
import platform.UIKit.UIApplication
import platform.UIKit.UIImage
import platform.UIKit.UIImageJPEGRepresentation
import platform.UIKit.UIImagePickerController
import platform.UIKit.UIImagePickerControllerDelegateProtocol
import platform.UIKit.UIImagePickerControllerOriginalImage
import platform.UIKit.UIImagePickerControllerSourceType
import platform.UIKit.UINavigationControllerDelegateProtocol
import platform.UIKit.UIViewController
import platform.darwin.NSObject
import platform.posix.memcpy

/** JPEG quality for the uploaded scan. High enough for OCR, small enough to send. */
private const val JPEG_QUALITY = 0.85

/**
 * The system camera, via `UIImagePickerController`.
 *
 * Unverified. There is no Xcode project in this repository (see
 * `cmp/iosApp/README.md`) and CI has no macOS runner, so this file has
 * never been compiled. It also needs an `NSCameraUsageDescription` in
 * `Info.plist`, or iOS terminates the app the moment the picker opens.
 */
@OptIn(ExperimentalForeignApi::class)
@Composable
actual fun rememberPhotoCapture(
    onCaptured: (ByteArray) -> Unit,
    onError: (String) -> Unit,
): PhotoCaptureLauncher {
    val captured by rememberUpdatedState(onCaptured)
    val failed by rememberUpdatedState(onError)

    // UIKit holds its delegate weakly; this reference is what keeps the
    // object alive from presenting the camera to the callback.
    val delegate = remember { CameraDelegate() }

    DisposableEffect(delegate) {
        delegate.onImage = { image ->
            val data = UIImageJPEGRepresentation(image, JPEG_QUALITY)
            when {
                data == null -> failed("Could not encode the photo.")
                data.length.toLong() > MAX_BOTTLE_PHOTO_BYTES ->
                    failed("That photo is too large to send.")
                else -> captured(data.toByteArray())
            }
        }
        onDispose { delegate.onImage = {} }
    }

    return remember(delegate) {
        object : PhotoCaptureLauncher {
            override val isSupported: Boolean =
                UIImagePickerController.isSourceTypeAvailable(
                    UIImagePickerControllerSourceType.UIImagePickerControllerSourceTypeCamera,
                )

            override fun launch() {
                if (!isSupported) {
                    failed("This device has no camera.")
                    return
                }
                val host = topViewController()
                if (host == null) {
                    failed("Could not open the camera.")
                    return
                }
                val picker = UIImagePickerController()
                picker.sourceType =
                    UIImagePickerControllerSourceType.UIImagePickerControllerSourceTypeCamera
                picker.setDelegate(delegate)
                host.presentViewController(picker, animated = true, completion = null)
            }
        }
    }
}

private class CameraDelegate :
    NSObject(),
    UIImagePickerControllerDelegateProtocol,
    UINavigationControllerDelegateProtocol {

    var onImage: (UIImage) -> Unit = {}

    override fun imagePickerController(
        picker: UIImagePickerController,
        didFinishPickingMediaWithInfo: Map<Any?, *>,
    ) {
        picker.dismissViewControllerAnimated(true, completion = null)
        val image = didFinishPickingMediaWithInfo[UIImagePickerControllerOriginalImage] as? UIImage
            ?: return
        onImage(image)
    }

    // Cancelling calls nothing: backing out of the camera is not a failure.
    override fun imagePickerControllerDidCancel(picker: UIImagePickerController) {
        picker.dismissViewControllerAnimated(true, completion = null)
    }
}

@OptIn(ExperimentalForeignApi::class)
private fun NSData.toByteArray(): ByteArray {
    val size = length.toInt()
    if (size == 0) return ByteArray(0)
    return ByteArray(size).apply {
        usePinned { pinned -> memcpy(pinned.addressOf(0), bytes, length) }
    }
}

private fun topViewController(): UIViewController? {
    var controller = UIApplication.sharedApplication.keyWindow?.rootViewController
    while (controller?.presentedViewController != null) {
        controller = controller.presentedViewController
    }
    return controller
}
