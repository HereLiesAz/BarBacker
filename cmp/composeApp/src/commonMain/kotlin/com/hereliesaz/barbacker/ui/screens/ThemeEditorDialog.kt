package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
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
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.text.KeyboardOptions
import com.hereliesaz.barbacker.data.PickedImage
import com.hereliesaz.barbacker.logic.contrastColorFor
import com.hereliesaz.barbacker.model.BarTheme
import com.hereliesaz.barbacker.ui.RemoteImage
import com.hereliesaz.barbacker.ui.rememberImagePicker
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import com.hereliesaz.barbacker.ui.theme.parseHexColor
import kotlinx.coroutines.launch

/** The stock pair, and what "Reset" goes back to. */
private const val DEFAULT_PRIMARY = "#FFFFFF"
private const val DEFAULT_ACCENT = "#1E1E1E"
private const val DEFAULT_FONT = "system-ui, sans-serif"

/**
 * The same four options the web client offers, stored as the CSS stack it
 * writes, so a font chosen in either client survives a round trip through
 * the other. What this client can actually render from them is narrower —
 * see `familyFor` in Theme.kt.
 */
private val FONT_OPTIONS = listOf(
    "System Default" to DEFAULT_FONT,
    "Roboto" to "Roboto, sans-serif",
    "Inter" to "Inter, sans-serif",
    "Playfair Display" to "\"Playfair Display\", serif",
)

/**
 * A palette to tap, since there is no platform colour picker in Compose
 * Multiplatform and a hex field alone is a poor way to choose a colour on
 * a phone behind a bar. The field stays, for a brand colour that has to be
 * exact.
 */
private val SWATCHES = listOf(
    "#FFFFFF", "#000000", "#1E1E1E", "#EF4444",
    "#F97316", "#EAB308", "#22C55E", "#3B82F6",
    "#8B5CF6", "#EC4899", "#14B8A6", "#A16207",
)

/**
 * Premium branding for one bar.
 *
 * The preview is not decoration — it is the only place the accent colour
 * and its derived label colour appear together before the change reaches
 * every device on the floor.
 */
