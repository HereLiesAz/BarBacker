package com.hereliesaz.barbacker.logic

import com.hereliesaz.barbacker.model.Request
import com.hereliesaz.barbacker.model.RequestStatus

/**
 * The button id everyone is paged for regardless of their preferences —
 * someone asking for a break needs an answer from whoever can cover them.
 */
private const val ALWAYS_VISIBLE_BUTTON_ID = "break"

/**
 * Selects and orders the requests shown in the dashboard's footer.
 *
 * Three deliberate escape hatches widen a member's own preferences:
 *  - Your own requests are always visible, so you can cancel them.
 *  - `break` reaches everyone.
 *  - A label that resolves to no button FAILS OPEN. Free text nobody
 *    subscribed to is shown rather than silently dropped on the floor.
 *
 * The `break` bypass is an exact button-id match on purpose. Matching the
 * label as a substring would let free text like "BREAKAGE AT WELL 3"
 * bypass every notification preference in the bar.
 *
 * Muted entries are sorted last rather than removed: they still count
 * toward the footer's total and stay visible (dimmed), because silently
 * hiding a page someone muted an hour ago is how requests get lost.
 */
fun visibleRequests(
    requests: List<Request>,
    currentUserId: String?,
    notificationPreferences: List<String>,
    ignoredIds: Set<String>,
    resolver: ButtonLabelResolver,
): List<Request> = requests
    .filter { request ->
        if (request.status != RequestStatus.Pending) return@filter false
        if (currentUserId != null && request.requesterId == currentUserId) return@filter true

        val buttonId = resolver.idForLabel(request.label)
        when {
            buttonId == null -> true
            buttonId == ALWAYS_VISIBLE_BUTTON_ID -> true
            else -> buttonId in notificationPreferences
        }
    }
    // Stable: equal keys keep the caller's ordering, which is already
    // newest-first from the query.
    .sortedBy { it.id in ignoredIds }

/**
 * Whether the in-app alert loop should sound.
 *
 * Muted requests are excluded, which is the entire point of muting — the
 * loop repeats every minute, so a page someone deliberately set aside
 * would otherwise keep making noise until it was resolved by someone else.
 *
 * Note this differs from [visibleRequests], which keeps muted entries
 * (sorted last) so they stay countable and recoverable. Visible and
 * alert-worthy are genuinely different questions.
 */
fun hasOutstandingAlerts(visible: List<Request>, ignoredIds: Set<String>): Boolean =
    visible.any { it.id !in ignoredIds }

/**
 * Whether a grid tile should render its pending/pulsing state.
 *
 * A prefix match, so a page for "GARNISH: LIMES" lights up the GARNISH
 * tile the user would have to tap to see it.
 */
fun isButtonPending(buttonLabel: String, visible: List<Request>): Boolean =
    visible.any { it.label.startsWith(buttonLabel) }

/**
 * The shift log: everything no longer pending, most recent first.
 *
 * Callers pass the query result, which is already ordered newest-first.
 */
fun shiftLogEntries(requests: List<Request>, limit: Int = 20): List<Request> =
    requests.filter { it.status != RequestStatus.Pending }.take(limit)

/**
 * Resolves the notification preferences actually in effect for a member.
 *
 * An explicitly stored list wins even when empty — that is a member who
 * chose to receive nothing, which must not be overwritten by defaults.
 * Only a member who has never chosen falls back to their job title's set,
 * and the title is tried before the privilege role.
 */
fun effectiveNotificationPreferences(
    stored: List<String>?,
    jobTitle: String?,
    role: String?,
    defaultsByTitle: Map<String, List<String>>,
): List<String> {
    if (stored != null) return stored
    val key = jobTitle?.takeIf { it.isNotBlank() } ?: role?.takeIf { it.isNotBlank() }
    return key?.let { defaultsByTitle[it] } ?: emptyList()
}
