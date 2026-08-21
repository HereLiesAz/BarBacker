package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
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
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.data.GoogleCalendar
import com.hereliesaz.barbacker.model.CalendarConnectionStatus
import com.hereliesaz.barbacker.model.ICalSubscription
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.coroutines.launch

/** Everything the calendar settings screen can do. Grouped to keep the signature readable. */
data class CalendarSettingsActions(
    val onConnectGoogle: suspend () -> Result<Unit>,
    val onListCalendars: suspend () -> Result<List<GoogleCalendar>>,
    val onSelectCalendar: suspend (String) -> Result<Unit>,
    val onDisconnectGoogle: suspend () -> Result<Unit>,
    val onAddSubscription: suspend (String) -> Result<Unit>,
    val onRemoveSubscription: suspend (String) -> Result<Unit>,
    val onRotateFeedToken: suspend (revoke: Boolean) -> Result<Unit>,
    val onCopyFeedUrl: (String) -> Unit,
)

/**
 * Google connect, the outbound feed, and inbound `.ics` subscriptions.
 *
 * Manager+ only, and not merely by convention: every collection behind
 * this screen is `isManagerPlus`-gated in `firestore.rules`, so a Staff
 * member opening it would see three empty boxes and a permission error.
 */
@Composable
fun CalendarSettingsDialog(
    googleConnection: CalendarConnectionStatus?,
    subscriptions: List<ICalSubscription>,
    feedUrl: String?,
    hasFeedToken: Boolean,
    feedBaseConfigured: Boolean,
    actions: CalendarSettingsActions,
    onClose: () -> Unit,
) {
    var calendars by remember { mutableStateOf<List<GoogleCalendar>?>(null) }
    var newSubscriptionUrl by remember { mutableStateOf("") }
    var busy by remember { mutableStateOf(false) }
    var message by remember { mutableStateOf<String?>(null) }
    val scope = rememberCoroutineScope()

    fun run(failureText: String, block: suspend () -> Result<Unit>) {
        if (busy) return
        busy = true
        message = null
        scope.launch {
            block().onFailure { message = failureText }
            busy = false
        }
    }

    BarBackerDialog(
        title = "Calendar Settings",
        onDismiss = onClose,
        actions = { TextButton(onClick = onClose) { Text("Close") } },
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(max = 460.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            SettingsSection("Google Calendar") {
                if (googleConnection?.connected == true) {
                    Text(
                        text = googleConnection.calendarId
                            ?.let { "Connected — $it" }
                            ?: "Connected — no calendar selected yet",
                        color = BarBackerColors.Success,
                        style = MaterialTheme.typography.bodySmall,
                    )
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        OutlinedButton(
                            enabled = !busy,
                            onClick = {
                                if (busy) return@OutlinedButton
                                busy = true
                                message = null
                                scope.launch {
                                    actions.onListCalendars()
                                        .onSuccess { calendars = it }
                                        .onFailure { message = "Could not list calendars." }
                                    busy = false
                                }
                            },
                        ) {
                            Text(
                                if (googleConnection.calendarId == null) {
                                    "Pick Calendar"
                                } else {
                                    "Change Calendar"
                                },
                            )
                        }
                        TextButton(
                            enabled = !busy,
                            onClick = {
                                run("Could not disconnect.") { actions.onDisconnectGoogle() }
                            },
                        ) { Text("Disconnect") }
                    }

                    calendars?.forEach { calendar ->
                        TextButton(
                            enabled = !busy,
                            onClick = {
                                run("Could not select that calendar.") {
                                    actions.onSelectCalendar(calendar.id)
                                }
                            },
                            modifier = Modifier.fillMaxWidth(),
                        ) {
                            Text(
                                text = calendar.summary.ifBlank { calendar.id } +
                                    if (calendar.primary) " (primary)" else "",
                                modifier = Modifier.fillMaxWidth(),
                            )
                        }
                    }
                } else {
                    Button(
                        enabled = !busy,
                        onClick = { run("Could not start the Google connect flow.") { actions.onConnectGoogle() } },
                        modifier = Modifier.fillMaxWidth(),
                    ) { Text("Connect Google Calendar") }

                    // The web client navigates the page and comes back
                    // through the OAuth redirect. There is no redirect
                    // back into this app, so the flow finishes in the
                    // browser and the listener here picks it up. Saying
                    // so beats a screen that appears to do nothing.
                    Text(
                        text = "Opens your browser. Come back here once " +
                            "you've approved — this screen updates itself.",
                        fontSize = 10.sp,
                        color = BarBackerColors.OnSurfaceVariant,
                    )
                }
                googleConnection?.error?.let {
                    Text(it, color = BarBackerColors.Error, style = MaterialTheme.typography.bodySmall)
                }
            }

            SettingsSection("Outbound iCal Feed") {
                when {
                    feedUrl != null -> {
                        Text(
                            text = feedUrl,
                            style = MaterialTheme.typography.bodySmall,
                            color = BarBackerColors.OnSurfaceVariant,
                        )
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            OutlinedButton(onClick = { actions.onCopyFeedUrl(feedUrl) }) {
                                Text("Copy URL")
                            }
                            OutlinedButton(
                                enabled = !busy,
                                onClick = {
                                    run("Could not rotate the token.") {
                                        actions.onRotateFeedToken(false)
                                    }
                                },
                            ) { Text("Rotate") }
                            TextButton(
                                enabled = !busy,
                                onClick = {
                                    run("Could not revoke the token.") {
                                        actions.onRotateFeedToken(true)
                                    }
                                },
                            ) { Text("Revoke", color = BarBackerColors.Error) }
                        }
                    }

                    // A token exists but nobody told this build where the
                    // feed is served from. Showing a constructed URL would
                    // hand out a link that 404s.
                    hasFeedToken && !feedBaseConfigured -> Text(
                        text = "A feed token exists, but this build has no " +
                            "VITE_ICAL_FEED_BASE_URL, so the link can't be shown.",
                        color = BarBackerColors.Warning,
                        style = MaterialTheme.typography.bodySmall,
                    )

                    else -> Button(
                        enabled = !busy,
                        onClick = {
                            run("Could not generate a feed URL.") {
                                actions.onRotateFeedToken(false)
                            }
                        },
                        modifier = Modifier.fillMaxWidth(),
                    ) { Text("Generate Feed URL") }
                }
            }

            SettingsSection("Inbound iCal Subscriptions") {
                subscriptions.forEach { subscription ->
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = subscription.url,
                                style = MaterialTheme.typography.bodySmall,
                                color = BarBackerColors.OnSurface,
                                maxLines = 2,
                            )
                            subscription.lastError?.let {
                                Text(
                                    text = it,
                                    fontSize = 10.sp,
                                    color = BarBackerColors.Error,
                                    maxLines = 2,
                                )
                            }
                        }
                        TextButton(
                            enabled = !busy,
                            onClick = {
                                run("Could not remove that subscription.") {
                                    actions.onRemoveSubscription(subscription.id)
                                }
                            },
                        ) { Text("Remove") }
                    }
                }

                OutlinedTextField(
                    value = newSubscriptionUrl,
                    onValueChange = { newSubscriptionUrl = it },
                    label = { Text("External .ics URL") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth(),
                )
                Button(
                    enabled = newSubscriptionUrl.isNotBlank() && !busy,
                    onClick = {
                        val url = newSubscriptionUrl.trim()
                        if (url.isEmpty() || busy) return@Button
                        busy = true
                        message = null
                        scope.launch {
                            actions.onAddSubscription(url)
                                .onSuccess { newSubscriptionUrl = "" }
                                .onFailure { message = "Could not add that subscription." }
                            busy = false
                        }
                    },
                    modifier = Modifier.fillMaxWidth(),
                ) { Text("Add") }
            }

            message?.let {
                Text(it, color = BarBackerColors.Error, style = MaterialTheme.typography.bodySmall)
            }
        }
    }
}

@Composable
private fun SettingsSection(title: String, content: @Composable ColumnScope.() -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp))
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(
            text = title.uppercase(),
            style = MaterialTheme.typography.labelSmall,
            fontWeight = FontWeight.Bold,
            color = BarBackerColors.OnSurfaceVariant,
            letterSpacing = 1.sp,
        )
        content()
    }
}
