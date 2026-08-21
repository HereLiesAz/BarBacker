package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.messaging.messaging

private class AndroidPushTokenProvider : PushTokenProvider {
    override val isSupported: Boolean = true

    override suspend fun currentToken(): String? = try {
        Firebase.messaging.getToken()
    } catch (e: Exception) {
        // A missing token is recoverable — Play Services may be absent or
        // updating — and must not block clocking in.
        logWarning("Could not obtain an FCM token", e)
        null
    }

    override suspend fun deleteToken() {
        try {
            Firebase.messaging.deleteToken()
        } catch (e: Exception) {
            logWarning("Could not delete the FCM token", e)
        }
    }
}

actual fun createPushTokenProvider(platformContext: Any?): PushTokenProvider =
    AndroidPushTokenProvider()
