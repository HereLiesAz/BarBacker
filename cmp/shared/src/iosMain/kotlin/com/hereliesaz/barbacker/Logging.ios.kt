package com.hereliesaz.barbacker

import platform.Foundation.NSLog

actual fun logWarning(message: String, throwable: Throwable?) {
    NSLog("[BarBacker] %s %s", message, throwable?.stackTraceToString() ?: "")
}
