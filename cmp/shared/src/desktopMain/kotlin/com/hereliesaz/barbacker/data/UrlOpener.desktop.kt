package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import java.awt.Desktop
import java.net.URI

private class DesktopUrlOpener : UrlOpener {
    override fun open(url: String): Boolean = try {
        // Headless JVMs and several Linux desktops without a registered
        // handler report BROWSE as unsupported; calling anyway throws.
        if (Desktop.isDesktopSupported() &&
            Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)
        ) {
            Desktop.getDesktop().browse(URI(url))
            true
        } else {
            false
        }
    } catch (e: Exception) {
        logWarning("Could not open a browser", e)
        false
    }
}

actual fun createUrlOpener(platformContext: Any?): UrlOpener = DesktopUrlOpener()
