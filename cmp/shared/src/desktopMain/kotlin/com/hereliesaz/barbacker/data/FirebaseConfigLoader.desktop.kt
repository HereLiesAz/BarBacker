package com.hereliesaz.barbacker.data

/**
 * Reads the config from JVM system properties first, then the environment.
 *
 * Properties take precedence so a single run can be pointed at a different
 * project with -D flags without editing the shell's environment.
 */
actual fun loadFirebaseConfig(platformContext: Any?): BarBackerFirebaseConfig? =
    FirebaseConfigKeys.build { key -> System.getProperty(key) ?: System.getenv(key) }
