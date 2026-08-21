package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.Bar
import com.hereliesaz.barbacker.model.BarRole
import com.hereliesaz.barbacker.model.BarStatus
import com.hereliesaz.barbacker.model.BarTheme
import com.hereliesaz.barbacker.model.BarUser
import com.hereliesaz.barbacker.model.ButtonAction
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.model.CalendarConnectionStatus
import com.hereliesaz.barbacker.model.CalendarEvent
import com.hereliesaz.barbacker.model.ChatMessage
import com.hereliesaz.barbacker.model.EightySixEntry
import com.hereliesaz.barbacker.model.EightySixVisibility
import com.hereliesaz.barbacker.model.ICalSubscription
import com.hereliesaz.barbacker.model.JobTitle
import com.hereliesaz.barbacker.model.JoinPolicy
import com.hereliesaz.barbacker.model.MemberStatus
import com.hereliesaz.barbacker.model.OwnershipClaim
import com.hereliesaz.barbacker.model.POSConnectionStatus
import com.hereliesaz.barbacker.model.POSMenuItem
import com.hereliesaz.barbacker.model.Request
import com.hereliesaz.barbacker.model.RequestStatus
import com.hereliesaz.barbacker.model.SubscriptionTier
import com.hereliesaz.barbacker.model.VenueType
import dev.gitlive.firebase.firestore.DocumentSnapshot
import dev.gitlive.firebase.firestore.Timestamp
// An extension on Timestamp, not a member — it does not come in with the
// class import.
import dev.gitlive.firebase.firestore.toMilliseconds
import kotlinx.serialization.Serializable

/**
 * Reads one field, yielding null when it is absent or cannot be decoded.
 *
 * Firestore documents are schemaless and this app has migrated its shape
 * several times, so a field written by an older client can be the wrong
 * type. Letting that propagate would kill the whole snapshot listener and
 * blank the screen; degrading the single field is the lesser failure.
 */
internal inline fun <reified T> DocumentSnapshot.field(name: String): T? = try {
    if (contains(name)) get<T?>(name) else null
} catch (e: Exception) {
    logWarning("Could not decode field '$name' on ${reference.path}", e)
    null
}

/** Firestore timestamps reach the domain model as epoch millis. */
internal fun DocumentSnapshot.timestampMillis(name: String): Long? =
    field<Timestamp>(name)?.toMilliseconds()?.toLong()

// --- Wire shapes for nested objects. -----------------------------------
// Nested structures go through explicit DTOs rather than field-by-field
// reads: kotlinx.serialization handles the recursion, and keeping the
// wire enums as raw strings means an unrecognised value degrades to null
// instead of throwing.

@Serializable
internal data class ButtonConfigDto(
    val id: String = "",
    val label: String = "",
    val icon: String? = null,
    val isCustom: Boolean? = null,
    val children: List<ButtonConfigDto>? = null,
    val action: String? = null,
) {
    fun toModel(): ButtonConfig = ButtonConfig(
        id = id,
        label = label,
        icon = icon,
        isCustom = isCustom ?: false,
        children = children?.map { it.toModel() }.orEmpty(),
        action = ButtonAction.fromWire(action),
    )
}

@Serializable
internal data class BarThemeDto(
    val primaryColor: String = "",
    val accentColor: String = "",
    val logoUrl: String? = null,
    val fontFamily: String? = null,
) {
    fun toModel(): BarTheme = BarTheme(primaryColor, accentColor, logoUrl, fontFamily)
}

// --- Document mappers. -------------------------------------------------

internal fun DocumentSnapshot.toBar(): Bar? {
    if (!exists) return null
    return Bar(
        id = id,
        name = field<String>("name").orEmpty(),
        // Absent stays null rather than becoming an empty list. The PWA's
        // listener only assigns these when present, and collapsing absent
        // to empty here would wipe a bar's inventory on a partial snapshot.
        buttons = field<List<ButtonConfigDto>>("buttons")?.map { it.toModel() },
        address = field<String>("address"),
        city = field<String>("city"),
        state = field<String>("state"),
        zip = field<String>("zip"),
        phone = field<String>("phone"),
        osmId = field<String>("osmId"),
        osmType = field<String>("osmType"),
        status = BarStatus.fromWire(field<String>("status")),
        ownerId = field<String>("ownerId"),
        type = VenueType.fromWire(field<String>("type")),
        beerInventory = field<Map<String, List<String>>>(Fields.BEER_INVENTORY),
        wells = field<List<String>>(Fields.WELLS),
        hiddenButtonIds = field<List<String>>(Fields.HIDDEN_BUTTON_IDS),
        buttonUsage = field<Map<String, Int>>(Fields.BUTTON_USAGE),
        customOrders = field<Map<String, List<String>>>(Fields.CUSTOM_ORDERS),
        subscription = SubscriptionTier.fromWire(field<String>("subscription")),
        joinPolicy = JoinPolicy.fromWire(field<String>(Fields.JOIN_POLICY)),
        theme = field<BarThemeDto>(Fields.THEME)?.toModel(),
    )
}

internal fun DocumentSnapshot.toBarUser(): BarUser? {
    if (!exists) return null
    return BarUser(
        id = id,
        displayName = field<String>(Fields.DISPLAY_NAME),
        role = BarRole.fromWire(field<String>(Fields.ROLE)),
        jobTitle = field<String>(Fields.JOB_TITLE)?.let(::JobTitle),
        status = MemberStatus.fromWire(field<String>(Fields.STATUS)),
        lastSeen = timestampMillis(Fields.LAST_SEEN),
        email = field<String>(Fields.EMAIL),
        // Null and empty are different here: null means "never chose, use
        // the job-title defaults", empty means "chose to receive nothing".
        notificationPreferences = field<List<String>>(Fields.NOTIFICATION_PREFERENCES),
    )
}

