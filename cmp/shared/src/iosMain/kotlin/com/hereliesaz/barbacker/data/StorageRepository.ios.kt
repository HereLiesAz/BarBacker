package com.hereliesaz.barbacker.data

import dev.gitlive.firebase.storage.Data
import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import platform.Foundation.NSData
import platform.Foundation.create

@OptIn(ExperimentalForeignApi::class)
internal actual fun storageDataOf(bytes: ByteArray): Data = Data(bytes.toNSData())

/**
 * Copies a [ByteArray] into an [NSData].
 *
 * `NSData.create` copies the buffer, so the pinning only has to outlive
 * this call — but it does have to cover it, or the GC is free to move the
 * array out from under the pointer mid-copy.
 *
 * The empty case is special-cased because `addressOf(0)` on a
 * zero-length array is out of bounds.
 */
@OptIn(ExperimentalForeignApi::class)
private fun ByteArray.toNSData(): NSData {
    if (isEmpty()) return NSData()
    return usePinned { pinned ->
        NSData.create(bytes = pinned.addressOf(0), length = size.toULong())
    }
}
