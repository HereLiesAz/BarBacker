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

    /** Holds the opaque token that appears in the outbound feed URL. */
    fun barICalFeedConfig(barId: String) = "bars/$barId/icalFeed/config"

    /** Storage object path for a bottle-scanner photo. */
    fun bottlePhoto(barId: String, uid: String, epochMillis: Long) =
        "bottlePhotos/$barId/${uid}_$epochMillis.jpg"

    /**
     * Storage object path for a premium bar's logo.
     *
     * `bars/`, not `barLogos/`, and the file name must start with `logo.`
     * — `storage.rules` matches `/bars/{barId}/{fileName}` and then
     * re-narrows `fileName` with `matches('logo\\..+')`. Anything outside
     * that shape has no matching rule at all, and Storage denies by
     * default, so a near-miss here fails as a flat permission error with
     * nothing pointing at the path.
     */
    fun barLogo(barId: String, extension: String) = "bars/$barId/logo.$extension"
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
    const val CREATED_BY = "createdBy"
    const val CREATED_BY_NAME = "createdByName"
    const val CREATED_AT = "createdAt"
    const val TITLE = "title"
    const val END = "end"
    const val TYPE = "type"
    const val DESCRIPTION = "description"
    const val ASSIGNED_TO = "assignedTo"
    const val EXTERNAL_ID = "externalId"
    const val EXTERNAL_PROVIDER = "externalProvider"
    const val LAST_SYNCED_AT = "lastSyncedAt"
    const val DELETED_AT = "deletedAt"
    const val URL = "url"
    const val TOKEN = "token"
    const val CONNECTED = "connected"
    const val CALENDAR_ID = "calendarId"
    const val MERCHANT_ID = "merchantId"
    const val ERROR = "error"
    const val CONNECTED_AT = "connectedAt"
    const val LAST_POLLED_AT = "lastPolledAt"
    const val LAST_ERROR = "lastError"
    const val LAST_SYNCED_COUNT = "lastSyncedCount"
    const val NAME = "name"
    const val PRICE = "price"
    const val CATEGORY = "category"
    const val PROVIDER = "provider"
    const val SYNCED_AT = "syncedAt"
}
