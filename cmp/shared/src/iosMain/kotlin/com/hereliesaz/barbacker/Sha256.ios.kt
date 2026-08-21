package com.hereliesaz.barbacker

import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.reinterpret
import kotlinx.cinterop.usePinned
import platform.CoreCrypto.CC_SHA256
import platform.CoreCrypto.CC_SHA256_DIGEST_LENGTH

/**
 * CommonCrypto's one-shot digest.
 *
 * The empty-string case is pinned separately from the rest: pinning a
 * zero-length ByteArray and taking `addressOf(0)` is not valid, so the
 * input is only pinned when there is something to point at.
 */
@OptIn(ExperimentalForeignApi::class)
actual fun sha256(value: String): ByteArray {
    val input = value.encodeToByteArray()
    val digest = ByteArray(CC_SHA256_DIGEST_LENGTH)
    digest.usePinned { out ->
        if (input.isEmpty()) {
            CC_SHA256(null, 0u, out.addressOf(0).reinterpret())
        } else {
            input.usePinned { source ->
                CC_SHA256(
                    source.addressOf(0),
                    input.size.toUInt(),
                    out.addressOf(0).reinterpret(),
                )
            }
        }
    }
    return digest
}
