package com.hereliesaz.barbacker.ui

import com.hereliesaz.barbacker.CUSTOM_REQUEST_BUTTON
import com.hereliesaz.barbacker.NOTIFICATION_DEFAULTS_BY_TITLE
import com.hereliesaz.barbacker.data.AuthState
import com.hereliesaz.barbacker.logic.ButtonLabelResolver
import com.hereliesaz.barbacker.logic.dynamicChildrenOf
import com.hereliesaz.barbacker.logic.effectiveNotificationPreferences
import com.hereliesaz.barbacker.logic.mergeButtons
import com.hereliesaz.barbacker.logic.shiftLogEntries
import com.hereliesaz.barbacker.logic.sortButtons
import com.hereliesaz.barbacker.logic.visibleRequests
import com.hereliesaz.barbacker.model.Bar
import com.hereliesaz.barbacker.model.BarUser
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.model.MemberStatus
import com.hereliesaz.barbacker.model.Request
import com.hereliesaz.barbacker.model.SubscriptionTier

/** The full-screen views, exactly one of which is showing at any time. */
sealed interface Screen {
    /** Recovering a persisted session; shown so the sign-in form does not flash. */
    data object Restoring : Screen
    data object SignIn : Screen
    data object BarSelection : Screen

    /** Looking for an invite before offering the join form. */
    data object CheckingInvite : Screen
    data object RoleSelection : Screen
    data object ApprovalPending : Screen
    data object Dashboard : Screen
}

/**
 * Everything the UI renders from.
 *
 * Derived values are `by lazy` rather than stored: they are pure functions
 * of the fields above them, and computing them once per state rather than
 * once per recomposition keeps the button-label resolver from being
 * rebuilt on every frame. Lazy delegates sit outside the primary
 * constructor, so they stay out of equals/hashCode — which is what makes
 * recomposition skipping still work.
 */
data class AppUiState(
    val auth: AuthState = AuthState.Restoring,
    val barId: String? = null,
    val bar: Bar? = null,
    val membership: BarUser? = null,
    val roster: List<BarUser> = emptyList(),
    val allRequests: List<Request> = emptyList(),
    val joinedBarIds: List<String> = emptyList(),
    val barNames: Map<String, String> = emptyMap(),
    val isAdmin: Boolean = false,

    /**
     * True only between creating a bar and confirming the join form, so
     * the form can say "You Own This Bar". Never the sole basis for
     * granting Owner — the join path re-reads `ownerId` from the server.
     */
    val justCreatedBar: Boolean = false,
    val checkingInvite: Boolean = false,

    /** Breadcrumb of opened sub-menus. Empty means the main grid. */
    val navStack: List<ButtonConfig> = emptyList(),

    /** Locally muted request ids. Per-device, never synced. */
    val ignoredIds: Set<String> = emptySet(),

    /** Guards against a double tap sending two identical pages. */
    val isSubmitting: Boolean = false,

    val authError: String? = null,
    val isRegistering: Boolean = false,

    /** A transient message for the user; cleared once shown. */
    val message: String? = null,
) {
    val currentUser get() = (auth as? AuthState.SignedIn)?.user

    val screen: Screen
        get() = when {
            auth is AuthState.Restoring -> Screen.Restoring
            auth is AuthState.SignedOut -> Screen.SignIn
            barId == null -> Screen.BarSelection
            membership?.role == null ->
                if (checkingInvite) Screen.CheckingInvite else Screen.RoleSelection
            // Only 'pending' is intercepted. 'off_clock' and 'rejected'
            // both fall through to the dashboard, matching the web client
            // — off-clock members are flipped back to active by the
            // auto-clock-in effect rather than being shown a wall.
            membership.status == MemberStatus.Pending -> Screen.ApprovalPending
            else -> Screen.Dashboard
        }

    val barName: String get() = bar?.name.orEmpty()

    /** God mode unlocks premium features for support work. */
    val isPremium: Boolean
        get() = isAdmin || bar?.subscription == SubscriptionTier.Premium

    /** UI gating only. `firestore.rules` is the real authority. */
    val isManagerPlus: Boolean get() = membership?.role?.isManagerPlus == true

    val buttons: List<ButtonConfig> by lazy { mergeButtons(bar?.buttons) }

    val resolver: ButtonLabelResolver by lazy { ButtonLabelResolver(buttons) }

    val notificationPreferences: List<String> by lazy {
        effectiveNotificationPreferences(
            stored = membership?.notificationPreferences,
            jobTitle = membership?.jobTitle?.wire,
            role = membership?.role?.wire,
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
    }

    val visibleRequests: List<Request> by lazy {
        visibleRequests(
            requests = allRequests,
            currentUserId = currentUser?.uid,
            notificationPreferences = notificationPreferences,
            ignoredIds = ignoredIds,
            resolver = resolver,
        )
    }

    val shiftLog: List<Request> by lazy { shiftLogEntries(allRequests) }

    val pendingMembers: List<BarUser> by lazy {
        roster.filter { it.status == MemberStatus.Pending }
    }

    /** The approvals badge is hidden from Staff, for whom it opens nothing actionable. */
    val showApprovalsBadge: Boolean get() = isManagerPlus && pendingMembers.isNotEmpty()

    private val hiddenButtonIds: Set<String>
        get() = bar?.hiddenButtonIds?.toSet().orEmpty()

    /** The grid context currently on screen: a parent button id, or "main". */
    val currentContextId: String get() = navStack.lastOrNull()?.id ?: MAIN_CONTEXT_ID

    /**
     * The tiles to render, hidden ones removed and the rest ordered.
     *
     * On the main grid the synthesised CUSTOM tile is appended after
     * sorting, so it stays pinned to the end rather than being reordered
     * by usage counts.
     */
    val currentButtons: List<ButtonConfig> by lazy {
        val parent = navStack.lastOrNull()
        val source = if (parent == null) {
            buttons
        } else {
            dynamicChildrenOf(
                button = parent,
                wells = bar?.wells.orEmpty(),
                beerInventory = bar?.beerInventory.orEmpty(),
            )
        }
        val sorted = sortButtons(
            buttons = source.filterNot { it.id in hiddenButtonIds },
            contextId = currentContextId,
            customOrders = bar?.customOrders.orEmpty(),
            buttonUsage = bar?.buttonUsage.orEmpty(),
        )
        if (parent == null) sorted + CUSTOM_REQUEST_BUTTON else sorted
    }

    companion object {
        const val MAIN_CONTEXT_ID = "main"
    }
}
