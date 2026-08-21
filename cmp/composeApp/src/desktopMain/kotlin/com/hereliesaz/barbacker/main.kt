package com.hereliesaz.barbacker

import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState

fun main() = application {
    Window(
        onCloseRequest = ::exitApplication,
        title = "BarBacker",
        // Roughly a tablet held in portrait, which is what the layout is
        // designed around.
        state = rememberWindowState(size = DpSize(480.dp, 900.dp)),
    ) {
        App()
    }
}
