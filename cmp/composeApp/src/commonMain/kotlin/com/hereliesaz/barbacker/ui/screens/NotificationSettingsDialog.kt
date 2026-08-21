package com.hereliesaz.barbacker.ui.screens

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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.NotificationsActive
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.NOTIFICATION_DEFAULTS_BY_TITLE
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.ui.iconForName
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/**
 * Which requests page this member, on this bar.
 *
 * @param roleLabel the member's job title, falling back to their privilege
 *   tier. It is both what the intro line shows and the key "Reset to
 *   Default" looks up — the defaults are keyed by job function, not by
 *   privilege, because what you get paged for depends on what you do.
 * @param buttons the bar's TOP-LEVEL buttons only. Sub-menu children are
 *   not individually subscribable; a page for "GARNISH: LIMES" is routed
 *   by its parent.
 */
@Composable
fun NotificationSettingsDialog(
    roleLabel: String,
    currentPreferences: List<String>,
    buttons: List<ButtonConfig>,
    ntfyTopic: String?,
    /** Opens the ntfy app on this topic. False if nothing handled the link. */
    onSubscribeNtfy: (String) -> Boolean,
    onSave: (List<String>) -> Unit,
    onClose: () -> Unit,
) {
    // Seeded once per open. Every toggle is local until Save, so Cancel
    // genuinely discards rather than leaving half-applied changes.
    var preferences by remember { mutableStateOf(currentPreferences.toSet()) }
    var ntfyError by remember { mutableStateOf<String?>(null) }

    BarBackerDialog(
        title = "Notification Settings",
        onDismiss = onClose,
        actions = {
            TextButton(
                onClick = {
                    preferences = NOTIFICATION_DEFAULTS_BY_TITLE[roleLabel].orEmpty().toSet()
                },
            ) { Text("Reset to Default") }
            Spacer(Modifier.weight(1f))
            TextButton(onClick = onClose) { Text("Cancel") }
            Spacer(Modifier.size(8.dp))
            Button(
                onClick = {
                    onSave(preferences.toList())
                    onClose()
                },
            ) { Text("Save") }
        },
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Text(
                text = if (roleLabel.isBlank()) {
                    "Enable or disable notifications for yourself."
                } else {
                    "Enable or disable notifications for your role ($roleLabel)."
                },
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )

            if (ntfyTopic != null) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 4.dp),
                    verticalArrangement = Arrangement.spacedBy(4.dp),
                ) {
                    Text(
                        text = "iOS Alerts (ntfy)",
                        style = MaterialTheme.typography.labelLarge,
                        color = BarBackerColors.OnSurface,
                    )
                    // Shown as well as linked: the deep link only works
                    // if the ntfy app is installed, and the topic still
                    // has to be readable so it can be typed in by hand on
                    // a device that does not have it yet.
                    Text(
                        text = ntfyTopic,
                        style = MaterialTheme.typography.bodySmall,
                        color = BarBackerColors.OnSurfaceVariant,
                    )
                    OutlinedButton(
                        onClick = {
                            // False means nothing on this device claims
                            // ntfy:// — almost always that the app is not
                            // installed. Said plainly rather than left as
                            // a button that appears to do nothing.
                            if (!onSubscribeNtfy(ntfyTopic)) {
                                ntfyError = "Install the ntfy app first, then try again."
                            } else {
                                ntfyError = null
                            }
                        },
                        modifier = Modifier.fillMaxWidth(),
                    ) {
                        Icon(
                            Icons.Filled.NotificationsActive,
                            contentDescription = null,
                            modifier = Modifier.size(18.dp),
                        )
                        Spacer(Modifier.size(8.dp))
                        Text("Subscribe in ntfy")
                    }
                    ntfyError?.let {
                        Text(
                            text = it,
                            style = MaterialTheme.typography.bodySmall,
                            color = BarBackerColors.Warning,
                        )
                    }
                    Text(
                        text = "Free, and the only way an iOS device is paged " +
                            "until this app ships its own APNs build.",
                        fontSize = 10.sp,
                        color = BarBackerColors.OnSurfaceVariant,
                    )
                }
            }

            LazyColumn(modifier = Modifier.fillMaxWidth().heightIn(max = 360.dp)) {
                items(buttons, key = { it.id }) { button ->
                    val enabled = button.id in preferences
                    Row(
                        modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp),
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        Icon(
                            imageVector = iconForName(button.icon),
                            contentDescription = null,
                            tint = BarBackerColors.OnSurfaceVariant,
                        )
                        Spacer(Modifier.size(12.dp))
                        Text(
                            text = button.label,
                            color = BarBackerColors.OnSurface,
                            modifier = Modifier.weight(1f),
                        )
                        Switch(
                            checked = enabled,
                            onCheckedChange = { checked ->
                                preferences = if (checked) {
                                    preferences + button.id
                                } else {
                                    preferences - button.id
                                }
                            },
                        )
                    }
                }
            }
        }
    }
}
