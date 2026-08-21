package com.hereliesaz.barbacker

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun App() {
    MaterialTheme {
        Surface { Text("BarBacker on ${platformName()}") }
    }
}
