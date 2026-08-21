package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.EIGHTY_SIX_QUERY_LIMIT
import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.EightySixEntry
import com.hereliesaz.barbacker.model.EightySixVisibility
import dev.gitlive.firebase.firestore.Direction
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.firestore.Timestamp
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

interface EightySixRepository {
    /**
     * The bar's barred-patron list, newest first.
     *
     * [canSeePrivate] changes the QUERY, not a client-side filter. A reader
     * without the privilege never requests private entries at all, so the
     * reason text never reaches their device — and the query does not fail
     * against a rule it could not satisfy.
     */
    fun entriesFlow(barId: String?, canSeePrivate: Boolean): Flow<List<EightySixEntry>>

    /**
     * @param submitterName must be the caller's own per-bar display name;
     *   `firestore.rules` compares it against their membership document.
     * @param reason only meaningful on a private entry. A reason typed
     *   against a public entry is discarded rather than stored, since a
     *   public entry's reason would be readable by every member.
     */
    suspend fun add(
        barId: String,
        patronName: String,
        submittedBy: String,
        submitterName: String,
        reason: String?,
        visibility: EightySixVisibility,
    )

    suspend fun delete(barId: String, entryId: String)
}

class FirebaseEightySixRepository(
    private val firestore: FirebaseFirestore,
) : EightySixRepository {

    @Serializable
    private data class EntryWrite(
        val patronName: String,
        val submittedBy: String,
        val submitterName: String,
        val visibility: String,
        val timestamp: Timestamp.ServerTimestamp,
        val reason: String? = null,
    )

    override fun entriesFlow(
        barId: String?,
        canSeePrivate: Boolean,
    ): Flow<List<EightySixEntry>> = flow {
        emit(emptyList())
        if (barId == null) return@flow

        val collection = firestore.collection(Paths.barEightySixed(barId))
        val query = if (canSeePrivate) {
            collection
        } else {
            collection.where { Fields.VISIBILITY equalTo EightySixVisibility.Public.wire }
        }

        emitAll(
            query
                .orderBy(Fields.TIMESTAMP, Direction.DESCENDING)
                .limit(EIGHTY_SIX_QUERY_LIMIT)
                .snapshots
                .map { snapshot -> snapshot.documents.mapNotNull { it.toEightySixEntry() } },
        )
    }.catch { e ->
        logWarning("86'd list listener failed for $barId", e)
        emit(emptyList())
    }

    override suspend fun add(
        barId: String,
        patronName: String,
        submittedBy: String,
        submitterName: String,
        reason: String?,
        visibility: EightySixVisibility,
    ) {
        val trimmed = patronName.trim()
        if (trimmed.isEmpty()) return
        firestore.collection(Paths.barEightySixed(barId)).add(
            EntryWrite(
                patronName = trimmed,
                submittedBy = submittedBy,
                submitterName = submitterName,
                visibility = visibility.wire,
                timestamp = Timestamp.ServerTimestamp,
                reason = reason?.trim()?.takeIf {
                    it.isNotEmpty() && visibility == EightySixVisibility.Private
                },
            ),
        ) {
            encodeDefaults = false
        }
    }

    override suspend fun delete(barId: String, entryId: String) {
        firestore.document("${Paths.barEightySixed(barId)}/$entryId").delete()
    }
}
