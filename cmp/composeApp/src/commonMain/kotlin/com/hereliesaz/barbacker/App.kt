package com.hereliesaz.barbacker

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.hereliesaz.barbacker.data.AppContainer
import com.hereliesaz.barbacker.data.BarBackerFirebase
import com.hereliesaz.barbacker.data.createKeyValueStore
import com.hereliesaz.barbacker.data.loadFirebaseConfig
import com.hereliesaz.barbacker.ui.ActiveDialog
import com.hereliesaz.barbacker.ui.AppUiState
import com.hereliesaz.barbacker.ui.AppViewModel
import com.hereliesaz.barbacker.ui.Screen
import com.hereliesaz.barbacker.ui.screens.ApprovalPendingScreen
import com.hereliesaz.barbacker.ui.screens.BarManagerDialog
import com.hereliesaz.barbacker.ui.screens.BarSelectionScreen
import com.hereliesaz.barbacker.ui.screens.ChatPanel
import com.hereliesaz.barbacker.ui.screens.CheckingInviteScreen
import com.hereliesaz.barbacker.ui.screens.DashboardActions
import com.hereliesaz.barbacker.ui.screens.DashboardScreen
import com.hereliesaz.barbacker.ui.screens.EightySixDialog
import com.hereliesaz.barbacker.ui.screens.InputPromptDialog
import com.hereliesaz.barbacker.ui.screens.NotificationSettingsDialog
import com.hereliesaz.barbacker.ui.screens.QuantityPromptDialog
import com.hereliesaz.barbacker.ui.screens.RestoringScreen
import com.hereliesaz.barbacker.ui.screens.RoleSelectionScreen
import com.hereliesaz.barbacker.ui.screens.RosterDialog
import com.hereliesaz.barbacker.ui.screens.SignInScreen
import com.hereliesaz.barbacker.ui.screens.ThemeEditorDialog
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import com.hereliesaz.barbacker.ui.theme.BarBackerTheme

/**
 * Entry point shared by all three platforms.
 *
 * @param platformContext the Android `Context`; null on iOS and desktop.
 */
@Composable
fun App(platformContext: Any? = null) {
    val config = remember { loadFirebaseConfig(platformContext) }

    if (config == null) {
        BarBackerTheme { ConfigurationErrorScreen() }
        return
    }

    val container = remember {
        AppContainer(
            firebase = BarBackerFirebase.initialize(config, platformContext),
            store = createKeyValueStore(platformContext),
            platformContext = platformContext,
        )
    }

    BarBackerApp(container)
}

@Composable
private fun BarBackerApp(container: AppContainer) {
    val viewModel: AppViewModel = viewModel {
        AppViewModel(
            auth = container.auth,
            bars = container.bars,
            memberships = container.memberships,
            requests = container.requests,
            chat = container.chat,
            eightySix = container.eightySix,
            ownershipClaims = container.ownershipClaims,
            storage = container.storage,
            placeSearch = container.placeSearch,
            pushTokens = container.pushTokens,
            alerter = container.alerter,
            store = container.store,
        )
    }
    val state by viewModel.state.collectAsState()
    val snackbarHostState = remember { SnackbarHostState() }

    // Failures the user needs to know about — a lost claim race, a
    // rejected write — surface here rather than only reaching the log.
    LaunchedEffect(state.message) {
        val message = state.message ?: return@LaunchedEffect
        snackbarHostState.showSnackbar(message)
        viewModel.dismissMessage()
    }

    BarBackerTheme(barTheme = state.bar?.theme, isPremium = state.isPremium) {
        Scaffold(
            snackbarHost = { SnackbarHost(snackbarHostState) },
            containerColor = BarBackerColors.Background,
        ) { padding ->
            Surface(
                color = BarBackerColors.Background,
                modifier = Modifier.fillMaxSize().padding(padding),
            ) {
                when (state.screen) {
                    Screen.Restoring -> RestoringScreen()

                    Screen.SignIn -> SignInScreen(
                        isRegistering = state.isRegistering,
                        authError = state.authError,
                        onSetRegistering = viewModel::setRegistering,
                        onSubmit = viewModel::signIn,
                    )

                    Screen.BarSelection -> BarSelectionScreen(
                        email = state.currentUser?.email,
                        joinedBarIds = state.joinedBarIds,
                        barNames = state.barNames,
                        searchResults = state.searchResults,
                        isSearching = state.isSearching,
                        searchFailed = state.searchFailed,
                        onSearchQueryChanged = viewModel::onSearchQueryChanged,
                        onSelectPlace = viewModel::selectPlace,
                        onSelectBar = viewModel::selectBar,
                        onCreateBar = viewModel::createAndSelectBar,
                        onSignOut = viewModel::signOut,
                    )

                    Screen.CheckingInvite -> CheckingInviteScreen()

                    Screen.RoleSelection -> RoleSelectionScreen(
                        isNewBar = state.justCreatedBar,
                        onConfirm = viewModel::confirmRole,
                        onBack = viewModel::backToBarSelection,
                        onSignOut = viewModel::signOut,
                    )

                    Screen.ApprovalPending -> ApprovalPendingScreen(
                        barName = state.barName,
                        onCancel = viewModel::backToBarSelection,
                    )

                    Screen.Dashboard -> DashboardScreen(
                        state = state,
                        actions = DashboardActions(
                            onButtonTapped = viewModel::onButtonTapped,
                            onNavigateBack = viewModel::navigateBack,
                            onClearNavStack = viewModel::clearNavStack,
                            onClaim = viewModel::claimRequest,
                            onUnclaim = viewModel::unclaimRequest,
                            onCancel = viewModel::cancelRequest,
                            onIgnore = viewModel::ignoreRequest,
                            onOpenRoster = { viewModel.openDialog(ActiveDialog.Roster) },
                            onOpenChat = { viewModel.openDialog(ActiveDialog.Chat) },
                            onOpenEightySix = { viewModel.openDialog(ActiveDialog.EightySix) },
                            onOpenNotificationSettings = {
                                viewModel.openDialog(ActiveDialog.NotificationSettings)
                            },
                            onOpenBarManager = { viewModel.openDialog(ActiveDialog.BarManager) },
                            onOpenThemeEditor = { viewModel.openDialog(ActiveDialog.ThemeEditor) },
                            onSwitchBar = viewModel::backToBarSelection,
                            onGoOffClock = viewModel::goOffClock,
                            onReorder = viewModel::saveButtonOrder,
                        ),
                    )
                }

                // Overlays live outside the screen `when` so they compose
                // above whichever screen is showing. In practice only the
                // dashboard opens them.
                DashboardDialogs(state = state, viewModel = viewModel)

                // Prompts sit above the dialogs: a brand prompt can be
                // opened from inside a sub-menu, not only from the grid.
                state.inputPrompt?.let { prompt ->
                    InputPromptDialog(
                        prompt = prompt,
                        onSubmit = viewModel::submitPrompt,
                        onDismiss = viewModel::dismissPrompt,
                    )
                }
                state.quantityPrompt?.let { prompt ->
                    QuantityPromptDialog(
                        prompt = prompt,
                        onSubmit = viewModel::submitQuantity,
                        onDismiss = viewModel::dismissPrompt,
                    )
                }
            }
        }
    }
}

