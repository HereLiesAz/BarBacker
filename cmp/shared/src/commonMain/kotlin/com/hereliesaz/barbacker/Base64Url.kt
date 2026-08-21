package com.hereliesaz.barbacker

private const val ALPHABET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"

/**
 * Base64url with no padding, as PKCE's `code_challenge` requires.
 *
 * Hand-rolled because the platforms disagree: the JVM has
 * `Base64.getUrlEncoder()`, Kotlin/Native has nothing, and Foundation's
 * base64 uses the standard alphabet with padding — which Google's token
 * endpoint rejects outright.
 *
 * Kept here, in common code, specifically so it can be tested. The two
 * tail cases (one and two leftover bytes) are where a hand-rolled base64
 * goes wrong, and getting one of them wrong yields a challenge that
 * fails only for certain digests — which looks like an intermittent
 * sign-in bug rather than an encoder bug.
 */
internal fun ByteArray.base64UrlEncode(): String {
    val out = StringBuilder((size + 2) / 3 * 4)
    var index = 0
    while (index + 2 < size) {
        val chunk = (this[index].toInt() and 0xFF shl 16) or
            (this[index + 1].toInt() and 0xFF shl 8) or
            (this[index + 2].toInt() and 0xFF)
        out.append(ALPHABET[chunk shr 18 and 0x3F])
        out.append(ALPHABET[chunk shr 12 and 0x3F])
        out.append(ALPHABET[chunk shr 6 and 0x3F])
        out.append(ALPHABET[chunk and 0x3F])
        index += 3
    }
    when (size - index) {
        1 -> {
            val chunk = this[index].toInt() and 0xFF shl 16
            out.append(ALPHABET[chunk shr 18 and 0x3F])
            out.append(ALPHABET[chunk shr 12 and 0x3F])
        }

        2 -> {
            val chunk = (this[index].toInt() and 0xFF shl 16) or
                (this[index + 1].toInt() and 0xFF shl 8)
            out.append(ALPHABET[chunk shr 18 and 0x3F])
            out.append(ALPHABET[chunk shr 12 and 0x3F])
            out.append(ALPHABET[chunk shr 6 and 0x3F])
        }
    }
    return out.toString()
}
