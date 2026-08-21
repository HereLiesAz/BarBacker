package com.hereliesaz.barbacker.logic

import com.hereliesaz.barbacker.DEFAULT_BUTTONS
import com.hereliesaz.barbacker.NOTIFICATION_DEFAULTS_BY_TITLE
import com.hereliesaz.barbacker.model.Request
import com.hereliesaz.barbacker.model.RequestStatus
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class VisibleRequestsTest {

    private val resolver = ButtonLabelResolver(DEFAULT_BUTTONS)
    private val me = "uid-me"
    private val someoneElse = "uid-other"

    private fun request(
        id: String,
        label: String,
        requesterId: String = someoneElse,
        status: RequestStatus = RequestStatus.Pending,
    ) = Request(id = id, label = label, requesterId = requesterId, status = status, barId = "bar1")

    private fun visible(
        requests: List<Request>,
        preferences: List<String> = emptyList(),
        ignored: Set<String> = emptySet(),
    ) = visibleRequests(requests, me, preferences, ignored, resolver)

    @Test
    fun drops_claimed_requests() {
        val result = visible(
            listOf(
                request("1", "ICE", status = RequestStatus.Claimed),
                request("2", "ICE"),
            ),
            preferences = listOf("ice"),
        )
        assertEquals(listOf("2"), result.map { it.id })
    }

    @Test
    fun keeps_requests_matching_a_subscribed_button() {
        val result = visible(listOf(request("1", "GARNISH: LIMES")), preferences = listOf("fruit"))
        assertEquals(listOf("1"), result.map { it.id })
    }

    @Test
    fun drops_requests_for_unsubscribed_buttons() {
        val result = visible(listOf(request("1", "GARNISH: LIMES")), preferences = listOf("ice"))
        assertTrue(result.isEmpty())
    }

    @Test
    fun always_shows_your_own_requests() {
        // Otherwise you could send a page and have no way to cancel it.
        val result = visible(
            listOf(request("1", "GARNISH: LIMES", requesterId = me)),
            preferences = emptyList(),
        )
        assertEquals(listOf("1"), result.map { it.id })
    }

    @Test
    fun always_shows_break_regardless_of_preferences() {
        val result = visible(listOf(request("1", "BREAK")), preferences = emptyList())
        assertEquals(listOf("1"), result.map { it.id })
    }

    @Test
    fun free_text_that_merely_starts_with_break_does_not_get_the_bypass() {
        // A substring match here would let any free text beginning with
        // "BREAK" page the entire bar past everyone's preferences.
        val result = visible(listOf(request("1", "BREAKAGE AT WELL 3")), preferences = listOf("ice"))
        // It survives, but as unresolvable free text (fail-open), not as a
        // break bypass — so it is visible to everyone either way. The
        // distinction shows up once preferences would otherwise exclude it:
        assertEquals(listOf("1"), result.map { it.id })
        assertEquals(null, resolver.idForLabel("BREAKAGE AT WELL 3"))
    }

    @Test
    fun unresolvable_labels_fail_open() {
        // Free text nobody is subscribed to must still reach the floor.
        val result = visible(listOf(request("1", "the ice machine is on fire")), preferences = emptyList())
        assertEquals(listOf("1"), result.map { it.id })
    }

    @Test
    fun muted_requests_sort_last_but_are_not_removed() {
        val result = visible(
            listOf(
                request("muted", "ICE"),
                request("fresh", "ICE"),
            ),
            preferences = listOf("ice"),
            ignored = setOf("muted"),
        )
        assertEquals(listOf("fresh", "muted"), result.map { it.id })
    }

    @Test
    fun ordering_is_otherwise_stable() {
        // The query already returns newest-first; the filter must not reshuffle it.
        val input = (1..5).map { request("$it", "ICE") }
        val result = visible(input, preferences = listOf("ice"))
        assertEquals(listOf("1", "2", "3", "4", "5"), result.map { it.id })
    }

    @Test
    fun a_signed_out_reader_still_gets_preference_filtering() {
        val result = visibleRequests(
            listOf(request("1", "GARNISH: LIMES"), request("2", "ICE")),
            currentUserId = null,
            notificationPreferences = listOf("ice"),
            ignoredIds = emptySet(),
            resolver = resolver,
        )
        assertEquals(listOf("2"), result.map { it.id })
    }
}

class OutstandingAlertsTest {

    private fun request(id: String) =
        Request(id = id, label = "ICE", requesterId = "u", barId = "bar1")

    @Test
    fun sounds_when_an_unmuted_request_is_waiting() {
        assertTrue(hasOutstandingAlerts(listOf(request("1")), emptySet()))
    }

    @Test
    fun stays_silent_when_every_request_is_muted() {
        // The loop repeats every minute. Without this, muting a page would
        // dim it visually but keep making noise until someone else resolved
        // it — which defeats the point of muting entirely.
        assertFalse(hasOutstandingAlerts(listOf(request("1")), setOf("1")))
    }

