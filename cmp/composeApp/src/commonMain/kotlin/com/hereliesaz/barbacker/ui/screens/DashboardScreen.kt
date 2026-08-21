package com.hereliesaz.barbacker.ui.screens

import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Block
import androidx.compose.material.icons.filled.Forum
import androidx.compose.material.icons.filled.Group
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material.icons.filled.PowerSettingsNew
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.SyncAlt
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.logic.isButtonPending
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.model.Request
import com.hereliesaz.barbacker.ui.AppUiState
import com.hereliesaz.barbacker.ui.iconForName
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import com.hereliesaz.barbacker.ui.theme.LocalBarAccent

/** Actions the dashboard can trigger, grouped so the signature stays readable. */
data class DashboardActions(
    val onButtonTapped: (ButtonConfig) -> Unit,
    val onNavigateBack: () -> Unit,
    val onClearNavStack: () -> Unit,
    val onClaim: (String) -> Unit,
    val onUnclaim: (String) -> Unit,
    val onCancel: (String) -> Unit,
    val onIgnore: (String) -> Unit,
    val onOpenRoster: () -> Unit,
    val onOpenChat: () -> Unit,
    val onOpenEightySix: () -> Unit,
    val onOpenNotificationSettings: () -> Unit,
    val onSwitchBar: () -> Unit,
    val onGoOffClock: () -> Unit,
)

@Composable
fun DashboardScreen(state: AppUiState, actions: DashboardActions) {
    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Column(modifier = Modifier.fillMaxSize()) {
            DashboardTopBar(state = state, actions = actions)

            PinnedMarquee(pinned = state.pinnedMessages, onClick = actions.onOpenChat)

            Box(modifier = Modifier.weight(1f)) {
                ButtonGrid(state = state, onButtonTapped = actions.onButtonTapped)

                // Drawn over the grid rather than replacing it, so the
                // breadcrumb reads as a drill-down and backing out does not
                // re-lay-out the whole screen.
                if (state.navStack.isNotEmpty()) {
                    SubMenuOverlay(state = state, actions = actions)
                }
            }

            RequestsFooter(state = state, actions = actions)
        }
    }
}

@Composable
private fun DashboardTopBar(state: AppUiState, actions: DashboardActions) {
    var menuOpen by remember { mutableStateOf(false) }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(BarBackerColors.Surface)
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = state.membership?.displayName.orEmpty(),
                fontWeight = FontWeight.Bold,
                fontSize = 20.sp,
                color = BarBackerColors.Primary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Row(verticalAlignment = Alignment.CenterVertically) {
                // Job title, falling back to the privilege tier — the two
                // are different axes and the title is the more useful label.
                Text(
                    text = state.membership?.jobTitle?.wire
                        ?: state.membership?.role?.wire.orEmpty(),
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurfaceVariant,
                )
                Text(
                    text = " · ${state.barName}",
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurfaceVariant,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
            }
        }

        Box {
            IconButton(onClick = actions.onOpenChat) {
                Icon(
                    Icons.Filled.Forum,
                    contentDescription = "Chat",
                    tint = BarBackerColors.OnSurface,
                )
            }
            if (state.chatHasUnread) {
                Box(
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .padding(6.dp)
                        .size(10.dp)
                        .background(BarBackerColors.Error, CircleShape),
                )
            }
        }

        Box {
            IconButton(onClick = { menuOpen = true }) {
                Icon(
                    Icons.Filled.MoreVert,
                    contentDescription = "Menu",
                    tint = BarBackerColors.OnSurface,
                )
            }
            DropdownMenu(
                expanded = menuOpen,
                onDismissRequest = { menuOpen = false },
            ) {
                DropdownMenuItem(
                    text = { Text("Who's On") },
                    leadingIcon = { Icon(Icons.Filled.Group, contentDescription = null) },
                    onClick = {
                        menuOpen = false
                        actions.onOpenRoster()
                    },
                )
                DropdownMenuItem(
                    text = { Text("86'd List") },
                    leadingIcon = { Icon(Icons.Filled.Block, contentDescription = null) },
                    onClick = {
                        menuOpen = false
                        actions.onOpenEightySix()
                    },
                )
                DropdownMenuItem(
                    text = { Text("Pagers") },
                    leadingIcon = { Icon(Icons.Filled.Settings, contentDescription = null) },
                    onClick = {
                        menuOpen = false
                        actions.onOpenNotificationSettings()
                    },
                )
                HorizontalDivider(color = BarBackerColors.Outline)
                DropdownMenuItem(
                    text = { Text("Switch Bar") },
                    leadingIcon = { Icon(Icons.Filled.SyncAlt, contentDescription = null) },
                    onClick = {
                        menuOpen = false
                        actions.onSwitchBar()
                    },
                )
                DropdownMenuItem(
                    text = { Text("Clock Out") },
                    leadingIcon = {
                        Icon(Icons.Filled.PowerSettingsNew, contentDescription = null)
                    },
                    onClick = {
                        menuOpen = false
                        actions.onGoOffClock()
                    },
                )
            }
        }
    }
    HorizontalDivider(color = BarBackerColors.Outline)
}

