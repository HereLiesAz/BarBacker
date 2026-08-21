package com.hereliesaz.barbacker.model

/**
 * A `bars/{barId}/users/{uid}` document — one person's membership of one
 * bar. The same Firebase account has an independent one of these per bar.
 */
data class BarUser(
    /** Matches the Firebase Auth uid. */
    val id: String,
    val displayName: String? = null,
    /** Privilege tier. Null means the document carries no recognised role. */
    val role: BarRole? = null,
    /** Job function — display, and the notification-defaults key. */
    val jobTitle: JobTitle? = null,
    val status: MemberStatus = MemberStatus.Active,
    val lastSeen: Long? = null,
    val email: String? = null,
    /**
     * Top-level button ids this member wants paged for. Null means the
     * member has never chosen, and the defaults for their job title apply;
     * an empty list means they deliberately chose none.
     */
    val notificationPreferences: List<String>? = null,
)
