package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.CalendarConnectionStatus
import com.hereliesaz.barbacker.model.CalendarEvent
import com.hereliesaz.barbacker.model.ICalSubscription
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.firestore.Timestamp
import dev.gitlive.firebase.functions.FirebaseFunctions
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

/** One calendar the connected Google account can mirror. */
@Serializable
data class GoogleCalendar(
    val id: String,
    val summary: String = "",
    val primary: Boolean = false,
)

/**
 * The editable half of a [CalendarEvent].
 *
 * Deliberately does not carry `externalId`, `externalProvider`, or
 * `lastSyncedAt`. Those are written only by the sync functions through the
 * Admin SDK, and `firestore.rules` rejects a client write that so much as
 * mentions `externalProvider` — a draft that could express one would be a
 * write that always fails.
 */
data class CalendarEventDraft(
    val title: String,
    /** ISO 8601. */
    val start: String,
    /** ISO 8601. */
    val end: String,
    val type: String = "event",
    val description: String? = null,
)

/**
 * The bar's calendar: local events, the Google mirror, and iCal in both
 * directions.
 *
 * Event CRUD is a direct Firestore write — Manager+, and only for events
 * this side owns. Everything touching Google or the feed token goes
 * through a Cloud Function, because those hold OAuth credentials that
 * never reach a client.
 */
interface CalendarRepository {
    /**
     * Events for the bar, soonest first, tombstones excluded.
     *
     * Readable by any member, unlike the settings flows below — the floor
     * needs to see who is on shift.
     */
    fun eventsFlow(barId: String?): Flow<List<CalendarEvent>>

    fun googleConnectionFlow(
        barId: String?,
        isManagerPlus: Boolean,
    ): Flow<CalendarConnectionStatus?>

    fun icalSubscriptionsFlow(
        barId: String?,
        isManagerPlus: Boolean,
    ): Flow<List<ICalSubscription>>

    /** The outbound feed's opaque token, or null when none has been minted. */
    fun feedTokenFlow(barId: String?, isManagerPlus: Boolean): Flow<String?>

    suspend fun createEvent(barId: String, draft: CalendarEventDraft)
    suspend fun updateEvent(barId: String, eventId: String, draft: CalendarEventDraft)
    suspend fun deleteEvent(barId: String, eventId: String)

    /** Returns the URL to open in a browser to authorise Google. */
    suspend fun googleAuthorizeUrl(barId: String): String
    suspend fun listGoogleCalendars(barId: String): List<GoogleCalendar>
    suspend fun selectGoogleCalendar(barId: String, calendarId: String)
    suspend fun disconnectGoogle(barId: String)

    suspend fun addICalSubscription(barId: String, url: String, uid: String)
    suspend fun removeICalSubscription(barId: String, subscriptionId: String)

    /** Mints a new feed token, or revokes the current one outright. */
    suspend fun rotateFeedToken(barId: String, revoke: Boolean)
}

