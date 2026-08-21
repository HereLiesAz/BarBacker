package com.hereliesaz.barbacker.data

/**
 * Reads the Firebase project configuration from wherever this platform
 * keeps it, or null when it has not been supplied.
 *
 * Null is a first-class outcome rather than a crash. These values are
 * injected at build time, and a developer building from a fresh clone
 * will not have them; a clear "not configured" screen is far more useful
 * than a stack trace inside the Firebase SDK.
 *
 * The variable names deliberately match the PWA's `VITE_FIREBASE_*` set,
 * so one `.env` drives every client.
 */
expect fun loadFirebaseConfig(platformContext: Any?): BarBackerFirebaseConfig?

/** Field names shared by every platform's lookup. */
internal object FirebaseConfigKeys {
    const val API_KEY = "VITE_FIREBASE_API_KEY"
    const val AUTH_DOMAIN = "VITE_FIREBASE_AUTH_DOMAIN"
    const val PROJECT_ID = "VITE_FIREBASE_PROJECT_ID"
    const val STORAGE_BUCKET = "VITE_FIREBASE_STORAGE_BUCKET"
    const val MESSAGING_SENDER_ID = "VITE_FIREBASE_MESSAGING_SENDER_ID"
    const val APP_ID = "VITE_FIREBASE_APP_ID"

    /**
     * Where the outbound iCal feed is actually served from.
     *
     * OPTIONAL, and absent from [ALL] on purpose: the feed is a Cloud
     * Function on a different host from everything else, and a deployment
     * that never turned it on should still run. Calendar Settings says the
     * feed is unconfigured rather than handing out a URL that 404s.
     */
    const val ICAL_FEED_BASE_URL = "VITE_ICAL_FEED_BASE_URL"

    val ALL = listOf(
        API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID,
    )

    /** Builds a config from a lookup, or null if any REQUIRED value is missing. */
    fun build(lookup: (String) -> String?): BarBackerFirebaseConfig? {
        val values = ALL.associateWith { lookup(it)?.takeIf(String::isNotBlank) }
        if (values.values.any { it == null }) return null
        return BarBackerFirebaseConfig(
            icalFeedBaseUrl = lookup(ICAL_FEED_BASE_URL)?.takeIf(String::isNotBlank),
            apiKey = values.getValue(API_KEY)!!,
            authDomain = values.getValue(AUTH_DOMAIN)!!,
            projectId = values.getValue(PROJECT_ID)!!,
            storageBucket = values.getValue(STORAGE_BUCKET)!!,
            messagingSenderId = values.getValue(MESSAGING_SENDER_ID)!!,
            applicationId = values.getValue(APP_ID)!!,
        )
    }
}
