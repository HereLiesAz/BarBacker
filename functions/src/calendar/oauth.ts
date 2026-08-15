import { onCall, onRequest, HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { randomBytes } from "node:crypto";
import { requireManagerPlus } from "../shared/authz";
import { encryptSecret } from "../shared/kms";
import { exchangeCodeForTokens } from "./google";

const STATE_TTL_MS = 10 * 60 * 1000;

// Step 1 — Manager requests a redirect URL to Google's consent
// screen. Mirrors functions/src/pos/oauth.ts's Square flow; see that
// file's comment for the full step breakdown.
export const calendarGetAuthorizeUrl = onCall(async (request) => {
  const { barId } = (request.data ?? {}) as { barId?: string };
  if (!barId) throw new HttpsError("invalid-argument", "barId is required.");
  requireManagerPlus(request.auth, barId);

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const callbackBase = process.env.CALENDAR_OAUTH_CALLBACK_BASE_URL;
  if (!clientId || !callbackBase) {
    throw new HttpsError("failed-precondition", "Google OAuth is not configured on the server.");
  }

  const state = randomBytes(24).toString("hex");
  await getFirestore().doc(`calendarOAuthStates/${state}`).set({
    barId, createdAt: FieldValue.serverTimestamp(),
  });

  const scope = encodeURIComponent("https://www.googleapis.com/auth/calendar");
  const redirectUri = encodeURIComponent(`${callbackBase}/calendarOauthCallback`);
  const authorizeUrl =
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}&response_type=code&scope=${scope}` +
    `&access_type=offline&prompt=consent&state=${state}`;

  return { authorizeUrl };
});

// Step 3 — Google redirects here after consent. We don't yet know
// which of the manager's Google calendars to mirror (the design doc:
// "Manager picks one Google calendar to mirror"), so this step only
// stores tokens and connection status; calendarSelectCalendar (client
// picks from calendarListCalendars, both below) sets calendarId and
// kicks off the initial watch subscription.
export const calendarOauthCallback = onRequest(async (req, res) => {
  const code = req.query.code as string | undefined;
  const state = req.query.state as string | undefined;
  if (!code || !state) {
    res.status(400).send("Missing code or state.");
    return;
  }

  const db = getFirestore();
  const stateRef = db.doc(`calendarOAuthStates/${state}`);
  const stateDoc = await stateRef.get();
  if (!stateDoc.exists) {
    res.status(400).send("Invalid or expired connection request. Please try connecting again.");
    return;
  }
  const { barId, createdAt } = stateDoc.data() as { barId: string; createdAt: FirebaseFirestore.Timestamp };
  await stateRef.delete();
  if (Date.now() - createdAt.toMillis() > STATE_TTL_MS) {
    res.status(400).send("This connection request expired. Please try connecting again.");
    return;
  }

  const callbackBase = process.env.CALENDAR_OAUTH_CALLBACK_BASE_URL;
  try {
    const tokens = await exchangeCodeForTokens(code, `${callbackBase}/calendarOauthCallback`);
    await db.doc(`bars/${barId}/calendarSecrets/google`).set({
      accessToken: await encryptSecret(tokens.accessToken),
      refreshToken: await encryptSecret(tokens.refreshToken),
      expiresAt: tokens.expiresAt,
      updatedAt: FieldValue.serverTimestamp(),
    });
    await db.doc(`bars/${barId}/calendarConnection/google`).set({
      provider: "google", connected: true, calendarId: null, error: null,
      connectedAt: FieldValue.serverTimestamp(),
    });
    res.status(200).send(
      "<html><body>Google connected. Return to BarBacker's Calendar Settings to pick which calendar to sync.</body></html>",
    );
  } catch (e) {
    res.status(400).send(`Failed to connect: ${e instanceof Error ? e.message : "unknown error"}`);
  }
});

export const calendarDisconnect = onCall(async (request) => {
  const { barId } = (request.data ?? {}) as { barId?: string };
  if (!barId) throw new HttpsError("invalid-argument", "barId is required.");
  requireManagerPlus(request.auth, barId);

  const db = getFirestore();
  await db.doc(`bars/${barId}/calendarSecrets/google`).delete();
  await db.doc(`bars/${barId}/calendarConnection/google`).set({
    provider: "google", connected: false, calendarId: null, error: null,
    disconnectedAt: FieldValue.serverTimestamp(),
  });
  return { disconnected: true };
});
