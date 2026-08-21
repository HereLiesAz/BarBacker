package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.messaging.messaging

/**
 * iOS push depends on an APNs capability and entitlement configured in the
 * Xcode project, plus a Firebase iOS SDK linked through SPM or CocoaPods.
 * Until that project exists (see cmp/iosApp/README.md), `getToken()` will
 * simply fail here and the app falls back to the in-app alert loop.
 */
private class IosPushTokenProvider : PushTokenProvider {
    override val isSupported: Boolean = true

    override suspend fun currentToken(): String? = try {
        Firebase.messaging.getToken()
    } catch (e: Exception) {
        logWarning("Could not obtain an APNs/FCM token", e)
        null
    }

    override suspend fun deleteToken() {
        try {
            Firebase.messaging.deleteToken()
        } catch (e: Exception) {
            logWarning("Could not delete the push token", e)
        }
    }
}

actual fun createPushTokenProvider(platformContext: Any?): PushTokenProvider =
    IosPushTokenProvider()
