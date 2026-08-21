package com.hereliesaz.barbacker.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.hereliesaz.barbacker.ASK_ME_SUFFIX
import com.hereliesaz.barbacker.INVITE_CHECK_TIMEOUT_MILLIS
import com.hereliesaz.barbacker.Alerter
import com.hereliesaz.barbacker.MAX_IGNORED_IDS
import com.hereliesaz.barbacker.NAG_INTERVAL_MILLIS
import com.hereliesaz.barbacker.NOTIFICATION_DEFAULTS_BY_TITLE
import com.hereliesaz.barbacker.REQUEST_WINDOW_MILLIS
import com.hereliesaz.barbacker.REQUEST_WINDOW_REFRESH_MILLIS
import com.hereliesaz.barbacker.currentTimeMillis
import com.hereliesaz.barbacker.data.AccountProfile
import com.hereliesaz.barbacker.data.AuthRepository
import com.hereliesaz.barbacker.data.AuthState
import com.hereliesaz.barbacker.data.BarRepository
import com.hereliesaz.barbacker.data.CHAT_PAGE_SIZE
import com.hereliesaz.barbacker.data.ChatRepository
import com.hereliesaz.barbacker.data.EightySixRepository
import com.hereliesaz.barbacker.data.KeyValueStore
import com.hereliesaz.barbacker.data.MembershipRepository
import com.hereliesaz.barbacker.data.NewBar
import com.hereliesaz.barbacker.data.OwnershipClaimRepository
import com.hereliesaz.barbacker.data.PLACE_SEARCH_DEBOUNCE_MILLIS
import com.hereliesaz.barbacker.data.PLACE_SEARCH_MIN_LENGTH
import com.hereliesaz.barbacker.data.PlaceResult
import com.hereliesaz.barbacker.data.PlaceSearchRepository
import com.hereliesaz.barbacker.data.PushTokenProvider
import com.hereliesaz.barbacker.data.RequestAlreadyClaimedException
import com.hereliesaz.barbacker.data.RequestRepository
import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.logic.dynamicChildrenOf
import com.hereliesaz.barbacker.logic.hasOutstandingAlerts
import com.hereliesaz.barbacker.logic.requestLabelFor
import com.hereliesaz.barbacker.model.Bar
import com.hereliesaz.barbacker.model.BarRole
import com.hereliesaz.barbacker.model.BarUser
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.model.ChatMessage
import com.hereliesaz.barbacker.model.EightySixEntry
import com.hereliesaz.barbacker.model.EightySixVisibility
import com.hereliesaz.barbacker.model.JoinPolicy
import com.hereliesaz.barbacker.model.MemberStatus
import com.hereliesaz.barbacker.model.OwnershipClaim
import com.hereliesaz.barbacker.model.Request
import com.hereliesaz.barbacker.model.SubscriptionTier
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.flow.debounce
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
    private val chat: ChatRepository,
    private val eightySix: EightySixRepository,
    private val ownershipClaims: OwnershipClaimRepository,
    private val placeSearch: PlaceSearchRepository,
    private val pushTokens: PushTokenProvider,
    private val alerter: Alerter,
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
        val activeDialog: ActiveDialog = ActiveDialog.None,
        val olderChatMessages: List<ChatMessage> = emptyList(),
        val chatHasMore: Boolean = true,
        val chatLoadingMore: Boolean = false,
        val chatLastReadAt: Long = 0L,
        val searchResults: List<PlaceResult> = emptyList(),
        val isSearching: Boolean = false,
        val searchFailed: Boolean = false,
    )

    /** The four bar-scoped subscriptions, resolved together. */
    private data class BarScope(
        val bar: Bar? = null,
        val membership: BarUser? = null,
        val roster: List<BarUser> = emptyList(),
        val requests: List<Request> = emptyList(),
    )

    private val barIdFlow = MutableStateFlow(store.getString(KeyValueStore.KEY_BAR_ID))
    private val searchQuery = MutableStateFlow("")
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

    // Gating inputs for the feature subscriptions, pulled out so each
    // subscription re-establishes only when its OWN gate changes, rather
    // than on every unrelated state emission.
    @Suppress("OPT_IN_USAGE")
    private val chatPanelOpen = localState
        .map { it.activeDialog == ActiveDialog.Chat }
        .distinctUntilChanged()

    private val isManagerPlusFlow = barScope
        .map { it.membership?.role?.isManagerPlus == true }
        .distinctUntilChanged()

    private val canSeePrivateEightySixFlow = combine(barScope, localState) { scope, local ->
        val premium = local.isAdmin || scope.bar?.subscription == SubscriptionTier.Premium
        premium && scope.membership?.role?.isManagerPlus == true
    }.distinctUntilChanged()

    /** Chat's three independent subscriptions, resolved together. */
    private data class ChatScope(
        val pinned: List<ChatMessage> = emptyList(),
        val latestAt: Long = 0L,
        val scrollback: List<ChatMessage> = emptyList(),
    )

    /** Everything layered over the dashboard. */
    private data class FeatureScope(
        val chat: ChatScope = ChatScope(),
        val eightySix: List<EightySixEntry> = emptyList(),
        val claims: List<OwnershipClaim> = emptyList(),
        val account: AccountProfile = AccountProfile(),
    )

    @Suppress("OPT_IN_USAGE")
    private val featureScope: StateFlow<FeatureScope> = combine(
        combine(
            barIdFlow.flatMapLatest { chat.pinnedFlow(it) },
            barIdFlow.flatMapLatest { chat.latestMessageAtFlow(it) },
            combine(barIdFlow, chatPanelOpen) { barId, open -> barId to open }
                .flatMapLatest { (barId, open) -> chat.scrollbackFlow(barId, open) },
        ) { pinned, latestAt, scrollback -> ChatScope(pinned, latestAt, scrollback) },
        combine(barIdFlow, canSeePrivateEightySixFlow) { barId, canSeePrivate ->
            barId to canSeePrivate
        }.flatMapLatest { (barId, canSeePrivate) ->
            eightySix.entriesFlow(barId, canSeePrivate)
        },
        combine(barIdFlow, isManagerPlusFlow) { barId, isManagerPlus -> barId to isManagerPlus }
            .flatMapLatest { (barId, isManagerPlus) ->
                ownershipClaims.pendingClaimsFlow(barId, isManagerPlus)
            },
        uidFlow.flatMapLatest { memberships.accountFlow(it) },
    ) { chatScope, entries, claims, account ->
        FeatureScope(chatScope, entries, claims, account)
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), FeatureScope())

    @Suppress("OPT_IN_USAGE")
    val state: StateFlow<AppUiState> = combine(
        auth.state,
        barIdFlow,
        barScope,
        featureScope,
        localState,
    ) { authState, barId, scope, features, local ->
        val account = features.account
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
            activeDialog = local.activeDialog,
            pinnedMessages = features.chat.pinned,
            chatMessages = features.chat.scrollback,
            olderChatMessages = local.olderChatMessages,
            chatHasMore = local.chatHasMore,
            chatLoadingMore = local.chatLoadingMore,
            latestMessageAt = features.chat.latestAt,
            chatLastReadAt = local.chatLastReadAt,
            eightySixEntries = features.eightySix,
            pendingOwnershipClaims = features.claims,
            searchResults = local.searchResults,
            isSearching = local.isSearching,
            searchFailed = local.searchFailed,
        )
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), AppUiState())

    init {
        startRequestWindowTicker()
        watchAuthForAdminClaim()
        watchForPendingInvite()
        watchForAutoClockIn()
        watchBarIdForChatReset()
        watchSearchQuery()
        watchForPushRegistration()
        startNagLoop()
    }

    /**
     * Registers this device's push token once the member is active in a bar.
     *
     * Gated on ACTIVE rather than merely present: a pending member must not
     * be paged for a bar that has not admitted them yet, and the rules
     * would reject the write anyway.
     *
     * The matching de-registration lives in [goOffClock] and
     * [MembershipRepository.leave] — deleting the token document is what
     * actually stops the pages, and leaving it behind means the nag cron
     * keeps waking a phone whose shift ended.
     */
    private fun watchForPushRegistration() {
        viewModelScope.launch {
            if (!pushTokens.isSupported) return@launch
            combine(barIdFlow, uidFlow, barScope.map { it.membership?.status }) {
                    barId, uid, status ->
                Triple(barId, uid, status)
            }.distinctUntilChanged().collect { (barId, uid, status) ->
                if (barId == null || uid == null || status != MemberStatus.Active) {
                    return@collect
                }
                val token = pushTokens.currentToken() ?: return@collect
                runCatching { memberships.registerPushToken(barId, uid, token) }
                    .onFailure { logWarning("Could not register the push token", it) }
            }
        }
    }

    /**
     * Sounds an alert while un-muted pages are outstanding.
     *
     * This is the in-app half of paging, and it is what actually works on
     * the tablet sitting open behind the bar — the case push handles worst.
     * Muted requests are excluded, which is the whole point of muting; the
     * loop would otherwise keep sounding for a page someone deliberately
     * set aside.
     */
    private fun startNagLoop() {
        viewModelScope.launch {
            while (true) {
                delay(NAG_INTERVAL_MILLIS)
                val current = state.value
                if (current.screen != Screen.Dashboard) continue
                if (hasOutstandingAlerts(current.visibleRequests, current.ignoredIds)) {
                    alerter.alert()
                }
            }
        }
    }

    /**
     * Debounces the place search and runs one lookup at a time.
     *
     * `collectLatest` is what makes this correct: it CANCELS the in-flight
     * search when a newer query arrives, so a slow response from three
     * keystrokes ago can never overwrite the current results. The web
     * client achieves the same thing by hand with an "am I still the most
     * recent run" token; structured concurrency gives it for free.
     */
    @Suppress("OPT_IN_USAGE")
    private fun watchSearchQuery() {
        viewModelScope.launch {
            searchQuery
                .debounce(PLACE_SEARCH_DEBOUNCE_MILLIS)
                .collectLatest { query -> runPlaceSearch(query.trim()) }
        }
    }

    private suspend fun runPlaceSearch(query: String) {
        if (query.length < PLACE_SEARCH_MIN_LENGTH) {
            localState.update {
                it.copy(searchResults = emptyList(), isSearching = false, searchFailed = false)
            }
            return
        }

        localState.update {
            it.copy(searchResults = emptyList(), isSearching = true, searchFailed = false)
        }

        // Both halves accumulate here and are republished as each lands, so
        // whichever source answers first paints immediately instead of
        // waiting on the slower one. Safe without synchronisation because
        // viewModelScope is confined to the main dispatcher.
        var existing = emptyList<PlaceResult>()
        var osm = emptyList<PlaceResult>()
        var existingFailed = false
        var osmFailed = false

        fun publish() {
            // Bars already in the system sort first: joining one is always
            // better than creating a duplicate from an OSM entry.
            localState.update { it.copy(searchResults = existing + osm) }
        }

        coroutineScope {
            launch {
                placeSearch.searchExistingBars(query)
                    .onSuccess { existing = it; publish() }
                    .onFailure { existingFailed = true }
            }
            launch {
                placeSearch.searchOpenStreetMap(query)
                    .onSuccess { osm = it; publish() }
                    .onFailure { osmFailed = true }
            }
        }

        localState.update {
            it.copy(
                isSearching = false,
                // Only a total failure is reported. If one source answered,
                // the results are incomplete but still useful — and stale
                // results from the previous query must not stay tappable.
                searchFailed = existingFailed && osmFailed,
                searchResults = if (existingFailed && osmFailed) emptyList() else it.searchResults,
            )
        }
    }

    fun onSearchQueryChanged(query: String) {
        searchQuery.value = query
    }

    /**
     * Resets chat pagination and reloads the read watermark on a bar
     * change.
     *
     * The paged-in history is local state, so nothing else clears it —
     * without this, switching bars would leave the previous bar's older
     * messages spliced above the new bar's scrollback.
     */
    private fun watchBarIdForChatReset() {
        viewModelScope.launch {
            barIdFlow.collect { barId ->
                val lastRead = barId
                    ?.let { store.getString(KeyValueStore.chatLastReadKey(it)) }
                    // A malformed stored value must not become NaN-like
                    // garbage: a bad parse that produced a huge number
                    // would suppress the unread dot permanently.
                    ?.toLongOrNull()
                    ?: 0L
                localState.update {
                    it.copy(
                        olderChatMessages = emptyList(),
                        chatHasMore = true,
                        chatLoadingMore = false,
                        chatLastReadAt = lastRead,
                        activeDialog = ActiveDialog.None,
                    )
                }
            }
        }
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

    /**
     * Enters a bar found by search.
     *
     * A bar already in the system is joined directly. An OpenStreetMap
     * result is created first — but through [BarRepository.createIfAbsent],
     * so two people searching the same venue at once end up in one bar
     * rather than two, and only the genuine creator is treated as Owner.
     */
    fun selectPlace(place: PlaceResult) {
        if (place.isExistingBar) {
            selectBar(place.barId)
            return
        }
        createAndSelectBar(
            NewBar(
                id = place.barId,
                name = place.name,
                // Nominatim's display_name is a full comma-separated
                // address; the individual components are not broken out
                // here, so it goes in whole rather than being guessed at.
                address = place.displayName,
                osmId = place.barId.substringAfterLast('_'),
                osmType = place.barId.removePrefix("osm_").substringBeforeLast('_'),
            ),
        )
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

    // --- Dialogs --------------------------------------------------------

    fun openDialog(dialog: ActiveDialog) {
        if (dialog == ActiveDialog.Chat) {
            // Stamp the read watermark on open, which is what clears the
            // unread dot. Clock-based rather than server-based on purpose:
            // it is a per-device convenience, and a device with a skewed
            // clock should not be able to mark a bar's chat read for anyone
            // else.
            val now = currentTimeMillis()
            barIdFlow.value?.let { barId ->
                store.putString(KeyValueStore.chatLastReadKey(barId), now.toString())
            }
            localState.update { it.copy(activeDialog = dialog, chatLastReadAt = now) }
        } else {
            localState.update { it.copy(activeDialog = dialog) }
        }
    }

    fun closeDialog() = localState.update { it.copy(activeDialog = ActiveDialog.None) }

    // --- Chat -----------------------------------------------------------

    /**
     * Posts a message, reporting failure to the caller rather than
     * swallowing it.
     *
     * The composer clears only on success. A rules rejection must leave the
     * typed text where the user can retry it, not silently discard what
     * they wrote.
     */
    suspend fun sendChatMessage(text: String, pin: Boolean): Result<Unit> {
        val current = state.value
        val user = current.currentUser ?: return Result.failure(IllegalStateException("Not signed in"))
        val barId = current.barId ?: return Result.failure(IllegalStateException("No bar selected"))
        return runCatching {
            chat.send(
                barId = barId,
                text = text,
                authorId = user.uid,
                // Both must match the caller's own membership document —
                // the create rule compares them and rejects anything else.
                authorName = current.membership?.displayName.orEmpty(),
                authorRole = current.membership?.role?.wire.orEmpty(),
                pin = pin,
            )
        }.onFailure { logWarning("Could not send chat message", it) }
    }

    fun toggleChatPin(messageId: String, pin: Boolean) {
        val uid = state.value.currentUser?.uid ?: return
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            runCatching { chat.setPinned(barId, messageId, pin, uid) }.onFailure {
                logWarning("Could not change pin state", it)
                showMessage("Failed to update the pin. Please try again.")
            }
        }
    }

    fun deleteChatMessage(messageId: String) {
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            runCatching { chat.delete(barId, messageId) }.onFailure {
                logWarning("Could not delete chat message", it)
                showMessage("Failed to delete. Please try again.")
            }
        }
    }

    fun loadOlderChat() {
        val current = state.value
        val barId = current.barId ?: return
        val local = localState.value
        if (local.chatLoadingMore || !local.chatHasMore) return

        val oldest = current.fullChatHistory.firstOrNull()?.timestamp ?: return
        localState.update { it.copy(chatLoadingMore = true) }

        viewModelScope.launch {
            try {
                val page = chat.loadOlder(barId, oldest)

                // Re-check the bar AFTER the await. A bar switch mid-fetch
                // would otherwise splice one bar's history into another's
                // scrollback — a top-of-function guard cannot catch this.
                if (barIdFlow.value != barId) return@launch

                localState.update {
                    it.copy(
                        olderChatMessages = page + it.olderChatMessages,
                        // A short page means we reached the beginning.
                        chatHasMore = page.size >= CHAT_PAGE_SIZE,
                        chatLoadingMore = false,
                    )
                }
            } catch (e: Exception) {
                logWarning("Could not load earlier messages", e)
                localState.update { it.copy(chatLoadingMore = false) }
                showMessage("Couldn't load earlier messages.")
            }
        }
    }

    // --- 86'd list ------------------------------------------------------

    suspend fun addEightySixEntry(
        patronName: String,
        reason: String?,
        visibility: EightySixVisibility,
    ): Result<Unit> {
        val current = state.value
        val user = current.currentUser ?: return Result.failure(IllegalStateException("Not signed in"))
        val barId = current.barId ?: return Result.failure(IllegalStateException("No bar selected"))
        return runCatching {
            eightySix.add(
                barId = barId,
                patronName = patronName,
                submittedBy = user.uid,
                submitterName = current.membership?.displayName.orEmpty(),
                reason = reason,
                visibility = visibility,
            )
        }.onFailure { logWarning("Could not add 86'd entry", it) }
    }

    fun deleteEightySixEntry(entryId: String) {
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            runCatching { eightySix.delete(barId, entryId) }.onFailure {
                logWarning("Could not delete 86'd entry", it)
                showMessage("Failed to delete entry. Please try again.")
            }
        }
    }

    // --- Ownership claims -----------------------------------------------

    fun fileOwnershipClaim() {
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            try {
                ownershipClaims.file(barId)
                showMessage("Ownership claim filed. A manager or the current owner needs to approve it.")
            } catch (e: Exception) {
                logWarning("Could not file ownership claim", e)
                showMessage(e.message ?: "Failed to file ownership claim.")
            }
        }
    }

    fun reviewOwnershipClaim(claimId: String, approve: Boolean) {
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            try {
                ownershipClaims.review(barId, claimId, approve)
            } catch (e: Exception) {
                logWarning("Could not review ownership claim", e)
                showMessage(e.message ?: "Failed to review ownership claim.")
            }
        }
    }

    // --- Notification preferences ---------------------------------------

    /**
     * Persists the member's paging preferences.
     *
     * Written before any local state changes, so a sign-out or bar switch
     * mid-write cannot leave the UI showing preferences that never landed.
     * The live membership listener supplies the new values on success.
     */
    fun saveNotificationPreferences(preferences: List<String>) {
        val uid = state.value.currentUser?.uid ?: return
        val barId = barIdFlow.value ?: return
        viewModelScope.launch {
            runCatching {
                memberships.saveNotificationPreferences(barId, uid, preferences)
            }.onFailure {
                logWarning("Could not save notification preferences", it)
                showMessage("Failed to save preferences. Please try again.")
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
