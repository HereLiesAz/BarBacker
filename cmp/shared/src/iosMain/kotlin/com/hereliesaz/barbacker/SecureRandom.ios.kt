package com.hereliesaz.barbacker

import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import platform.Security.SecRandomCopyBytes
import platform.Security.kSecRandomDefault

/**
 * `SecRandomCopyBytes`, the system CSPRNG.
 *
 * A non-zero return means the generator failed, which is not something to
 * paper over with a fallback: silently handing back weak bytes for a value
 * used as a bearer secret is worse than not producing one at all.
 */
@OptIn(ExperimentalForeignApi::class)
actual fun secureRandomHex(byteCount: Int): String {
    val bytes = ByteArray(byteCount)
    val status = bytes.usePinned { pinned ->
        SecRandomCopyBytes(kSecRandomDefault, byteCount.toULong(), pinned.addressOf(0))
    }
    check(status == 0) { "SecRandomCopyBytes failed with status $status" }
    return bytes.toHexString()
}
