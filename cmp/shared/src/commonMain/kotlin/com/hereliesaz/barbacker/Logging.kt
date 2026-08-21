package com.hereliesaz.barbacker

/**
 * Minimal diagnostic logging.
 *
 * Firestore listeners fail routinely and recoverably — most often
 * `permission-denied`, because a freshly written role has not yet been
 * stamped into the ID token's custom claims. The PWA logs those and leaves
 * the affected state cleared rather than crashing, and this exists so the
 * Kotlin client can do the same without swallowing the cause entirely.
 */
expect fun logWarning(message: String, throwable: Throwable? = null)
