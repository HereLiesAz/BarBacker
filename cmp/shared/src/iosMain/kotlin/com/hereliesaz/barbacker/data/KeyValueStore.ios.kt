package com.hereliesaz.barbacker.data

import platform.Foundation.NSUserDefaults

private class IosKeyValueStore(private val defaults: NSUserDefaults) : KeyValueStore {
    override fun getString(key: String): String? = defaults.stringForKey(key)

    override fun putString(key: String, value: String?) {
        if (value == null) defaults.removeObjectForKey(key) else defaults.setObject(value, key)
    }
}

actual fun createKeyValueStore(platformContext: Any?): KeyValueStore =
    IosKeyValueStore(NSUserDefaults.standardUserDefaults)
