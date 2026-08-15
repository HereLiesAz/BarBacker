import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { randomBytes } from "node:crypto";
import { requireManagerPlus } from "../shared/authz";

// Mints, rotates, or revokes the opaque token in a bar's outbound
// iCal feed URL (/ical/{barId}/{token}.ics — see icalFeed.ts).
// Rotating (revoke: false, the default) invalidates the old URL
// immediately by replacing it; revoke: true clears the token
// entirely so the feed 404s until a manager rotates a new one in —
// matching "Manager+ can rotate or revoke."
export const rotateICalFeedToken = onCall(async (request) => {
  const { barId, revoke } = (request.data ?? {}) as { barId?: string; revoke?: boolean };
  if (!barId) throw new HttpsError("invalid-argument", "barId is required.");
  requireManagerPlus(request.auth, barId);

  const token = revoke ? null : randomBytes(24).toString("hex");
  await getFirestore().doc(`bars/${barId}/icalFeed/config`).set({
    token, rotatedAt: FieldValue.serverTimestamp(),
  });
  return { token };
});
