package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import java.util.prefs.Preferences

private class DesktopKeyValueStore(private val prefs: Preferences) : KeyValueStore {
    override fun getString(key: String): String? = try {
        prefs.get(key, null)
    } catch (e: Exception) {
        logWarning("Could not read preference '$key'", e)
        null
    }

    override fun putString(key: String, value: String?) {
        try {
            if (value == null) prefs.remove(key) else prefs.put(key, value)
        } catch (e: Exception) {
            // A preference that will not persist is not worth failing a
            // sign-in over.
            logWarning("Could not write preference '$key'", e)
        }
    }
}

actual fun createKeyValueStore(platformContext: Any?): KeyValueStore =
    DesktopKeyValueStore(Preferences.userRoot().node("com/hereliesaz/barbacker"))
