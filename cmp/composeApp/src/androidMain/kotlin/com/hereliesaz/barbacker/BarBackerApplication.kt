package com.hereliesaz.barbacker

import android.app.Application
import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Build

/**
 * The channel the server-side fanout and the nag cron target.
 *
 * The id must match what those senders set, or Android drops the
 * notification's high-priority treatment and it arrives silently — which
 * for a paging app is indistinguishable from not arriving at all.
 */
private const val URGENT_ALERTS_CHANNEL_ID = "urgent_alerts"

class BarBackerApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        createUrgentAlertsChannel()
    }

    private fun createUrgentAlertsChannel() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return

        val manager = getSystemService(NotificationManager::class.java) ?: return
        val channel = NotificationChannel(
            URGENT_ALERTS_CHANNEL_ID,
            "Urgent Alerts",
            // HIGH so pages heads-up over whatever is on screen. A bar
            // request that waits for someone to pull down the shade is a
            // request that did not work.
            NotificationManager.IMPORTANCE_HIGH,
        ).apply {
            description = "Requests from the floor that need someone now."
            enableVibration(true)
            vibrationPattern = longArrayOf(0, 500, 200, 500)
        }
        // Creating an existing channel is a no-op, so this is safe on every
        // launch — and a user's own changes to the channel are preserved.
        manager.createNotificationChannel(channel)
    }
}
