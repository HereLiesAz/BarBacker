package com.hereliesaz.barbacker.data

import io.ktor.client.HttpClient

/**
 * Builds the platform's HTTP client.
 *
 * Ktor has no single engine that works everywhere — OkHttp on Android, CIO
 * on the JVM, Darwin on iOS — so the engine choice is the one thing that
 * has to be per-platform. Everything configured on top of it (JSON,
 * timeouts, the user agent) is shared.
 */
expect fun createHttpClient(): HttpClient