internal fun DocumentSnapshot.toRequest(): Request? {
    if (!exists) return null
    val barId = field<String>(Fields.BAR_ID) ?: return null
    return Request(
        id = id,
        label = field<String>("label").orEmpty(),
        requesterId = field<String>("requesterId").orEmpty(),
        requesterName = field<String>("requesterName"),
        requesterRole = field<String>("requesterRole"),
        status = RequestStatus.fromWire(field<String>(Fields.STATUS)),
        timestamp = timestampMillis(Fields.TIMESTAMP),
        claimedAt = timestampMillis(Fields.CLAIMED_AT),
        barId = barId,
        buttonId = field<String>("buttonId"),
        claimerName = field<String>(Fields.CLAIMER_NAME),
        claimedBy = field<String>(Fields.CLAIMED_BY),
        lastNotification = timestampMillis("lastNotification"),
        photoUrl = field<String>("photoUrl"),
    )
}

internal fun DocumentSnapshot.toChatMessage(): ChatMessage? {
    if (!exists) return null
    return ChatMessage(
        id = id,
        text = field<String>("text").orEmpty(),
        authorId = field<String>("authorId").orEmpty(),
        authorName = field<String>("authorName").orEmpty(),
        authorRole = field<String>("authorRole").orEmpty(),
        timestamp = timestampMillis(Fields.TIMESTAMP),
        pinned = field<Boolean>(Fields.PINNED) ?: false,
        pinnedBy = field<String>("pinnedBy"),
        pinnedAt = timestampMillis(Fields.PINNED_AT),
    )
}

internal fun DocumentSnapshot.toEightySixEntry(): EightySixEntry? {
    if (!exists) return null
    return EightySixEntry(
        id = id,
        patronName = field<String>("patronName").orEmpty(),
        submittedBy = field<String>("submittedBy").orEmpty(),
        submitterName = field<String>("submitterName").orEmpty(),
        reason = field<String>("reason"),
        visibility = EightySixVisibility.fromWire(field<String>(Fields.VISIBILITY)),
        timestamp = timestampMillis(Fields.TIMESTAMP),
    )
}

internal fun DocumentSnapshot.toOwnershipClaim(barId: String): OwnershipClaim? {
    if (!exists) return null
    return OwnershipClaim(
        id = id,
        barId = field<String>(Fields.BAR_ID) ?: barId,
        claimantId = field<String>("claimantId").orEmpty(),
        claimantName = field<String>("claimantName").orEmpty(),
        justification = field<String>("justification"),
        status = com.hereliesaz.barbacker.model.ClaimStatus.fromWire(field<String>(Fields.STATUS)),
        createdAt = timestampMillis("createdAt"),
    )
}

internal fun DocumentSnapshot.toCalendarEvent(): CalendarEvent? {
    if (!exists) return null
    return CalendarEvent(
        id = id,
        title = field<String>(Fields.TITLE).orEmpty(),
        start = field<String>(Fields.START).orEmpty(),
        end = field<String>(Fields.END).orEmpty(),
        description = field<String>(Fields.DESCRIPTION),
        type = field<String>(Fields.TYPE) ?: "event",
        assignedTo = field<List<String>>(Fields.ASSIGNED_TO),
        externalId = field<String>(Fields.EXTERNAL_ID),
        externalProvider = field<String>(Fields.EXTERNAL_PROVIDER),
        lastSyncedAt = timestampMillis(Fields.LAST_SYNCED_AT),
        deletedAt = timestampMillis(Fields.DELETED_AT),
    )
}

internal fun DocumentSnapshot.toCalendarConnection(provider: String): CalendarConnectionStatus? {
    if (!exists) return null
    return CalendarConnectionStatus(
        provider = provider,
        connected = field<Boolean>(Fields.CONNECTED) ?: false,
        calendarId = field<String>(Fields.CALENDAR_ID),
        error = field<String>(Fields.ERROR),
        connectedAt = timestampMillis(Fields.CONNECTED_AT),
    )
}

internal fun DocumentSnapshot.toICalSubscription(): ICalSubscription? {
    if (!exists) return null
    return ICalSubscription(
        id = id,
        url = field<String>(Fields.URL).orEmpty(),
        createdBy = field<String>(Fields.CREATED_BY).orEmpty(),
        createdAt = timestampMillis(Fields.CREATED_AT),
        lastPolledAt = timestampMillis(Fields.LAST_POLLED_AT),
        lastError = field<String>(Fields.LAST_ERROR),
    )
}

internal fun DocumentSnapshot.toPosConnection(provider: String): POSConnectionStatus? {
    if (!exists) return null
    return POSConnectionStatus(
        provider = provider,
        connected = field<Boolean>(Fields.CONNECTED) ?: false,
        merchantId = field<String>(Fields.MERCHANT_ID),
        error = field<String>(Fields.ERROR),
        connectedAt = timestampMillis(Fields.CONNECTED_AT),
        lastSyncedAt = timestampMillis(Fields.LAST_SYNCED_AT),
        lastSyncedCount = field<Int>(Fields.LAST_SYNCED_COUNT),
    )
}

internal fun DocumentSnapshot.toPosMenuItem(): POSMenuItem? {
    if (!exists) return null
    return POSMenuItem(
        id = id,
        name = field<String>(Fields.NAME).orEmpty(),
        // Integer cents. A price that arrived as a float from an older
        // writer would fail to decode as Int and degrade to zero rather
        // than killing the listener for the whole menu.
        price = field<Int>(Fields.PRICE) ?: 0,
        category = field<String>(Fields.CATEGORY),
        provider = field<String>(Fields.PROVIDER).orEmpty(),
        syncedAt = timestampMillis(Fields.SYNCED_AT),
    )
}
