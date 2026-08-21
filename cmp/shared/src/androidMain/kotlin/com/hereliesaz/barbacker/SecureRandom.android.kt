package com.hereliesaz.barbacker

import java.security.SecureRandom

private val random = SecureRandom()

actual fun secureRandomHex(byteCount: Int): String =
    ByteArray(byteCount).also(random::nextBytes).toHexString()
