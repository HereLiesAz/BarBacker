package com.hereliesaz.barbacker

import android.util.Log

private const val TAG = "BarBacker"

actual fun logWarning(message: String, throwable: Throwable?) {
    if (throwable != null) Log.w(TAG, message, throwable) else Log.w(TAG, message)
}
