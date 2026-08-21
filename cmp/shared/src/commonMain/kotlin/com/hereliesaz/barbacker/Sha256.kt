package com.hereliesaz.barbacker

/**
 * SHA-256 of a string's UTF-8 bytes.
 *
 * Per-platform because there is no multiplatform digest in the standard
 * library and none of the three targets can borrow another's: the JVM has
 * `MessageDigest`, Apple has CommonCrypto, and neither is reachable from
 * common code.
 *
 * Three of the four callers hash something whose *un*-hashed form is the
 * actual secret — a PKCE verifier, an Apple nonce, a sign-in claim secret
 * — which is why this exists rather than each flow rolling its own.
 */
expect fun sha256(value: String): ByteArray

/** SHA-256 as lowercase hex, the form both the nonce and the claim secret travel in. */
fun sha256Hex(value: String): String = sha256(value).toHexString()
