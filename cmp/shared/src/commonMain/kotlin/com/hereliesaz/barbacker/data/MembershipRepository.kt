package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.BarRole
import com.hereliesaz.barbacker.model.BarUser
import com.hereliesaz.barbacker.model.MemberStatus
import dev.gitlive.firebase.firestore.FieldValue
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.firestore.Timestamp
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

/**
 * The roles an invite is allowed to grant.
 *
 * A separate type from [BarRole] rather than a runtime check, because the
 * omission here is the point: an invite that named `Owner` would have
 * `onInviteConsumed` hand ownership to whoever opened the bar next, with
 * no review step and no way back short of a database edit.
 */
enum class InvitableRole(val role: BarRole) {
    Staff(BarRole.Staff),
    Manager(BarRole.Manager),
    ;

    val wire: String get() = role.wire
}

/** The account-level document: which bars you belong to, and your ntfy topic. */
data class AccountProfile(
    val joinedBarIds: List<String> = emptyList(),
    val ntfyTopic: String? = null,
)

interface MembershipRepository {
    /** Your own membership of one bar. Null means you are not a member. */
    fun membershipFlow(barId: String?, uid: String?): Flow<BarUser?>

    /** Everyone active or awaiting approval. Off-clock members are excluded. */
    fun rosterFlow(barId: String?): Flow<List<BarUser>>

    fun accountFlow(uid: String?): Flow<AccountProfile>

    /**
     * Writes the membership document that admits [uid] to the bar.
     *
     * [role] must be derived from the bar's actual `ownerId`, never from
     * anything the joining user chose — `firestore.rules` re-checks it
     * server-side and rejects a mismatch outright.
     */
    suspend fun join(
        barId: String,
        uid: String,
        role: BarRole,
        jobTitle: String,
        displayName: String,
        email: String?,
        status: MemberStatus,
        notificationPreferences: List<String>,
    )

    suspend fun setStatus(barId: String, uid: String, status: MemberStatus)
    suspend fun setDisplayName(barId: String, uid: String, name: String)
    suspend fun saveNotificationPreferences(barId: String, uid: String, preferences: List<String>)

    suspend fun approve(barId: String, uid: String)

    /**
     * Rejects a pending member by DELETING their membership document
     * rather than marking it rejected, which returns them to the join
     * screen instead of stranding them on a dead-end status.
     */
    suspend fun reject(barId: String, uid: String)

    suspend fun leave(barId: String, uid: String)

    suspend fun registerPushToken(barId: String, uid: String, token: String)
    suspend fun clearPushToken(barId: String, uid: String)

    /**
     * Creates an invite so [email] is admitted at [role] the next time they
     * open this bar.
     *
     * [role] is deliberately not a [BarRole]: an invite can grant Staff or
     * Manager, never Owner. Ownership moves through the claim workflow,
     * which needs a human review step — an invite is a one-line write any
     * Manager can make, and `onInviteConsumed` grants whatever role the
     * document names.
     */
    suspend fun sendInvite(
        barId: String,
        email: String,
        role: InvitableRole,
        createdBy: String,
        createdByName: String,
    )

    /**
     * Consumes an unconsumed invite for [email], if one exists.
     *
     * Only flips the invite; the membership document is written by the
     * `onInviteConsumed` Cloud Function, because an invite can grant
     * Manager and the client is not trusted to grant itself that.
     *
     * @return true if an invite was found and consumed.
     */
    suspend fun consumePendingInvite(barId: String, email: String, uid: String): Boolean
}

