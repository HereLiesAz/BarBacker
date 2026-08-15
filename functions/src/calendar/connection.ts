import { HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { decryptSecret, encryptSecret } from "../shared/kms";
import { refreshGoogleToken } from "./google";

const JUST_IN_TIME_MARGIN_MS = 5 * 60 * 1000;

// Loads a bar's decrypted Google access token, refreshing it first if
// within 5 minutes of expiry — same pattern as
// functions/src/pos/connection.ts's getConnectedClient.
export async function getGoogleAccessToken(barId: string): Promise<string> {
  const db = getFirestore();
  const secretRef = db.doc(`bars/${barId}/calendarSecrets/google`);
  const secretDoc = await secretRef.get();
  if (!secretDoc.exists) throw new HttpsError("failed-precondition", "Google Calendar is not connected for this bar.");
  const secret = secretDoc.data()!;

  let accessToken = await decryptSecret(secret.accessToken);
  const expiresAt = secret.expiresAt as number;
  if (expiresAt - Date.now() < JUST_IN_TIME_MARGIN_MS) {
    const refreshToken = await decryptSecret(secret.refreshToken);
    const refreshed = await refreshGoogleToken(refreshToken);
    accessToken = refreshed.accessToken;
    await secretRef.set({
      accessToken: await encryptSecret(accessToken),
      expiresAt: refreshed.expiresAt,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
  }
  return accessToken;
}
