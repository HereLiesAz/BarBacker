import { onCall, HttpsError } from "firebase-functions/v2/https";
import { onRequest } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { randomBytes } from "node:crypto";
import { SquarePOSClient } from "./square";
import { ToastPOSClient } from "./toast";
import { encryptSecret } from "../shared/kms";
import { requireManagerPlus } from "../shared/authz";

const STATE_TTL_MS = 10 * 60 * 1000;

// Step 1 of the Square connect flow (see the design doc's "OAuth
// flow" section) — Manager+ requests a redirect URL, we mint a
// short-lived opaque state token tying that request back to this bar,
// and the client sends the browser there. oauthCallback (below) is
// step 3; Square's consent screen is step 2, entirely outside our
// control. Square is the only provider using this redirect flow —
// Toast connects via posConnectToast (client-credentials, no
// user-facing consent screen — see toast.ts's caveat comment).
export const posGetAuthorizeUrl = onCall(async (request) => {
  const { barId } = (request.data ?? {}) as { barId?: string };
  if (!barId) throw new HttpsError("invalid-argument", "barId is required.");
  requireManagerPlus(request.auth, barId);

  const clientId = process.env.SQUARE_CLIENT_ID;
  const callbackBase = process.env.POS_OAUTH_CALLBACK_BASE_URL;
  if (!clientId || !callbackBase) {
    throw new HttpsError("failed-precondition", "Square OAuth is not configured on the server.");
  }

  const state = randomBytes(24).toString("hex");
  await getFirestore().doc(`posOAuthStates/${state}`).set({
    barId, provider: "square", createdAt: FieldValue.serverTimestamp(),
  });

  const scope = ["ITEMS_READ", "ORDERS_READ", "MERCHANT_PROFILE_READ"].join("+");
  const redirectUri = encodeURIComponent(`${callbackBase}/oauthCallback`);
  const authorizeUrl =
    `https://connect.squareup.com/oauth2/authorize?client_id=${clientId}` +
    `&scope=${scope}&session=false&state=${state}&redirect_uri=${redirectUri}`;

  return { authorizeUrl };
});

// Step 3 — Square redirects the manager's browser here with ?code&state
// after they approve the consent screen. Plain onRequest (not onCall)
// because this is a browser navigation, not an authenticated API call
// from our own client.
export const oauthCallback = onRequest(async (req, res) => {
  const provider = "square"; // only Square uses the redirect flow currently.
  const code = req.query.code as string | undefined;
  const state = req.query.state as string | undefined;
  if (!code || !state) {
    res.status(400).send("Missing code or state.");
    return;
  }

  const db = getFirestore();
  const stateRef = db.doc(`posOAuthStates/${state}`);
  const stateDoc = await stateRef.get();
  if (!stateDoc.exists) {
    res.status(400).send("Invalid or expired connection request. Please try connecting again.");
    return;
  }
  const { barId, createdAt } = stateDoc.data() as { barId: string; provider: string; createdAt: FirebaseFirestore.Timestamp };
  await stateRef.delete();
  if (Date.now() - createdAt.toMillis() > STATE_TTL_MS) {
    res.status(400).send("This connection request expired. Please try connecting again.");
    return;
  }

  const client = new SquarePOSClient();
  const result = await client.connect({ code });
  if (!result.connected) {
    res.status(400).send(`Failed to connect: ${result.error ?? "unknown error"}`);
    return;
  }

  const encryptedAccessToken = await encryptSecret(result.accessToken!);
  const encryptedRefreshToken = result.refreshToken ? await encryptSecret(result.refreshToken) : null;

  await db.doc(`bars/${barId}/posSecrets/${provider}`).set({
    accessToken: encryptedAccessToken,
    refreshToken: encryptedRefreshToken,
    expiresAt: result.expiresAt ?? null,
    updatedAt: FieldValue.serverTimestamp(),
  });
  await db.doc(`bars/${barId}/posConnection/${provider}`).set({
    provider, connected: true, merchantId: result.merchantId,
    connectedAt: FieldValue.serverTimestamp(), error: null,
  });

  res.status(200).send("<html><body>Square connected. You can close this tab and return to BarBacker.</body></html>");
});

// Toast has no user-facing consent screen (see toast.ts) — the
// manager enters partner-issued credentials directly.
export const posConnectToast = onCall(async (request) => {
  const { barId, clientId, clientSecret, restaurantGuid } =
    (request.data ?? {}) as { barId?: string; clientId?: string; clientSecret?: string; restaurantGuid?: string };
  if (!barId || !clientId || !clientSecret || !restaurantGuid) {
    throw new HttpsError("invalid-argument", "barId, clientId, clientSecret, and restaurantGuid are all required.");
  }
  requireManagerPlus(request.auth, barId);

  const client = new ToastPOSClient();
  const result = await client.connect({ clientId, clientSecret, restaurantGuid });
  const db = getFirestore();
  if (!result.connected) {
    await db.doc(`bars/${barId}/posConnection/toast`).set({
      provider: "toast", connected: false, merchantId: "", error: result.error ?? "Failed to connect.",
    });
    throw new HttpsError("failed-precondition", result.error ?? "Failed to connect to Toast.");
  }

  await db.doc(`bars/${barId}/posSecrets/toast`).set({
    clientId, clientSecret: await encryptSecret(clientSecret), restaurantGuid,
    accessToken: await encryptSecret(result.accessToken!),
    expiresAt: result.expiresAt ?? null,
    updatedAt: FieldValue.serverTimestamp(),
  });
  await db.doc(`bars/${barId}/posConnection/toast`).set({
    provider: "toast", connected: true, merchantId: result.merchantId,
    connectedAt: FieldValue.serverTimestamp(), error: null,
  });

  return { connected: true };
});

export const posDisconnect = onCall(async (request) => {
  const { barId, provider } = (request.data ?? {}) as { barId?: string; provider?: string };
  if (!barId || !provider) throw new HttpsError("invalid-argument", "barId and provider are required.");
  requireManagerPlus(request.auth, barId);

  const db = getFirestore();
  await db.doc(`bars/${barId}/posSecrets/${provider}`).delete();
  await db.doc(`bars/${barId}/posConnection/${provider}`).set({
    provider, connected: false, merchantId: "", error: null, disconnectedAt: FieldValue.serverTimestamp(),
  });
  return { disconnected: true };
});
