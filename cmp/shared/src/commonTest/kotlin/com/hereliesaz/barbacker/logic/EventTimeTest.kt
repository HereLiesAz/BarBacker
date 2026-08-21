package com.hereliesaz.barbacker.logic

import kotlinx.datetime.TimeZone
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class EventTimeTest {

    /** Fixed rather than the device's, so the assertions mean something. */
    private val newYork = TimeZone.of("America/New_York")
    private val utc = TimeZone.UTC

    @Test
    fun a_stored_instant_becomes_local_wall_clock_fields() {
        // 2026-08-22T02:30Z is the evening of the 21st in New York.
        val parts = eventTimePartsOf("2026-08-22T02:30:00Z", newYork)
        assertEquals(EventTimeParts(2026, 8, 21, 22, 30), parts)
    }

    @Test
    fun picker_fields_round_trip_through_the_stored_form() {
        val parts = EventTimeParts(2026, 12, 31, 23, 45)
        val iso = isoFromEventTimeParts(parts, newYork)
        assertEquals(parts, eventTimePartsOf(iso, newYork))
    }

    /**
     * Google writes all-day events as a bare date. Read as UTC midnight
     * it would land on the previous day for anyone west of Greenwich —
     * a shift showing up on the wrong date is worse than showing no time.
     */
    @Test
    fun a_bare_date_is_read_as_local_midnight() {
        val parts = eventTimePartsOf("2026-08-22", newYork)
        assertEquals(EventTimeParts(2026, 8, 22, 0, 0), parts)
    }

    @Test
    fun an_unparseable_instant_yields_null_rather_than_throwing() {
        assertNull(eventTimePartsOf("next tuesday", utc))
        assertNull(eventTimePartsOf("", utc))
        assertEquals("Unknown time", formatEventTime("not a date", utc))
    }

    @Test
    fun a_same_day_range_prints_the_date_once() {
        assertEquals(
            "Sat 22 Aug, 6:00 PM – 11:30 PM",
            formatEventRange("2026-08-22T18:00:00Z", "2026-08-22T23:30:00Z", utc),
        )
    }

    /** A close-down shift crosses midnight, and both dates have to show. */
    @Test
    fun a_range_crossing_midnight_prints_both_dates() {
        assertEquals(
            "Sat 22 Aug, 8:00 PM – Sun 23 Aug, 2:00 AM",
            formatEventRange("2026-08-22T20:00:00Z", "2026-08-23T02:00:00Z", utc),
        )
    }

    @Test
    fun midnight_and_noon_are_twelve_not_zero() {
        assertEquals("12:00 AM", formatClockTime(0, 0))
        assertEquals("12:05 PM", formatClockTime(12, 5))
        assertEquals("1:00 PM", formatClockTime(13, 0))
        assertEquals("11:59 PM", formatClockTime(23, 59))
    }

    @Test
    fun epoch_millis_round_trip() {
        val parts = EventTimeParts(2026, 3, 1, 9, 15)
        assertEquals(parts, eventTimePartsFromMillis(epochMillisOf(parts, newYork), newYork))
    }
}