class FirebaseCalendarRepository(
    private val firestore: FirebaseFirestore,
    private val functions: FirebaseFunctions,
) : CalendarRepository {

    @Serializable
    private data class EventWrite(
        val title: String,
        val start: String,
        val end: String,
        val type: String,
        val description: String? = null,
    )

    @Serializable
    private data class SubscriptionWrite(
        val url: String,
        val createdBy: String,
        val createdAt: Timestamp.ServerTimestamp,
    )

    @Serializable
    private data class BarRequest(val barId: String)

    @Serializable
    private data class SelectCalendarRequest(val barId: String, val calendarId: String)

    @Serializable
    private data class RotateTokenRequest(val barId: String, val revoke: Boolean)

    @Serializable
    private data class AuthorizeUrlResponse(val authorizeUrl: String)

    @Serializable
    private data class CalendarListResponse(val calendars: List<GoogleCalendar> = emptyList())

    override fun eventsFlow(barId: String?): Flow<List<CalendarEvent>> = flow {
        emit(emptyList())
        if (barId == null) return@flow
        emitAll(
            firestore.collection(Paths.barEvents(barId))
                .orderBy(Fields.START)
                .snapshots
                .map { snapshot ->
                    snapshot.documents
                        .mapNotNull { it.toCalendarEvent() }
                        // Filtered here rather than in the query: a
                        // tombstone is a field that most events simply do
                        // not have, and Firestore's inequality filters
                        // exclude documents missing the field entirely —
                        // the query would return nothing at all.
                        .filter { it.deletedAt == null }
                },
        )
    }.catch { e ->
        logWarning("Calendar events listener failed for $barId", e)
        emit(emptyList())
    }

    override fun googleConnectionFlow(
        barId: String?,
        isManagerPlus: Boolean,
    ): Flow<CalendarConnectionStatus?> = flow {
        emit(null)
        if (barId == null || !isManagerPlus) return@flow
        emitAll(
            firestore.document(Paths.barCalendarConnection(barId, GOOGLE_PROVIDER))
                .snapshots
                .map { it.toCalendarConnection(GOOGLE_PROVIDER) },
        )
    }.catch { e ->
        logWarning("Calendar connection listener failed for $barId", e)
        emit(null)
    }

    override fun icalSubscriptionsFlow(
        barId: String?,
        isManagerPlus: Boolean,
    ): Flow<List<ICalSubscription>> = flow {
        emit(emptyList())
        if (barId == null || !isManagerPlus) return@flow
        emitAll(
            firestore.collection(Paths.barICalSubscriptions(barId))
                .snapshots
                .map { snapshot -> snapshot.documents.mapNotNull { it.toICalSubscription() } },
        )
    }.catch { e ->
        logWarning("iCal subscription listener failed for $barId", e)
        emit(emptyList())
    }

    override fun feedTokenFlow(barId: String?, isManagerPlus: Boolean): Flow<String?> = flow {
        emit(null)
        if (barId == null || !isManagerPlus) return@flow
        emitAll(
            firestore.document(Paths.barICalFeedConfig(barId))
                .snapshots
                .map { snapshot ->
                    if (snapshot.exists) snapshot.field<String>(Fields.TOKEN) else null
                },
        )
    }.catch { e ->
        logWarning("iCal feed listener failed for $barId", e)
        emit(null)
    }

    override suspend fun createEvent(barId: String, draft: CalendarEventDraft) {
        firestore.collection(Paths.barEvents(barId)).add(draft.toWrite()) {
            // `externalProvider` must be ABSENT, not null: the create rule
            // reads `get('externalProvider', null) == null`, and while a
            // written null would satisfy that, it would then make the
            // event look externally owned to the inbound sync function.
            encodeDefaults = false
        }
    }

    override suspend fun updateEvent(barId: String, eventId: String, draft: CalendarEventDraft) {
        firestore.collection(Paths.barEvents(barId)).document(eventId)
            .set(draft.toWrite(), merge = true) { encodeDefaults = false }
    }

    override suspend fun deleteEvent(barId: String, eventId: String) {
        firestore.collection(Paths.barEvents(barId)).document(eventId).delete()
    }

    override suspend fun googleAuthorizeUrl(barId: String): String =
        functions.httpsCallable("calendarGetAuthorizeUrl")
            .invoke(BarRequest(barId))
            .data<AuthorizeUrlResponse>()
            .authorizeUrl

    override suspend fun listGoogleCalendars(barId: String): List<GoogleCalendar> =
        functions.httpsCallable("calendarListCalendars")
            .invoke(BarRequest(barId))
            .data<CalendarListResponse>()
            .calendars

    override suspend fun selectGoogleCalendar(barId: String, calendarId: String) {
        functions.httpsCallable("calendarSelectCalendar")
            .invoke(SelectCalendarRequest(barId, calendarId))
    }

    override suspend fun disconnectGoogle(barId: String) {
        functions.httpsCallable("calendarDisconnect").invoke(BarRequest(barId))
    }

    override suspend fun addICalSubscription(barId: String, url: String, uid: String) {
        firestore.collection(Paths.barICalSubscriptions(barId)).add(
            SubscriptionWrite(
                url = url.trim(),
                createdBy = uid,
                createdAt = Timestamp.ServerTimestamp,
            ),
        )
    }

    override suspend fun removeICalSubscription(barId: String, subscriptionId: String) {
        firestore.collection(Paths.barICalSubscriptions(barId)).document(subscriptionId).delete()
    }

    override suspend fun rotateFeedToken(barId: String, revoke: Boolean) {
        functions.httpsCallable("rotateICalFeedToken")
            .invoke(RotateTokenRequest(barId, revoke))
    }

    private fun CalendarEventDraft.toWrite() = EventWrite(
        title = title.trim(),
        start = start,
        end = end,
        type = type,
        description = description?.trim()?.takeIf { it.isNotEmpty() },
    )

    private companion object {
        const val GOOGLE_PROVIDER = "google"
    }
}

/**
 * Builds the URL an external calendar app subscribes to.
 *
 * [baseUrl] is a separate setting rather than derived from anything the
 * app already knows, and returning null when it is absent is the point:
 * the feed is served by a Cloud Function, which is a different host from
 * wherever any client is running. Guessing would produce a URL that looks
 * right and 404s — worse than saying it is not configured.
 */
fun icalFeedUrl(baseUrl: String?, barId: String, token: String?): String? {
    if (baseUrl.isNullOrBlank() || token.isNullOrBlank()) return null
    return "${baseUrl.trimEnd('/')}/ical/$barId/$token.ics"
}
