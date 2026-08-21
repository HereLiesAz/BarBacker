package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
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
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.POS_PROVIDERS
import com.hereliesaz.barbacker.data.POSSales
import com.hereliesaz.barbacker.model.POSConnectionStatus
import com.hereliesaz.barbacker.model.POSMenuItem
import com.hereliesaz.barbacker.model.POSProvider
import com.hereliesaz.barbacker.model.POSProviderStatus
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.coroutines.launch

/** The POS screen's callbacks, grouped to keep the signature readable. */
data class PosSettingsActions(
    val onConnectSquare: suspend () -> Result<Unit>,
    val onConnectToast: suspend (clientId: String, clientSecret: String, restaurantGuid: String) -> Result<Unit>,
    val onDisconnect: suspend (provider: String) -> Result<Unit>,
    val onSyncMenu: suspend (provider: String) -> Result<Int>,
    val onGetSales: suspend (provider: String) -> Result<POSSales>,
)

/**
 * Point-of-sale integration for one bar.
 *
 * Nothing here talks to a POS vendor. Connection status and the synced
 * menu are read from Firestore (both write-denied to clients), and the
 * three actions invoke Cloud Functions that hold the credentials. Only
 * Square and Toast are wired up; the rest render disabled rather than
 * being hidden, so a manager can see their POS is known about and simply
 * not ready.
 */
@Composable
fun PosSettingsDialog(
    connections: Map<String, POSConnectionStatus>,
    menu: List<POSMenuItem>,
    actions: PosSettingsActions,
    onClose: () -> Unit,
) {
    var busyProvider by remember { mutableStateOf<String?>(null) }
    var status by remember { mutableStateOf<String?>(null) }
    var insights by remember { mutableStateOf<POSSales?>(null) }
    val scope = rememberCoroutineScope()

    BarBackerDialog(
        title = "POS Integration",
        onDismiss = onClose,
        actions = { TextButton(onClick = onClose) { Text("Close") } },
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(max = 460.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            POS_PROVIDERS.forEach { provider ->
                if (provider.status == POSProviderStatus.ComingSoon) {
                    ComingSoonRow(provider)
                } else {
                    ProviderCard(
                        provider = provider,
                        connection = connections[provider.id],
                        syncedItemCount = menu.count { it.provider == provider.id },
                        busy = busyProvider != null,
                        onRun = { label, block ->
                            if (busyProvider != null) return@ProviderCard
                            busyProvider = provider.id
                            status = null
                            scope.launch {
                                block()
                                    .onSuccess { status = it }
                                    .onFailure { status = "$label failed. Please try again." }
                                busyProvider = null
                            }
                        },
                        actions = actions,
                        onInsights = { sales -> insights = sales },
                    )
                }
            }

            insights?.let { sales ->
                Text(
                    text = "Last 7 days: ${formatMoney(sales.grossCents)} gross, " +
                        "${sales.orderCount} orders.",
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurface,
                    modifier = Modifier
                        .fillMaxWidth()
                        .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp))
                        .padding(12.dp),
                )
            }

            status?.let {
                Text(it, style = MaterialTheme.typography.bodySmall, color = BarBackerColors.OnSurfaceVariant)
            }
        }
    }
}

@Composable
private fun ComingSoonRow(provider: POSProvider) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(BarBackerColors.SurfaceContainer, RoundedCornerShape(8.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween,
    ) {
        Text(provider.label, color = BarBackerColors.OnSurfaceVariant)
        Text(
            text = "Coming soon",
            fontSize = 11.sp,
            color = BarBackerColors.OnSurfaceVariant,
        )
    }
}

