package com.hereliesaz.barbacker

/**
 * Makes the device demand attention.
 *
 * This is the in-app half of paging, and it matters most exactly where
 * push is weakest: a tablet sitting on the back bar with the app open, in
 * a room too loud for a notification chime alone. Sound AND vibration
 * together, because either one alone is missable in a working bar.
 */
interface Alerter {
    fun alert()
}

expect fun createAlerter(platformContext: Any?): Alerter
