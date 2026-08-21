package com.hereliesaz.barbacker.ui

import com.hereliesaz.barbacker.CUSTOM_REQUEST_BUTTON
import com.hereliesaz.barbacker.NOTIFICATION_DEFAULTS_BY_TITLE
import com.hereliesaz.barbacker.data.AuthState
import com.hereliesaz.barbacker.data.PlaceResult
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
import com.hereliesaz.barbacker.model.ChatMessage
import com.hereliesaz.barbacker.model.EightySixEntry
import com.hereliesaz.barbacker.model.MemberStatus
import com.hereliesaz.barbacker.model.OwnershipClaim
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

    // --- Feature surfaces layered over the dashboard. ---

    /**
     * Which overlay is open, if any.
     *
     * One value rather than a boolean per dialog. The web client carries
     * fourteen independent flags, which makes "two dialogs open at once"
     * representable and has produced exactly that bug; here it cannot
     * happen.
     */
    val activeDialog: ActiveDialog = ActiveDialog.None,

    /** Pinned messages driving the marquee. Live whenever a bar is selected. */
    val pinnedMessages: List<ChatMessage> = emptyList(),

    /** Scrollback, oldest first. Only populated while the chat panel is open. */
    val chatMessages: List<ChatMessage> = emptyList(),

    /** Pages loaded by "load earlier", oldest first, prepended to [chatMessages]. */
    val olderChatMessages: List<ChatMessage> = emptyList(),
    val chatHasMore: Boolean = true,
    val chatLoadingMore: Boolean = false,
    val latestMessageAt: Long = 0L,
    val chatLastReadAt: Long = 0L,

    val eightySixEntries: List<EightySixEntry> = emptyList(),
    val pendingOwnershipClaims: List<OwnershipClaim> = emptyList(),

    /** Place-search results, bars already in the system sorted first. */
    val searchResults: List<PlaceResult> = emptyList(),
    val isSearching: Boolean = false,

    /** True only when BOTH search sources failed; a partial result is still shown. */
    val searchFailed: Boolean = false,

    /** An open free-text prompt, if any. */
    val inputPrompt: InputPrompt? = null,

    /** An open quantity stepper, if any. */
    val quantityPrompt: QuantityPrompt? = null,
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

    /** Scrollback with earlier pages prepended, oldest first. */
    val fullChatHistory: List<ChatMessage> by lazy { olderChatMessages + chatMessages }

    /**
     * Whether to show the unread dot.
     *
     * Suppressed while the panel is open, since anything arriving then is
     * already on screen.
     */
    val chatHasUnread: Boolean
        get() = activeDialog != ActiveDialog.Chat && latestMessageAt > chatLastReadAt

    /**
     * Whether this member may see private 86'd entries.
     *
     * Drives the QUERY, not a display filter — a member without it never
     * requests private entries, so the reason text never reaches them.
     */
    val canSeePrivateEightySix: Boolean get() = isPremium && isManagerPlus

    val clockedInMembers: List<BarUser> by lazy {
        roster.filter { it.status == MemberStatus.Active }
    }

    val offClockMembers: List<BarUser> by lazy {
        roster.filter { it.status == MemberStatus.OffClock }
    }

    companion object {
        const val MAIN_CONTEXT_ID = "main"
    }
}

/**
 * What a free-text prompt is collecting.
 *
 * These back the synthesised "+ ADD …" tiles and the CUSTOM tile. Those
 * are grid buttons with no children, so without an explicit prompt they
 * fall through to the submit path and page the floor with their own label
 * — "ICE: + ADD WELL" — instead of asking for input.
 */
enum class InputKind {
    /** A new beer brand for the bar's inventory. */
    Brand,

    /** A new type (Bottle, Draft, …) under an existing brand. */
    Type,

    /** A new well/station name. */
    Well,

    /** Free text sent as a one-off request. */
    CustomRequest,
}

data class InputPrompt(
    val kind: InputKind,
    val initialValue: String = "",
    /** The brand a new type belongs to. Only set for [InputKind.Type]. */
    val parentBrand: String? = null,
    /** Offered as tap-to-fill; the field stays free-text either way. */
    val suggestions: List<String> = emptyList(),
) {
    val title: String
        get() = when (kind) {
            InputKind.Brand -> "Add Brand"
            InputKind.Type -> "Add Type"
            InputKind.Well -> "Add Well"
            InputKind.CustomRequest -> "Custom Request"
        }

    val label: String
        get() = when (kind) {
            InputKind.Brand -> "Brand name"
            InputKind.Type -> "Type (Bottle, Draft, …)"
            InputKind.Well -> "Well name"
            InputKind.CustomRequest -> "What do you need?"
        }
}

/** The numeric stepper behind a beer type's "Other" quantity option. */
data class QuantityPrompt(
    /** The breadcrumb the chosen number is appended to. */
    val contextLabel: String,
)

/** The overlays reachable from the dashboard. */
enum class ActiveDialog {
    None,
    Chat,
    EightySix,
    Roster,
    NotificationSettings,
}
