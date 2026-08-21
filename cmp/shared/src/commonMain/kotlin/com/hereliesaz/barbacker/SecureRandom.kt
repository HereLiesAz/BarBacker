package com.hereliesaz.barbacker

/**
 * Cryptographically secure random bytes, as lowercase hex.
 *
 * Not `kotlin.random.Random`, and the distinction matters here rather
 * than being pedantry: the one caller is the ntfy topic, and an ntfy
 * topic is a bearer secret — anyone who knows the string can subscribe to
 * that person's pages. A seeded PRNG's output is predictable from any
 * other sample of it, which would make topics guessable across accounts.
 */
expect fun secureRandomHex(byteCount: Int): String

/** Renders bytes as lowercase hex, shared by every platform's implementation. */
internal fun ByteArray.toHexString(): String =
    joinToString("") { byte ->
        val value = byte.toInt() and 0xFF
        value.toString(16).padStart(2, '0')
    }
