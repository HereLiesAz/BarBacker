package com.hereliesaz.barbacker.ui.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.Typography
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.unit.dp
import com.hereliesaz.barbacker.logic.contrastColorFor
import com.hereliesaz.barbacker.model.BarTheme

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
 * [MaterialTheme] scheme because the label colour is not a semantic M3
 * role — it is a derived value, computed from the tile it sits on, and
 * there is nowhere in a `ColorScheme` that means that.
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
 *
 * Which colour lands where is not a free choice — the same theme document
 * is read by the PWA, and the two clients sit on the same bar. Matching
 * `useBarTheme.ts` exactly:
 *  - `accentColor` is the grid tile background (`secondaryContainer`), and
 *    the label on it is whichever of black/white is readable. Never the
 *    other brand colour: a red brand on a red tile is invisible.
 *  - `primaryColor` is the M3 `primary` role — headings, filled buttons —
 *    with its own contrast colour as `onPrimary`.
 */
@Composable
fun BarBackerTheme(
    barTheme: BarTheme? = null,
    isPremium: Boolean = false,
    content: @Composable () -> Unit,
) {
    val themed = barTheme.takeIf { isPremium }

    val accent = themed?.let {
        val tile = parseHexColor(it.accentColor) ?: return@let null
        BarAccent(tile = tile, label = Color(parseHex(contrastColorFor(it.accentColor))))
    } ?: BarAccent.Default

    val colorScheme = themed?.let {
        val primary = parseHexColor(it.primaryColor)
        BarBackerColorScheme.copy(
            primary = primary ?: BarBackerColorScheme.primary,
            onPrimary = if (primary != null) {
                Color(parseHex(contrastColorFor(it.primaryColor)))
            } else {
                BarBackerColorScheme.onPrimary
            },
            secondaryContainer = accent.tile,
            onSecondaryContainer = accent.label,
        )
    } ?: BarBackerColorScheme

    CompositionLocalProvider(LocalBarAccent provides accent) {
        MaterialTheme(
            colorScheme = colorScheme,
            shapes = BarBackerShapes,
            typography = typographyFor(themed?.fontFamily),
            content = content,
        )
    }
}

/**
 * Maps a stored CSS font stack onto the closest generic family.
 *
 * The web client stores an actual CSS `font-family` string, so the value
 * has to round-trip untouched or a manager who set a font in one client
 * would see it silently rewritten by the other. What this cannot do is
 * render Inter or Playfair Display faithfully — neither is bundled — so a
 * serif stack becomes the platform serif and everything else the platform
 * default. Dropping a real font resource in here is the only change
 * needed to make it exact.
 */
private fun familyFor(fontFamily: String?): FontFamily = when {
    fontFamily == null -> FontFamily.Default
    fontFamily.contains("serif", ignoreCase = true) &&
        !fontFamily.contains("sans-serif", ignoreCase = true) -> FontFamily.Serif
    fontFamily.contains("monospace", ignoreCase = true) -> FontFamily.Monospace
    else -> FontFamily.Default
}

@Composable
private fun typographyFor(fontFamily: String?): Typography {
    val family = familyFor(fontFamily)
    if (family == FontFamily.Default) return DefaultTypography
    return with(DefaultTypography) {
        Typography(
            displayLarge = displayLarge.copy(fontFamily = family),
            displayMedium = displayMedium.copy(fontFamily = family),
            displaySmall = displaySmall.copy(fontFamily = family),
            headlineLarge = headlineLarge.copy(fontFamily = family),
            headlineMedium = headlineMedium.copy(fontFamily = family),
            headlineSmall = headlineSmall.copy(fontFamily = family),
            titleLarge = titleLarge.copy(fontFamily = family),
            titleMedium = titleMedium.copy(fontFamily = family),
            titleSmall = titleSmall.copy(fontFamily = family),
            bodyLarge = bodyLarge.copy(fontFamily = family),
            bodyMedium = bodyMedium.copy(fontFamily = family),
            bodySmall = bodySmall.copy(fontFamily = family),
            labelLarge = labelLarge.copy(fontFamily = family),
            labelMedium = labelMedium.copy(fontFamily = family),
            labelSmall = labelSmall.copy(fontFamily = family),
        )
    }
}

private val DefaultTypography = Typography()

/** Parses `#RGB`, `#RRGGBB`, or the same without the hash. Null if unparseable. */
internal fun parseHexColor(hex: String): Color? {
    var clean = hex.removePrefix("#")
    if (clean.length == 3) clean = clean.map { "$it$it" }.joinToString("")
    if (clean.length != 6) return null
    val value = clean.toLongOrNull(16) ?: return null
    return Color(0xFF000000L or value)
}

/**
 * Parses a value already known to be a valid hex colour.
 *
 * Only ever fed the output of [contrastColorFor], which returns `#FFFFFF`
 * or `#000000` — the zero fallback is unreachable in practice and exists
 * so a future caller cannot make this throw.
 */
private fun parseHex(hex: String): Long =
    0xFF000000L or (hex.removePrefix("#").toLongOrNull(16) ?: 0L)