class FirebaseMembershipRepository(
    private val firestore: FirebaseFirestore,
) : MembershipRepository {

    @Serializable
    private data class MembershipWrite(
        val role: String,
        val jobTitle: String,
        val displayName: String,
        val status: String,
        val notificationPreferences: List<String>,
        val joinedAt: Timestamp.ServerTimestamp,
        val lastSeen: Timestamp.ServerTimestamp,
        val email: String? = null,
    )

    @Serializable
    private data class PushTokenWrite(
        val token: String,
        val updated: Timestamp.ServerTimestamp,
    )

    @Serializable
    private data class InviteCreate(
        val email: String,
        val role: String,
        val createdBy: String,
        val createdByName: String,
        val createdAt: Timestamp.ServerTimestamp,
        val consumed: Boolean,
    )

    @Serializable
    private data class InviteConsumeWrite(
        val consumed: Boolean,
        val consumedBy: String,
        val consumedAt: Timestamp.ServerTimestamp,
    )

    override fun membershipFlow(barId: String?, uid: String?): Flow<BarUser?> = flow {
        emit(null)
        if (barId == null || uid == null) return@flow
        emitAll(
            firestore.document(Paths.barMember(barId, uid))
                .snapshots
                .map { it.toBarUser() },
        )
    }.catch { e ->
        logWarning("Membership listener failed for $barId", e)
        emit(null)
    }

    override fun rosterFlow(barId: String?): Flow<List<BarUser>> = flow {
        emit(emptyList())
        if (barId == null) return@flow
        emitAll(
            firestore.collection(Paths.barMembers(barId))
                // Off-clock and rejected members are excluded by the query
                // rather than filtered client-side, so their details never
                // reach a device that should not display them.
                .where { Fields.STATUS inArray listOf(MemberStatus.Active.wire, MemberStatus.Pending.wire) }
                .snapshots
                .map { snapshot -> snapshot.documents.mapNotNull { it.toBarUser() } },
        )
    }.catch { e ->
        logWarning("Roster listener failed for $barId", e)
        emit(emptyList())
    }

    override fun accountFlow(uid: String?): Flow<AccountProfile> = flow {
        emit(AccountProfile())
        if (uid == null) return@flow
        emitAll(
            firestore.document(Paths.user(uid)).snapshots.map { snapshot ->
                AccountProfile(
                    joinedBarIds = snapshot.field<List<String>>(Fields.JOINED_BARS).orEmpty(),
                    ntfyTopic = snapshot.field<String>(Fields.NTFY_TOPIC),
                )
            },
        )
    }.catch { e ->
        logWarning("Account listener failed", e)
        emit(AccountProfile())
    }

    override suspend fun join(
        barId: String,
        uid: String,
        role: BarRole,
        jobTitle: String,
        displayName: String,
        email: String?,
        status: MemberStatus,
        notificationPreferences: List<String>,
    ) {
        // Order matters. The account-level joinedBars entry goes first so
        // that if the membership write is rejected, the user still has a
        // breadcrumb back to the bar rather than a silently orphaned state.
        firestore.document(Paths.user(uid))
            .set(mapOf(Fields.JOINED_BARS to FieldValue.arrayUnion(barId)), merge = true)

        firestore.document(Paths.barMember(barId, uid)).set(
            MembershipWrite(
                role = role.wire,
                jobTitle = jobTitle,
                displayName = displayName,
                status = status.wire,
                notificationPreferences = notificationPreferences,
                joinedAt = Timestamp.ServerTimestamp,
                lastSeen = Timestamp.ServerTimestamp,
                email = email,
            ),
            merge = true,
        ) {
            encodeDefaults = false
        }
    }

    override suspend fun setStatus(barId: String, uid: String, status: MemberStatus) {
        firestore.document(Paths.barMember(barId, uid)).updateFields {
            Fields.STATUS to status.wire
        }
    }

    override suspend fun setDisplayName(barId: String, uid: String, name: String) {
        firestore.document(Paths.barMember(barId, uid)).updateFields {
            Fields.DISPLAY_NAME to name
        }
    }

    override suspend fun saveNotificationPreferences(
        barId: String,
        uid: String,
        preferences: List<String>,
    ) {
        firestore.document(Paths.barMember(barId, uid))
            .set(mapOf(Fields.NOTIFICATION_PREFERENCES to preferences), merge = true)
    }

    override suspend fun approve(barId: String, uid: String) {
        setStatus(barId, uid, MemberStatus.Active)
    }

    override suspend fun reject(barId: String, uid: String) {
        firestore.document(Paths.barMember(barId, uid)).delete()
    }

    override suspend fun leave(barId: String, uid: String) {
        firestore.document(Paths.barMember(barId, uid)).delete()

        // The token must go too. Leaving it behind means the nag bot keeps
        // paging a device that is no longer staff at this bar, forever,
        // with no in-app way for the ex-member to stop it.
        runCatching { clearPushToken(barId, uid) }
            .onFailure { logWarning("Could not clear push token on leaving $barId", it) }

        runCatching {
            firestore.document(Paths.user(uid))
                .updateFields { Fields.JOINED_BARS to FieldValue.arrayRemove(barId) }
        }.onFailure { logWarning("Could not drop $barId from joinedBars", it) }
    }

    override suspend fun registerPushToken(barId: String, uid: String, token: String) {
        firestore.document(Paths.barToken(barId, uid))
            .set(PushTokenWrite(token, Timestamp.ServerTimestamp))
    }

    override suspend fun clearPushToken(barId: String, uid: String) {
        firestore.document(Paths.barToken(barId, uid)).delete()
    }

    override suspend fun sendInvite(
        barId: String,
        email: String,
        role: InvitableRole,
        createdBy: String,
        createdByName: String,
    ) {
        firestore.collection(Paths.barInvites(barId)).add(
            InviteCreate(
                // Stored lowercase, because the lookup in
                // consumePendingInvite is an exact equality match — an
                // invite typed as "Sam@Example.com" would otherwise sit
                // there unconsumable forever, looking sent.
                email = email.trim().lowercase(),
                role = role.wire,
                createdBy = createdBy,
                createdByName = createdByName,
                createdAt = Timestamp.ServerTimestamp,
                consumed = false,
            ),
        )
    }

    override suspend fun consumePendingInvite(barId: String, email: String, uid: String): Boolean {
        // A one-shot read, not a subscription: consuming an invite happens
        // once at join time, and an open listener would re-fire the moment
        // we flipped the flag below.
        val snapshot = firestore.collection(Paths.barInvites(barId))
            .where {
                all(
                    // The stored address is normalised lowercase, so the
                    // lookup has to lowercase too or invites silently miss.
                    Fields.EMAIL equalTo email.lowercase(),
                    Fields.CONSUMED equalTo false,
                )
            }
            .limit(1)
            .get()
        val invite = snapshot.documents.firstOrNull() ?: return false
        invite.reference.set(
            InviteConsumeWrite(
                consumed = true,
                consumedBy = uid,
                consumedAt = Timestamp.ServerTimestamp,
            ),
            merge = true,
        )
        return true
    }
}
