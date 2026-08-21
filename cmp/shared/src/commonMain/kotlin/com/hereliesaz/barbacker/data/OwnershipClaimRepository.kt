package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.ClaimStatus
import com.hereliesaz.barbacker.model.OwnershipClaim
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.functions.FirebaseFunctions
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

/**
 * Ownership claims — someone asking to take over a bar, typically the real
 * owner reclaiming an entry a bartender created ad hoc for one shift.
 *
 * Reads come from Firestore; every WRITE goes through a Cloud Function.
 * `firestore.rules` denies client writes to this collection outright,
 * because approving a claim reassigns `ownerId` and no client can be
 * trusted with that.
 */
interface OwnershipClaimRepository {
    /**
     * Claims awaiting review. Empty unless [isManagerPlus] — Staff cannot
     * read the collection, so subscribing would only produce a denial.
     */
    fun pendingClaimsFlow(barId: String?, isManagerPlus: Boolean): Flow<List<OwnershipClaim>>

    /** Files a claim on behalf of the signed-in user. */
    suspend fun file(barId: String)

    /** Approves or rejects a claim. Manager+ or the current owner only. */
    suspend fun review(barId: String, claimId: String, approve: Boolean)
}

class FirebaseOwnershipClaimRepository(
    private val firestore: FirebaseFirestore,
    private val functions: FirebaseFunctions,
) : OwnershipClaimRepository {

    @Serializable
    private data class FileRequest(val barId: String)

    @Serializable
    private data class ReviewRequest(
        val barId: String,
        val claimId: String,
        val approve: Boolean,
    )

    override fun pendingClaimsFlow(
        barId: String?,
        isManagerPlus: Boolean,
    ): Flow<List<OwnershipClaim>> = flow {
        emit(emptyList())
        if (barId == null || !isManagerPlus) return@flow
        emitAll(
            firestore.collection(Paths.barOwnershipClaims(barId))
                .where { Fields.STATUS equalTo ClaimStatus.Pending.wire }
                .snapshots
                .map { snapshot -> snapshot.documents.mapNotNull { it.toOwnershipClaim(barId) } },
        )
    }.catch { e ->
        logWarning("Ownership-claim listener failed for $barId", e)
        emit(emptyList())
    }

    override suspend fun file(barId: String) {
        functions.httpsCallable("fileOwnershipClaim").invoke(FileRequest(barId))
    }

    override suspend fun review(barId: String, claimId: String, approve: Boolean) {
        functions.httpsCallable("reviewOwnershipClaim")
            .invoke(ReviewRequest(barId, claimId, approve))
    }
}
