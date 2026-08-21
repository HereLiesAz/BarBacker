package com.hereliesaz.barbacker

actual fun logWarning(message: String, throwable: Throwable?) {
    System.err.println("[BarBacker] $message")
    throwable?.printStackTrace()
}
