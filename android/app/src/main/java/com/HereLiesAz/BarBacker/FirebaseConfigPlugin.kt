package com.HereLiesAz.BarBacker

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Reports whether this APK actually has Firebase configuration compiled
 * into it, so the web layer can decide whether calling
 * PushNotifications.register() is safe.
 *
 * It is not safe by default. register() calls
 * FirebaseMessaging.getInstance() on the native side, which throws
 * IllegalStateException ("Default FirebaseApp is not initialized in this
 * process ...") when google-services.json was absent at build time.
 * Capacitor's Bridge rethrows that as a RuntimeException on a handler
 * thread, so it is an uncaught crash — a try/catch around the JS call
 * cannot intercept it. The only way to survive a Firebase-less build is
 * to not make the call.
 *
 * The check mirrors exactly what FirebaseOptions.fromResource() does:
 * look up the string resources the Google Services Gradle plugin
 * generates and treat a missing or blank google_app_id as "no default
 * FirebaseApp". Doing it by resource lookup rather than
 * FirebaseApp.getApps() keeps this file free of any compile-time
 * dependency on firebase-common, whose version is owned by
 * @capacitor/push-notifications.
 */
@CapacitorPlugin(name = "FirebaseConfig")
class FirebaseConfigPlugin : Plugin() {

    @PluginMethod
    fun getStatus(call: PluginCall) {
        val appId = stringResource("google_app_id")
        val senderId = stringResource("gcm_defaultSenderId")

        val result = JSObject()
        // Both are required: FirebaseInitProvider needs google_app_id to
        // build FirebaseOptions at all, and FCM needs the sender ID to
        // request a token.
        result.put("configured", appId != null && senderId != null)
        // Returned so the web layer can warn when the ID belongs to the
        // project's *web* app rather than its Android app — a config
        // that initializes Firebase fine but can never get an FCM token.
        // Not a secret; it is readable in the APK's own resources.
        result.put("appId", appId ?: "")
        call.resolve(result)
    }

    private fun stringResource(name: String): String? {
        val id = context.resources.getIdentifier(name, "string", context.packageName)
        if (id == 0) return null
        return context.getString(id).takeIf { it.isNotBlank() }
    }
}
