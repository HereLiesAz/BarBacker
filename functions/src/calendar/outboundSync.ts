import { onDocumentWritten } from "firebase-functions/v2/firestore";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { getGoogleAccessToken } from "./connection";
import { deleteGoogleEvent, insertGoogleEvent, updateGoogleEvent } from "./google";
import { CalendarEvent } from "./types";

// A rapid double-edit can dispatch two overlapping invocations for the
// same document, both of which would see externalId as unset and both
// insert a Google event — a stale claim past this age is treated as
// abandoned (e.g. the function crashed after claiming but before the
// Google insert completed) rather than blocking sync forever.
const CLAIM_STALE_MS = 5 * 60 * 1000;

// Fields that represent actual user-visible content — if none of
// these changed between before/after, the write was this function's
// own bookkeeping (externalId, lastSyncedAt) reflecting back onto the
// doc it just wrote, not a real edit.
const CONTENT_FIELDS: (keyof CalendarEvent)[] = ["title", "description", "start", "end", "type", "assignedTo"];

export function contentChanged(before: CalendarEvent | undefined, after: CalendarEvent | undefined): boolean {
  if (!before || !after) return true;
  return CONTENT_FIELDS.some((field) => JSON.stringify(before[field]) !== JSON.stringify(after[field]));
}

// Mirrors LOCALLY-OWNED events (no externalProvider set — see the
// design note in firestore.rules) out to Google. Events with
// externalProvider set are Google/iCal-owned and never mirrored back
// out by this trigger, which is what prevents an infinite outbound<->
// inbound ping-pong: only inboundSync.ts (webhook.ts) writes
// externalProvider, and this trigger explicitly skips anything that
// has it.
//
// The other half of loop prevention is contentChanged() above: every
// successful insert/update below writes externalId/lastSyncedAt back
// onto the same document, which re-triggers this function. Without
// the content check, that write-back looks like a fresh edit and
// mirrors again forever (write -> trigger -> write -> trigger...).
// Skipping when only bookkeeping fields moved breaks the cycle.
export const onEventWritten = onDocumentWritten("bars/{barId}/events/{eventId}", async (event) => {
  const { barId, eventId } = event.params;
  const before = event.data?.before?.data() as CalendarEvent | undefined;
  const after = event.data?.after?.data() as CalendarEvent | undefined;

  if (after && !contentChanged(before, after)) return;

  const db = getFirestore();
  const connDoc = await db.doc(`bars/${barId}/calendarConnection/google`).get();
  const connection = connDoc.data();
  if (!connection?.connected || !connection.calendarId) return; // no Google calendar linked.
  const calendarId = connection.calendarId as string;

  try {
    if (!after) {
      // Deleted locally.
      if (before && before.externalId && !before.externalProvider) {
        const accessToken = await getGoogleAccessToken(barId);
        await deleteGoogleEvent(accessToken, calendarId, before.externalId);
      }
      return;
    }

    if (after.externalProvider) return; // externally-owned — never mirrored back out.

    const accessToken = await getGoogleAccessToken(barId);
    if (!after.externalId) {
      const eventRef = db.doc(`bars/${barId}/events/${eventId}`);
      // Atomically claim the insert so two overlapping invocations for
      // the same document (a rapid double-edit) can't both call
      // insertGoogleEvent — only one wins the transaction's
      // check-and-set; Firestore serializes conflicting writes on the
      // same doc and retries the loser, which then sees the claim.
      const claimed = await db.runTransaction(async (tx) => {
        const snap = await tx.get(eventRef);
        const data = snap.data() as (CalendarEvent & { externalSyncClaimedAt?: Timestamp }) | undefined;
        if (!data) return false;
        if (data.externalId || data.externalProvider) return false;
        const claimAge = data.externalSyncClaimedAt ? Date.now() - data.externalSyncClaimedAt.toMillis() : Infinity;
        if (claimAge < CLAIM_STALE_MS) return false;
        tx.set(eventRef, { externalSyncClaimedAt: FieldValue.serverTimestamp() }, { merge: true });
        return true;
      });
      if (!claimed) return;

      const googleId = await insertGoogleEvent(accessToken, calendarId, { ...after, id: eventId });
      await eventRef.set(
        {
          externalId: googleId,
          lastSyncedAt: FieldValue.serverTimestamp(),
          externalSyncClaimedAt: FieldValue.delete(),
        },
        { merge: true },
      );
    } else {
      await updateGoogleEvent(accessToken, calendarId, after.externalId, { ...after, id: eventId });
      await db.doc(`bars/${barId}/events/${eventId}`).set(
        { lastSyncedAt: FieldValue.serverTimestamp() }, { merge: true },
      );
    }
  } catch (e) {
    console.error(`Outbound Google sync failed for bar ${barId} event ${eventId}`, e);
  }
});
