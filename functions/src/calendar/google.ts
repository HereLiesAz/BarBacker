import { CalendarEvent } from "./types";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_CAL_BASE = "https://www.googleapis.com/calendar/v3";

// Google Calendar API v3 + OAuth — well-documented, stable public
// API, high confidence on these shapes (unlike toast.ts's caveats).
// See https://developers.google.com/calendar/api/v3/reference.

function requireGoogleCreds(): { clientId: string; clientSecret: string } {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error("Google OAuth is not configured (GOOGLE_CLIENT_ID/SECRET).");
  return { clientId, clientSecret };
}

export async function exchangeCodeForTokens(code: string, redirectUri: string) {
  const { clientId, clientSecret } = requireGoogleCreds();
  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code, client_id: clientId, client_secret: clientSecret,
      redirect_uri: redirectUri, grant_type: "authorization_code",
    }),
  });
  const data = await res.json() as any;
  if (!res.ok) throw new Error(data.error_description ?? data.error ?? `Google token exchange failed (${res.status}).`);
  return {
    accessToken: data.access_token as string,
    refreshToken: data.refresh_token as string,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
  };
}

export async function refreshGoogleToken(refreshToken: string): Promise<{ accessToken: string; expiresAt: number }> {
  const { clientId, clientSecret } = requireGoogleCreds();
  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: refreshToken, client_id: clientId, client_secret: clientSecret, grant_type: "refresh_token",
    }),
  });
  const data = await res.json() as any;
  if (!res.ok) throw new Error(data.error_description ?? data.error ?? `Google token refresh failed (${res.status}).`);
  return { accessToken: data.access_token, expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000 };
}

function eventToGoogle(event: CalendarEvent) {
  return {
    summary: event.title,
    description: event.description,
    start: { dateTime: event.start },
    end: { dateTime: event.end },
  };
}

// A date-only value (Google's all-day-event shape, "2026-08-15", no
// `dateTime`) parses as UTC midnight per the ISO 8601 / Date spec —
// displaying it with any local formatter (toLocaleString, etc.) in a
// negative-offset timezone shows the *previous* day. Appending a
// bare (zone-less) time component instead makes Date parse it as
// local midnight, which is what an all-day event actually means to
// the person looking at their own calendar.
function toLocalDateTimeString(dateOnly: string): string {
  return `${dateOnly}T00:00:00`;
}

export function googleEventToPatch(gEvent: any): Partial<CalendarEvent> {
  return {
    title: gEvent.summary ?? "(untitled)",
    description: gEvent.description,
    start: gEvent.start?.dateTime ?? (gEvent.start?.date ? toLocalDateTimeString(gEvent.start.date) : undefined),
    end: gEvent.end?.dateTime ?? (gEvent.end?.date ? toLocalDateTimeString(gEvent.end.date) : undefined),
  };
}

export async function insertGoogleEvent(accessToken: string, calendarId: string, event: CalendarEvent): Promise<string> {
  const res = await fetch(`${GOOGLE_CAL_BASE}/calendars/${encodeURIComponent(calendarId)}/events`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify(eventToGoogle(event)),
  });
  const data = await res.json() as any;
  if (!res.ok) throw new Error(data.error?.message ?? `Google event insert failed (${res.status}).`);
  return data.id;
}

export async function updateGoogleEvent(accessToken: string, calendarId: string, googleEventId: string, event: CalendarEvent): Promise<void> {
  const res = await fetch(`${GOOGLE_CAL_BASE}/calendars/${encodeURIComponent(calendarId)}/events/${googleEventId}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify(eventToGoogle(event)),
  });
  if (!res.ok) {
    const data = await res.json() as any;
    throw new Error(data.error?.message ?? `Google event update failed (${res.status}).`);
  }
}

export async function deleteGoogleEvent(accessToken: string, calendarId: string, googleEventId: string): Promise<void> {
  const res = await fetch(`${GOOGLE_CAL_BASE}/calendars/${encodeURIComponent(calendarId)}/events/${googleEventId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  // 404/410 means Google already doesn't have it — treat as success.
  if (!res.ok && res.status !== 404 && res.status !== 410) {
    const data = await res.json().catch(() => ({})) as any;
    throw new Error(data.error?.message ?? `Google event delete failed (${res.status}).`);
  }
}

// Incremental sync via syncToken. A GONE (410) response means the
// token expired server-side — the caller must fall back to a full
// resync; signaled here by omitting nextSyncToken from the result.
// Google only returns nextSyncToken on the LAST page of a change set,
// so this pages all the way through before returning — stopping
// early at the first page would silently drop the rest of that page
// set's changes and, since the (nonexistent) syncToken it returned
// would be treated as "nothing more to sync," lose them permanently
// rather than just delaying them to the next poll.
export async function listGoogleEventChanges(
  accessToken: string, calendarId: string, syncToken?: string,
): Promise<{ events: any[]; nextSyncToken?: string; tokenExpired?: boolean }> {
  const events: any[] = [];
  let pageToken: string | undefined;
  let nextSyncToken: string | undefined;

  do {
    const params = new URLSearchParams();
    if (syncToken) params.set("syncToken", syncToken);
    else params.set("timeMin", new Date().toISOString());
    if (pageToken) params.set("pageToken", pageToken);

    const res = await fetch(`${GOOGLE_CAL_BASE}/calendars/${encodeURIComponent(calendarId)}/events?${params.toString()}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await res.json() as any;
    if (!res.ok) {
      if (res.status === 410) return { events: [], tokenExpired: true };
      throw new Error(data.error?.message ?? `Google events list failed (${res.status}).`);
    }
    events.push(...(data.items ?? []));
    pageToken = data.nextPageToken;
    nextSyncToken = data.nextSyncToken;
  } while (pageToken);

  return { events, nextSyncToken };
}

export async function watchGoogleCalendar(
  accessToken: string, calendarId: string, webhookUrl: string, channelId: string,
): Promise<{ resourceId: string; expiration: number }> {
  const res = await fetch(`${GOOGLE_CAL_BASE}/calendars/${encodeURIComponent(calendarId)}/events/watch`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ id: channelId, type: "web_hook", address: webhookUrl }),
  });
  const data = await res.json() as any;
  if (!res.ok) throw new Error(data.error?.message ?? `Google watch subscribe failed (${res.status}).`);
  return { resourceId: data.resourceId, expiration: parseInt(data.expiration, 10) };
}

// Stops a push-notification channel — called on disconnect so Google
// stops sending webhook pings for a bar that's no longer connected.
// Best-effort: 404 means the channel already expired/doesn't exist,
// which is fine either way.
export async function stopGoogleChannel(accessToken: string, channelId: string, resourceId: string): Promise<void> {
  const res = await fetch(`${GOOGLE_CAL_BASE}/channels/stop`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ id: channelId, resourceId }),
  });
  if (!res.ok && res.status !== 404) {
    const data = await res.json().catch(() => ({})) as any;
    throw new Error(data.error?.message ?? `Google channel stop failed (${res.status}).`);
  }
}