@Composable
fun ThemeEditorDialog(
    currentTheme: BarTheme?,
    onSave: suspend (BarTheme) -> Result<Unit>,
    onUploadLogo: suspend (PickedImage) -> Result<String>,
    onClose: () -> Unit,
) {
    var primaryColor by remember { mutableStateOf(currentTheme?.primaryColor ?: DEFAULT_PRIMARY) }
    var accentColor by remember { mutableStateOf(currentTheme?.accentColor ?: DEFAULT_ACCENT) }
    var fontFamily by remember { mutableStateOf(currentTheme?.fontFamily ?: DEFAULT_FONT) }
    var logoUrl by remember { mutableStateOf(currentTheme?.logoUrl) }
    var uploading by remember { mutableStateOf(false) }
    var saving by remember { mutableStateOf(false) }
    var error by remember { mutableStateOf<String?>(null) }
    var confirmReset by remember { mutableStateOf(false) }

    val scope = rememberCoroutineScope()

    val pickLogo = rememberImagePicker(
        onPicked = { image ->
            uploading = true
            error = null
            scope.launch {
                onUploadLogo(image)
                    .onSuccess { logoUrl = it }
                    .onFailure { error = "Failed to upload the logo." }
                uploading = false
            }
        },
        onError = { error = it },
    )

    fun save(theme: BarTheme, thenClose: Boolean) {
        if (saving) return
        saving = true
        error = null
        scope.launch {
            onSave(theme)
                .onSuccess { if (thenClose) onClose() }
                .onFailure { error = "Failed to save the theme. Please try again." }
            saving = false
        }
    }

    BarBackerDialog(
        title = "Customize Theme",
        onDismiss = onClose,
        actions = {
            TextButton(onClick = { confirmReset = true }, enabled = !saving) { Text("Reset") }
            Spacer(Modifier.weight(1f))
            TextButton(onClick = onClose) { Text("Cancel") }
            Spacer(Modifier.size(8.dp))
            Button(
                onClick = {
                    save(
                        BarTheme(
                            primaryColor = primaryColor,
                            accentColor = accentColor,
                            // Omitted rather than written as null when
                            // there is no logo — `firestore.rules` uses
                            // hasOnly(), and an explicit null is a
                            // different shape from an absent key.
                            logoUrl = logoUrl,
                            fontFamily = fontFamily,
                        ),
                        thenClose = true,
                    )
                },
                enabled = !saving && !uploading,
            ) {
                Text(if (saving) "Saving..." else "Save")
            }
        },
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(max = 460.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            ColorField(
                label = "Primary Color",
                hint = "Headings and filled buttons",
                value = primaryColor,
                onValueChange = { primaryColor = it },
            )

            ColorField(
                label = "Accent Color",
                hint = "The request tiles themselves",
                value = accentColor,
                onValueChange = { accentColor = it },
            )

            FontPicker(selected = fontFamily, onSelect = { fontFamily = it })

            LogoRow(
                logoUrl = logoUrl,
                uploading = uploading,
                onUpload = { pickLogo.launch() },
                onRemove = { logoUrl = null },
            )

            ThemePreview(
                primaryColor = primaryColor,
                accentColor = accentColor,
                logoUrl = logoUrl,
            )

            error?.let {
                Text(
                    text = it,
                    color = BarBackerColors.Error,
                    style = MaterialTheme.typography.bodySmall,
                )
            }
        }
    }

    if (confirmReset) {
        AlertDialog(
            onDismissRequest = { confirmReset = false },
            title = { Text("Reset theme?") },
            text = { Text("This removes all custom branding, including the logo.") },
            confirmButton = {
                Button(
                    onClick = {
                        confirmReset = false
                        primaryColor = DEFAULT_PRIMARY
                        accentColor = DEFAULT_ACCENT
                        fontFamily = DEFAULT_FONT
                        logoUrl = null
                        // Saved immediately rather than left staged: a
                        // "Reset" that only clears the form and still needs
                        // a Save reads as already done.
                        save(
                            BarTheme(
                                primaryColor = DEFAULT_PRIMARY,
                                accentColor = DEFAULT_ACCENT,
                            ),
                            thenClose = true,
                        )
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = BarBackerColors.Error,
                        contentColor = BarBackerColors.OnError,
                    ),
                ) { Text("Reset") }
            },
            dismissButton = {
                TextButton(onClick = { confirmReset = false }) { Text("Cancel") }
            },
            containerColor = BarBackerColors.SurfaceContainer,
        )
    }
}

@Composable
private fun ColorField(
    label: String,
    hint: String,
    value: String,
    onValueChange: (String) -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Column(modifier = Modifier.weight(1f)) {
                Text(label, color = BarBackerColors.OnSurface)
                Text(
                    text = hint,
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurfaceVariant,
                )
            }
            Box(
                modifier = Modifier
                    .size(36.dp)
                    .background(
                        parseHexColor(value) ?: BarBackerColors.SurfaceContainerHigh,
                        RoundedCornerShape(6.dp),
                    )
                    .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(6.dp)),
            )
        }

        OutlinedTextField(
            value = value,
            onValueChange = onValueChange,
            label = { Text("Hex") },
            singleLine = true,
            isError = parseHexColor(value) == null,
            // Hex digits are case-insensitive, but auto-capitalising the
            // whole field turns "#fff" into "#Fff" mid-typing, which looks
            // like the field is fighting you.
            keyboardOptions = KeyboardOptions(capitalization = KeyboardCapitalization.None),
            modifier = Modifier.fillMaxWidth(),
        )

        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            SWATCHES.take(6).forEach { swatch -> Swatch(swatch, onValueChange) }
        }
        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            SWATCHES.drop(6).forEach { swatch -> Swatch(swatch, onValueChange) }
        }
    }
}

