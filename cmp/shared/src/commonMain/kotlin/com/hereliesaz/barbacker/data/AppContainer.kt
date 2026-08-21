package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.Alerter
import com.hereliesaz.barbacker.createAlerter

/**
 * Wires the repositories to a live Firebase project.
 *
 * Constructed once by the platform entry point and passed down, rather
 * than reached through a global. Tests build a container of fakes instead,
 * and a hidden singleton would make it possible to hit production
 * Firestore from a test by forgetting one substitution.
 */
class AppContainer(
    firebase: BarBackerFirebase,
    val store: KeyValueStore,
    /** The Android `Context`; null elsewhere. */
    platformContext: Any? = null,
    /** Where the outbound iCal feed is served from, if configured. */
    val icalFeedBaseUrl: String? = null,
) {
    val auth: AuthRepository = FirebaseAuthRepository(firebase.auth)
    val bars: BarRepository = FirebaseBarRepository(firebase.firestore)
    val memberships: MembershipRepository = FirebaseMembershipRepository(firebase.firestore)
    val requests: RequestRepository = FirebaseRequestRepository(firebase.firestore)
    val chat: ChatRepository = FirebaseChatRepository(firebase.firestore)
    val eightySix: EightySixRepository = FirebaseEightySixRepository(firebase.firestore)
    val ownershipClaims: OwnershipClaimRepository =
        FirebaseOwnershipClaimRepository(firebase.firestore, firebase.functions)
    val storage: StorageRepository = FirebaseStorageRepository(firebase.storage)
    val calendar: CalendarRepository =
        FirebaseCalendarRepository(firebase.firestore, firebase.functions)
    val pos: PosRepository = FirebasePosRepository(firebase.firestore, firebase.functions)
    val urls: UrlOpener = createUrlOpener(platformContext)

    /**
     * One client for the whole process. Ktor clients own a connection pool
     * and a dispatcher, so creating one per search would leak both.
     */
    private val httpClient = createHttpClient()

    val placeSearch: PlaceSearchRepository =
        DefaultPlaceSearchRepository(firebase.firestore, httpClient)

    val pushTokens: PushTokenProvider = createPushTokenProvider(platformContext)
    val alerter: Alerter = createAlerter(platformContext)
}
