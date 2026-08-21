package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.REQUEST_QUERY_LIMIT
import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.Request
import com.hereliesaz.barbacker.model.RequestStatus
import dev.gitlive.firebase.firestore.Direction
import dev.gitlive.firebase.firestore.FieldValue
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.firestore.Timestamp
// An extension on Timestamp.Companion, not a member.
import dev.gitlive.firebase.firestore.fromMilliseconds
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

/** Raised when a claim loses the race to another member. */
class RequestAlreadyClaimedException(cause: Throwable?) :
    Exception("Someone else already claimed this request.", cause)

interface RequestRepository {
    /**
     * Pages for one bar, newest first, bounded by [windowStartMillis].
     *
     * Re-subscribe periodically with a fresh window: the lower bound is
     * baked into the query, so a long-lived session would otherwise keep
     * widening its view of "the last 24 hours" from whenever it started.
     */
    fun requestsFlow(barId: String?, windowStartMillis: Long): Flow<List<Request>>

    suspend fun submit(
        barId: String,
        label: String,
        requesterId: String,
        requesterName: String,
        requesterRole: String?,
        buttonId: String?,
        photoUrl: String? = null,
    )

    /** @throws RequestAlreadyClaimedException if another member won the race. */
    suspend fun claim(requestId: String, uid: String, claimerName: String)

    suspend fun unclaim(requestId: String)
    suspend fun cancel(requestId: String)
}

class FirebaseRequestRepository(private val firestore: FirebaseFirestore) : RequestRepository {

    @Serializable
    private data class RequestWrite(
        val barId: String,
        val label: String,
        val requesterId: String,
        val requesterName: String,
        val status: String,
        val timestamp: Timestamp.ServerTimestamp,
        // Stamped at creation so the nag bot has a throttle baseline
        // without needing a second write.
        val lastNotification: Timestamp.ServerTimestamp,
        val requesterRole: String? = null,
        val buttonId: String? = null,
        val photoUrl: String? = null,
    )

    @Serializable
    private data class ClaimWrite(
        val status: String,
        val claimedBy: String,
        val claimerName: String,
        val claimedAt: Timestamp.ServerTimestamp,
    )

    override fun requestsFlow(barId: String?, windowStartMillis: Long): Flow<List<Request>> = flow {
        emit(emptyList())
        if (barId == null) return@flow
        emitAll(
            firestore.collection(Paths.REQUESTS)
                .where {
                    all(
                        Fields.BAR_ID equalTo barId,
                        Fields.TIMESTAMP greaterThanOrEqualTo
                            Timestamp.fromMilliseconds(windowStartMillis.toDouble()),
                    )
                }
                .orderBy(Fields.TIMESTAMP, Direction.DESCENDING)
                .limit(REQUEST_QUERY_LIMIT)
                .snapshots
                .map { snapshot -> snapshot.documents.mapNotNull { it.toRequest() } },
        )
    }.catch { e ->
        logWarning("Requests listener failed for $barId", e)
        emit(emptyList())
    }

    override suspend fun submit(
        barId: String,
        label: String,
        requesterId: String,
        requesterName: String,
        requesterRole: String?,
        buttonId: String?,
        photoUrl: String?,
    ) {
        firestore.collection(Paths.REQUESTS).add(
            RequestWrite(
                barId = barId,
                label = label,
                requesterId = requesterId,
                requesterName = requesterName,
                status = RequestStatus.Pending.wire,
                timestamp = Timestamp.ServerTimestamp,
                lastNotification = Timestamp.ServerTimestamp,
                requesterRole = requesterRole,
                buttonId = buttonId,
                photoUrl = photoUrl,
            ),
        ) {
            // Omits buttonId/photoUrl when absent rather than writing
            // nulls. Push fanout is server-side and keys off buttonId's
            // presence to decide whether to respect notification
            // preferences; a null would not be the same as missing.
            encodeDefaults = false
        }
    }

    override suspend fun claim(requestId: String, uid: String, claimerName: String) {
        try {
            firestore.document("${Paths.REQUESTS}/$requestId").set(
                ClaimWrite(
                    status = RequestStatus.Claimed.wire,
                    claimedBy = uid,
                    claimerName = claimerName,
                    claimedAt = Timestamp.ServerTimestamp,
                ),
                merge = true,
            )
        } catch (e: Exception) {
            // The rule requires the document still be pending, so the loser
            // of a two-bartender race is rejected here. Surfacing it as a
            // typed failure is the point: swallowing it would leave both
            // people believing they own the request.
            throw RequestAlreadyClaimedException(e)
        }
    }

    override suspend fun unclaim(requestId: String) {
        firestore.document("${Paths.REQUESTS}/$requestId").updateFields {
            Fields.STATUS to RequestStatus.Pending.wire
            // Cleared rather than blanked, so the shift log cannot show a
            // resolved-looking entry with an empty claimer.
            Fields.CLAIMED_BY to FieldValue.delete
            Fields.CLAIMER_NAME to FieldValue.delete
            Fields.CLAIMED_AT to FieldValue.delete
        }
    }

    override suspend fun cancel(requestId: String) {
        firestore.document("${Paths.REQUESTS}/$requestId").delete()
    }
}
