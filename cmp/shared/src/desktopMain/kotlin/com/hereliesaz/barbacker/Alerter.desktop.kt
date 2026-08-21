package com.hereliesaz.barbacker

import java.awt.Toolkit

private object DesktopAlerter : Alerter {
    override fun alert() {
        try {
            // The system beep rather than a bundled sound file: it respects
            // the user's own alert settings and needs no asset shipped.
            Toolkit.getDefaultToolkit().beep()
        } catch (e: Exception) {
            logWarning("Could not sound the alert", e)
        }
    }
}

actual fun createAlerter(platformContext: Any?): Alerter = DesktopAlerter
