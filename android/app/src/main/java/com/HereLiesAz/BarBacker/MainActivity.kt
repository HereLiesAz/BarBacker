package com.HereLiesAz.BarBacker

import android.os.Bundle
import com.getcapacitor.BridgeActivity

class MainActivity : BridgeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        // Registered before super.onCreate(): BridgeActivity builds the
        // Bridge and its plugin registry there, so anything registered
        // afterwards never reaches the WebView.
        registerPlugin(FirebaseConfigPlugin::class.java)
        super.onCreate(savedInstanceState)
    }
}
