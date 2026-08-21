package com.hereliesaz.barbacker.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.DatePicker
import androidx.compose.material3.DatePickerDialog
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TimePicker
import androidx.compose.material3.rememberDatePickerState
import androidx.compose.material3.rememberTimePickerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.hereliesaz.barbacker.logic.EventTimeParts
import com.hereliesaz.barbacker.logic.epochMillisOf
import com.hereliesaz.barbacker.logic.eventTimePartsFromMillis
import com.hereliesaz.barbacker.logic.formatClockTime
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.datetime.TimeZone

/**
 * A date and a time, each behind its own picker.
 *
 * Two controls rather than one because Material has no combined
 * date-and-time picker, and because a manager adjusting a shift usually
 * wants to change only one of them.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DateTimeField(
    label: String,
    parts: EventTimeParts,
    onChange: (EventTimeParts) -> Unit,
    modifier: Modifier = Modifier,
) {
    var pickingDate by remember { mutableStateOf(false) }
    var pickingTime by remember { mutableStateOf(false) }

    Column(modifier = modifier.fillMaxWidth()) {
        Text(
            text = label,
            style = MaterialTheme.typography.labelMedium,
            color = BarBackerColors.OnSurfaceVariant,
        )
        Row(
            modifier = Modifier.fillMaxWidth().padding(top = 4.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            OutlinedButton(onClick = { pickingDate = true }, modifier = Modifier.weight(1f)) {
                Text("${parts.year}-${pad(parts.month)}-${pad(parts.day)}")
            }
            OutlinedButton(onClick = { pickingTime = true }, modifier = Modifier.weight(1f)) {
                Text(formatClockTime(parts.hour, parts.minute))
            }
        }
    }

    if (pickingDate) {
        // Material's date picker works in UTC midnights — the value it
        // hands back is the picked CALENDAR DAY at 00:00Z, not an instant
        // in the user's zone. Seeding and reading it back through
        // TimeZone.UTC is what keeps a date picked late in the evening
        // from landing on the following day.
        val state = rememberDatePickerState(
            initialSelectedDateMillis = epochMillisOf(
                parts.copy(hour = 0, minute = 0),
                TimeZone.UTC,
            ),
        )
        DatePickerDialog(
            onDismissRequest = { pickingDate = false },
            confirmButton = {
                TextButton(
                    onClick = {
                        state.selectedDateMillis?.let { millis ->
                            val picked = eventTimePartsFromMillis(millis, TimeZone.UTC)
                            onChange(
                                parts.copy(
                                    year = picked.year,
                                    month = picked.month,
                                    day = picked.day,
                                ),
                            )
                        }
                        pickingDate = false
                    },
                ) { Text("OK") }
            },
            dismissButton = {
                TextButton(onClick = { pickingDate = false }) { Text("Cancel") }
            },
            colors = androidx.compose.material3.DatePickerDefaults.colors(
                containerColor = BarBackerColors.SurfaceContainer,
            ),
        ) {
            DatePicker(state = state)
        }
    }

    if (pickingTime) {
        val state = rememberTimePickerState(
            initialHour = parts.hour,
            initialMinute = parts.minute,
            is24Hour = false,
        )
        // Not a DatePickerDialog: Material ships no TimePickerDialog, so
        // the picker goes in a plain AlertDialog with the same buttons.
        androidx.compose.material3.AlertDialog(
            onDismissRequest = { pickingTime = false },
            confirmButton = {
                TextButton(
                    onClick = {
                        onChange(parts.copy(hour = state.hour, minute = state.minute))
                        pickingTime = false
                    },
                ) { Text("OK") }
            },
            dismissButton = {
                TextButton(onClick = { pickingTime = false }) { Text("Cancel") }
            },
            text = { TimePicker(state = state) },
            containerColor = BarBackerColors.SurfaceContainer,
        )
    }
}

private fun pad(value: Int): String = value.toString().padStart(2, '0')
