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

    /**
     * Google OAuth client ids, all OPTIONAL.
     *
     * Absent means Google sign-in reports itself unsupported rather than
     * failing at the point someone taps it. `SERVER_CLIENT_ID` is the
     * project's **web** client id — Android's Credential Manager wants
     * that one, because it is the audience Firebase expects in the ID
     * token, and the Android client id yields a token Firebase rejects.
     *
     * The desktop "secret" is not confidential: an installed-app client
     * ships it inside the binary, and PKCE is what actually protects that
     * flow. It is here because Google's token endpoint asks for it, not
     * because it protects anything.
     */
    const val GOOGLE_SERVER_CLIENT_ID = "VITE_GOOGLE_SERVER_CLIENT_ID"
    const val GOOGLE_DESKTOP_CLIENT_ID = "VITE_GOOGLE_DESKTOP_CLIENT_ID"
    const val GOOGLE_DESKTOP_CLIENT_SECRET = "VITE_GOOGLE_DESKTOP_CLIENT_SECRET"
    const val GOOGLE_IOS_CLIENT_ID = "VITE_GOOGLE_IOS_CLIENT_ID"

    val ALL = listOf(
        API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID,
    )

    /** Builds a config from a lookup, or null if any REQUIRED value is missing. */
    fun build(lookup: (String) -> String?): BarBackerFirebaseConfig? {
        val values = ALL.associateWith { lookup(it)?.takeIf(String::isNotBlank) }
        if (values.values.any { it == null }) return null
        val serverClientId = lookup(GOOGLE_SERVER_CLIENT_ID)?.takeIf(String::isNotBlank)
        return BarBackerFirebaseConfig(
            icalFeedBaseUrl = lookup(ICAL_FEED_BASE_URL)?.takeIf(String::isNotBlank),
            googleOAuth = serverClientId?.let {
                GoogleOAuthConfig(
                    serverClientId = it,
                    desktopClientId = lookup(GOOGLE_DESKTOP_CLIENT_ID)?.takeIf(String::isNotBlank),
                    desktopClientSecret =
                        lookup(GOOGLE_DESKTOP_CLIENT_SECRET)?.takeIf(String::isNotBlank),
                    iosClientId = lookup(GOOGLE_IOS_CLIENT_ID)?.takeIf(String::isNotBlank),
                )
            },
            apiKey = values.getValue(API_KEY)!!,
            authDomain = values.getValue(AUTH_DOMAIN)!!,
            projectId = values.getValue(PROJECT_ID)!!,
            storageBucket = values.getValue(STORAGE_BUCKET)!!,
            messagingSenderId = values.getValue(MESSAGING_SENDER_ID)!!,
            applicationId = values.getValue(APP_ID)!!,
        )
    }
}
