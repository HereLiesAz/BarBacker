package com.hereliesaz.barbacker.ui.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.hereliesaz.barbacker.logic.contrastColorFor
import com.hereliesaz.barbacker.model.BarTheme
import kotlin.math.pow

/**
 * The stock palette, ported from the Material 3 dark tokens in
 * `src/index.css`.
 *
 * These are literal rather than generated from a seed colour: the PWA and
 * this client have to look like the same product on two devices sitting on
 * the same bar, and a generated tonal palette would drift.
 */
object BarBackerColors {
    val Background = Color(0xFF000000)
    val Surface = Color(0xFF121212)
    val SurfaceContainer = Color(0xFF1E1E1E)
    val SurfaceContainerHigh = Color(0xFF252525)
    val OnSurface = Color(0xFFE2E2E2)
    val OnSurfaceVariant = Color(0xFF9E9E9E)
    val Primary = Color(0xFFFFFFFF)
    val OnPrimary = Color(0xFF000000)
    val Error = Color(0xFFEF4444)
    val OnError = Color(0xFFFFFFFF)
    val ErrorContainer = Color(0xFF93000A)

    /** The request-grid tile background. */
    val SecondaryContainer = Color(0xFF333333)
    val OnSecondaryContainer = Color(0xFFE2E2E2)

    val Outline = Color(0xFF333333)

    /** Default icon and label colour on a grid tile; overridden by a premium theme. */
    val ButtonLabel = Color(0xFFEF4444)

    /** Background of a request row in the notification footer. */
    val RequestRow = Color(0xFF2C1A1A)

    /** Background of a muted request row. */
    val RequestRowMuted = Color(0xFF1A1A1A)

    /** The pending-approvals badge. */
    val Warning = Color(0xFFEAB308)

    /** Pinned-message marquee text. */
    val Pinned = Color(0xFFEAB308)
}

private val BarBackerShapes = Shapes(
    small = RoundedCornerShape(8.dp),
    medium = RoundedCornerShape(12.dp),
    large = RoundedCornerShape(16.dp),
)

private val BarBackerColorScheme = darkColorScheme(
    primary = BarBackerColors.Primary,
    onPrimary = BarBackerColors.OnPrimary,
    secondaryContainer = BarBackerColors.SecondaryContainer,
    onSecondaryContainer = BarBackerColors.OnSecondaryContainer,
    background = BarBackerColors.Background,
    onBackground = BarBackerColors.OnSurface,
    surface = BarBackerColors.Surface,
    onSurface = BarBackerColors.OnSurface,
    surfaceVariant = BarBackerColors.SurfaceContainer,
    onSurfaceVariant = BarBackerColors.OnSurfaceVariant,
    error = BarBackerColors.Error,
    onError = BarBackerColors.OnError,
    errorContainer = BarBackerColors.ErrorContainer,
    outline = BarBackerColors.Outline,
)

/**
 * Colours a premium bar can override.
 *
 * Exposed as a composition local rather than folded into the
 * [MaterialTheme] scheme because these are not semantic M3 roles — they
 * are two specific surfaces (the grid tile and its label) that a venue
 * brands, and mapping them onto `primary`/`secondary` would repaint
 * unrelated controls.
 */
data class BarAccent(
    val tile: Color,
    val label: Color,
) {
    companion object {
        val Default = BarAccent(
            tile = BarBackerColors.SecondaryContainer,
            label = BarBackerColors.ButtonLabel,
        )
    }
}

val LocalBarAccent = staticCompositionLocalOf { BarAccent.Default }

/**
 * Applies the app theme, optionally branded for a premium bar.
 *
 * [barTheme] is ignored entirely unless [isPremium]. That gating is
 * deliberate: a bar that lapses out of premium must revert to stock
 * colours rather than keep displaying branding it no longer pays for, and
 * its saved theme stays on the document so re-subscribing restores it.
 */
@Composable
fun BarBackerTheme(
    barTheme: BarTheme? = null,
    isPremium: Boolean = false,
    content: @Composable () -> Unit,
) {
    val accent = if (isPremium && barTheme != null) {
        val tile = parseHexColor(barTheme.primaryColor) ?: BarBackerColors.SecondaryContainer
        // The label colour is not the bar's accent taken at face value —
        // it is whichever of black/white is actually readable on the tile.
        // Honouring an arbitrary accent here is how you end up with a
        // dark-red label on a dark-red tile.
        val label = parseHexColor(barTheme.accentColor)
            ?.takeIf { hasSufficientContrast(it, tile) }
            ?: Color(parseHex(contrastColorFor(barTheme.primaryColor)))
        BarAccent(tile = tile, label = label)
    } else {
        BarAccent.Default
    }

    CompositionLocalProvider(LocalBarAccent provides accent) {
        MaterialTheme(
            colorScheme = BarBackerColorScheme,
            shapes = BarBackerShapes,
            content = content,
        )
    }
}

/** Parses `#RGB`, `#RRGGBB`, or the same without the hash. Null if unparseable. */
internal fun parseHexColor(hex: String): Color? {
    var clean = hex.removePrefix("#")
    if (clean.length == 3) clean = clean.map { "$it$it" }.joinToString("")
    if (clean.length != 6) return null
    val value = clean.toLongOrNull(16) ?: return null
    return Color(0xFF000000L or value)
}

private fun parseHex(hex: String): Long =
    0xFF000000L or (hex.removePrefix("#").toLongOrNull(16) ?: 0L)

/**
 * WCAG contrast ratio of at least 4.5:1, the threshold for body text.
 * Used to reject a branded label colour that would be unreadable on the
 * branded tile rather than rendering it anyway.
 */
internal fun hasSufficientContrast(foreground: Color, background: Color): Boolean {
    val lf = relativeLuminance(foreground)
    val lb = relativeLuminance(background)
    val lighter = maxOf(lf, lb)
    val darker = minOf(lf, lb)
    return (lighter + 0.05) / (darker + 0.05) >= 4.5
}

private fun relativeLuminance(color: Color): Double {
    fun channel(c: Float): Double {
        val v = c.toDouble()
        return if (v <= 0.03928) v / 12.92 else ((v + 0.055) / 1.055).pow(2.4)
    }
    return 0.2126 * channel(color.red) + 0.7152 * channel(color.green) + 0.0722 * channel(color.blue)
}
