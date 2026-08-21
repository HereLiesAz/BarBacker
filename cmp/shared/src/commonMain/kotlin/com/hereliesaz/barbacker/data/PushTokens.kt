package com.hereliesaz.barbacker.data

/**
 * This device's push registration.
 *
 * A token is per-device, not per-account: registering it under
 * `bars/{barId}/tokens/{uid}` is what makes the server-side fanout and the
 * five-minute nag cron able to reach this phone. Deleting it is how going
 * off clock actually stops the pages — without that, a device keeps being
 * paged for a bar whose shift ended hours ago.
 */
interface PushTokenProvider {
    /**
     * Whether this platform can receive push at all.
     *
     * False on desktop: there is no FCM transport for a JVM app, so the
     * in-app alert loop is the only thing that will fire there. Callers
     * check this rather than treating a null token as an error.
     */
    val isSupported: Boolean

    /** The current registration token, or null if unavailable. */
    suspend fun currentToken(): String?

    /** Drops the registration, so the server stops targeting this device. */
    suspend fun deleteToken()
}

expect fun createPushTokenProvider(platformContext: Any?): PushTokenProvider
