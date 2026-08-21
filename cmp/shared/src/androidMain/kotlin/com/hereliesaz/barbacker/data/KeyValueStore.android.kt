package com.hereliesaz.barbacker.data

import android.content.Context
import android.content.SharedPreferences

private class AndroidKeyValueStore(private val prefs: SharedPreferences) : KeyValueStore {
    override fun getString(key: String): String? = prefs.getString(key, null)

    override fun putString(key: String, value: String?) {
        prefs.edit().apply { if (value == null) remove(key) else putString(key, value) }.apply()
    }
}

actual fun createKeyValueStore(platformContext: Any?): KeyValueStore {
    val context = platformContext as? Context
        ?: error("An Android Context is required to create the key-value store")
    return AndroidKeyValueStore(
        context.getSharedPreferences("barbacker", Context.MODE_PRIVATE),
    )
}
