package com.hereliesaz.barbacker.model

/**
 * A member's privilege tier inside one bar — the thing `firestore.rules`
 * and the `bars` custom claim key off of.
 *
 * This is deliberately NOT the same axis as [JobTitle]. Conflating the two
 * is the single most repeated bug in this codebase's history, so they are
 * separate types here rather than two `String` fields that can be assigned
 * to each other by accident.
 *
 * Never set from user input: [BarRole.Owner] is computed by comparing the
 * bar's `ownerId` against the signed-in uid, and [BarRole.Manager] can only
 * be granted server-side (an invite carrying `role: 'Manager'`, or a
 * promotion). The join screen picks a [JobTitle] and nothing more.
 */
enum class BarRole(val wire: String) {
    Staff("Staff"),
    Manager("Manager"),
    Owner("Owner");

    /** Owner and Manager share every management affordance in the UI. */
    val isManagerPlus: Boolean get() = this == Owner || this == Manager

    companion object {
        /**
         * Returns null for absent or unrecognised values. A null role means
         * "not a member of this bar", which routes to the join screen — so
         * silently coercing an unknown string to [Staff] would hand a
         * stranger a dashboard.
         */
        fun fromWire(value: String?): BarRole? =
            entries.firstOrNull { it.wire == value }
    }
}

/**
 * A member's job function: display text, and the key into
 * [com.hereliesaz.barbacker.NOTIFICATION_DEFAULTS_BY_TITLE].
 *
 * Held as a raw string rather than an enum because the wire format carries
 * values outside the self-selectable set: `'Owner'` (written by the
 * new-bar path) and `'Staff'` (written by the onInviteConsumed Cloud
 * Function for an invited member who has not picked a title yet).
 */
@JvmInline
value class JobTitle(val wire: String) {
    val isBlank: Boolean get() = wire.isBlank()
}

/** Lifecycle of a `bars/{barId}/users/{uid}` document. */
enum class MemberStatus(val wire: String) {
    Active("active"),
    OffClock("off_clock"),
    Pending("pending"),
    Rejected("rejected");

    companion object {
        /**
         * Unknown and absent values both fall back to [Active], matching the
         * PWA's `data.status || 'active'`.
         */
        fun fromWire(value: String?): MemberStatus =
            entries.firstOrNull { it.wire == value } ?: Active
    }
}

/** Billing tier on the bar document; gates every premium feature. */
enum class SubscriptionTier(val wire: String) {
    Free("free"),
    Premium("premium");

    companion object {
        fun fromWire(value: String?): SubscriptionTier =
            entries.firstOrNull { it.wire == value } ?: Free
    }
}

/**
 * How a bar admits new members.
 *
 * [Approval] makes a self-created membership land as
 * [MemberStatus.Pending]. The client's copy of this can be stale — the
 * join screen is tappable before the bar-config listener's first snapshot
 * arrives — so the join path re-reads it fresh rather than trusting
 * whatever the listener last delivered.
 */
enum class JoinPolicy(val wire: String) {
    Open("open"),
    Approval("approval");

    companion object {
        fun fromWire(value: String?): JoinPolicy =
            entries.firstOrNull { it.wire == value } ?: Open
    }
}
