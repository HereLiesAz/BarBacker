package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PhotoCamera
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.Icon
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
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import com.hereliesaz.barbacker.ui.PhotoBytesImage
import com.hereliesaz.barbacker.ui.rememberPhotoCapture
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.coroutines.launch

/** What the scanner is doing right now. */
private enum class ScanStage { Idle, Reading, Ready }

/** Which action is in flight, so only the pressed button shows progress. */
private enum class ScanAction { Menu, EightySix, Alert }

/** The scanner's callbacks, grouped to keep the signature readable. */
data class BottleScannerActions(
    /** Reads label text and returns the best-matching known brand, or null. */
    val onRecognize: suspend (ByteArray) -> Result<String?>,
    val onAddToMenu: suspend (brand: String, type: String) -> Result<Unit>,
    val onEightySix: suspend (brand: String) -> Result<Unit>,
    val onSendAlert: suspend (brand: String, photo: ByteArray) -> Result<Unit>,
)

/**
 * Point the camera at a bottle, confirm the brand, then act on it.
 *
 * OCR runs on the device — the photo is only uploaded by "Send Alert",
 * and then only to this bar's own bucket so staff can see what was
 * scanned. Recognition is a prefill, never a decision: the brand field is
 * always editable, and a platform with no OCR (desktop) simply starts
 * with it empty.
 */
@Composable
fun BottleScannerDialog(
    isManagerPlus: Boolean,
    existingBrands: List<String>,
    recognitionSupported: Boolean,
    actions: BottleScannerActions,
    onClose: () -> Unit,
) {
    var stage by remember { mutableStateOf(ScanStage.Idle) }
    var photo by remember { mutableStateOf<ByteArray?>(null) }
    var brand by remember { mutableStateOf("") }
    var type by remember { mutableStateOf("") }
    var error by remember { mutableStateOf<String?>(null) }
    var submitting by remember { mutableStateOf<ScanAction?>(null) }
    val scope = rememberCoroutineScope()

    val capture = rememberPhotoCapture(
        onCaptured = { bytes ->
            photo = bytes
            error = null
            if (!recognitionSupported) {
                stage = ScanStage.Ready
                return@rememberPhotoCapture
            }
            stage = ScanStage.Reading
            scope.launch {
                actions.onRecognize(bytes)
                    .onSuccess { brand = it.orEmpty() }
                    .onFailure { error = "Couldn't read the label. Type the brand instead." }
                // Ready either way: a failed read is not a failed scan,
                // and the photo is still worth sending.
                stage = ScanStage.Ready
            }
        },
        onError = {
            error = it
            stage = ScanStage.Idle
        },
    )

    val trimmedBrand = brand.trim()

    // Case-insensitive to FIND the brand, but every downstream write is
    // case-sensitive: the inventory map is keyed by exact name and the
    // hidden-button id is built as "brand_<name>". Scanning "JAMESON"
    // against an existing "Jameson" has to resolve to "Jameson", or "Add
    // to Menu" creates a second disconnected entry and "86 It" hides an
    // id matching no real button.
    val matchedBrand = existingBrands.firstOrNull { it.equals(trimmedBrand, ignoreCase = true) }
    val canonicalBrand = matchedBrand ?: trimmedBrand

    fun run(action: ScanAction, block: suspend () -> Result<Unit>) {
        if (submitting != null) return
        submitting = action
        error = null
        scope.launch {
            block()
                .onSuccess { onClose() }
                .onFailure {
                    error = "That failed. Please try again."
                    submitting = null
                }
        }
    }

    BarBackerDialog(
        title = "Scan Bottle",
        onDismiss = onClose,
        actions = {
            TextButton(onClick = onClose) { Text("Close") }
            if (stage == ScanStage.Ready) {
                Spacer(Modifier.weight(1f))
                Button(
                    onClick = {
                        val bytes = photo ?: return@Button
                        run(ScanAction.Alert) { actions.onSendAlert(canonicalBrand, bytes) }
                    },
                    enabled = trimmedBrand.isNotEmpty() && submitting == null && photo != null,
                ) {
                    Text(if (submitting == ScanAction.Alert) "Sending..." else "Send Alert")
                }
            }
        },
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(max = 440.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            if (!capture.isSupported) {
                Text(
                    text = "This device has no camera. The scanner needs one.",
                    color = BarBackerColors.Warning,
                    style = MaterialTheme.typography.bodySmall,
                )
            }

            if (stage == ScanStage.Idle) {
                FilledTonalButton(
                    onClick = { capture.launch() },
                    enabled = capture.isSupported,
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    Icon(Icons.Filled.PhotoCamera, contentDescription = null)
                    Spacer(Modifier.size(8.dp))
                    Text("Take Photo")
                }
            }

            photo?.let { bytes ->
                PhotoBytesImage(
                    bytes = bytes,
                    contentDescription = "Captured bottle",
                    contentScale = ContentScale.Fit,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(180.dp)
                        .clip(RoundedCornerShape(8.dp)),
                )
            }

            if (stage == ScanStage.Reading) {
                Text(
                    text = "Reading label...",
                    color = BarBackerColors.OnSurfaceVariant,
                    modifier = Modifier.fillMaxWidth().padding(8.dp),
                )
            }

            if (stage == ScanStage.Ready) {
                if (!recognitionSupported) {
                    Text(
                        text = "No label reader on this platform — type the brand.",
                        color = BarBackerColors.OnSurfaceVariant,
                        style = MaterialTheme.typography.bodySmall,
                    )
                }

                OutlinedTextField(
                    value = brand,
                    onValueChange = { brand = it },
                    label = { Text("Brand") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth(),
                )
                OutlinedTextField(
                    value = type,
                    onValueChange = { type = it },
                    label = { Text("Type (optional)") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth(),
                )

                if (matchedBrand != null) {
                    Text(
                        text = "Already on the menu as \"$matchedBrand\".",
                        style = MaterialTheme.typography.bodySmall,
                        color = BarBackerColors.OnSurfaceVariant,
                    )
                }

                if (isManagerPlus) {
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        Button(
                            onClick = {
                                run(ScanAction.Menu) {
                                    actions.onAddToMenu(canonicalBrand, type.trim())
                                }
                            },
                            enabled = trimmedBrand.isNotEmpty() && submitting == null,
                        ) {
                            Text(if (submitting == ScanAction.Menu) "Adding..." else "Add to Menu")
                        }
                        // Only offered for a brand that is actually on the
                        // menu — 86'ing one that was never added hides a
                        // button id nothing renders.
                        if (matchedBrand != null) {
                            OutlinedButton(
                                onClick = {
                                    run(ScanAction.EightySix) {
                                        actions.onEightySix(canonicalBrand)
                                    }
                                },
                                enabled = submitting == null,
                                colors = ButtonDefaults.outlinedButtonColors(
                                    contentColor = BarBackerColors.Error,
                                ),
                            ) {
                                Text(
                                    if (submitting == ScanAction.EightySix) "Marking..." else "86 It",
                                )
                            }
                        }
                    }
                }

                TextButton(onClick = { capture.launch() }, enabled = submitting == null) {
                    Text("Retake")
                }
            }

            error?.let {
                Text(it, color = BarBackerColors.Error, style = MaterialTheme.typography.bodySmall)
            }
        }
    }
}
