package com.hereliesaz.barbacker.data

/**
 * Hands a URL to the platform's browser.
 *
 * Used for the two OAuth consent screens (Square, Google Calendar). The
 * web client navigates the whole page and gets redirected back; there is
 * no equivalent here, so the flow finishes in the browser and this client
 * learns the outcome from its Firestore listener when the user returns.
 * The screens say so rather than leaving someone waiting on a spinner
 * that will never resolve.
 */
interface UrlOpener {
    /** Returns false if no browser could be opened. */
    fun open(url: String): Boolean
}

/** @param platformContext the Android `Context`; null elsewhere. */
expect fun createUrlOpener(platformContext: Any?): UrlOpener
