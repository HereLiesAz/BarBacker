package com.hereliesaz.barbacker

/**
 * Wall-clock time in epoch milliseconds.
 *
 * Its own expect/actual rather than kotlinx-datetime's `Clock`, whose home
 * has been moving between `kotlinx.datetime` and `kotlin.time` across
 * recent releases. This is four lines per platform and pins nothing.
 *
 * Used only for client-side windowing — the request query's 24-hour lower
 * bound, timers, and photo filenames. Anything Firestore stores gets a
 * server timestamp instead, because device clocks on a bar's shared
 * tablets are routinely wrong.
 */
expect fun currentTimeMillis(): Long
