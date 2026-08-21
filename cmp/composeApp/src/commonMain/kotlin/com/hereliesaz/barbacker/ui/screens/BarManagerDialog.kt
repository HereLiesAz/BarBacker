package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.selection.selectable
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Restore
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.RadioButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.text.KeyboardOptions
import com.hereliesaz.barbacker.data.InvitableRole
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.ui.iconForName
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.coroutines.launch

/**
 * Manager tooling for one bar: which tiles the floor sees, and who else
 * gets in.
 *
 * Hiding is a soft delete — the button keeps its usage counts and its
 * place in any saved order, and comes back untouched if it is restored.
 * Restoring is premium-gated, which is why the confirmation says so
 * plainly rather than presenting hiding as reversible.
 */
@Composable
fun BarManagerDialog(
    barName: String,
    allButtons: List<ButtonConfig>,
    hiddenButtonIds: Set<String>,
    isPremium: Boolean,
    isManagerPlus: Boolean,
    onHideButton: (String) -> Unit,
    onUnhideButton: (String) -> Unit,
    onInvite: suspend (email: String, role: InvitableRole) -> Result<Unit>,
    onClose: () -> Unit,
) {
    var confirmHideId by remember { mutableStateOf<String?>(null) }

    val activeButtons = allButtons.filterNot { it.id in hiddenButtonIds }
    val hiddenButtons = allButtons.filter { it.id in hiddenButtonIds }

    BarBackerDialog(
        title = "Manage $barName",
        onDismiss = onClose,
        actions = { TextButton(onClick = onClose) { Text("Close") } },
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Text(
                text = "Hiding a button removes it from every device at this " +
                    "bar. Its history stays in the database.",
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .heightIn(max = 280.dp)
                    .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp)),
            ) {
                if (activeButtons.isEmpty()) {
                    Text(
                        text = "No active buttons.",
                        color = BarBackerColors.OnSurfaceVariant,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.fillMaxWidth().padding(16.dp),
                    )
                } else {
                    LazyColumn {
                        items(activeButtons, key = { it.id }) { button ->
                            ManagedButtonRow(
                                button = button,
                                // Manager+ only: writes to the bar document
                                // are rejected for anyone else, so a visible
                                // control here would only ever produce a
                                // confusing "failed, try again".
                                action = if (isManagerPlus) {
                                    ManagedButtonAction(
                                        icon = Icons.Filled.Close,
                                        description = "Remove ${button.label}",
                                        onClick = { confirmHideId = button.id },
                                    )
                                } else {
                                    null
                                },
                            )
                            HorizontalDivider(color = BarBackerColors.Outline)
                        }
                    }
                }
            }

            if (isManagerPlus) {
                InviteForm(onInvite = onInvite)
            }

            if (isManagerPlus && isPremium && hiddenButtons.isNotEmpty()) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .heightIn(max = 200.dp)
                        .border(1.dp, BarBackerColors.Error, RoundedCornerShape(8.dp)),
                ) {
                    Text(
                        text = "RESTORABLE BUTTONS (PREMIUM)",
                        style = MaterialTheme.typography.labelSmall,
                        fontWeight = FontWeight.Bold,
                        color = BarBackerColors.Error,
                        letterSpacing = 1.sp,
                        modifier = Modifier
                            .fillMaxWidth()
                            .background(BarBackerColors.Error.copy(alpha = 0.12f))
                            .padding(8.dp),
                    )
                    LazyColumn {
                        items(hiddenButtons, key = { it.id }) { button ->
                            ManagedButtonRow(
                                button = button,
                                action = ManagedButtonAction(
                                    icon = Icons.Filled.Restore,
                                    description = "Restore ${button.label}",
                                    onClick = { onUnhideButton(button.id) },
                                ),
                            )
                            HorizontalDivider(color = BarBackerColors.Outline)
                        }
                    }
                }
            }
        }
    }

    confirmHideId?.let { id ->
        AlertDialog(
            onDismissRequest = { confirmHideId = null },
            title = { Text("Remove Button?") },
            text = {
                Text(
                    "It will disappear from every device at this bar, and " +
                        "restoring it requires Premium.",
                )
            },
            confirmButton = {
                Button(
                    onClick = {
                        onHideButton(id)
                        confirmHideId = null
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = BarBackerColors.Error,
                        contentColor = BarBackerColors.OnError,
                    ),
                ) { Text("Remove") }
            },
            dismissButton = {
                TextButton(onClick = { confirmHideId = null }) { Text("Cancel") }
            },
            containerColor = BarBackerColors.SurfaceContainer,
        )
    }
}

private data class ManagedButtonAction(
    val icon: androidx.compose.ui.graphics.vector.ImageVector,
    val description: String,
    val onClick: () -> Unit,
)

@Composable
private fun ManagedButtonRow(button: ButtonConfig, action: ManagedButtonAction?) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(
            imageVector = iconForName(button.icon),
            contentDescription = null,
            tint = BarBackerColors.OnSurfaceVariant,
            modifier = Modifier.size(20.dp),
        )
        Spacer(Modifier.size(12.dp))
        Text(
            text = button.label,
            color = BarBackerColors.OnSurface,
            modifier = Modifier.weight(1f),
        )
        if (action != null) {
            IconButton(onClick = action.onClick) {
                Icon(
                    imageVector = action.icon,
                    contentDescription = action.description,
                    tint = BarBackerColors.OnSurfaceVariant,
                )
            }
        }
    }
}

@Composable
private fun InviteForm(onInvite: suspend (String, InvitableRole) -> Result<Unit>) {
    var email by remember { mutableStateOf("") }
    var role by remember { mutableStateOf(InvitableRole.Staff) }
    var sending by remember { mutableStateOf(false) }
    var message by remember { mutableStateOf<String?>(null) }
    val scope = rememberCoroutineScope()

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp))
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(
            text = "INVITE STAFF",
            style = MaterialTheme.typography.labelSmall,
            fontWeight = FontWeight.Bold,
            color = BarBackerColors.OnSurfaceVariant,
            letterSpacing = 1.sp,
        )

        OutlinedTextField(
            value = email,
            onValueChange = {
                email = it
                message = null
            },
            label = { Text("Email") },
            singleLine = true,
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Email,
                // Autocapitalisation would fight the lowercasing the
                // invite lookup depends on, and look like a typo besides.
                capitalization = KeyboardCapitalization.None,
            ),
            modifier = Modifier.fillMaxWidth(),
        )

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            InvitableRole.entries.forEach { option ->
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.selectable(
                        selected = role == option,
                        onClick = { role = option },
                    ),
                ) {
                    RadioButton(selected = role == option, onClick = { role = option })
                    Text(option.wire, color = BarBackerColors.OnSurface)
                }
            }
        }

        Button(
            onClick = {
                val address = email.trim()
                if (address.isEmpty() || sending) return@Button
                sending = true
                message = null
                scope.launch {
                    onInvite(address, role)
                        .onSuccess {
                            email = ""
                            message = "Invite sent to ${address.lowercase()}."
                        }
                        .onFailure { message = "Failed to send invite. Please try again." }
                    sending = false
                }
            },
            enabled = email.isNotBlank() && !sending,
            modifier = Modifier.fillMaxWidth(),
        ) {
            Text(if (sending) "Sending..." else "Send Invite")
        }

        message?.let {
            Text(
                text = it,
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )
        }

        Text(
            text = "They're added automatically the next time they open this " +
                "bar while signed in with that email.",
            fontSize = 10.sp,
            color = BarBackerColors.OnSurfaceVariant,
        )
    }
}
