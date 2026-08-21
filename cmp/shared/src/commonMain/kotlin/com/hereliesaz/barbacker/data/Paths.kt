package com.hereliesaz.barbacker.data

/**
 * Every Firestore path the client touches, in one place.
 *
 * These are matched literally by `firestore.rules`, and several of them
 * are not where you would guess:
 *  - Requests live in a ROOT collection filtered by `barId`, not under the
 *    bar. Changing that would silently break the security rules and the
 *    Cloud Function triggers at the same time.
 *  - Per-bar membership is a subcollection, so the same account has an
 *    independent role, job title, and status in every bar it belongs to.
 *  - FCM tokens are a separate subcollection from membership so a device
 *    can be de-registered without touching the membership document.
 */
object Paths {

    /** Account-level document: `joinedBars`, `ntfyTopic`. */
    fun user(uid: String) = "users/$uid"

    const val USERS = "users"
    const val BARS = "bars"

    /** Root collection. Not `bars/{barId}/requests` — see the note above. */
    const val REQUESTS = "requests"

    fun bar(barId: String) = "bars/$barId"

    fun barMembers(barId: String) = "bars/$barId/users"
    fun barMember(barId: String, uid: String) = "bars/$barId/users/$uid"

    /** One document per device, keyed by uid. Deleting it stops pushes. */
    fun barTokens(barId: String) = "bars/$barId/tokens"
    fun barToken(barId: String, uid: String) = "bars/$barId/tokens/$uid"

    fun barChat(barId: String) = "bars/$barId/chat"
    fun barEightySixed(barId: String) = "bars/$barId/eightySixed"
    fun barInvites(barId: String) = "bars/$barId/invites"
    fun barOwnershipClaims(barId: String) = "bars/$barId/ownershipClaims"
    fun barEvents(barId: String) = "bars/$barId/events"
    fun barMenu(barId: String) = "bars/$barId/menu"
    fun barPosConnection(barId: String) = "bars/$barId/posConnection"
    fun barCalendarConnection(barId: String, provider: String) =
        "bars/$barId/calendarConnection/$provider"
    fun barICalSubscriptions(barId: String) = "bars/$barId/icalSubscriptions"

    /** Storage object path for a bottle-scanner photo. */
    fun bottlePhoto(barId: String, uid: String, epochMillis: Long) =
        "bottlePhotos/$barId/${uid}_$epochMillis.jpg"

    /** Storage object path for a premium bar's logo. */
    fun barLogo(barId: String, fileName: String) = "barLogos/$barId/$fileName"
}

/** Firestore field names, so a typo fails at one site rather than silently. */
object Fields {
    const val BAR_ID = "barId"
    const val TIMESTAMP = "timestamp"
    const val STATUS = "status"
    const val ROLE = "role"
    const val JOB_TITLE = "jobTitle"
    const val DISPLAY_NAME = "displayName"
    const val EMAIL = "email"
    const val VISIBILITY = "visibility"
    const val CONSUMED = "consumed"
    const val PINNED = "pinned"
    const val PINNED_AT = "pinnedAt"
    const val START = "start"
    const val OWNER_ID = "ownerId"
    const val JOIN_POLICY = "joinPolicy"
    const val JOINED_BARS = "joinedBars"
    const val NTFY_TOPIC = "ntfyTopic"
    const val NOTIFICATION_PREFERENCES = "notificationPreferences"
    const val BUTTON_USAGE = "buttonUsage"
    const val CUSTOM_ORDERS = "customOrders"
    const val BEER_INVENTORY = "beerInventory"
    const val WELLS = "wells"
    const val HIDDEN_BUTTON_IDS = "hiddenButtonIds"
    const val CLAIMED_BY = "claimedBy"
    const val CLAIMER_NAME = "claimerName"
    const val CLAIMED_AT = "claimedAt"
    const val LAST_SEEN = "lastSeen"
    const val THEME = "theme"
}
