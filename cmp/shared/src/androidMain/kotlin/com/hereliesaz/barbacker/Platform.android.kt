package com.hereliesaz.barbacker

actual fun platformName(): String = "Android ${android.os.Build.VERSION.SDK_INT}"