@Composable
private fun Swatch(hex: String, onPick: (String) -> Unit) {
    Box(
        modifier = Modifier
            .size(28.dp)
            .background(parseHexColor(hex) ?: Color.Transparent, CircleShape)
            .border(1.dp, BarBackerColors.Outline, CircleShape)
            .clickable { onPick(hex) },
    )
}

@Composable
private fun FontPicker(selected: String, onSelect: (String) -> Unit) {
    var expanded by remember { mutableStateOf(false) }
    val label = FONT_OPTIONS.firstOrNull { it.second == selected }?.first ?: "Custom"

    Row(verticalAlignment = Alignment.CenterVertically) {
        Text("Font", color = BarBackerColors.OnSurface, modifier = Modifier.weight(1f))
        Box {
            OutlinedButton(onClick = { expanded = true }) { Text(label) }
            DropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {
                FONT_OPTIONS.forEach { (name, stack) ->
                    DropdownMenuItem(
                        text = { Text(name) },
                        onClick = {
                            expanded = false
                            onSelect(stack)
                        },
                    )
                }
            }
        }
    }
}

@Composable
private fun LogoRow(
    logoUrl: String?,
    uploading: Boolean,
    onUpload: () -> Unit,
    onRemove: () -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Logo", color = BarBackerColors.OnSurface)

        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            OutlinedButton(onClick = onUpload, enabled = !uploading) {
                Text(if (uploading) "Uploading..." else if (logoUrl == null) "Upload" else "Replace")
            }
            if (logoUrl != null && !uploading) {
                TextButton(onClick = onRemove) { Text("Remove") }
            }
        }

        if (logoUrl == null) {
            Text(
                text = "No logo set.",
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )
        } else {
            RemoteImage(
                url = logoUrl,
                contentDescription = "Bar logo",
                contentScale = ContentScale.Fit,
                modifier = Modifier
                    .size(72.dp)
                    .clip(RoundedCornerShape(8.dp)),
            )
        }
        Text(
            text = "PNG, JPG, WebP, or SVG. Max 2MB.",
            fontSize = 10.sp,
            color = BarBackerColors.OnSurfaceVariant,
        )
    }
}

@Composable
private fun ThemePreview(primaryColor: String, accentColor: String, logoUrl: String?) {
    val tile = parseHexColor(accentColor) ?: BarBackerColors.SecondaryContainer
    // Derived exactly as BarBackerTheme derives it, so what is previewed
    // here is what the floor will see rather than an approximation.
    val tileLabel = parseHexColor(contrastColorFor(accentColor)) ?: BarBackerColors.OnSurface
    val primary = parseHexColor(primaryColor) ?: BarBackerColors.Primary
    val onPrimary = parseHexColor(contrastColorFor(primaryColor)) ?: BarBackerColors.OnPrimary

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .border(1.dp, BarBackerColors.Outline, RoundedCornerShape(8.dp))
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(
            text = "PREVIEW",
            style = MaterialTheme.typography.labelSmall,
            color = BarBackerColors.OnSurfaceVariant,
            letterSpacing = 1.sp,
        )

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .background(tile, RoundedCornerShape(6.dp))
                .padding(12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            logoUrl?.let {
                RemoteImage(
                    url = it,
                    contentDescription = null,
                    modifier = Modifier.size(24.dp).clip(CircleShape),
                )
            }
            Text("ICE", color = tileLabel, fontWeight = FontWeight.Bold, fontSize = 18.sp)
        }

        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            Button(
                onClick = {},
                colors = ButtonDefaults.buttonColors(
                    containerColor = primary,
                    contentColor = onPrimary,
                ),
            ) { Text("Filled") }
            OutlinedButton(onClick = {}) { Text("Outlined", color = primary) }
        }
    }
}
