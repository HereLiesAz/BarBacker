package com.hereliesaz.barbacker.data

/**
 * Desktop has no FCM transport, so there is nothing to register.
 *
 * This reports unsupported rather than pretending: a desktop client that
 * silently registered no token would look identical to one whose
 * registration was failing. The in-app alert loop is what pages a desktop
 * user, and it runs regardless.
 */
private object DesktopPushTokenProvider : PushTokenProvider {
    override val isSupported: Boolean = false
    override suspend fun currentToken(): String? = null
    override suspend fun deleteToken() = Unit
}

actual fun createPushTokenProvider(platformContext: Any?): PushTokenProvider =
    DesktopPushTokenProvider
