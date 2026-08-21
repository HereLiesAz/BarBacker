package com.hereliesaz.barbacker.data

import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.FirebaseApp
import dev.gitlive.firebase.FirebaseOptions
import dev.gitlive.firebase.auth.FirebaseAuth
import dev.gitlive.firebase.auth.auth
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.firestore.firestore
import dev.gitlive.firebase.functions.FirebaseFunctions
import dev.gitlive.firebase.functions.functions
import dev.gitlive.firebase.initialize
import dev.gitlive.firebase.storage.FirebaseStorage
import dev.gitlive.firebase.storage.storage

/**
 * The Firebase project this build talks to.
 *
 * Supplied per platform rather than read from a bundled
 * `google-services.json`. The PWA already injects the same six values from
 * `VITE_FIREBASE_*` environment variables at build time, and matching that
 * keeps one project's credentials from being baked into an artifact by
 * accident — and keeps the Google Services Gradle plugin, which would only
 * work for Android, out of the build entirely.
 */
data class BarBackerFirebaseConfig(
    val apiKey: String,
    val authDomain: String,
    val projectId: String,
    val storageBucket: String,
    val messagingSenderId: String,
    val applicationId: String,
    /**
     * Where the outbound iCal feed is served from, if anywhere.
     *
     * Not part of the Firebase project identity — it is the base of a
     * Cloud Function's public URL, and a deployment that never enabled
     * the feed simply has none.
     */
    val icalFeedBaseUrl: String? = null,

    /** Google OAuth client ids, absent when this build has none. */
    val googleOAuth: GoogleOAuthConfig? = null,
) {
    internal fun toFirebaseOptions() = FirebaseOptions(
        applicationId = applicationId,
        apiKey = apiKey,
        storageBucket = storageBucket,
        projectId = projectId,
        gcmSenderId = messagingSenderId,
        authDomain = authDomain,
    )
}

/**
 * Holds the initialised Firebase services.
 *
 * Created once per process by the platform entry point and passed down
 * explicitly. There is no global singleton on purpose: tests substitute
 * fake repositories rather than a fake Firebase, and a hidden global would
 * make it possible to reach live Firestore from a test by accident.
 */
class BarBackerFirebase private constructor(
    val app: FirebaseApp,
    val auth: FirebaseAuth,
    val firestore: FirebaseFirestore,
    val functions: FirebaseFunctions,
    val storage: FirebaseStorage,
) {
    companion object {
        /**
         * @param platformContext the Android `Context` on Android; ignored,
         *   and safely null, on iOS and desktop.
         */
        fun initialize(
            config: BarBackerFirebaseConfig,
            platformContext: Any? = null,
        ): BarBackerFirebase {
            val app = Firebase.initialize(platformContext, config.toFirebaseOptions())
            return BarBackerFirebase(
                app = app,
                auth = Firebase.auth(app),
                firestore = Firebase.firestore(app),
                // Default region (us-central1), matching where the web
                // client's getFunctions(app) points and where the
                // callables are actually deployed.
                functions = Firebase.functions(app),
                storage = Firebase.storage(app),
            )
        }
    }
}
