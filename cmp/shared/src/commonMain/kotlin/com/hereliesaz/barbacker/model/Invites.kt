package com.hereliesaz.barbacker.model

/**
 * An invitation for one email address to join a bar at a given role.
 *
 * Consuming an invite is what lets someone become a [BarRole.Manager]
 * without an existing Manager promoting them, so the actual membership
 * write happens in the `onInviteConsumed` Cloud Function — the client only
 * flips [consumed].
 */
data class BarInvite(
    val id: String,
    /** Normalised lowercase; the lookup compares against a lowercased email. */
    val email: String,
    val role: BarRole,
    val createdBy: String,
    val createdByName: String,
    val createdAt: Long? = null,
    val consumed: Boolean = false,
    val consumedBy: String? = null,
    val consumedAt: Long? = null,
)

/**
 * A request to take over ownership of a bar — typically a real-world owner
 * reclaiming an entry someone created ad hoc for a shift.
 *
 * Every write goes through Cloud Functions; `firestore.rules` denies
 * client writes to this collection outright.
 */
data class OwnershipClaim(
    val id: String,
    val barId: String,
    val claimantId: String,
    val claimantName: String,
    val justification: String? = null,
    val status: ClaimStatus = ClaimStatus.Pending,
    val createdAt: Long? = null,
)

enum class ClaimStatus(val wire: String) {
    Pending("pending"),
    Approved("approved"),
    Rejected("rejected");

    companion object {
        fun fromWire(value: String?): ClaimStatus =
            entries.firstOrNull { it.wire == value } ?: Pending
    }
}
