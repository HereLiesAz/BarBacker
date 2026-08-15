import { describe, it, expect } from "vitest";
import { googleEventToPatch } from "../calendar/google";

describe("googleEventToPatch", () => {
  it("uses dateTime as-is for timed events", () => {
    const patch = googleEventToPatch({
      summary: "Staff Meeting",
      start: { dateTime: "2026-08-15T18:00:00-05:00" },
      end: { dateTime: "2026-08-15T19:00:00-05:00" },
    });
    expect(patch.start).toBe("2026-08-15T18:00:00-05:00");
    expect(patch.end).toBe("2026-08-15T19:00:00-05:00");
  });

  // The bug this guards against: a date-only value ("2026-08-15", no
  // dateTime) parses as UTC midnight — new Date("2026-08-15") renders
  // as 8/14 in any negative-offset timezone. Appending a zone-less
  // time component makes it parse as local midnight instead, so the
  // all-day event actually displays on the day it's supposed to.
  it("anchors date-only (all-day) events to local midnight, not UTC midnight", () => {
    const patch = googleEventToPatch({
      summary: "Inventory Day",
      start: { date: "2026-08-15" },
      end: { date: "2026-08-16" },
    });
    expect(patch.start).toBe("2026-08-15T00:00:00");
    expect(patch.end).toBe("2026-08-16T00:00:00");

    // The whole point: this must NOT shift to the previous day when
    // parsed in a negative-offset timezone the way the bare date
    // string "2026-08-15" would.
    const parsedInAnyTimezone = new Date(patch.start!);
    expect(parsedInAnyTimezone.getDate()).toBe(15);
    expect(parsedInAnyTimezone.getMonth()).toBe(7); // August, 0-indexed
  });

  it("defaults a missing title to (untitled) and passes description through", () => {
    const patch = googleEventToPatch({
      start: { dateTime: "2026-08-15T18:00:00Z" },
      end: { dateTime: "2026-08-15T19:00:00Z" },
      description: "Bring the good scotch",
    });
    expect(patch.title).toBe("(untitled)");
    expect(patch.description).toBe("Bring the good scotch");
  });
});
