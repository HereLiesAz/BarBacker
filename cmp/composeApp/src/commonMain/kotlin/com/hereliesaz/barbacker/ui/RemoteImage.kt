package com.hereliesaz.barbacker.ui

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import coil3.ImageLoader
import coil3.PlatformContext
import coil3.compose.AsyncImagePainter
import coil3.compose.rememberAsyncImagePainter
import coil3.compose.setSingletonImageLoaderFactory
import coil3.network.ktor3.KtorNetworkFetcherFactory
import coil3.request.crossfade
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import io.ktor.client.HttpClient

/**
 * Installs the process-wide image loader.
 *
 * Called once from the app root. Coil fetches over the [HttpClient] this
 * app already built for its place search rather than resolving an engine
 * of its own — two HTTP stacks in one process means two connection pools
 * and two sets of timeouts to keep straight, and on iOS the second one may
 * not resolve an engine at all.
 */
@Composable
fun InstallImageLoader(httpClient: HttpClient) {
    setSingletonImageLoaderFactory { context: PlatformContext ->
        ImageLoader.Builder(context)
            .components { add(KtorNetworkFetcherFactory(httpClient = { httpClient })) }
            .crossfade(true)
            .build()
    }
}

/**
 * An image fetched from a URL, with explicit loading and failure states.
 *
 * Both states are drawn rather than left blank. A bottle photo attached to
 * a page is evidence — a barback photographed an empty bottle so someone
 * could see it — and an empty box gives no way to tell "still loading"
 * from "this device cannot read it", which for a Storage URL usually means
 * the reader is not a member of that bar.
 */
@Composable
fun RemoteImage(
    url: String,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    contentScale: ContentScale = ContentScale.Crop,
) {
    val painter = rememberAsyncImagePainter(model = url, contentScale = contentScale)
    // Coil's own placeholder/error slots take Painters, and there is no
    // drawable resource here to hand them — so the state is read directly
    // and each case rendered as a composable instead.
    val state by painter.state.collectAsState()

    when (state) {
        is AsyncImagePainter.State.Success -> Image(
            painter = painter,
            contentDescription = contentDescription,
            contentScale = contentScale,
            modifier = modifier,
        )

        is AsyncImagePainter.State.Error -> ImageMessage("Unavailable", modifier)
        else -> ImageMessage("…", modifier)
    }
}

@Composable
private fun ImageMessage(text: String, modifier: Modifier) {
    Box(
        modifier = modifier.background(BarBackerColors.SurfaceContainer),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            text = text,
            style = MaterialTheme.typography.labelSmall,
            color = BarBackerColors.OnSurfaceVariant,
        )
    }
}
