import { onRequest } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";
import { createHash, timingSafeEqual } from "node:crypto";
import { CalendarEvent } from "./types";

// Constant-time token check. token is the only thing standing between
// a bar's private calendar and whoever else knows the feed URL, so a
// plain `!==` here would give a remote, unauthenticated caller a
// byte-at-a-time timing oracle over repeated requests (same class of
// secret appleAuth.ts's claimMatches defends against). Both sides are
// hashed to a fixed-length digest first so a length mismatch can never
// itself leak information through timingSafeEqual's length check.
function tokenMatches(presented: string, expected: string): boolean {
  const presentedHash = createHash("sha256").update(presented).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(presentedHash, expectedHash);
}

function icsEscape(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function icsDate(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

// Serves a read-only .ics feed of a bar's non-deleted events. `token`
// is the opaque secret from bars/{barId}/icalFeed/config — anyone
// with the URL gets read access, which is the iCal model itself (see
// the design doc's "Outbound iCal feed" section). This function is
// expected to be reached via a Firebase Hosting rewrite mapping
// /ical/** to it, since it needs a stable, guessable-free path shape
// rather than the default Cloud Functions URL.
export const icalFeed = onRequest(async (req, res) => {
  const parts = req.path.split("/").filter(Boolean); // ['ical', barId, 'token.ics'] once rewritten.
  const barId = parts[1];
  const tokenFile = parts[2];
  if (!barId || !tokenFile || !tokenFile.endsWith(".ics")) {
    res.status(404).send("Not found.");
    return;
  }
  const token = tokenFile.slice(0, -4);

  const db = getFirestore();
  const feedDoc = await db.doc(`bars/${barId}/icalFeed/config`).get();
  const storedToken = feedDoc.data()?.token as string | undefined;
  if (!feedDoc.exists || !storedToken || !tokenMatches(token, storedToken)) {
    res.status(404).send("Not found.");
    return;
  }

  // Filtered in memory rather than via a `deletedAt == null` query —
  // Firestore only matches that against a field explicitly stored as
  // null, not one that's simply absent, and most events never have
  // deletedAt set at all until soft-deleted.
  const eventsSnap = await db.collection(`bars/${barId}/events`).get();

  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//BarBacker//Calendar//EN"];
  for (const doc of eventsSnap.docs) {
    const event = doc.data() as CalendarEvent;
    if (event.deletedAt || !event.start || !event.end) continue;
    lines.push(
      "BEGIN:VEVENT",
      `UID:${doc.id}@barbacker`,
      `DTSTART:${icsDate(event.start)}`,
      `DTEND:${icsDate(event.end)}`,
      `SUMMARY:${icsEscape(event.title ?? "")}`,
      ...(event.description ? [`DESCRIPTION:${icsEscape(event.description)}`] : []),
      "END:VEVENT",
    );
  }
  lines.push("END:VCALENDAR");

  res.setHeader("Content-Type", "text/calendar; charset=utf-8");
  res.status(200).send(lines.join("\r\n"));
});