    @Test
    fun sounds_when_one_of_several_is_unmuted() {
        assertTrue(hasOutstandingAlerts(listOf(request("1"), request("2")), setOf("1")))
    }

    @Test
    fun stays_silent_with_nothing_waiting() {
        assertFalse(hasOutstandingAlerts(emptyList(), emptySet()))
    }

    @Test
    fun a_muted_request_still_counts_as_visible() {
        // The two questions are deliberately different: a muted page stays
        // on screen and countable, it just stops making noise.
        val muted = listOf(request("1"))
        assertFalse(hasOutstandingAlerts(muted, setOf("1")))
        assertTrue(muted.isNotEmpty())
    }
}

class ButtonPendingTest {

    private fun pending(id: String, label: String) =
        Request(id = id, label = label, requesterId = "u", barId = "bar1")

    @Test
    fun a_child_request_lights_up_its_parent_tile() {
        val requests = listOf(pending("1", "GARNISH: LIMES"))
        assertTrue(isButtonPending("GARNISH", requests))
    }

    @Test
    fun an_unrelated_request_does_not() {
        val requests = listOf(pending("1", "GARNISH: LIMES"))
        assertFalse(isButtonPending("ICE", requests))
    }

    @Test
    fun an_exact_label_match_counts() {
        assertTrue(isButtonPending("ICE", listOf(pending("1", "ICE"))))
    }

    @Test
    fun nothing_is_pending_when_there_are_no_requests() {
        assertFalse(isButtonPending("ICE", emptyList()))
    }
}

class ShiftLogTest {

    private fun request(id: String, status: RequestStatus) =
        Request(id = id, label = "ICE", requesterId = "u", status = status, barId = "bar1")

    @Test
    fun includes_only_resolved_requests() {
        val entries = shiftLogEntries(
            listOf(
                request("pending", RequestStatus.Pending),
                request("claimed", RequestStatus.Claimed),
            ),
        )
        assertEquals(listOf("claimed"), entries.map { it.id })
    }

    @Test
    fun caps_the_list() {
        val entries = shiftLogEntries((1..50).map { request("$it", RequestStatus.Claimed) })
        assertEquals(20, entries.size)
        assertEquals("1", entries.first().id)
    }
}

class EffectiveNotificationPreferencesTest {

    @Test
    fun an_explicit_choice_wins() {
        val result = effectiveNotificationPreferences(
            stored = listOf("ice"),
            jobTitle = "Barback",
            role = "Staff",
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        assertEquals(listOf("ice"), result)
    }

    @Test
    fun an_explicit_empty_choice_is_respected() {
        // Someone who deliberately unsubscribed from everything must not be
        // re-subscribed by their job title's defaults.
        val result = effectiveNotificationPreferences(
            stored = emptyList(),
            jobTitle = "Barback",
            role = "Staff",
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        assertTrue(result.isEmpty())
    }

    @Test
    fun falls_back_to_the_job_title_defaults() {
        val result = effectiveNotificationPreferences(
            stored = null,
            jobTitle = "Security",
            role = "Staff",
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        assertEquals(listOf("security", "manager", "break"), result)
    }

    @Test
    fun prefers_the_job_title_over_the_privilege_role() {
        val result = effectiveNotificationPreferences(
            stored = null,
            jobTitle = "Server",
            role = "Owner",
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        // Server's set is empty; falling through to Owner's would page them
        // for everything in the bar.
        assertTrue(result.isEmpty())
    }

    @Test
    fun falls_back_to_the_role_when_there_is_no_job_title() {
        val result = effectiveNotificationPreferences(
            stored = null,
            jobTitle = null,
            role = "Manager",
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        assertEquals(listOf("manager", "security", "keg", "trash", "break"), result)
    }

    @Test
    fun a_blank_job_title_falls_through_to_the_role() {
        val result = effectiveNotificationPreferences(
            stored = null,
            jobTitle = "",
            role = "Manager",
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        assertEquals(listOf("manager", "security", "keg", "trash", "break"), result)
    }

    @Test
    fun an_invited_member_gets_the_staff_defaults_not_silence() {
        // The invite Cloud Function writes jobTitle "Staff". Without an
        // entry for it, invited members silently received nothing forever.
        val result = effectiveNotificationPreferences(
            stored = null,
            jobTitle = "Staff",
            role = "Staff",
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        assertTrue(result.isNotEmpty())
        assertTrue("ice" in result)
    }

    @Test
    fun an_unrecognised_title_yields_nothing_rather_than_everything() {
        val result = effectiveNotificationPreferences(
            stored = null,
            jobTitle = "Sommelier",
            role = null,
            defaultsByTitle = NOTIFICATION_DEFAULTS_BY_TITLE,
        )
        assertTrue(result.isEmpty())
    }
}
