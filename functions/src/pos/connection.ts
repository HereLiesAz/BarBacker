import { HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue, DocumentReference, DocumentData } from "firebase-admin/firestore";
import { decryptSecret, encryptSecret } from "../shared/kms";
import { createPOSClient } from "./factory";
import { POSClient, POSProvider } from "./types";

const JUST_IN_TIME_MARGIN_MS = 5 * 60 * 1000;

// Refreshes (Square) or reissues (Toast) the stored access token if
// it's within `marginMs` of expiry, persisting the new token back to
// `secretRef`. Returns the (possibly refreshed) plaintext access
// token. Shared by getConnectedClient's just-in-time refresh and
// rotateTokens.ts's proactive hourly sweep — they just call this with
// different margins.
async function refreshIfNeeded(
  secretRef: DocumentReference<DocumentData>,
  secret: DocumentData,
  provider: POSProvider,
  currentAccessToken: string,
  marginMs: number,
): Promise<string> {
  const expiresAt = secret.expiresAt as number | null;
  if (expiresAt == null || expiresAt - Date.now() >= marginMs) return currentAccessToken;

  if (provider === "toast") {
    // Toast reissues rather than refreshes — see toast.ts.
    const clientId = secret.clientId as string;
    const clientSecret = await decryptSecret(secret.clientSecret);
    const restaurantGuid = secret.restaurantGuid as string;
    const client = createPOSClient(provider);
    const result = await client.connect({ clientId, clientSecret, restaurantGuid });
    if (!result.connected) throw new HttpsError("failed-precondition", result.error ?? "Failed to reconnect to Toast.");
    await secretRef.set({
      accessToken: await encryptSecret(result.accessToken!),
      expiresAt: result.expiresAt ?? null,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    return result.accessToken!;
  }

  if (!secret.refreshToken) return currentAccessToken;
  const refreshToken = await decryptSecret(secret.refreshToken);
  const client = createPOSClient(provider);
  if (!client.refreshAccessToken) throw new HttpsError("internal", `${provider} does not support token refresh.`);
  const refreshed = await client.refreshAccessToken(refreshToken);
  await secretRef.set({
    accessToken: await encryptSecret(refreshed.accessToken),
    refreshToken: await encryptSecret(refreshed.refreshToken),
    expiresAt: refreshed.expiresAt,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  return refreshed.accessToken;
}

// Loads a bar's stored, decrypted POS connection and returns a
// ready-to-use client, transparently refreshing the access token
// first if it's within 5 minutes of expiry — the just-in-time
// backstop for a call that lands in the gap between rotateTokens.ts's
// hourly proactive sweep (24h margin).
export async function getConnectedClient(barId: string, provider: POSProvider): Promise<POSClient> {
  const db = getFirestore();
  const secretRef = db.doc(`bars/${barId}/posSecrets/${provider}`);
  const secretDoc = await secretRef.get();
  if (!secretDoc.exists) throw new HttpsError("failed-precondition", `${provider} is not connected for this bar.`);
  const secret = secretDoc.data()!;

  const accessToken = await refreshIfNeeded(
    secretRef, secret, provider, await decryptSecret(secret.accessToken), JUST_IN_TIME_MARGIN_MS,
  );
  return createPOSClient(provider, accessToken);
}

// Proactive rotation, called by rotateTokens.ts's hourly schedule —
// same refresh logic, just with a much wider (24h) margin so tokens
// get rotated well before they'd ever force a just-in-time refresh
// mid-request.
export async function rotateIfNeeded(
  barId: string, provider: POSProvider, marginMs: number,
): Promise<void> {
  const db = getFirestore();
  const secretRef = db.doc(`bars/${barId}/posSecrets/${provider}`);
  const secretDoc = await secretRef.get();
  if (!secretDoc.exists) return;
  const secret = secretDoc.data()!;
  await refreshIfNeeded(secretRef, secret, provider, await decryptSecret(secret.accessToken), marginMs);
}
