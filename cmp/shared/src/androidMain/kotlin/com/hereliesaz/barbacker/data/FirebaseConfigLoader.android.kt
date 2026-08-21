package com.hereliesaz.barbacker.data

import android.content.Context

/**
 * Reads the config from string resources.
 *
 * The resource names are the lowercased env-var names, so a build step can
 * generate `firebase_config.xml` from the same `.env` the web build reads.
 */
actual fun loadFirebaseConfig(platformContext: Any?): BarBackerFirebaseConfig? {
    val context = platformContext as? Context ?: return null
    return FirebaseConfigKeys.build { key ->
        val resourceName = key.lowercase()
        val id = context.resources.getIdentifier(resourceName, "string", context.packageName)
        if (id == 0) null else context.getString(id)
    }
}
