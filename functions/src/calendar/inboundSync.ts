import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { getGoogleAccessToken } from "./connection";
import { googleEventToPatch, listGoogleEventChanges } from "./google";

// Pulls incremental changes from Google and applies them locally.
// Conflict resolution is last-write-wins on the event's lastSyncedAt
// vs Google's `updated` timestamp (see the design doc's "Conflict
// resolution" note) — if Google's version isn't newer than what we
// last synced, it's an echo of our own outbound write (see
// outboundSync.ts) and is skipped, which is what prevents ping-pong
// between the two directions.
//
// Simplification versus the full design doc: true bidirectional
// conflict merging (detecting *both* sides changed and logging to
// syncConflicts) isn't implemented — a genuine newer-than-lastSyncedAt
// change from Google is applied as authoritative even if the local
// copy also has unsynced local edits. Worth revisiting if concurrent
// edits turn out to be common in practice.
export async function syncFromGoogle(barId: string): Promise<void> {
  const db = getFirestore();
  const connRef = db.doc(`bars/${barId}/calendarConnection/google`);
  const connDoc = await connRef.get();
  const connection = connDoc.data();
  if (!connection?.connected || !connection.calendarId) return;

  const accessToken = await getGoogleAccessToken(barId);
  let result = await listGoogleEventChanges(accessToken, connection.calendarId, connection.syncToken);
  if (result.tokenExpired) {
    // Full resync — the design doc doesn't spec exact fallback
    // behavior for an expired syncToken beyond "incremental changes
    // via events.list + syncToken"; dropping the token and doing one
    // unfiltered list is the standard Google-recommended recovery.
    result = await listGoogleEventChanges(accessToken, connection.calendarId);
  }

  const eventsRef = db.collection(`bars/${barId}/events`);
  for (const gEvent of result.events) {
    const existingSnap = await eventsRef.where("externalId", "==", gEvent.id).limit(1).get();
    const googleUpdated = gEvent.updated ? new Date(gEvent.updated).getTime() : Date.now();

    if (gEvent.status === "cancelled") {
      if (!existingSnap.empty) {
        await existingSnap.docs[0].ref.set({ deletedAt: FieldValue.serverTimestamp() }, { merge: true });
      }
      continue;
    }

    if (existingSnap.empty) {
      await eventsRef.add({
        ...googleEventToPatch(gEvent),
        type: "event",
        externalId: gEvent.id,
        externalProvider: "google",
        lastSyncedAt: FieldValue.serverTimestamp(),
      });
      continue;
    }

    const existingDoc = existingSnap.docs[0];
    const lastSyncedAt = (existingDoc.data().lastSyncedAt as Timestamp | undefined)?.toMillis() ?? 0;
    if (googleUpdated <= lastSyncedAt) continue; // echo of our own write.

    await existingDoc.ref.set({
      ...googleEventToPatch(gEvent),
      externalProvider: "google",
      lastSyncedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
  }

  await connRef.set({ syncToken: result.nextSyncToken ?? null }, { merge: true });
}
