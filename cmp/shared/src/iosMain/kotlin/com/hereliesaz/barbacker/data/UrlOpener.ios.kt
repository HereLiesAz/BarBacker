package com.hereliesaz.barbacker.data

import platform.Foundation.NSURL
import platform.UIKit.UIApplication

private class IosUrlOpener : UrlOpener {
    override fun open(url: String): Boolean {
        val target = NSURL.URLWithString(url) ?: return false
        val application = UIApplication.sharedApplication
        if (!application.canOpenURL(target)) return false
        application.openURL(target)
        return true
    }
}

actual fun createUrlOpener(platformContext: Any?): UrlOpener = IosUrlOpener()
