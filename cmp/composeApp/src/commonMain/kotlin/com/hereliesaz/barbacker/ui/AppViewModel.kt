package com.hereliesaz.barbacker.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.hereliesaz.barbacker.ASK_ME_SUFFIX
import com.hereliesaz.barbacker.INVITE_CHECK_TIMEOUT_MILLIS
import com.hereliesaz.barbacker.MAX_IGNORED_IDS
import com.hereliesaz.barbacker.NOTIFICATION_DEFAULTS_BY_TITLE
import com.hereliesaz.barbacker.REQUEST_WINDOW_MILLIS
import com.hereliesaz.barbacker.REQUEST_WINDOW_REFRESH_MILLIS
import com.hereliesaz.barbacker.currentTimeMillis
import com.hereliesaz.barbacker.data.AuthRepository
import com.hereliesaz.barbacker.data.AuthState
import com.hereliesaz.barbacker.data.BarRepository
import com.hereliesaz.barbacker.data.KeyValueStore
import com.hereliesaz.barbacker.data.MembershipRepository
import com.hereliesaz.barbacker.data.NewBar
import com.hereliesaz.barbacker.data.RequestAlreadyClaimedException
import com.hereliesaz.barbacker.data.RequestRepository
import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.logic.dynamicChildrenOf
import com.hereliesaz.barbacker.logic.requestLabelFor
import com.hereliesaz.barbacker.model.Bar
import com.hereliesaz.barbacker.model.BarRole
import com.hereliesaz.barbacker.model.BarUser
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.model.JoinPolicy
import com.hereliesaz.barbacker.model.MemberStatus
import com.hereliesaz.barbacker.model.Request
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.flow.flatMapLatest
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

/**
 * Owns the whole client state machine.
 *
 * Mirrors the single large `App.tsx` component rather than splitting per
 * screen, because the screens are not independent: which one shows is a
 * pure function of auth, the selected bar, and the membership document,
 * and every screen shares the same live Firestore subscriptions.
 */
