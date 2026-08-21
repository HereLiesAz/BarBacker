package com.hereliesaz.barbacker.data

import platform.Foundation.NSBundle

/**
 * Reads the config from the app bundle's Info.plist, where an Xcode build
 * setting can place it without the values being committed to the repo.
 */
actual fun loadFirebaseConfig(platformContext: Any?): BarBackerFirebaseConfig? =
    FirebaseConfigKeys.build { key ->
        NSBundle.mainBundle.objectForInfoDictionaryKey(key) as? String
    }
