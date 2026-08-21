package com.hereliesaz.barbacker

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        enableEdgeToEdge()
        super.onCreate(savedInstanceState)
        // applicationContext, not the Activity: the container it builds
        // outlives this Activity across configuration changes, and holding
        // an Activity reference there would leak it on every rotation.
        setContent { App(platformContext = applicationContext) }
    }
}
