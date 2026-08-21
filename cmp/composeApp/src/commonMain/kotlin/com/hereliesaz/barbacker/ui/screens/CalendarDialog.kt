package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.FilterChip
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.currentTimeMillis
import com.hereliesaz.barbacker.data.CalendarEventDraft
import com.hereliesaz.barbacker.logic.EventTimeParts
import com.hereliesaz.barbacker.logic.eventTimePartsFromMillis
import com.hereliesaz.barbacker.logic.eventTimePartsOf
import com.hereliesaz.barbacker.logic.formatEventRange
import com.hereliesaz.barbacker.logic.isoFromEventTimeParts
import com.hereliesaz.barbacker.model.CalendarEvent
import com.hereliesaz.barbacker.ui.DateTimeField
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.coroutines.launch

/** One hour, the default length of a newly added event. */
private const val DEFAULT_EVENT_MILLIS = 60L * 60L * 1000L

private val EVENT_TYPES = listOf(
    "event" to "Event",
    "shift" to "Shift",
    "booking" to "Booking",
)

private fun colorForType(type: String): Color = when (type) {
    "shift" -> Color(0xFF3B82F6)
    "booking" -> Color(0xFF8B5CF6)
    "event" -> Color(0xFF22C55E)
    // A provider-supplied type this client does not know about still has
    // to render — a synced Google event can carry anything.
    else -> BarBackerColors.OnSurfaceVariant
}

/**
 * The bar's calendar, as a chronological agenda.
 *
 * An agenda rather than a month grid, matching the web client: the sync,
 * the permissions, and the data model underneath are all real, and a grid
 * is a presentation choice that can follow later. On a phone behind a bar
 * it is arguably the better one anyway.
 *
 * Externally-owned events — anything an inbound Google or iCal sync wrote
 * — render read-only with a badge. That is not a UI preference:
 * `firestore.rules` rejects a client write to any event carrying an
 * `externalProvider`, so an edit control there would only ever fail.
 */
@Composable
fun CalendarDialog(
    events: List<CalendarEvent>,
    isManagerPlus: Boolean,
    onCreate: suspend (CalendarEventDraft) -> Result<Unit>,
    onUpdate: suspend (eventId: String, CalendarEventDraft) -> Result<Unit>,
    onDelete: suspend (eventId: String) -> Result<Unit>,
    onOpenSettings: (() -> Unit)?,
    onClose: () -> Unit,
) {
    var editing by remember { mutableStateOf<EventEditorTarget?>(null) }
    var confirmDeleteId by remember { mutableStateOf<String?>(null) }
    var deleteError by remember { mutableStateOf<String?>(null) }
    val scope = rememberCoroutineScope()

    BarBackerDialog(
        title = "Calendar",
        onDismiss = onClose,
        actions = {
            if (onOpenSettings != null) {
                TextButton(onClick = onOpenSettings) { Text("Settings") }
                Spacer(Modifier.weight(1f))
            }
            TextButton(onClick = onClose) { Text("Close") }
        },
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            if (isManagerPlus) {
                FilledTonalButton(
                    onClick = { editing = EventEditorTarget.New },
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    Icon(Icons.Filled.Add, contentDescription = null)
                    Spacer(Modifier.size(8.dp))
                    Text("Add Event")
                }
            }

            deleteError?.let {
                Text(it, color = BarBackerColors.Error, style = MaterialTheme.typography.bodySmall)
            }

            if (events.isEmpty()) {
                Text(
                    text = "Nothing on the calendar.",
                    color = BarBackerColors.OnSurfaceVariant,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.fillMaxWidth().padding(24.dp),
                )
            } else {
                LazyColumn(
                    modifier = Modifier.fillMaxWidth().heightIn(max = 400.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    items(events, key = { it.id }) { event ->
                        EventRow(
                            event = event,
                            canEdit = isManagerPlus && !event.isExternallyOwned,
                            onEdit = { editing = EventEditorTarget.Existing(event) },
                            onDelete = {
                                deleteError = null
                                confirmDeleteId = event.id
                            },
                        )
                    }
                }
            }
        }
    }

    editing?.let { target ->
        EventEditorDialog(
            target = target,
            onDismiss = { editing = null },
            onSave = { draft ->
                when (target) {
                    EventEditorTarget.New -> onCreate(draft)
                    is EventEditorTarget.Existing -> onUpdate(target.event.id, draft)
                }
            },
            onSaved = { editing = null },
        )
    }

    confirmDeleteId?.let { id ->
        AlertDialog(
            onDismissRequest = { confirmDeleteId = null },
            title = { Text("Delete event?") },
            text = { Text("This can't be undone.") },
            confirmButton = {
                Button(
                    onClick = {
                        confirmDeleteId = null
                        scope.launch {
                            onDelete(id).onFailure {
                                deleteError = "Failed to delete. Please try again."
                            }
                        }
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = BarBackerColors.Error,
                        contentColor = BarBackerColors.OnError,
                    ),
                ) { Text("Delete") }
            },
            dismissButton = {
                TextButton(onClick = { confirmDeleteId = null }) { Text("Cancel") }
            },
            containerColor = BarBackerColors.SurfaceContainer,
        )
    }
}

