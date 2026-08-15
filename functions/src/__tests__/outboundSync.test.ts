import { describe, it, expect } from "vitest";
import { contentChanged } from "../calendar/outboundSync";
import { CalendarEvent } from "../calendar/types";

const base: CalendarEvent = {
  id: "e1", title: "Staff Meeting", start: "2026-08-15T18:00:00", end: "2026-08-15T19:00:00", type: "event",
};

describe("contentChanged", () => {
  it("is true for a brand-new document (no before)", () => {
    expect(contentChanged(undefined, base)).toBe(true);
  });

  it("is true when the document was deleted (no after)", () => {
    expect(contentChanged(base, undefined)).toBe(true);
  });

  // This is the actual loop-prevention case: onEventWritten's own
  // write-back (externalId/lastSyncedAt) must NOT look like a content
  // change, or the trigger re-fires on itself forever.
  it("is false when only externalId/lastSyncedAt changed", () => {
    const after: CalendarEvent = { ...base, externalId: "google-123" };
    expect(contentChanged(base, after)).toBe(false);
  });

  it("is true when the title changed", () => {
    expect(contentChanged(base, { ...base, title: "Renamed" })).toBe(true);
  });

  it("is true when start/end changed", () => {
    expect(contentChanged(base, { ...base, start: "2026-08-15T20:00:00" })).toBe(true);
  });

  it("is true when assignedTo changed", () => {
    expect(contentChanged({ ...base, assignedTo: ["a"] }, { ...base, assignedTo: ["a", "b"] })).toBe(true);
  });
});
