package com.hereliesaz.barbacker.logic

import kotlinx.datetime.LocalDate
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.LocalTime
import kotlinx.datetime.TimeZone
// Extensions, not members — they do not come in with the type imports.
import kotlinx.datetime.atTime
import kotlinx.datetime.isoDayNumber
import kotlinx.datetime.number
import kotlinx.datetime.toInstant
import kotlinx.datetime.toLocalDateTime
import kotlin.time.ExperimentalTime
import kotlin.time.Instant

/**
 * Calendar events are stored as ISO 8601 instants, which is the only form
 * that survives a round trip through Google and an `.ics` feed. Everything
 * a person sees or edits is local wall-clock time, so every screen needs
 * both directions of this conversion.
 *
 * Kept out of the UI layer so the conversions can be tested: an event that
 * lands an hour off, or on the wrong day near midnight, is the kind of bug
 * that only shows up on someone's roster.
 */

/** The wall-clock fields a date and time picker actually manipulates. */
data class EventTimeParts(
    val year: Int,
    /** 1-12. */
    val month: Int,
    /** 1-31. */
    val day: Int,
    /** 0-23. */
    val hour: Int,
    val minute: Int,
)

/**
 * Parses a stored instant, tolerating what the sync functions write.
 *
 * Returns null rather than throwing: an unparseable `start` on one event
 * must not take down the whole list, and the caller renders it as
 * "unknown time" instead.
 */
@OptIn(ExperimentalTime::class)
fun parseEventInstant(
    iso: String,
    /**
     * Only consulted for the all-day fallback below. It is a parameter
     * rather than the system zone because every caller here already
     * threads a zone through, and resolving "which midnight" against a
     * different one than the display uses puts all-day events on the
     * wrong day by exactly the offset between them.
     */
    zone: TimeZone = TimeZone.currentSystemDefault(),
): Instant? = try {
    Instant.parse(iso)
} catch (_: IllegalArgumentException) {
    // Google's all-day events carry a date with no time at all. Treated
    // as local midnight, which is what an all-day event means to someone
    // reading the roster — parsing it as UTC midnight would show the day
    // before for anyone west of Greenwich.
    try {
        LocalDate.parse(iso).atTime(0, 0).toInstant(zone)
    } catch (_: IllegalArgumentException) {
        null
    }
}

@OptIn(ExperimentalTime::class)
fun eventTimePartsOf(
    iso: String,
    zone: TimeZone = TimeZone.currentSystemDefault(),
): EventTimeParts? {
    val local = parseEventInstant(iso, zone)?.toLocalDateTime(zone) ?: return null
    return EventTimeParts(
        year = local.year,
        month = local.month.number,
        day = local.day,
        hour = local.hour,
        minute = local.minute,
    )
}

/** Turns picker output back into the stored form. */
@OptIn(ExperimentalTime::class)
fun isoFromEventTimeParts(
    parts: EventTimeParts,
    zone: TimeZone = TimeZone.currentSystemDefault(),
): String = LocalDateTime(
    LocalDate(parts.year, parts.month, parts.day),
    LocalTime(parts.hour, parts.minute),
).toInstant(zone).toString()

/** The instant [millis] after the epoch, as picker fields. */
@OptIn(ExperimentalTime::class)
fun eventTimePartsFromMillis(
    millis: Long,
    zone: TimeZone = TimeZone.currentSystemDefault(),
): EventTimeParts {
    val local = Instant.fromEpochMilliseconds(millis).toLocalDateTime(zone)
    return EventTimeParts(
        year = local.year,
        month = local.month.number,
        day = local.day,
        hour = local.hour,
        minute = local.minute,
    )
}

/** Epoch millis for [parts], for seeding a Material date picker. */
@OptIn(ExperimentalTime::class)
fun epochMillisOf(
    parts: EventTimeParts,
    zone: TimeZone = TimeZone.currentSystemDefault(),
): Long = LocalDateTime(
    LocalDate(parts.year, parts.month, parts.day),
    LocalTime(parts.hour, parts.minute),
).toInstant(zone).toEpochMilliseconds()

/** Epoch millis as an ISO instant, for the callables that take a window. */
@OptIn(ExperimentalTime::class)
fun isoFromEpochMillis(millis: Long): String =
    Instant.fromEpochMilliseconds(millis).toString()

private val WEEKDAYS = listOf("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
private val MONTHS = listOf(
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
)

/**
 * Renders one instant as "Fri 22 Aug, 6:00 PM".
 *
 * Hand-rolled rather than locale-aware: bar shifts are read at a glance
 * across a counter, and a fixed short form is legible in a way a
 * platform-default long date is not. The 12-hour clock matches the
 * PWA's `toLocaleString` output for its actual users.
 */
fun formatEventTime(iso: String, zone: TimeZone = TimeZone.currentSystemDefault()): String {
    val parts = eventTimePartsOf(iso, zone) ?: return "Unknown time"
    val date = LocalDate(parts.year, parts.month, parts.day)
    val weekday = WEEKDAYS[date.dayOfWeek.isoDayNumber - 1]
    val month = MONTHS[parts.month - 1]
    return "$weekday ${parts.day} $month, ${formatClockTime(parts.hour, parts.minute)}"
}

/**
 * Renders a range, collapsing the second date when it is the same day.
 *
 * A shift is almost always within one day, and repeating the date on both
 * ends makes the line long enough to wrap on a phone.
 */
fun formatEventRange(
    startIso: String,
    endIso: String,
    zone: TimeZone = TimeZone.currentSystemDefault(),
): String {
    val start = eventTimePartsOf(startIso, zone) ?: return "Unknown time"
    val end = eventTimePartsOf(endIso, zone) ?: return formatEventTime(startIso, zone)
    val sameDay = start.year == end.year && start.month == end.month && start.day == end.day
    return if (sameDay) {
        "${formatEventTime(startIso, zone)} – ${formatClockTime(end.hour, end.minute)}"
    } else {
        "${formatEventTime(startIso, zone)} – ${formatEventTime(endIso, zone)}"
    }
}

/** 24-hour input to a 12-hour label; midnight is 12 AM, noon is 12 PM. */
fun formatClockTime(hour: Int, minute: Int): String {
    val suffix = if (hour < 12) "AM" else "PM"
    val display = when {
        hour % 12 == 0 -> 12
        else -> hour % 12
    }
    return "$display:${minute.toString().padStart(2, '0')} $suffix"
}
