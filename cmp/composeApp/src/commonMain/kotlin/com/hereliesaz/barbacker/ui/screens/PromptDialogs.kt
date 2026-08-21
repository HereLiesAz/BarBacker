package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Remove
import androidx.compose.material3.Button
import androidx.compose.material3.FilledTonalIconButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.ui.InputPrompt
import com.hereliesaz.barbacker.ui.QuantityPrompt
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/**
 * Collects free text for the synthesised "+ ADD …" and CUSTOM tiles.
 *
 * Suggestions are tap-to-fill rather than a closed picker: the field stays
 * free-text so a bar can stock something the built-in list has never heard
 * of, which is most of them.
 */
@Composable
fun InputPromptDialog(
    prompt: InputPrompt,
    onSubmit: (String) -> Unit,
    onDismiss: () -> Unit,
) {
    var value by remember(prompt) { mutableStateOf(prompt.initialValue) }

    val matching = remember(value, prompt.suggestions) {
        if (value.isBlank()) {
            prompt.suggestions.take(8)
        } else {
            prompt.suggestions
                .filter { it.contains(value, ignoreCase = true) && !it.equals(value, true) }
                .take(8)
        }
    }

    BarBackerDialog(
        title = prompt.title,
        onDismiss = onDismiss,
        actions = {
            TextButton(onClick = onDismiss) { Text("Cancel") }
            Spacer(Modifier.size(8.dp))
            Button(
                onClick = { onSubmit(value) },
                enabled = value.isNotBlank(),
            ) { Text("Add") }
        },
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            OutlinedTextField(
                value = value,
                onValueChange = { value = it },
                label = { Text(prompt.label) },
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
            )

            if (matching.isNotEmpty()) {
                Text(
                    text = "SUGGESTIONS",
                    style = MaterialTheme.typography.labelSmall,
                    color = BarBackerColors.OnSurfaceVariant,
                )
                LazyColumn(modifier = Modifier.fillMaxWidth().heightIn(max = 220.dp)) {
                    items(matching, key = { it }) { suggestion ->
                        Text(
                            text = suggestion,
                            color = BarBackerColors.OnSurface,
                            modifier = Modifier
                                .fillMaxWidth()
                                .clickable { value = suggestion }
                                .padding(vertical = 10.dp, horizontal = 8.dp),
                        )
                    }
                }
            }
        }
    }
}

/**
 * A numeric stepper for the "Other" quantity option under a beer type.
 *
 * Stepper rather than a text field: the answer is nearly always a small
 * number, and this is tapped on a tablet by someone holding a bottle in
 * their other hand.
 */
@Composable
fun QuantityPromptDialog(
    prompt: QuantityPrompt,
    onSubmit: (Int) -> Unit,
    onDismiss: () -> Unit,
) {
    var quantity by remember(prompt) { mutableStateOf(1) }

    BarBackerDialog(
        title = "Select Quantity",
        onDismiss = onDismiss,
        actions = {
            TextButton(onClick = onDismiss) { Text("Cancel") }
            Spacer(Modifier.size(8.dp))
            Button(onClick = { onSubmit(quantity) }) { Text("Send") }
        },
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            if (prompt.contextLabel.isNotBlank()) {
                Text(
                    text = prompt.contextLabel,
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurfaceVariant,
                    modifier = Modifier.padding(bottom = 12.dp),
                )
            }

            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(24.dp),
                modifier = Modifier.padding(vertical = 12.dp),
            ) {
                FilledTonalIconButton(
                    // Floors at one: zero of something is not a request.
                    onClick = { quantity = maxOf(1, quantity - 1) },
                    enabled = quantity > 1,
                ) {
                    Icon(Icons.Filled.Remove, contentDescription = "One fewer")
                }

                Text(
                    text = quantity.toString(),
                    fontSize = 36.sp,
                    fontWeight = FontWeight.Bold,
                    color = BarBackerColors.Primary,
                    modifier = Modifier
                        .background(
                            BarBackerColors.SecondaryContainer,
                            RoundedCornerShape(12.dp),
                        )
                        .padding(horizontal = 24.dp, vertical = 8.dp),
                )

                FilledTonalIconButton(onClick = { quantity += 1 }) {
                    Icon(Icons.Filled.Add, contentDescription = "One more")
                }
            }

            Spacer(Modifier.height(4.dp))
        }
    }
}
