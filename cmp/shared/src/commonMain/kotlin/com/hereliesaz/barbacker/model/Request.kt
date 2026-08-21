package com.hereliesaz.barbacker.model

/**
 * A page sent to the floor. Lives in the ROOT `/requests` collection, not
 * under the bar — the 24-hour dashboard query filters by `barId`.
 *
 * [label] is a breadcrumb string joined by `": "` (`"GARNISH: LIMES"`,
 * `"BEER: Corona: Bottle: 12"`). The grid's pending highlight is a prefix
 * match against it, so the separator and the ordering are both load-bearing.
 */
data class Request(
    val id: String,
    val label: String,
    val requesterId: String,
    /** Display name snapshotted at creation time. */
    val requesterName: String? = null,
    /** Privilege tier snapshotted at creation time. */
    val requesterRole: String? = null,
    val status: RequestStatus = RequestStatus.Pending,
    val timestamp: Long? = null,
    val claimedAt: Long? = null,
    val barId: String,
    /**
     * The top-level button this request resolved to when it was created.
     * Persisted rather than re-derived so the nag bot can filter by
     * notification preference without reloading the bar's button config.
     * Absent for free-text custom requests that matched nothing.
     */
    val buttonId: String? = null,
    val claimerName: String? = null,
    /** Only the claimer may release a claim back to pending. */
    val claimedBy: String? = null,
    val lastNotification: Long? = null,
    /** Storage download URL for a photo attached by the bottle scanner. */
    val photoUrl: String? = null,
)

enum class RequestStatus(val wire: String) {
    Pending("pending"),
    Claimed("claimed");

    companion object {
        fun fromWire(value: String?): RequestStatus =
            entries.firstOrNull { it.wire == value } ?: Pending
    }
}
