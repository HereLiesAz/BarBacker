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
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Place
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Store
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
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
import com.hereliesaz.barbacker.data.PlaceResult
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/**
 * Picks which bar to work at.
 *
 * Three ways in, in descending order of preference: a bar you already
 * belong to, a bar found by search (either one this app knows about or an
 * OpenStreetMap venue), or a new one you create by hand.
 */
@Composable
fun BarSelectionScreen(
    email: String?,
    joinedBarIds: List<String>,
    barNames: Map<String, String>,
    searchResults: List<PlaceResult>,
    isSearching: Boolean,
    searchFailed: Boolean,
    onSearchQueryChanged: (String) -> Unit,
    onSelectPlace: (PlaceResult) -> Unit,
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

            BarSearchSection(
                results = searchResults,
                isSearching = isSearching,
                searchFailed = searchFailed,
                onQueryChanged = onSearchQueryChanged,
                onSelectPlace = onSelectPlace,
                modifier = Modifier.width(320.dp),
            )

            Spacer(Modifier.height(24.dp))

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

/**
 * Finds a bar to join, searching this app's own bars and OpenStreetMap at
 * once.
 *
 * Results paint progressively — whichever source answers first fills its
 * half — because Nominatim is a rate-limited public service and can be
 * slow, and there is no reason to make a local hit wait on it.
 */
@Composable
private fun BarSearchSection(
    results: List<PlaceResult>,
    isSearching: Boolean,
    searchFailed: Boolean,
    onQueryChanged: (String) -> Unit,
    onSelectPlace: (PlaceResult) -> Unit,
    modifier: Modifier = Modifier,
) {
    var query by rememberSaveable { mutableStateOf("") }

    Column(modifier = modifier, verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text(
            text = "FIND A BAR",
            style = MaterialTheme.typography.labelMedium,
            fontWeight = FontWeight.Bold,
            color = BarBackerColors.OnSurfaceVariant,
            modifier = Modifier.padding(start = 8.dp),
        )

        OutlinedTextField(
            value = query,
            onValueChange = {
                query = it
                onQueryChanged(it)
            },
            label = { Text("Search by name") },
            singleLine = true,
            leadingIcon = { Icon(Icons.Filled.Search, contentDescription = null) },
            trailingIcon = {
                if (isSearching) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(20.dp),
                        strokeWidth = 2.dp,
                    )
                }
            },
            modifier = Modifier.fillMaxWidth(),
        )

        when {
            searchFailed -> Text(
                text = "Couldn't search right now. Check your connection, " +
                    "or create the bar below.",
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.Error,
                modifier = Modifier.padding(horizontal = 8.dp),
            )

            results.isNotEmpty() -> Card(
                colors = CardDefaults.cardColors(
                    containerColor = BarBackerColors.SurfaceContainer,
                ),
            ) {
                results.forEachIndexed { index, place ->
                    if (index > 0) HorizontalDivider(color = BarBackerColors.Outline)
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clickable { onSelectPlace(place) }
                            .padding(12.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(12.dp),
                    ) {
                        Icon(
                            imageVector = if (place.isExistingBar) {
                                Icons.Filled.Store
                            } else {
                                Icons.Filled.Place
                            },
                            contentDescription = null,
                            // A bar already in the system is the better
                            // choice, so it is visually distinguished from
                            // an OpenStreetMap entry that would create one.
                            tint = if (place.isExistingBar) {
                                BarBackerColors.Primary
                            } else {
                                BarBackerColors.OnSurfaceVariant
                            },
                        )
                        Column(modifier = Modifier.weight(1f)) {
                            Text(text = place.name, color = BarBackerColors.OnSurface)
                            Text(
                                text = place.displayName,
                                style = MaterialTheme.typography.bodySmall,
                                color = BarBackerColors.OnSurfaceVariant,
                                maxLines = 2,
                            )
                        }
                    }
                }
            }
        }
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
