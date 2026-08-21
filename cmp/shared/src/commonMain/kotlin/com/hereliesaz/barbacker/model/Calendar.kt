package com.hereliesaz.barbacker.model

/**
 * An entry on the bar's calendar.
 *
 * Ownership is encoded by two separate fields, and the distinction is what
 * keeps two-way sync from fighting itself:
 *  - Neither set: created here, fully editable.
 *  - [externalId] set, [externalProvider] not: created here and mirrored
 *    out to Google; still locally editable.
 *  - [externalProvider] set: owned by the remote calendar (Google webhook
 *    or an iCal poll wrote it) and read-only on this side.
 */
data class CalendarEvent(
    val id: String,
    val title: String,
    /** ISO 8601. */
    val start: String,
    /** ISO 8601. */
    val end: String,
    val description: String? = null,
    /** `"shift"`, `"booking"`, `"event"`, or a provider-supplied value. */
    val type: String = "event",
    /** uids, meaningful for `type == "shift"`. */
    val assignedTo: List<String>? = null,
    val externalId: String? = null,
    /** `"google"` or `"ical:<url-hash>"`. Set only by inbound sync. */
    val externalProvider: String? = null,
    val lastSyncedAt: Long? = null,
    /** Soft delete — tombstoned rather than removed so sync can propagate it. */
    val deletedAt: Long? = null,
) {
    val isExternallyOwned: Boolean get() = externalProvider != null
    val isShift: Boolean get() = type == "shift"
}

/**
 * Google Calendar connection state. As with POS, the tokens live in
 * `bars/{barId}/calendarSecrets` and never reach the client.
 */
data class CalendarConnectionStatus(
    val provider: String,
    val connected: Boolean = false,
    val calendarId: String? = null,
    val error: String? = null,
    val connectedAt: Long? = null,
)

/** An external `.ics` feed the bar's calendar pulls from. */
data class ICalSubscription(
    val id: String,
    val url: String,
    val createdBy: String,
    val createdAt: Long? = null,
    val lastPolledAt: Long? = null,
    val lastError: String? = null,
)
