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
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.PersonAdd
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Switch
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
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.model.EightySixEntry
import com.hereliesaz.barbacker.model.EightySixVisibility
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.coroutines.launch

/**
 * The bar's barred-patron list.
 *
 * Every member with a role sees public entries. Manager+ can add and
 * remove. Premium bars can additionally mark an entry private with a
 * reason — and a non-qualifying reader never fetches those at all, so the
 * reason text does not reach their device in the first place.
 */
@Composable
fun EightySixDialog(
    entries: List<EightySixEntry>,
    isPremium: Boolean,
    isManagerPlus: Boolean,
    onAdd: suspend (patronName: String, reason: String?, visibility: EightySixVisibility) -> Result<Unit>,
    onDelete: (entryId: String) -> Unit,
    onClose: () -> Unit,
) {
    var showAddForm by remember { mutableStateOf(false) }
    var patronName by remember { mutableStateOf("") }
    var reason by remember { mutableStateOf("") }
    var isPrivate by remember { mutableStateOf(false) }
    var submitting by remember { mutableStateOf(false) }
    var confirmDeleteId by remember { mutableStateOf<String?>(null) }
    var addError by remember { mutableStateOf<String?>(null) }

    val scope = rememberCoroutineScope()

    fun resetForm() {
        showAddForm = false
        patronName = ""
        reason = ""
        isPrivate = false
        addError = null
    }

    BarBackerDialog(
        title = "86'd List (${entries.size})",
        onDismiss = onClose,
        actions = { TextButton(onClick = onClose) { Text("Close") } },
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            if (!isPremium) {
                Text(
                    text = "Upgrade to Premium to add private notes and reasons.",
                    color = BarBackerColors.Pinned,
                    style = MaterialTheme.typography.bodySmall,
                    modifier = Modifier
                        .fillMaxWidth()
                        .background(
                            BarBackerColors.Pinned.copy(alpha = 0.12f),
                            RoundedCornerShape(4.dp),
                        )
                        .padding(8.dp),
                )
            }

            if (isManagerPlus && !showAddForm) {
                FilledTonalButton(
                    onClick = { showAddForm = true },
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    Icon(Icons.Filled.PersonAdd, contentDescription = null)
                    Spacer(Modifier.size(8.dp))
                    Text("Add Person")
                }
            }

            if (isManagerPlus && showAddForm) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp))
                        .padding(12.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    OutlinedTextField(
                        value = patronName,
                        onValueChange = { patronName = it },
                        label = { Text("Patron Name") },
                        singleLine = true,
                        modifier = Modifier.fillMaxWidth(),
                    )

                    if (isPremium) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                        ) {
                            Switch(checked = isPrivate, onCheckedChange = { isPrivate = it })
                            Text(
                                text = "Private entry (hidden from non-managers)",
                                style = MaterialTheme.typography.bodySmall,
                                color = BarBackerColors.OnSurface,
                            )
                        }

                        // Only offered on a private entry: a reason on a
                        // public one would be readable by every member, so
                        // it is discarded rather than stored.
                        if (isPrivate) {
                            OutlinedTextField(
                                value = reason,
                                onValueChange = { reason = it },
                                label = { Text("Reason (private)") },
                                minLines = 2,
                                modifier = Modifier.fillMaxWidth(),
                            )
                        }
                    }

                    addError?.let {
                        Text(
                            text = it,
                            color = BarBackerColors.Error,
                            style = MaterialTheme.typography.bodySmall,
                        )
                    }

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.End,
                    ) {
                        TextButton(onClick = ::resetForm) { Text("Cancel") }
                        Spacer(Modifier.size(8.dp))
                        Button(
                            onClick = {
                                if (patronName.isBlank() || submitting) return@Button
                                submitting = true
                                addError = null
                                scope.launch {
                                    onAdd(
                                        patronName.trim(),
                                        reason.trim().takeIf { it.isNotEmpty() },
                                        if (isPrivate) {
                                            EightySixVisibility.Private
                                        } else {
                                            EightySixVisibility.Public
                                        },
                                    )
                                        .onSuccess { resetForm() }
                                        .onFailure {
                                            addError = "Failed to add entry. Please try again."
                                        }
                                    submitting = false
                                }
                            },
                            enabled = patronName.isNotBlank() && !submitting,
                        ) {
                            Text(if (submitting) "Adding..." else "Add")
                        }
                    }
                }
            }

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .heightIn(max = 320.dp)
                    .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp)),
            ) {
                if (entries.isEmpty()) {
                    Text(
                        text = "No one on the 86'd list.",
                        color = BarBackerColors.OnSurfaceVariant,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.fillMaxWidth().padding(16.dp),
                    )
                } else {
                    LazyColumn {
                        items(entries, key = { it.id }) { entry ->
                            EightySixRow(
                                entry = entry,
                                canDelete = isManagerPlus,
                                onRequestDelete = { confirmDeleteId = entry.id },
                            )
                            HorizontalDivider(color = BarBackerColors.Outline)
                        }
                    }
                }
            }
        }
    }

    confirmDeleteId?.let { id ->
        AlertDialog(
            onDismissRequest = { confirmDeleteId = null },
            title = { Text("Remove from 86'd List?") },
            text = { Text("Are you sure you want to remove this person from the 86'd list?") },
            confirmButton = {
                Button(
                    onClick = {
                        onDelete(id)
                        confirmDeleteId = null
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = BarBackerColors.Error,
                        contentColor = BarBackerColors.OnError,
                    ),
                ) { Text("Remove") }
            },
            dismissButton = {
                TextButton(onClick = { confirmDeleteId = null }) { Text("Cancel") }
            },
            containerColor = BarBackerColors.SurfaceContainer,
        )
    }
}

@Composable
private fun EightySixRow(
    entry: EightySixEntry,
    canDelete: Boolean,
    onRequestDelete: () -> Unit,
) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                // The lock icon and the reason line below are the only
                // visual markers separating a private entry from a public one.
                if (entry.visibility == EightySixVisibility.Private) {
                    Icon(
                        Icons.Filled.Lock,
                        contentDescription = "Private entry",
                        tint = BarBackerColors.Pinned,
                        modifier = Modifier.size(16.dp),
                    )
                    Spacer(Modifier.size(6.dp))
                }
                Text(
                    text = entry.patronName,
                    fontWeight = FontWeight.Medium,
                    color = BarBackerColors.OnSurface,
                )
            }
            Text(
                text = "Submitted by ${entry.submitterName}",
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )
            val reasonText = entry.reason
            if (entry.visibility == EightySixVisibility.Private && !reasonText.isNullOrBlank()) {
                Text(
                    text = reasonText,
                    fontSize = 12.sp,
                    fontStyle = FontStyle.Italic,
                    color = BarBackerColors.Pinned.copy(alpha = 0.8f),
                    modifier = Modifier.padding(top = 2.dp),
                )
            }
        }

        if (canDelete) {
            IconButton(onClick = onRequestDelete) {
                Icon(
                    Icons.Filled.Close,
                    contentDescription = "Remove ${entry.patronName} from 86'd list",
                    tint = BarBackerColors.OnSurfaceVariant,
                )
            }
        }
    }
}
