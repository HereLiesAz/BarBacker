package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Store
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.currentTimeMillis
import com.hereliesaz.barbacker.data.NewBar
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/**
 * Picks which bar to work at.
 *
 * Lists the bars you already belong to, and offers a create form for one
 * that is not in the system yet.
 *
 * Searching OpenStreetMap for a nearby venue — the third entry path in the
 * web client — is not wired up here yet; it needs an HTTP client this
 * module does not carry. Until it lands, joining an existing bar you are
 * not already a member of happens through an invite link.
 */
@Composable
fun BarSelectionScreen(
    email: String?,
    joinedBarIds: List<String>,
    barNames: Map<String, String>,
    onSelectBar: (String) -> Unit,
    onCreateBar: (NewBar) -> Unit,
    onSignOut: () -> Unit,
) {
    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text(
                text = "Select Bar",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = BarBackerColors.Primary,
            )
            if (email != null) {
                Text(
                    text = "You are $email",
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurfaceVariant,
                )
            }

            TextButton(onClick = onSignOut) { Text("Sign Out") }

            Spacer(Modifier.height(16.dp))

            if (joinedBarIds.isNotEmpty()) {
                Column(modifier = Modifier.width(320.dp)) {
                    Text(
                        text = "MY BARS",
                        style = MaterialTheme.typography.labelMedium,
                        fontWeight = FontWeight.Bold,
                        color = BarBackerColors.OnSurfaceVariant,
                        modifier = Modifier.padding(start = 8.dp, bottom = 8.dp),
                    )
                    Card(
                        colors = CardDefaults.cardColors(
                            containerColor = BarBackerColors.SurfaceContainer,
                        ),
                    ) {
                        joinedBarIds.forEachIndexed { index, barId ->
                            if (index > 0) HorizontalDivider(color = BarBackerColors.Outline)
                            BarRow(
                                // Until the name resolves, the id is shown
                                // rather than a placeholder that could be
                                // mistaken for the bar's actual name.
                                name = barNames[barId] ?: barId,
                                onClick = { onSelectBar(barId) },
                            )
                        }
                    }
                }
                Spacer(Modifier.height(24.dp))
            }

            CreateBarForm(onCreate = onCreateBar, modifier = Modifier.width(320.dp))
        }
    }
}

@Composable
private fun BarRow(name: String, onClick: () -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        Icon(Icons.Filled.Store, contentDescription = null, tint = BarBackerColors.OnSurfaceVariant)
        Text(text = name, color = BarBackerColors.OnSurface, modifier = Modifier.weight(1f))
        Icon(
            Icons.AutoMirrored.Filled.ArrowForward,
            contentDescription = null,
            tint = BarBackerColors.OnSurfaceVariant,
        )
    }
}

@Composable
private fun CreateBarForm(
    onCreate: (NewBar) -> Unit,
    modifier: Modifier = Modifier,
) {
    var name by rememberSaveable { mutableStateOf("") }
    var city by rememberSaveable { mutableStateOf("") }
    var state by rememberSaveable { mutableStateOf("") }
    var zip by rememberSaveable { mutableStateOf("") }

    // Matches the web client's rule: a name, plus enough location to tell
    // two identically named venues apart.
    val canCreate = remember(name, city, state, zip) {
        name.isNotBlank() && ((city.isNotBlank() && state.isNotBlank()) || zip.isNotBlank())
    }

    Column(modifier = modifier, verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Text(
            text = "CREATE A BAR",
            style = MaterialTheme.typography.labelMedium,
            fontWeight = FontWeight.Bold,
            color = BarBackerColors.OnSurfaceVariant,
            modifier = Modifier.padding(start = 8.dp),
        )

        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Business Name") },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
        )
        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            OutlinedTextField(
                value = city,
                onValueChange = { city = it },
                label = { Text("City") },
                singleLine = true,
                modifier = Modifier.weight(2f),
            )
            OutlinedTextField(
                value = state,
                onValueChange = { state = it },
                label = { Text("State") },
                singleLine = true,
                modifier = Modifier.weight(1f),
            )
        }
        OutlinedTextField(
            value = zip,
            onValueChange = { zip = it },
            label = { Text("Zip Code") },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
        )

        Text(
            text = "Enter a name, and either City and State or a Zip Code.",
            style = MaterialTheme.typography.bodySmall,
            color = BarBackerColors.OnSurfaceVariant,
        )

        Button(
            onClick = {
                onCreate(
                    NewBar(
                        // Matches the web client's id scheme for a
                        // manually created bar. Bars sourced from
                        // OpenStreetMap instead use an osm_<type>_<id>
                        // key, since osm_id alone is not unique.
                        id = "bar_${currentTimeMillis()}",
                        name = name.trim(),
                        city = city.trim(),
                        state = state.trim(),
                        zip = zip.trim(),
                    ),
                )
            },
            enabled = canCreate,
            modifier = Modifier.fillMaxWidth().height(56.dp),
        ) {
            Text("Create Bar")
        }
    }
}