@Composable
private fun ButtonGrid(state: AppUiState, onButtonTapped: (ButtonConfig) -> Unit) {
    LazyVerticalGrid(
        columns = GridCells.Fixed(2),
        contentPadding = androidx.compose.foundation.layout.PaddingValues(16.dp),
        horizontalArrangement = Arrangement.spacedBy(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        modifier = Modifier.fillMaxSize(),
    ) {
        items(state.currentButtons, key = { it.id }) { button ->
            ButtonTile(
                button = button,
                pending = isButtonPending(button.label, state.visibleRequests),
                onClick = { onButtonTapped(button) },
            )
        }
    }
}

@Composable
private fun ButtonTile(button: ButtonConfig, pending: Boolean, onClick: () -> Unit) {
    val accent = LocalBarAccent.current

    // The pulse is the whole point of the pending state: a bartender
    // glances at the tablet from three feet away, and a static colour
    // change does not read at that distance.
    val transition = rememberInfiniteTransition(label = "pending-pulse")
    val pulse by transition.animateFloat(
        initialValue = 1f,
        targetValue = 0.7f,
        animationSpec = infiniteRepeatable(tween(1000), RepeatMode.Reverse),
        label = "pending-pulse-alpha",
    )

    Card(
        onClick = onClick,
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = if (pending) BarBackerColors.Error else accent.tile,
        ),
        modifier = Modifier
            .fillMaxWidth()
            .height(120.dp)
            .alpha(if (pending) pulse else 1f),
    ) {
        Column(
            modifier = Modifier.fillMaxSize().padding(8.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            val contentColor = if (pending) BarBackerColors.OnError else accent.label
            Icon(
                imageVector = iconForName(button.icon),
                contentDescription = null,
                tint = contentColor,
                modifier = Modifier.size(32.dp),
            )
            Spacer(Modifier.height(8.dp))
            Text(
                text = button.label,
                color = contentColor,
                fontWeight = FontWeight.Bold,
                fontSize = 20.sp,
                textAlign = TextAlign.Center,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
            if (pending) {
                Text(
                    text = "PENDING",
                    color = contentColor,
                    fontSize = 11.sp,
                    modifier = Modifier.alpha(0.8f),
                )
            }
        }
    }
}

@Composable
private fun SubMenuOverlay(state: AppUiState, actions: DashboardActions) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black.copy(alpha = 0.95f))
            // Swallows taps so the grid underneath cannot be hit through
            // the scrim — otherwise a mis-tap sends an unintended page.
            .clickable(enabled = true, onClick = {}),
        contentAlignment = Alignment.TopCenter,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
                .background(BarBackerColors.Surface, RoundedCornerShape(16.dp))
                .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(16.dp))
                .padding(16.dp),
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(onClick = actions.onNavigateBack) {
                    Icon(
                        Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "Back",
                        tint = BarBackerColors.OnSurface,
                    )
                }
                Text(
                    text = state.navStack.joinToString(" > ") { it.label },
                    fontWeight = FontWeight.Bold,
                    fontSize = 16.sp,
                    color = BarBackerColors.Primary,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
            }

            HorizontalDivider(color = BarBackerColors.Outline, modifier = Modifier.padding(vertical = 12.dp))

            LazyVerticalGrid(
                columns = GridCells.Fixed(2),
                horizontalArrangement = Arrangement.spacedBy(12.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp),
                modifier = Modifier.heightIn(max = 420.dp),
            ) {
                items(state.currentButtons, key = { it.id }) { button ->
                    ButtonTile(
                        button = button,
                        pending = false,
                        onClick = { actions.onButtonTapped(button) },
                    )
                }
            }

            Spacer(Modifier.height(12.dp))
            OutlinedButton(
                onClick = actions.onClearNavStack,
                modifier = Modifier.fillMaxWidth().height(56.dp),
            ) {
                Text("Cancel")
            }
        }
    }
}

