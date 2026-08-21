package com.hereliesaz.barbacker.data

/**
 * Small per-device key-value storage, the equivalent of the PWA's
 * `localStorage`.
 *
 * Only three things live here, and none of them are shared state: the
 * selected bar (so reopening the app returns you to your shift), the
 * locally muted request ids, and the chat read watermark. Everything that
 * matters to more than one device belongs in Firestore.
 *
 * Implementations must not throw. The web original wraps every read in a
 * try/catch because Safari private mode makes `localStorage` throw
 * outright, and the same defensiveness is warranted here — losing a
 * preference is acceptable, crashing on startup is not.
 */
interface KeyValueStore {
    fun getString(key: String): String?
    fun putString(key: String, value: String?)

    companion object {
        const val KEY_BAR_ID = "barId"
        const val KEY_IGNORED_REQUEST_IDS = "ignoredRequestIds"
        fun chatLastReadKey(barId: String) = "chat_lastRead_$barId"
    }
}

/** @param platformContext the Android `Context`; ignored elsewhere. */
expect fun createKeyValueStore(platformContext: Any?): KeyValueStore