@Composable
private fun ProviderCard(
    provider: POSProvider,
    connection: POSConnectionStatus?,
    syncedItemCount: Int,
    busy: Boolean,
    onRun: (label: String, block: suspend () -> Result<String>) -> Unit,
    actions: PosSettingsActions,
    onInsights: (POSSales) -> Unit,
) {
    val connected = connection?.connected == true

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp))
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Text(provider.label, fontWeight = FontWeight.Medium, color = BarBackerColors.OnSurface)
            Text(
                text = if (connected) {
                    connection?.merchantId?.let { "Connected — $it" } ?: "Connected"
                } else {
                    "Not connected"
                },
                fontSize = 11.sp,
                color = if (connected) BarBackerColors.Success else BarBackerColors.OnSurfaceVariant,
            )
        }

        connection?.error?.let {
            Text(it, style = MaterialTheme.typography.bodySmall, color = BarBackerColors.Error)
        }

        when {
            connected -> Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    OutlinedButton(
                        enabled = !busy,
                        onClick = {
                            onRun("Sync") {
                                actions.onSyncMenu(provider.id).map { count -> "Synced $count items." }
                            }
                        },
                    ) { Text("Sync Menu") }
                    OutlinedButton(
                        enabled = !busy,
                        onClick = {
                            onRun("Insights") {
                                actions.onGetSales(provider.id).map { sales ->
                                    onInsights(sales)
                                    "Loaded 7-day insights."
                                }
                            }
                        },
                    ) { Text("7-Day Insights") }
                }
                TextButton(
                    enabled = !busy,
                    onClick = {
                        onRun("Disconnect") {
                            actions.onDisconnect(provider.id).map { "Disconnected." }
                        }
                    },
                ) { Text("Disconnect", color = BarBackerColors.Error) }

                if (connection?.lastSyncedAt != null) {
                    Text(
                        // Falls back to counting what actually landed in
                        // the menu collection — an older connection
                        // document may predate lastSyncedCount.
                        text = "Menu: ${connection.lastSyncedCount ?: syncedItemCount} items.",
                        fontSize = 11.sp,
                        color = BarBackerColors.OnSurfaceVariant,
                    )
                }
            }

            provider.id == SQUARE -> Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Button(
                    enabled = !busy,
                    onClick = {
                        onRun("Connect") {
                            actions.onConnectSquare().map { "Opened Square in your browser." }
                        }
                    },
                    modifier = Modifier.fillMaxWidth(),
                ) { Text("Connect Square") }
                Text(
                    text = "Opens your browser. Come back here once you've " +
                        "approved — this screen updates itself.",
                    fontSize = 10.sp,
                    color = BarBackerColors.OnSurfaceVariant,
                )
            }

            provider.id == TOAST -> ToastConnectForm(busy = busy, onRun = onRun, actions = actions)
        }
    }
}

@Composable
private fun ToastConnectForm(
    busy: Boolean,
    onRun: (label: String, block: suspend () -> Result<String>) -> Unit,
    actions: PosSettingsActions,
) {
    var clientId by remember { mutableStateOf("") }
    var clientSecret by remember { mutableStateOf("") }
    var restaurantGuid by remember { mutableStateOf("") }

    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        OutlinedTextField(
            value = clientId,
            onValueChange = { clientId = it },
            label = { Text("Client ID") },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
        )
        OutlinedTextField(
            value = clientSecret,
            onValueChange = { clientSecret = it },
            label = { Text("Client Secret") },
            singleLine = true,
            visualTransformation = PasswordVisualTransformation(),
            modifier = Modifier.fillMaxWidth(),
        )
        OutlinedTextField(
            value = restaurantGuid,
            onValueChange = { restaurantGuid = it },
            label = { Text("Restaurant GUID") },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
        )
        Button(
            enabled = !busy && clientId.isNotBlank() &&
                clientSecret.isNotBlank() && restaurantGuid.isNotBlank(),
            onClick = {
                onRun("Connect") {
                    actions.onConnectToast(clientId, clientSecret, restaurantGuid)
                        .map {
                            // Cleared on success rather than kept: the
                            // secret has reached the function that
                            // encrypts it, and there is no reason for it
                            // to stay in a text field on the bar.
                            clientId = ""
                            clientSecret = ""
                            restaurantGuid = ""
                            "Toast connected."
                        }
                }
            },
            modifier = Modifier.fillMaxWidth(),
        ) { Text("Connect Toast") }
        Text(
            text = "Toast has no browser consent screen for this integration, " +
                "so these go straight to the function that encrypts and stores them.",
            fontSize = 10.sp,
            color = BarBackerColors.OnSurfaceVariant,
        )
    }
}

/** Integer cents to `$1,234.56`. */
private fun formatMoney(cents: Long): String {
    val sign = if (cents < 0) "-" else ""
    val absolute = if (cents < 0) -cents else cents
    val dollars = absolute / 100
    val remainder = (absolute % 100).toString().padStart(2, '0')
    return "$sign$${dollars}.$remainder"
}

private const val SQUARE = "square"
private const val TOAST = "toast"
