package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.messaging.messaging
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import platform.UIKit.UIApplication
import platform.UserNotifications.UNAuthorizationOptionAlert
import platform.UserNotifications.UNAuthorizationOptionBadge
import platform.UserNotifications.UNAuthorizationOptionSound
import platform.UserNotifications.UNUserNotificationCenter
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

/**
 * APNs, then FCM on top of it.
 *
 * Registration is driven from here rather than from the Swift app
 * delegate, and that is the point rather than a convenience. FCM cannot
 * mint a token until the APNs device token has reached the Firebase
 * Messaging instance, and Messaging only exists once Firebase has been
 * configured — which happens in the first composition, not at launch. An
 * app delegate that registers in `didFinishLaunching` therefore races:
 * APNs usually answers later, so it usually works, and when it does not
 * the failure looks like a device that just never receives pages.
 * Registering from here cannot lose that race, because nothing calls
 * this until Firebase is up.
 *
 * Needs the Push Notifications capability and an `aps-environment`
 * entitlement on the Xcode target — see `cmp/iosApp/project.yml`.
 * Without them the registration call fails and this reports no token,
 * which leaves the in-app alert loop as the only thing paging the user.
 */
private class IosPushTokenProvider : PushTokenProvider {
    override val isSupported: Boolean = true

    private var registered = false

    override suspend fun currentToken(): String? = try {
        // A denied prompt is a real answer, not an error: no token means
        // the app falls back to the in-app alert loop, which is the
        // honest outcome of someone declining notifications.
        if (!ensureRegisteredForRemoteNotifications()) null else Firebase.messaging.getToken()
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

    /** @return whether this device is permitted to receive notifications. */
    private suspend fun ensureRegisteredForRemoteNotifications(): Boolean {
        // The system remembers the answer, so this prompts once and
        // afterwards returns the stored decision without any UI.
        val granted = suspendCoroutine { continuation ->
            UNUserNotificationCenter.currentNotificationCenter()
                .requestAuthorizationWithOptions(
                    UNAuthorizationOptionAlert or
                        UNAuthorizationOptionSound or
                        UNAuthorizationOptionBadge,
                ) { granted, error ->
                    if (error != null) {
                        logWarning("Notification authorization failed: ${error.localizedDescription}")
                    }
                    continuation.resume(granted && error == null)
                }
        }
        if (!granted) return false

        if (!registered) {
            // UIKit, so main thread. Off it, this is undefined behaviour
            // rather than a clean failure.
            withContext(Dispatchers.Main) {
                UIApplication.sharedApplication.registerForRemoteNotifications()
            }
            registered = true
        }
        return true
    }
}

actual fun createPushTokenProvider(platformContext: Any?): PushTokenProvider =
    IosPushTokenProvider()
