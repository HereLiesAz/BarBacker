package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.HourglassEmpty
import androidx.compose.material.icons.filled.LocalBar
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.RadioButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.JOB_TITLES
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/** Shown while an invite lookup is in flight, before offering the join form. */
@Composable
fun CheckingInviteScreen() {
    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            CircularProgressIndicator(modifier = Modifier.size(32.dp))
            Spacer(Modifier.height(16.dp))
            Text("Checking for an invite...", color = BarBackerColors.OnSurfaceVariant)
        }
    }
}

/**
 * Collects a display name and, for anyone who did not create the bar, a
 * job title.
 *
 * The picker never offers a privilege tier. Owner is granted only by
 * matching the bar's `ownerId`, and Manager only server-side, so what is
 * chosen here is purely how the person is announced to the floor and what
 * they get paged for.
 */
@Composable
fun RoleSelectionScreen(
    isNewBar: Boolean,
    onConfirm: (jobTitle: String, displayName: String) -> Unit,
    onBack: () -> Unit,
    onSignOut: () -> Unit,
) {
    var displayName by rememberSaveable { mutableStateOf("") }
    var selectedTitle by rememberSaveable { mutableStateOf<String?>(null) }

    val canConfirm = displayName.isNotBlank() && (isNewBar || selectedTitle != null)

    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Row(
                modifier = Modifier.width(320.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                IconButton(onClick = onBack) {
                    Icon(
                        Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "Back to bar selection",
                        tint = BarBackerColors.OnSurface,
                    )
                }
                TextButton(onClick = onSignOut) { Text("Sign Out") }
            }

            Spacer(Modifier.height(16.dp))

            Text(
                text = if (isNewBar) "You Own This Bar" else "Identification",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = BarBackerColors.Primary,
                textAlign = TextAlign.Center,
            )
            Text(
                text = if (isNewBar) {
                    "You created it, so you're the Owner. What should we call you?"
                } else {
                    "Name and Rank, soldier."
                },
                color = BarBackerColors.OnSurfaceVariant,
                textAlign = TextAlign.Center,
                modifier = Modifier.width(320.dp).padding(vertical = 8.dp),
            )

            Spacer(Modifier.height(16.dp))

            OutlinedTextField(
                value = displayName,
                onValueChange = { displayName = it },
                label = { Text("Display Name (e.g. 'Angry Steve')") },
                singleLine = true,
                modifier = Modifier.width(320.dp),
            )

            if (!isNewBar) {
                Spacer(Modifier.height(16.dp))
                Card(
                    colors = CardDefaults.cardColors(
                        containerColor = BarBackerColors.SurfaceContainer,
                    ),
                    modifier = Modifier.width(320.dp).heightIn(max = 280.dp),
                ) {
                    Column(modifier = Modifier.verticalScroll(rememberScrollState())) {
                        JOB_TITLES.forEach { title ->
                            JobTitleRow(
                                title = title,
                                selected = selectedTitle == title,
                                onSelect = { selectedTitle = title },
                            )
                        }
                    }
                }
            }

            Spacer(Modifier.height(24.dp))

            Button(
                onClick = {
                    // A new bar's creator has no picker, and the web client
                    // records "Owner" as their job title in that case.
                    onConfirm(selectedTitle ?: "Owner", displayName.trim())
                },
                enabled = canConfirm,
                modifier = Modifier.width(320.dp).height(56.dp),
            ) {
                Text("Clock In")
            }
        }
    }
}

@Composable
private fun JobTitleRow(title: String, selected: Boolean, onSelect: () -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(if (selected) Color.White.copy(alpha = 0.10f) else Color.Transparent)
            .clickable(onClick = onSelect)
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        Icon(
            imageVector = if (title == "Bartender") Icons.Filled.LocalBar else Icons.Filled.Person,
            contentDescription = null,
            tint = BarBackerColors.OnSurfaceVariant,
        )
        Text(text = title, color = BarBackerColors.OnSurface, modifier = Modifier.weight(1f))
        RadioButton(selected = selected, onClick = onSelect)
    }
}

/**
 * Terminal state for a member awaiting approval at a bar whose join policy
 * requires it. Nothing on the dashboard is reachable from here — the
 * membership document genuinely does not carry the access yet.
 */
@Composable
fun ApprovalPendingScreen(barName: String, onCancel: () -> Unit) {
    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Box(modifier = Modifier.fillMaxSize().padding(24.dp), contentAlignment = Alignment.Center) {
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Icon(
                    Icons.Filled.HourglassEmpty,
                    contentDescription = null,
                    tint = BarBackerColors.Warning,
                    modifier = Modifier.size(64.dp),
                )
                Spacer(Modifier.height(16.dp))
                Text(
                    text = "Approval Pending",
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold,
                    color = BarBackerColors.Primary,
                )
                Spacer(Modifier.height(8.dp))
                Text(
                    text = "A manager must approve your request to join $barName.",
                    color = BarBackerColors.OnSurfaceVariant,
                    textAlign = TextAlign.Center,
                    style = MaterialTheme.typography.bodyMedium,
                )
                Spacer(Modifier.height(24.dp))
                // Returns to bar selection; the membership document stays
                // pending so an approval still lands if it arrives later.
                TextButton(onClick = onCancel) { Text("Cancel") }
            }
        }
    }
}