@Composable
private fun DashboardDialogs(state: AppUiState, viewModel: AppViewModel) {
    when (state.activeDialog) {
        ActiveDialog.None -> Unit

        ActiveDialog.Chat -> ChatPanel(
            messages = state.fullChatHistory,
            hasMore = state.chatHasMore,
            loadingMore = state.chatLoadingMore,
            currentUserId = state.currentUser?.uid.orEmpty(),
            isManagerPlus = state.isManagerPlus,
            onLoadMore = viewModel::loadOlderChat,
            onSend = viewModel::sendChatMessage,
            onTogglePin = viewModel::toggleChatPin,
            onDelete = viewModel::deleteChatMessage,
            onClose = viewModel::closeDialog,
        )

        ActiveDialog.EightySix -> EightySixDialog(
            entries = state.eightySixEntries,
            isPremium = state.isPremium,
            isManagerPlus = state.isManagerPlus,
            onAdd = viewModel::addEightySixEntry,
            onDelete = viewModel::deleteEightySixEntry,
            onClose = viewModel::closeDialog,
        )

        ActiveDialog.Roster -> RosterDialog(
            clockedIn = state.clockedInMembers,
            offClock = state.offClockMembers,
            pending = state.pendingMembers,
            ownershipClaims = state.pendingOwnershipClaims,
            isManagerPlus = state.isManagerPlus,
            onApproveMember = viewModel::approveMember,
            onRejectMember = viewModel::rejectMember,
            onReviewClaim = viewModel::reviewOwnershipClaim,
            onClose = viewModel::closeDialog,
        )

        ActiveDialog.NotificationSettings -> NotificationSettingsDialog(
            // The job title, falling back to the privilege tier — this is
            // the key the defaults are stored under.
            roleLabel = state.membership?.jobTitle?.wire
                ?: state.membership?.role?.wire.orEmpty(),
            currentPreferences = state.notificationPreferences,
            buttons = state.buttons,
            ntfyTopic = null,
            onSave = viewModel::saveNotificationPreferences,
            onClose = viewModel::closeDialog,
        )

        ActiveDialog.BarManager -> BarManagerDialog(
            barName = state.barName,
            allButtons = state.manageableButtons,
            hiddenButtonIds = state.hiddenButtonIds,
            isPremium = state.isPremium,
            isManagerPlus = state.isManagerPlus,
            onHideButton = viewModel::hideButton,
            onUnhideButton = viewModel::unhideButton,
            onInvite = viewModel::sendInvite,
            onClose = viewModel::closeDialog,
        )

        ActiveDialog.ThemeEditor -> ThemeEditorDialog(
            currentTheme = state.bar?.theme,
            onSave = viewModel::saveTheme,
            onUploadLogo = viewModel::uploadLogo,
            onClose = viewModel::closeDialog,
        )
    }
}

/**
 * Shown when the Firebase credentials were never injected into this build.
 *
 * Names what is missing instead of failing inside the Firebase SDK with a
 * stack trace that says nothing about the actual cause.
 */
@Composable
private fun ConfigurationErrorScreen() {
    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.fillMaxSize().padding(32.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text(
                text = "Not configured",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = BarBackerColors.Primary,
            )
            Text(
                text = "This build has no Firebase credentials. Supply the " +
                    "VITE_FIREBASE_* values — the same set the web client uses — " +
                    "and rebuild. See docs/CMP.md.",
                color = BarBackerColors.OnSurfaceVariant,
                textAlign = TextAlign.Center,
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 12.dp),
            )
        }
    }
}
