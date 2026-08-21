import { onCall, onRequest, HttpsError } from "firebase-functions/v2/https";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import { createHash, timingSafeEqual } from "node:crypto";

// Apple's identity tokens are short-lived anyway; this bounds how long
// one can sit in Firestore waiting to be collected, and how long a
// half-finished sign-in stays resumable.
export const SESSION_TTL_MS = 10 * 60 * 1000;

const AUTHORIZE_ENDPOINT = "https://appleid.apple.com/auth/authorize";
const SESSIONS = "appleAuthSessions";

// 16 bytes as hex, 32 as hex. Fixed lengths because these are the only
// two shapes the client ever sends, and anything else is either a bug or
// someone poking at an unauthenticated endpoint.
const SESSION_ID_PATTERN = /^[0-9a-f]{32}$/;
const HASH_PATTERN = /^[0-9a-f]{64}$/;

type SessionStatus = "pending" | "ready" | "cancelled" | "failed";

interface SessionDoc {
  claimSecretHash: string;
  status: SessionStatus;
  idToken?: string;
  message?: string;
  createdAt: Timestamp;
}

/**
 * What the browser came back with, reduced to something storable.
 *
 * Exported and pure so the branch that decides "signed in" vs "the user
 * backed out" vs "Apple said no" can be tested without a live callback:
 * getting `user_cancelled_authorize` wrong shows the person an error
 * dialog for having changed their mind, which is the flow working.
 */
export function classifyAppleCallback(body: Record<string, unknown>): {
  status: Exclude<SessionStatus, "pending">;
  idToken?: string;
  message?: string;
} {
  const error = typeof body.error === "string" ? body.error : undefined;
  if (error === "user_cancelled_authorize") {
    return { status: "cancelled" };
  }
  if (error) {
    return { status: "failed", message: `Apple declined the sign-in (${error}).` };
  }
  const idToken = typeof body.id_token === "string" ? body.id_token : undefined;
  if (!idToken) {
    return { status: "failed", message: "Apple returned no identity token." };
  }
  return { status: "ready", idToken };
}

/** True once a session is too old to be completed or collected. */
export function isSessionExpired(createdAtMillis: number, nowMillis: number): boolean {
  return nowMillis - createdAtMillis > SESSION_TTL_MS;
}

/**
 * Compares a presented claim secret against the stored hash.
 *
 * Constant-time, and the length check happens first because
 * timingSafeEqual throws on a length mismatch rather than returning
 * false. The secret is the only thing standing between a session and
 * whoever else knows its id — and the id, unlike the secret, travels
 * through the browser's URL bar on the way to Apple.
 */
export function claimMatches(presented: string, storedHash: string): boolean {
  if (!HASH_PATTERN.test(storedHash)) return false;
  const presentedHash = createHash("sha256").update(presented).digest("hex");
  if (presentedHash.length !== storedHash.length) return false;
  return timingSafeEqual(Buffer.from(presentedHash), Buffer.from(storedHash));
}

/**
 * The URL that starts Apple's web sign-in.
 *
 * `response_type=code id_token` is the whole reason this flow needs no
 * private key. Apple returns the identity token directly in the callback
 * POST, and that token is the only thing Firebase wants; exchanging the
 * code at `/auth/token` is what would require a client secret that is a
 * JWT signed with a .p8 — the credential a shipped app has nowhere safe
 * to keep, and which this server would then have to hold and rotate.
 *
 * `response_mode=form_post` is not optional: Apple rejects an `id_token`
 * response type without it, and it also keeps the token out of a redirect
 * URL, and therefore out of browser history and Referer headers.
 */
export function buildAppleAuthorizeUrl(input: {
  serviceId: string;
  redirectUri: string;
  state: string;
  /** SHA-256 of the client's raw nonce, hex. The raw value never leaves the device. */
  nonce: string;
}): string {
  const parameters: Record<string, string> = {
    client_id: input.serviceId,
    redirect_uri: input.redirectUri,
    response_type: "code id_token",
    response_mode: "form_post",
    scope: "name email",
    state: input.state,
    nonce: input.nonce,
  };
  const query = Object.entries(parameters)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  return `${AUTHORIZE_ENDPOINT}?${query}`;
}

function callbackUrl(): string | null {
  const base = process.env.APPLE_OAUTH_CALLBACK_BASE_URL;
  if (!base) return null;
  return `${base.replace(/\/+$/, "")}/appleAuthCallback`;
}

