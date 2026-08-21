package com.hereliesaz.barbacker

import android.content.Context
import android.media.RingtoneManager
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager

/** The pattern the web client uses: buzz, pause, buzz. */
private val VIBRATION_PATTERN = longArrayOf(0, 500, 200, 500)

private class AndroidAlerter(private val context: Context) : Alerter {

    override fun alert() {
        playNotificationSound()
        vibrate()
    }

    private fun playNotificationSound() {
        try {
            val uri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION)
            RingtoneManager.getRingtone(context, uri)?.play()
        } catch (e: Exception) {
            // Never let an alert failure propagate — the loop that calls
            // this runs forever, and one bad ringtone lookup should not
            // end it.
            logWarning("Could not play the alert sound", e)
        }
    }

    private fun vibrate() {
        try {
            val vibrator = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val manager =
                    context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                manager?.defaultVibrator
            } else {
                @Suppress("DEPRECATION")
                context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
            } ?: return

            if (!vibrator.hasVibrator()) return
            vibrator.vibrate(VibrationEffect.createWaveform(VIBRATION_PATTERN, -1))
        } catch (e: Exception) {
            logWarning("Could not vibrate", e)
        }
    }
}

actual fun createAlerter(platformContext: Any?): Alerter {
    val context = platformContext as? Context
        ?: error("An Android Context is required to create the alerter")
    return AndroidAlerter(context.applicationContext)
}
