import { useState } from 'react';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import { CalendarConnectionStatus, ICalSubscription } from '../types';
import { MdDialog } from './MdDialog';

interface CalendarSettingsProps {
  open: boolean;
  onClose: () => void;
  barId: string;
  googleConnection: CalendarConnectionStatus | null;
  icalSubscriptions: ICalSubscription[];
  feedToken: string | null;
  onConnectGoogle: () => Promise<void>;
  onListGoogleCalendars: () => Promise<{ id: string; summary: string; primary: boolean }[]>;
  onSelectGoogleCalendar: (calendarId: string) => Promise<void>;
  onDisconnectGoogle: () => Promise<void>;
  onAddICalSubscription: (url: string) => Promise<void>;
  onRemoveICalSubscription: (subId: string) => Promise<void>;
  onRotateFeedToken: (revoke?: boolean) => Promise<void>;
}

// Calendar Settings dialog — Phase 4 of
// docs/plans/2026-05-21-feature-set-purr-design.md. Connect Google
// (redirect + pick one calendar to mirror), manage inbound iCal
// subscriptions, and copy/rotate/revoke the outbound iCal feed URL.
export function CalendarSettings({
  open, onClose, barId, googleConnection, icalSubscriptions, feedToken,
  onConnectGoogle, onListGoogleCalendars, onSelectGoogleCalendar, onDisconnectGoogle,
  onAddICalSubscription, onRemoveICalSubscription, onRotateFeedToken,
}: CalendarSettingsProps) {
  const [calendars, setCalendars] = useState<{ id: string; summary: string; primary: boolean }[] | null>(null);
  const [newSubUrl, setNewSubUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const withBusy = async (fn: () => Promise<void>) => {
    setBusy(true);
    setMessage(null);
    try {
      await fn();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  };

  const handlePickCalendar = () => withBusy(async () => {
    setCalendars(await onListGoogleCalendars());
  });

  // window.location.origin is NOT a safe base here — the web client
  // (GitHub Pages) and the icalFeed Cloud Function are two separate
  // hosts unless VITE_ICAL_FEED_BASE_URL is explicitly configured to
  // point at wherever /ical/** is actually reachable (a Firebase
  // Hosting site with the rewrite in firebase.json, or the function's
  // own Cloud Run URL). Without it, show that plainly instead of
  // handing out a URL that looks valid but 404s.
  const feedBaseUrl = import.meta.env.VITE_ICAL_FEED_BASE_URL;
  const feedUrl = feedToken && feedBaseUrl
    ? `${feedBaseUrl.replace(/\/$/, '')}/ical/${barId}/${feedToken}.ics`
    : null;

  const copyFeedUrl = () => {
    if (feedUrl) navigator.clipboard?.writeText(feedUrl).catch(() => {});
  };

  return (
    <MdDialog open={open} onClose={onClose}>
      <div slot="headline">Calendar Settings</div>
      <div slot="content" className="flex flex-col gap-4 min-w-[320px]">
        <div className="border border-gray-800 rounded p-3 flex flex-col gap-2">
          <div className="text-xs font-bold text-gray-400 uppercase">Google Calendar</div>
          {googleConnection?.connected ? (
            <>
              <div className="text-sm text-green-400">
                ✓ Connected{googleConnection.calendarId ? ` — ${googleConnection.calendarId}` : ' — no calendar selected yet'}
              </div>
              <div className="flex gap-2 flex-wrap">
                <md-outlined-button disabled={busy || undefined} onClick={handlePickCalendar}>
                  {googleConnection.calendarId ? 'Change Calendar' : 'Pick Calendar'}
                </md-outlined-button>
                <md-text-button disabled={busy || undefined} onClick={() => withBusy(onDisconnectGoogle)}>
                  Disconnect
                </md-text-button>
              </div>
              {calendars && (
                <md-list>
                  {calendars.map((c) => (
                    <md-list-item key={c.id} type="button" onClick={() => withBusy(() => onSelectGoogleCalendar(c.id))}>
                      <div slot="headline" className="text-white">{c.summary}{c.primary ? ' (primary)' : ''}</div>
                    </md-list-item>
                  ))}
                </md-list>
              )}
            </>
          ) : (
            <md-filled-button disabled={busy || undefined} onClick={() => withBusy(onConnectGoogle)}>
              Connect Google Calendar
            </md-filled-button>
          )}
          {googleConnection?.error && <div className="text-xs text-red-400">{googleConnection.error}</div>}
        </div>

        <div className="border border-gray-800 rounded p-3 flex flex-col gap-2">
          <div className="text-xs font-bold text-gray-400 uppercase">Outbound iCal Feed</div>
          {feedToken && !feedBaseUrl && (
            <div className="text-xs text-yellow-500">
              A feed token exists, but this deployment hasn't configured where the feed is actually
              served from (VITE_ICAL_FEED_BASE_URL) — the link can't be shown until that's set.
            </div>
          )}
          {feedUrl ? (
            <>
              <div className="text-xs text-gray-400 break-all">{feedUrl}</div>
              <div className="flex gap-2 flex-wrap">
                <md-outlined-button onClick={copyFeedUrl}>Copy URL</md-outlined-button>
                <md-outlined-button disabled={busy || undefined} onClick={() => withBusy(() => onRotateFeedToken(false))}>
                  Rotate
                </md-outlined-button>
                <md-text-button disabled={busy || undefined} onClick={() => withBusy(() => onRotateFeedToken(true))}>
                  Revoke
                </md-text-button>
              </div>
            </>
          ) : (
            !feedToken && (
              <md-filled-button disabled={busy || undefined} onClick={() => withBusy(() => onRotateFeedToken(false))}>
                Generate Feed URL
              </md-filled-button>
            )
          )}
        </div>

        <div className="border border-gray-800 rounded p-3 flex flex-col gap-2">
          <div className="text-xs font-bold text-gray-400 uppercase">Inbound iCal Subscriptions</div>
          {icalSubscriptions.map((sub) => (
            <div key={sub.id} className="flex items-center justify-between gap-2 text-sm">
              <span className="text-gray-300 truncate">{sub.url}</span>
              <div className="flex items-center gap-2 shrink-0">
                {sub.lastError && <span className="text-xs text-red-400">error</span>}
                <md-text-button onClick={() => withBusy(() => onRemoveICalSubscription(sub.id))}>Remove</md-text-button>
              </div>
            </div>
          ))}
          <div className="flex gap-2">
            <md-filled-text-field
              label="External .ics URL" className="flex-1"
              value={newSubUrl}
              onInput={(e: any) => setNewSubUrl(e.target.value)}
            />
            <md-filled-button
              disabled={!newSubUrl.trim() || busy || undefined}
              onClick={() => withBusy(async () => { await onAddICalSubscription(newSubUrl.trim()); setNewSubUrl(''); })}
            >
              Add
            </md-filled-button>
          </div>
        </div>

        {message && <div className="text-xs text-red-400">{message}</div>}
      </div>
      <div slot="actions">
        <md-text-button onClick={onClose}>Close</md-text-button>
      </div>
    </MdDialog>
  );
}

export default CalendarSettings;
