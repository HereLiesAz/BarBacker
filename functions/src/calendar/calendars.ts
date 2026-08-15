import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { randomBytes } from "node:crypto";
import { requireManagerPlus } from "../shared/authz";
import { getGoogleAccessToken } from "./connection";
import { watchGoogleCalendar } from "./google";
import { syncFromGoogle } from "./inboundSync";

export const calendarListCalendars = onCall(async (request) => {
  const { barId } = (request.data ?? {}) as { barId?: string };
  if (!barId) throw new HttpsError("invalid-argument", "barId is required.");
  requireManagerPlus(request.auth, barId);

  const accessToken = await getGoogleAccessToken(barId);
  const res = await fetch("https://www.googleapis.com/calendar/v3/users/me/calendarList", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await res.json() as any;
  if (!res.ok) throw new HttpsError("internal", data.error?.message ?? "Failed to list Google calendars.");

  return {
    calendars: (data.items ?? []).map((c: any) => ({ id: c.id, summary: c.summary, primary: !!c.primary })),
  };
});

// Design doc: "Manager picks one Google calendar to mirror — not
// 'all calendars,' too many ways to send the wrong invite." Setting
// the calendar also kicks off the initial watch subscription so
// inbound sync starts immediately rather than waiting up to a week
// for the first scheduled re-subscribe.
export const calendarSelectCalendar = onCall(async (request) => {
  const { barId, calendarId } = (request.data ?? {}) as { barId?: string; calendarId?: string };
  if (!barId || !calendarId) throw new HttpsError("invalid-argument", "barId and calendarId are required.");
  requireManagerPlus(request.auth, barId);

  const webhookBase = process.env.CALENDAR_OAUTH_CALLBACK_BASE_URL;
  if (!webhookBase) throw new HttpsError("failed-precondition", "Calendar webhook base URL is not configured.");

  const accessToken = await getGoogleAccessToken(barId);
  const channelId = randomBytes(16).toString("hex");
  const watch = await watchGoogleCalendar(accessToken, calendarId, `${webhookBase}/calendarWebhook`, channelId);

  const db = getFirestore();
  await db.doc(`bars/${barId}/calendarConnection/google`).set({
    provider: "google", connected: true, calendarId,
    watchChannelId: channelId, watchResourceId: watch.resourceId, watchExpiresAt: watch.expiration,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  // Google only pushes on future *changes* — without an initial pull,
  // a calendar full of pre-existing events would show nothing in the
  // app until someone happened to edit one of them in Google. This
  // does the same sync a webhook ping would trigger, just eagerly.
  try {
    await syncFromGoogle(barId);
  } catch (e) {
    // The calendar is connected and watching either way; a failed
    // initial pull just means the next real change (or the daily
    // resubscribe sweep, which doesn't re-pull) won't backfill
    // history either — log it, but don't fail calendar selection
    // over a sync hiccup the user can't do anything about mid-request.
    console.error(`Initial Google sync failed for bar ${barId}`, e);
  }

  return { calendarId };
});