private sealed interface EventEditorTarget {
    data object New : EventEditorTarget
    data class Existing(val event: CalendarEvent) : EventEditorTarget
}

@Composable
private fun EventRow(
    event: CalendarEvent,
    canEdit: Boolean,
    onEdit: () -> Unit,
    onDelete: () -> Unit,
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp))
            .padding(12.dp),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        Box(
            modifier = Modifier
                .padding(top = 5.dp)
                .size(10.dp)
                .background(colorForType(event.type), CircleShape),
        )
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = event.title,
                fontWeight = FontWeight.Medium,
                color = BarBackerColors.OnSurface,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
            Text(
                text = formatEventRange(event.start, event.end),
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )
            event.description?.takeIf { it.isNotBlank() }?.let {
                Text(
                    text = it,
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurfaceVariant,
                    maxLines = 3,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            event.externalProvider?.let {
                Text(
                    text = "SYNCED FROM ${it.uppercase()}",
                    fontSize = 10.sp,
                    color = BarBackerColors.OnSurfaceVariant,
                )
            }
        }
        if (canEdit) {
            Column(horizontalAlignment = Alignment.End) {
                TextButton(onClick = onEdit) { Text("Edit") }
                TextButton(onClick = onDelete) {
                    Text("Delete", color = BarBackerColors.Error)
                }
            }
        }
    }
}

@Composable
private fun EventEditorDialog(
    target: EventEditorTarget,
    onDismiss: () -> Unit,
    onSave: suspend (CalendarEventDraft) -> Result<Unit>,
    onSaved: () -> Unit,
) {
    val existing = (target as? EventEditorTarget.Existing)?.event

    var title by remember { mutableStateOf(existing?.title.orEmpty()) }
    var description by remember { mutableStateOf(existing?.description.orEmpty()) }
    var type by remember { mutableStateOf(existing?.type ?: "event") }
    var start by remember { mutableStateOf(initialStart(existing)) }
    var end by remember { mutableStateOf(initialEnd(existing)) }
    var saving by remember { mutableStateOf(false) }
    var error by remember { mutableStateOf<String?>(null) }
    val scope = rememberCoroutineScope()

    BarBackerDialog(
        title = if (existing == null) "Add Event" else "Edit Event",
        onDismiss = onDismiss,
        actions = {
            TextButton(onClick = onDismiss) { Text("Cancel") }
            Spacer(Modifier.size(8.dp))
            Button(
                onClick = {
                    if (title.isBlank() || saving) return@Button
                    saving = true
                    error = null
                    scope.launch {
                        onSave(
                            CalendarEventDraft(
                                title = title,
                                start = isoFromEventTimeParts(start),
                                end = isoFromEventTimeParts(end),
                                type = type,
                                description = description.takeIf { it.isNotBlank() },
                            ),
                        )
                            .onSuccess { onSaved() }
                            .onFailure { error = "Failed to save. Please try again." }
                        saving = false
                    }
                },
                enabled = title.isNotBlank() && !saving,
            ) {
                Text(if (saving) "Saving..." else "Save")
            }
        },
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(max = 420.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            OutlinedTextField(
                value = title,
                onValueChange = { title = it },
                label = { Text("Title") },
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
            )

            DateTimeField(label = "Starts", parts = start, onChange = { start = it })
            DateTimeField(label = "Ends", parts = end, onChange = { end = it })

            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                EVENT_TYPES.forEach { (value, label) ->
                    FilterChip(
                        selected = type == value,
                        onClick = { type = value },
                        label = { Text(label) },
                    )
                }
            }

            OutlinedTextField(
                value = description,
                onValueChange = { description = it },
                label = { Text("Description (optional)") },
                minLines = 2,
                modifier = Modifier.fillMaxWidth(),
            )

            // An end before the start is allowed through rather than
            // blocked: an overnight shift entered as 10 PM to 2 AM is a
            // mistake the picker cannot distinguish from a deliberate
            // same-day range, and refusing to save would be worse than
            // saying so.
            if (endsBeforeStart(start, end)) {
                Text(
                    text = "Ends before it starts. If this is an overnight " +
                        "shift, move the end date to the next day.",
                    color = BarBackerColors.Warning,
                    style = MaterialTheme.typography.bodySmall,
                )
            }

            error?.let {
                Text(it, color = BarBackerColors.Error, style = MaterialTheme.typography.bodySmall)
            }
        }
    }
}

private fun initialStart(existing: CalendarEvent?): EventTimeParts =
    existing?.start?.let { eventTimePartsOf(it) }
        ?: eventTimePartsFromMillis(currentTimeMillis())

private fun initialEnd(existing: CalendarEvent?): EventTimeParts =
    existing?.end?.let { eventTimePartsOf(it) }
        ?: eventTimePartsFromMillis(currentTimeMillis() + DEFAULT_EVENT_MILLIS)

private fun endsBeforeStart(start: EventTimeParts, end: EventTimeParts): Boolean =
    isoFromEventTimeParts(end) < isoFromEventTimeParts(start)
