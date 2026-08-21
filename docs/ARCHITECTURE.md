# Architecture Overview

**BarBacker** is a React single-page app deployed two ways — a static site (GitHub Pages) and a Capacitor-wrapped native Android app — backed by Firebase (Firestore, Auth, Storage, Cloud Messaging) and a Cloud Functions backend that owns everything that shouldn't run on the client: notification fanout, third-party OAuth, and scheduled maintenance.

## Technology Stack

*   **Frontend Framework**: [React](https://react.dev/) 19, function components + hooks. No global state library — Firestore's own `onSnapshot` listeners *are* the state store (see "State management" below).
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Language**: TypeScript, strict mode, throughout both the client (`src/`) and the Cloud Functions backend (`functions/src/`) — two separate `tsconfig`/build projects.
*   **UI Library**: [Material Web](https://github.com/material-components/material-web) (Google's Material Design 3 web components) for interactive controls, [Tailwind CSS v4](https://tailwindcss.com/) for layout/spacing. Note: v4 uses `@import "tailwindcss";` in `src/index.css`, not the v3 `@tailwind base/components/utilities` directives — the latter silently degrades to near-nothing under v4's PostCSS plugin.
*   **Mobile Runtime**: [Capacitor](https://capacitorjs.com/) wraps the same web build in a native Android WebView (an iOS project scaffold exists under `ios/` but isn't part of the CI pipeline). Provides Camera (bottle scanner) and Push Notifications.
*   **Drag & drop**: [`@dnd-kit`](https://dndkit.com/) for reorderable buttons.
*   **On-device OCR**: [`tesseract.js`](https://tesseract.projectnaptha.com/) for the bottle scanner — runs entirely client-side (WASM); no photo is sent anywhere just to recognize a label.

## Backend Services (Firebase)

1.  **Authentication** — Email/Password and Google Sign-In. Authorization is layered on top via **custom claims**: `onUserRoleChange` (a Firestore-triggered Cloud Function) watches every `bars/{barId}/users/{uid}` write and stamps a `bars: { [barId]: role }` map onto that user's ID token, filtering out unapproved statuses (`pending`, `rejected`). `firestore.rules` and `storage.rules` both read this claim (`request.auth.token.bars[barId]`) rather than doing a live document read per request — cheap and fast, but it means a **grant** takes effect immediately (the client force-refreshes its token right after joining/being promoted) while a **revoke** (kick, demotion) only takes effect on the token's next natural refresh, up to about an hour later. This is the standard tradeoff of Firebase's custom-claims model, documented inline in `firestore.rules`.
2.  **Firestore** — the primary datastore. See [DATA_MODEL.md](DATA_MODEL.md) for every collection. Real-time listeners (`onSnapshot`) sync data instantly between devices; there is no polling anywhere in the client.
3.  **Storage** — bar logos and bottle-scanner alert photos. See `storage.rules` and [DATA_MODEL.md](DATA_MODEL.md).
4.  **Cloud Messaging (FCM)** — push to native Android/installed-PWA devices. iOS (which can't receive FCM in a browser context) instead gets `ntfy.sh` push, keyed by a per-account topic (`users/{uid}.ntfyTopic`).
5.  **Cloud Functions** (`functions/`, Admin SDK, bypasses all client-facing security rules) — see below.

## Cloud Functions (`functions/src/`)

Split by trigger type:

*   **Firestore-triggered** — react to a write, run with Admin privileges:
    *   `onUserRoleChange` — stamps the `bars` custom claim (see above).
    *   `onRequestCreated` / `onRequestDeleted` — server-side FCM+ntfy fanout on a new request (client-side fanout was removed: it required every client to be able to read every bar member's ntfy topic, an exposure closed by moving this server-side), and Storage cleanup of a bottle-scanner photo once its referencing request doc is gone.
    *   `onInviteConsumed` — grants an invite's role when the invitee's account consumes it.
    *   `onChatPinned` — pushes a notification when a chat message is pinned (drives the dashboard marquee).
    *   `onEventWritten` (`calendar/outboundSync.ts`) — mirrors a locally-created calendar event out to Google.
*   **Scheduled** (`onSchedule`) — `cleanupStaleRequests` (hourly, clears anything pending 12+ hours), `rotatePOSTokens` (hourly), `resubscribeCalendarWatches` (daily), `pollICalSubscriptions` (every 15 min) / `removeICalSubscriptionEvents` (daily), `sendShiftReminders` (every 5 min).
*   **Callable** (`onCall`, invoked from the client via the Firebase SDK) — `fileOwnershipClaim` / `reviewOwnershipClaim`, `migrateNoticesToChat` (one-shot legacy-data migration), `posSyncMenu` / `posGetOrders` / `posGetSales`, `calendarListCalendars` / `calendarSelectCalendar`, `rotateICalFeedToken`, and most of the OAuth flow itself: `posGetAuthorizeUrl` / `posConnectToast` / `posDisconnect`, `calendarGetAuthorizeUrl` / `calendarDisconnect`.
*   **HTTP-triggered** (`onRequest`) — only the pieces that must be a plain URL because something other than this app's own client calls them: the OAuth redirect targets themselves (`oauthCallback` for Square, `calendarOauthCallback` for Google — the provider's consent screen redirects the browser here after approval, so these can't be callable), the Google Calendar push-notification webhook (`calendarWebhook`), and `icalFeed` (serves this bar's outbound `.ics` file to any calendar client — reachable at `/ical/**` via a Firebase Hosting rewrite, see `firebase.json`).

Every OAuth token (POS and Calendar alike) is encrypted with a Cloud KMS key before being stored, in a Firestore collection with **no client access in either direction** (`posSecrets`/`calendarSecrets`) — clients only ever see connection *status* (`posConnection`/`calendarConnection`), never a token.

## Data Flow (a request, end to end)

1.  **User action**: a bartender taps "ICE".
2.  **Firestore write**: the client writes a new `requests` doc directly (governed by `firestore.rules` — see [DATA_MODEL.md](DATA_MODEL.md)).
3.  **Real-time sync**: Firestore pushes the new doc to every connected client with a matching listener.
4.  **UI update**: React state updates from the `onSnapshot` callback; the request card renders.
5.  **Notification** (server-side, `onRequestCreated`): computes who's eligible (active, not the requester, subscribed to this request type — see [DATA_MODEL.md](DATA_MODEL.md)#Notification-model) and sends FCM to native/PWA devices, `ntfy.sh` to iOS. A scheduled job (`scripts/nag-bot.js`, run by `.github/workflows/nag.yml` every 5 minutes) re-notifies anyone who still hasn't dismissed a matching request.

## Key Design Decisions

*   **Firestore is the state store.** The `onSnapshot` streams in `App.tsx` (and the per-feature hooks — `useChat`, `useCalendar`, `usePOS`, `useMyBars`) are the single source of truth; there's no client-side cache layer or global store to keep in sync with it.
*   **Role vs. job title.** `role` (`Staff`/`Manager`/`Owner`) is the security-relevant privilege tier, computed server-side-verifiable (never trusted from the client beyond the narrow self-create case `firestore.rules` allows). `jobTitle` (`Bartender`, `Barback`, etc.) is a separate, purely cosmetic/notification-routing field. Conflating the two was an earlier design mistake this codebase moved away from — see the git history around the Phase 1 hardening pass.
*   **Server does the fanout, not the client.** Notification eligibility logic exists in three synchronized places — `functions/src/notifyEligibility.ts` (server), `scripts/nag-bot.js` (the scheduled nag job, plain JS, hand-kept in sync), and a client-side mirror in `App.tsx` for the active-requests list filter — because nothing shares a build step across `src/`, `functions/`, and `scripts/`.
*   **Shared-device safety.** Signing out or switching bars resets every piece of state a `useEffect` listener owns before its guard condition can short-circuit past a stale value — otherwise a second person on the same physical device (a phone at the bar) would briefly see the previous user's data.
*   **Stale-listener cancellation guards.** Async flows that can outlive a bar switch or component close (e.g. `useChat.loadMore`, the bottle scanner's OCR pipeline) snapshot an identity value in a ref and check it after each `await`, so a slow response from a superseded context can't clobber current state.
*   **Premium gating** is a single `bars/{barId}.subscription` field, checked both client-side (hide/upsell UI) and server-side (`firestore.rules`, the actual authority) — theme, calendar, POS, the bottle scanner, and private 86'd entries all gate on it. No billing flow exists yet; the field has no legitimate write path today.

## CI/CD

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full pipeline. In short: `rules-tests.yml` runs the Firestore/Storage emulator test suite and the Cloud Functions build+tests on every push/PR against `main`; `build-mobile.yml` builds and publishes the Android release APK on every push to `main`; `codeql.yml` runs static analysis (JS/TS + the workflow files themselves) on push/PR/a weekly schedule; `deploy.yml` publishes the web app to GitHub Pages on push to `main`. Firestore/Storage rules and Cloud Functions deploys to the actual Firebase project are manual (`firebase deploy`), not automated.
