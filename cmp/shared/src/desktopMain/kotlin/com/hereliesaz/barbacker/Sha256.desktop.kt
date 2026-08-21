package com.hereliesaz.barbacker

import java.security.MessageDigest

actual fun sha256(value: String): ByteArray =
    MessageDigest.getInstance("SHA-256").digest(value.encodeToByteArray())
