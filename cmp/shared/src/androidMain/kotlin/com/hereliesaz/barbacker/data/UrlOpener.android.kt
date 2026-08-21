package com.hereliesaz.barbacker.data

import android.content.Context
import android.content.Intent
import android.net.Uri
import com.hereliesaz.barbacker.logWarning

private class AndroidUrlOpener(private val context: Context?) : UrlOpener {
    override fun open(url: String): Boolean {
        val host = context ?: return false
        return try {
            host.startActivity(
                Intent(Intent.ACTION_VIEW, Uri.parse(url)).apply {
                    // The context handed down here is the Application in
                    // some entry points, and an Activity-less start
                    // throws without this flag.
                    addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                },
            )
            true
        } catch (e: Exception) {
            logWarning("Could not open a browser", e)
            false
        }
    }
}

actual fun createUrlOpener(platformContext: Any?): UrlOpener =
    AndroidUrlOpener(platformContext as? Context)
