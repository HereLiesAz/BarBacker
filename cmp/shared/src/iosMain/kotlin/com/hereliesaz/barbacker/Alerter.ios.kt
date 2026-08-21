package com.hereliesaz.barbacker

import platform.AudioToolbox.AudioServicesPlaySystemSound
import platform.AudioToolbox.kSystemSoundID_Vibrate

/** The standard "new mail" alert tone. */
private const val ALERT_SOUND_ID: UInt = 1007u

private object IosAlerter : Alerter {
    override fun alert() {
        AudioServicesPlaySystemSound(ALERT_SOUND_ID)
        // On a device without a taptic engine this is a no-op rather than
        // an error, so it is always safe to request.
        AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)
    }
}

actual fun createAlerter(platformContext: Any?): Alerter = IosAlerter