// Step 1 — the client mints a session id and a claim secret, sends us the
// id and the secret's hash, and gets back the URL to open a browser at.
// Deliberately unauthenticated: nobody is signed in yet, that being the
// point. What it can be abused for is creating junk session documents, so
// the shapes are checked strictly and cleanupAppleAuthSessions sweeps.
export const appleAuthBegin = onCall(async (request) => {
  const { sessionId, claimSecretHash, nonce } = (request.data ?? {}) as {
    sessionId?: string;
    claimSecretHash?: string;
    nonce?: string;
  };
  if (
    !sessionId || !SESSION_ID_PATTERN.test(sessionId) ||
    !claimSecretHash || !HASH_PATTERN.test(claimSecretHash) ||
    !nonce || !HASH_PATTERN.test(nonce)
  ) {
    throw new HttpsError("invalid-argument", "Malformed sign-in request.");
  }

  const serviceId = process.env.APPLE_SERVICE_ID;
  const redirectUri = callbackUrl();
  if (!serviceId || !redirectUri) {
    throw new HttpsError(
      "failed-precondition",
      "Apple sign-in is not configured on the server.",
    );
  }

  await getFirestore().doc(`${SESSIONS}/${sessionId}`).set({
    claimSecretHash,
    status: "pending",
    createdAt: FieldValue.serverTimestamp(),
  });

  return {
    authorizeUrl: buildAppleAuthorizeUrl({ serviceId, redirectUri, state: sessionId, nonce }),
  };
});

// Step 2 — Apple form-posts the result of the consent screen here. Plain
// onRequest, not onCall, because this is a browser navigation from
// appleid.apple.com rather than a call from our own client.
export const appleAuthCallback = onRequest(async (req, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;
  const sessionId = typeof body.state === "string" ? body.state : undefined;
  if (!sessionId || !SESSION_ID_PATTERN.test(sessionId)) {
    res.status(400).send(page("That sign-in could not be verified. Close this tab and try again."));
    return;
  }

  const ref = getFirestore().doc(`${SESSIONS}/${sessionId}`);
  const snap = await ref.get();
  if (!snap.exists) {
    res.status(400).send(page("That sign-in request is unknown. Close this tab and try again."));
    return;
  }
  const session = snap.data() as SessionDoc;
  if (isSessionExpired(session.createdAt.toMillis(), Date.now())) {
    await ref.delete();
    res.status(400).send(page("That sign-in request expired. Close this tab and try again."));
    return;
  }

  const outcome = classifyAppleCallback(body);
  // Only ever updated, never re-created: a POST for a session that has
  // already been claimed and deleted must not resurrect a document
  // holding an identity token nothing will ever collect.
  await ref.update({
    status: outcome.status,
    idToken: outcome.idToken ?? FieldValue.delete(),
    message: outcome.message ?? FieldValue.delete(),
  });

  res.status(200).send(
    page(
      outcome.status === "ready"
        ? "Signed in. You can close this tab and go back to BarBacker."
        : "Sign-in was not completed. Close this tab and go back to BarBacker.",
    ),
  );
});

// Step 3 — the client polls this until the browser half finishes. It
// polls rather than being pushed because the session document holds an
// identity token, so firestore.rules denies the client any read of it,
// and there is no signed-in identity to scope such a read to anyway.
export const appleAuthClaim = onCall(async (request) => {
  const { sessionId, claimSecret } = (request.data ?? {}) as {
    sessionId?: string;
    claimSecret?: string;
  };
  if (!sessionId || !SESSION_ID_PATTERN.test(sessionId) || !claimSecret) {
    throw new HttpsError("invalid-argument", "Malformed sign-in request.");
  }

  const ref = getFirestore().doc(`${SESSIONS}/${sessionId}`);
  const snap = await ref.get();
  // Same answer for "never existed", "already collected", and "wrong
  // secret": distinguishing them would turn this into an oracle for
  // which session ids are live.
  if (!snap.exists) throw new HttpsError("not-found", "That sign-in has expired.");

  const session = snap.data() as SessionDoc;
  if (!claimMatches(claimSecret, session.claimSecretHash)) {
    throw new HttpsError("not-found", "That sign-in has expired.");
  }
  if (isSessionExpired(session.createdAt.toMillis(), Date.now())) {
    await ref.delete();
    throw new HttpsError("not-found", "That sign-in has expired.");
  }

  if (session.status === "pending") return { status: "pending" };

  // Single use. Deleted before returning rather than after, so a replayed
  // claim cannot hand the same identity token to a second caller.
  await ref.delete();
  return {
    status: session.status,
    idToken: session.idToken ?? null,
    message: session.message ?? null,
  };
});

// Not housekeeping. A sign-in that reached Apple and was then abandoned —
// the tab closed, the app killed — leaves a document holding an identity
// token that nothing will ever collect and nothing else would ever
// delete. This is what bounds how long that sits there.
export const cleanupAppleAuthSessions = onSchedule("every 60 minutes", async () => {
  const db = getFirestore();
  const cutoff = Timestamp.fromMillis(Date.now() - SESSION_TTL_MS);
  const snap = await db
    .collection(SESSIONS)
    .where("createdAt", "<", cutoff)
    .limit(400)
    .get();

  if (snap.empty) return;
  const batch = db.batch();
  snap.docs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
  console.log(`Cleared ${snap.size} expired Apple sign-in session(s).`);
});

/** The tab the person is left looking at. Plain, because nobody reads it twice. */
function page(message: string): string {
  return `<!doctype html><html><head><meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width,initial-scale=1">` +
    `<title>BarBacker</title></head>` +
    `<body style="font-family:system-ui,sans-serif;padding:2rem">${message}</body></html>`;
}