@Composable
private fun RequestsFooter(state: AppUiState, actions: DashboardActions) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .heightIn(max = 320.dp)
            .background(BarBackerColors.SurfaceContainer),
    ) {
        HorizontalDivider(color = BarBackerColors.Outline)

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .background(BarBackerColors.SurfaceContainerHigh)
                .padding(horizontal = 16.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Text(
                text = "NOTIFICATIONS (${state.visibleRequests.size})",
                style = MaterialTheme.typography.labelMedium,
                fontWeight = FontWeight.Bold,
                color = BarBackerColors.OnSurfaceVariant,
                letterSpacing = 1.sp,
            )
            // Hidden from Staff, for whom the roster offers nothing
            // actionable.
            if (state.showApprovalsBadge) {
                Button(
                    onClick = actions.onOpenRoster,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = BarBackerColors.Warning,
                        contentColor = Color.Black,
                    ),
                    modifier = Modifier.height(32.dp),
                    contentPadding = androidx.compose.foundation.layout.PaddingValues(horizontal = 12.dp),
                ) {
                    Icon(Icons.Filled.Group, contentDescription = null, modifier = Modifier.size(16.dp))
                    Spacer(Modifier.width(4.dp))
                    Text("${state.pendingMembers.size} Approvals", fontSize = 12.sp)
                }
            }
        }

        if (state.visibleRequests.isEmpty()) {
            Text(
                text = "No active requests",
                color = BarBackerColors.OnSurfaceVariant,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth().padding(24.dp),
            )
        } else {
            LazyColumn(modifier = Modifier.fillMaxWidth()) {
                items(state.visibleRequests, key = { it.id }) { request ->
                    RequestRow(
                        request = request,
                        muted = request.id in state.ignoredIds,
                        isMine = request.requesterId == state.currentUser?.uid,
                        actions = actions,
                    )
                    HorizontalDivider(color = BarBackerColors.Outline)
                }
            }
        }
    }
}

@Composable
private fun RequestRow(
    request: Request,
    muted: Boolean,
    isMine: Boolean,
    actions: DashboardActions,
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(if (muted) BarBackerColors.RequestRowMuted else BarBackerColors.RequestRow)
            .padding(12.dp)
            .alpha(if (muted) 0.6f else 1f),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = request.label,
                fontWeight = FontWeight.Bold,
                fontSize = 16.sp,
                color = if (muted) BarBackerColors.OnSurfaceVariant else BarBackerColors.OnSurface,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
            Text(
                text = request.requesterName.orEmpty(),
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )
        }

        Button(
            onClick = { actions.onClaim(request.id) },
            colors = ButtonDefaults.buttonColors(
                containerColor = if (muted) BarBackerColors.SecondaryContainer else BarBackerColors.Error,
                contentColor = if (muted) BarBackerColors.OnSecondaryContainer else BarBackerColors.OnError,
            ),
            modifier = Modifier.height(48.dp),
        ) {
            Text("CLAIM")
        }

        when {
            // Your own page: cancelling is the useful action, not muting.
            isMine -> OutlinedButton(
                onClick = { actions.onCancel(request.id) },
                modifier = Modifier.height(48.dp),
            ) {
                Text("CANCEL", color = BarBackerColors.Error)
            }
            // Already muted rows offer nothing — muting twice is a no-op
            // and the button would just be a dead target.
            !muted -> OutlinedButton(
                onClick = { actions.onIgnore(request.id) },
                modifier = Modifier.height(48.dp),
            ) {
                Text("Ignore")
            }
        }
    }
}

/** The shift log: recently resolved pages, with an unclaim path for your own. */
@Composable
fun ShiftLog(state: AppUiState, onUnclaim: (String) -> Unit, modifier: Modifier = Modifier) {
    Column(modifier = modifier.fillMaxWidth().padding(16.dp)) {
        Text(
            text = "SHIFT LOG",
            style = MaterialTheme.typography.labelMedium,
            fontWeight = FontWeight.Bold,
            color = BarBackerColors.OnSurfaceVariant,
            letterSpacing = 1.sp,
        )
        Spacer(Modifier.height(8.dp))
        LazyColumn(modifier = Modifier.fillMaxHeight()) {
            items(state.shiftLog, key = { it.id }) { request ->
                Row(
                    modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(request.label, color = BarBackerColors.OnSurfaceVariant)
                        Text(
                            text = "${request.claimerName ?: "Someone"} claimed",
                            style = MaterialTheme.typography.bodySmall,
                            color = BarBackerColors.OnSurfaceVariant,
                        )
                    }
                    if (request.claimedBy == state.currentUser?.uid) {
                        TextButton(onClick = { onUnclaim(request.id) }) { Text("Unclaim") }
                    }
                }
            }
        }
    }
}