class AppViewModel(
    private val auth: AuthRepository,
    private val bars: BarRepository,
    private val memberships: MembershipRepository,
    private val requests: RequestRepository,
    private val store: KeyValueStore,
) : ViewModel() {

    /** State the client owns outright, with no Firestore counterpart. */
    private data class LocalState(
        val justCreatedBar: Boolean = false,
        val checkingInvite: Boolean = false,
        val navStack: List<ButtonConfig> = emptyList(),
        val ignoredIds: Set<String> = emptySet(),
        val isSubmitting: Boolean = false,
        val isAdmin: Boolean = false,
        val authError: String? = null,
        val isRegistering: Boolean = false,
        val message: String? = null,
    )

    /** The four bar-scoped subscriptions, resolved together. */
    private data class BarScope(
        val bar: Bar? = null,
        val membership: BarUser? = null,
        val roster: List<BarUser> = emptyList(),
        val requests: List<Request> = emptyList(),
    )

    private val barIdFlow = MutableStateFlow(store.getString(KeyValueStore.KEY_BAR_ID))
    private val localState = MutableStateFlow(LocalState(ignoredIds = readIgnoredIds()))

    /**
     * Lower bound of the request query, refreshed on a timer.
     *
     * The 24-hour cutoff is baked into the Firestore query, so a session
     * left open overnight would otherwise keep showing an ever-widening
     * window measured from whenever it started.
     */
    private val requestWindowStart =
        MutableStateFlow(currentTimeMillis() - REQUEST_WINDOW_MILLIS)

    private val uidFlow = auth.state
        .map { (it as? AuthState.SignedIn)?.user?.uid }
        .distinctUntilChanged()

    @Suppress("OPT_IN_USAGE")
    private val barScope: StateFlow<BarScope> = combine(
        barIdFlow.flatMapLatest { bars.barFlow(it) },
        combine(barIdFlow, uidFlow) { barId, uid -> barId to uid }
            .flatMapLatest { (barId, uid) -> memberships.membershipFlow(barId, uid) },
        barIdFlow.flatMapLatest { memberships.rosterFlow(it) },
        combine(barIdFlow, requestWindowStart) { barId, window -> barId to window }
            .flatMapLatest { (barId, window) -> requests.requestsFlow(barId, window) },
    ) { bar, membership, roster, requestList ->
        BarScope(bar, membership, roster, requestList)
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), BarScope())

    @Suppress("OPT_IN_USAGE")
    val state: StateFlow<AppUiState> = combine(
        auth.state,
        barIdFlow,
        barScope,
        uidFlow.flatMapLatest { memberships.accountFlow(it) },
        localState,
    ) { authState, barId, scope, account, local ->
        AppUiState(
            auth = authState,
            barId = barId,
            bar = scope.bar,
            membership = scope.membership,
            roster = scope.roster,
            allRequests = scope.requests,
            joinedBarIds = account.joinedBarIds,
            isAdmin = local.isAdmin,
            justCreatedBar = local.justCreatedBar,
            checkingInvite = local.checkingInvite,
            navStack = local.navStack,
            ignoredIds = local.ignoredIds,
            isSubmitting = local.isSubmitting,
            authError = local.authError,
            isRegistering = local.isRegistering,
            message = local.message,
        )
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), AppUiState())

    init {
        startRequestWindowTicker()
        watchAuthForAdminClaim()
        watchForPendingInvite()
        watchForAutoClockIn()
    }

    // --- Auth ----------------------------------------------------------

    fun setRegistering(registering: Boolean) =
        localState.update { it.copy(isRegistering = registering, authError = null) }

    fun signIn(email: String, password: String) {
        viewModelScope.launch {
            // Cleared on every attempt. Leaving a stale error on screen
            // after a subsequent success is a real bug in the web client.
            localState.update { it.copy(authError = null) }
            try {
                if (localState.value.isRegistering) auth.register(email, password)
                else auth.signIn(email, password)
            } catch (e: Exception) {
                localState.update { it.copy(authError = e.message ?: "Unknown error") }
            }
        }
    }

    /**
     * Signs out and clears the selected bar.
     *
     * Clearing [barIdFlow] is the load-bearing half. Every subscription is
     * keyed on both the user and the bar, and only the user would
     * otherwise become null — on a shared tablet behind a bar, that leaves
     * the previous person's floor still rendered.
     */
    fun signOut() {
        viewModelScope.launch {
            auth.signOut()
            clearBarSelection()
            localState.value = LocalState(ignoredIds = localState.value.ignoredIds)
        }
    }

    // --- Bar selection --------------------------------------------------

    fun selectBar(barId: String) {
        localState.update { it.copy(justCreatedBar = false) }
        persistBarId(barId)
    }

    fun createAndSelectBar(newBar: NewBar) {
        val uid = state.value.currentUser?.uid ?: return
        viewModelScope.launch {
            try {
                val created = bars.createIfAbsent(newBar, uid)
                localState.update { it.copy(justCreatedBar = created) }
                persistBarId(newBar.id)
            } catch (e: Exception) {
                logWarning("Could not create bar ${newBar.id}", e)
                showMessage("Could not create that bar. Please try again.")
            }
        }
    }

    /** Returns to bar selection without changing anything server-side. */
    fun backToBarSelection() {
        localState.update { it.copy(justCreatedBar = false, navStack = emptyList()) }
        clearBarSelection()
    }

    /**
     * Goes off clock and returns to bar selection.
     *
     * The push token is deleted first. If the status write fails, a
     * still-registered token would keep paging a phone whose owner has
     * gone home; the reverse ordering fails safe.
     */
    fun goOffClock() {
        val uid = state.value.currentUser?.uid ?: return
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            runCatching { memberships.clearPushToken(barId, uid) }
                .onFailure { logWarning("Could not clear push token", it) }
            runCatching { memberships.setStatus(barId, uid, MemberStatus.OffClock) }
                .onFailure { logWarning("Could not go off clock", it) }
            backToBarSelection()
        }
    }

    fun leaveBar() {
        val uid = state.value.currentUser?.uid ?: return
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            try {
                memberships.leave(barId, uid)
                backToBarSelection()
            } catch (e: Exception) {
                logWarning("Could not leave bar $barId", e)
                showMessage("Could not leave this bar. Please try again.")
            }
        }
    }

    // --- Joining --------------------------------------------------------

    /**
     * Writes the membership document that admits the current user.
     *
     * [jobTitle] is the only thing the picker contributes. The privilege
     * role and the resulting status are both derived from a FRESH read of
     * the bar document, never from local state:
     *
     *  - `justCreatedBar` is lost if the user backs out and returns, and is
     *    never true for a creator re-joining through search.
     *  - The bar's join policy may not have arrived from the listener yet;
     *    this screen is interactive before the first snapshot lands.
     *
     * `firestore.rules` evaluates the server's actual values, so a client
     * that guesses "active" against a real approval policy is simply
     * rejected — with no diagnostic beyond a failed write.
     */
    fun confirmRole(jobTitle: String, displayName: String) {
        val user = state.value.currentUser ?: return
        val barId = barIdFlow.value ?: return

        viewModelScope.launch {
            var isCreator = localState.value.justCreatedBar
            var joinPolicy = JoinPolicy.Open

            if (!isCreator) {
                try {
                    val bar = bars.getBar(barId)
                    isCreator = bar?.ownerId == user.uid
                    joinPolicy = bar?.joinPolicy ?: JoinPolicy.Open
                } catch (e: Exception) {
                    logWarning("Could not verify bar ownership before joining", e)
                }
            }

            val role = if (isCreator) BarRole.Owner else BarRole.Staff
            val status = if (role == BarRole.Owner || joinPolicy != JoinPolicy.Approval) {
                MemberStatus.Active
            } else {
                MemberStatus.Pending
            }

            try {
                memberships.join(
                    barId = barId,
                    uid = user.uid,
                    role = role,
                    jobTitle = jobTitle,
                    displayName = displayName,
                    email = user.email,
                    status = status,
                    notificationPreferences = NOTIFICATION_DEFAULTS_BY_TITLE[jobTitle].orEmpty(),
                )
                localState.update { it.copy(justCreatedBar = false) }

                // Must follow the role write. The `bars` custom claim that
                // gates request and chat reads is stamped asynchronously by
                // a Cloud Function; without forcing a refresh the client
                // keeps presenting a token that lacks it, and every gated
                // read stays denied for up to an hour.
                auth.refreshIdToken()
            } catch (e: Exception) {
                logWarning("Could not join bar $barId", e)
                showMessage("Failed to join this bar. Please try again.")
            }
        }
    }

    // --- The request grid ----------------------------------------------

    /**
     * Handles a grid tap: descend into a sub-menu, or send a page.
     *
     * Sub-menu membership is decided by [dynamicChildrenOf], not by the
     * stored `children`, because several menus (wells, beer brands, types,
     * quantities) exist only at render time.
     */
    fun onButtonTapped(button: ButtonConfig) {
        val current = state.value
        val children = dynamicChildrenOf(
            button = button,
            wells = current.bar?.wells.orEmpty(),
            beerInventory = current.bar?.beerInventory.orEmpty(),
        )
        if (children.isNotEmpty()) {
            localState.update { it.copy(navStack = it.navStack + button) }
        } else {
            submitRequest(requestLabelFor(current.navStack + button))
            clearNavStack()
        }
    }

    fun navigateBack() = localState.update { it.copy(navStack = it.navStack.dropLast(1)) }

    fun clearNavStack() = localState.update { it.copy(navStack = emptyList()) }

    /**
     * Sends a page, guarding against a double tap.
     *
     * The guard is not cosmetic: these are physical buttons on a tablet in
     * a loud room, and a duplicated page means someone runs the same
     * errand twice.
     */
    fun submitRequest(label: String) {
        if (localState.value.isSubmitting) return
        val current = state.value
        val user = current.currentUser ?: return
        val barId = current.barId ?: return

        localState.update { it.copy(isSubmitting = true) }
        viewModelScope.launch {
            try {
                requests.submit(
                    barId = barId,
                    label = label,
                    requesterId = user.uid,
                    requesterName = current.membership?.displayName.orEmpty(),
                    requesterRole = current.membership?.role?.wire,
                    buttonId = current.resolver.idForLabel(label),
                )
            } catch (e: Exception) {
                logWarning("Could not send request", e)
                showMessage("Failed to send request. Please try again.")
            } finally {
                localState.update { it.copy(isSubmitting = false) }
            }
        }
    }

    /** Submits whatever the sub-menu trail currently spells out, marked as a prompt. */
    fun submitPendingTrailAsAskMe() {
        val trail = localState.value.navStack
        if (trail.isEmpty()) return
        submitRequest(requestLabelFor(trail) + ASK_ME_SUFFIX)
        clearNavStack()
    }

    // --- Request actions ------------------------------------------------

    fun claimRequest(requestId: String) {
        val current = state.value
        val user = current.currentUser ?: return
        viewModelScope.launch {
            try {
                requests.claim(requestId, user.uid, current.membership?.displayName.orEmpty())
            } catch (e: RequestAlreadyClaimedException) {
                // Surfaced, never swallowed: both bartenders otherwise
                // believe they own it and one errand goes undone.
                showMessage(e.message ?: "Someone else already claimed this request.")
            } catch (e: Exception) {
                logWarning("Could not claim request", e)
                showMessage("Failed to claim. Please try again.")
            }
        }
    }

    fun unclaimRequest(requestId: String) {
        viewModelScope.launch {
            runCatching { requests.unclaim(requestId) }.onFailure {
                logWarning("Could not unclaim request", it)
                showMessage("Failed to unclaim. Please try again.")
            }
        }
    }

    fun cancelRequest(requestId: String) {
        viewModelScope.launch {
            runCatching { requests.cancel(requestId) }.onFailure {
                logWarning("Could not cancel request", it)
                showMessage("Failed to cancel. Please try again.")
            }
        }
    }

    /**
     * Mutes a request on this device only.
     *
     * Muted entries are sorted to the bottom rather than removed — they
     * still count in the footer's total, so a page cannot be silently
     * lost by a stray tap.
     */
    fun ignoreRequest(requestId: String) {
        localState.update { current ->
            val next = (current.ignoredIds + requestId).toList()
                .takeLast(MAX_IGNORED_IDS)
                .toSet()
            store.putString(KeyValueStore.KEY_IGNORED_REQUEST_IDS, next.joinToString(","))
            current.copy(ignoredIds = next)
        }
    }

    // --- Roster ---------------------------------------------------------

    fun approveMember(uid: String) {
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            runCatching { memberships.approve(barId, uid) }.onFailure {
                logWarning("Could not approve member", it)
                showMessage("Failed to approve. Please try again.")
            }
        }
    }

    fun rejectMember(uid: String) {
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            runCatching { memberships.reject(barId, uid) }.onFailure {
                logWarning("Could not reject member", it)
                showMessage("Failed to reject. Please try again.")
            }
        }
    }

    // --- Messages -------------------------------------------------------

    fun dismissMessage() = localState.update { it.copy(message = null) }

    private fun showMessage(text: String) = localState.update { it.copy(message = text) }

    // --- Background work ------------------------------------------------

    private fun startRequestWindowTicker() {
        viewModelScope.launch {
            while (true) {
                delay(REQUEST_WINDOW_REFRESH_MILLIS)
                requestWindowStart.value = currentTimeMillis() - REQUEST_WINDOW_MILLIS
            }
        }
    }

    private fun watchAuthForAdminClaim() {
        viewModelScope.launch {
            auth.state.collect { authState ->
                val admin = authState is AuthState.SignedIn && auth.isAdmin()
                localState.update { it.copy(isAdmin = admin) }
            }
        }
    }

    /**
     * Consumes a pending invite before the join form is offered.
     *
     * An invite can carry Manager, which the client is not allowed to
     * grant itself — flipping the invite lets a Cloud Function write the
     * membership. The timeout matters: without it, a lookup that never
     * resolves strands the user on a spinner with no way to join manually.
     */
    private fun watchForPendingInvite() {
        viewModelScope.launch {
            combine(barIdFlow, state.map { it.currentUser }, state.map { it.membership?.role }) {
                    barId, user, role ->
                Triple(barId, user, role)
            }.distinctUntilChanged().collect { (barId, user, role) ->
                val email = user?.email
                if (barId == null || email == null || role != null) {
                    localState.update { it.copy(checkingInvite = false) }
                    return@collect
                }
                localState.update { it.copy(checkingInvite = true) }
                try {
                    val consumed = memberships.consumePendingInvite(barId, email, user.uid)
                    if (!consumed) {
                        localState.update { it.copy(checkingInvite = false) }
                    } else {
                        // Deliberately left true: the membership listener
                        // clears it once the Cloud Function's write lands.
                        // The timeout below is the backstop.
                        viewModelScope.launch {
                            delay(INVITE_CHECK_TIMEOUT_MILLIS)
                            localState.update { it.copy(checkingInvite = false) }
                        }
                    }
                } catch (e: Exception) {
                    logWarning("Invite check failed for $barId", e)
                    localState.update { it.copy(checkingInvite = false) }
                }
            }
        }
    }

    /**
     * Clocks an off-clock member back in when they reopen their bar.
     *
     * A pending member's write is denied by the rules, which is correct —
     * they must still be approved — so the failure is logged and ignored
     * rather than surfaced.
     */
    private fun watchForAutoClockIn() {
        viewModelScope.launch {
            barScope.map { it.membership?.status }.distinctUntilChanged().collect { status ->
                if (status != MemberStatus.OffClock) return@collect
                val uid = state.value.currentUser?.uid ?: return@collect
                val barId = barIdFlow.value ?: return@collect
                runCatching { memberships.setStatus(barId, uid, MemberStatus.Active) }
                    .onFailure { logWarning("Auto clock-in failed", it) }
            }
        }
    }

    // --- Persistence ----------------------------------------------------

    private fun persistBarId(barId: String) {
        store.putString(KeyValueStore.KEY_BAR_ID, barId)
        barIdFlow.value = barId
    }

    private fun clearBarSelection() {
        store.putString(KeyValueStore.KEY_BAR_ID, null)
        barIdFlow.value = null
    }

    private fun readIgnoredIds(): Set<String> =
        store.getString(KeyValueStore.KEY_IGNORED_REQUEST_IDS)
            ?.split(",")
            ?.filter { it.isNotBlank() }
            ?.toSet()
            .orEmpty()
}
