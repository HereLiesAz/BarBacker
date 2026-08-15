import { onDocumentWritten } from "firebase-functions/v2/firestore";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { getGoogleAccessToken } from "./connection";
import { deleteGoogleEvent, insertGoogleEvent, updateGoogleEvent } from "./google";
import { CalendarEvent } from "./types";

// Mirrors LOCALLY-OWNED events (no externalProvider set — see the
// design note in firestore.rules) out to Google. Events with
// externalProvider set are Google/iCal-owned and never mirrored back
// out by this trigger, which is what prevents an infinite outbound<->
// inbound ping-pong: only inboundSync.ts (webhook.ts) writes
// externalProvider, and this trigger explicitly skips anything that
// has it.
export const onEventWritten = onDocumentWritten("bars/{barId}/events/{eventId}", async (event) => {
  const { barId, eventId } = event.params;
  const before = event.data?.before?.data() as CalendarEvent | undefined;
  const after = event.data?.after?.data() as CalendarEvent | undefined;

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
      const googleId = await insertGoogleEvent(accessToken, calendarId, { ...after, id: eventId });
      await db.doc(`bars/${barId}/events/${eventId}`).set(
        { externalId: googleId, lastSyncedAt: FieldValue.serverTimestamp() }, { merge: true },
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
