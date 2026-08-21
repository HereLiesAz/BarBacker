package com.hereliesaz.barbacker.ui

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.runtime.remember
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import org.jetbrains.compose.resources.decodeToImageBitmap

/**
 * Renders encoded image bytes already in memory.
 *
 * Decoding is cached on the byte array's identity, so scrolling past a
 * captured photo does not re-decode it every frame. A failed decode draws
 * a labelled placeholder rather than nothing: the surrounding screen
 * still works, and an empty box would read as a layout bug.
 *
 * This handles bytes the app itself produced. Remote images — a bar's
 * logo, a request's photo URL — would need a network image loader, which
 * this build does not carry.
 */
@Composable
fun PhotoBytesImage(
    bytes: ByteArray,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    contentScale: ContentScale = ContentScale.Fit,
) {
    val bitmap = remember(bytes) { runCatching { bytes.decodeToImageBitmap() }.getOrNull() }

    if (bitmap == null) {
        Box(
            modifier = modifier.background(BarBackerColors.SurfaceContainer),
            contentAlignment = Alignment.Center,
        ) {
            Text(
                text = "Preview unavailable",
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
            )
        }
        return
    }

    Image(
        bitmap = bitmap,
        contentDescription = contentDescription,
        contentScale = contentScale,
        modifier = modifier.background(Color.Black),
    )
}
