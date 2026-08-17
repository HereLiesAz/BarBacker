# Deployment Guide

## Web Deployment (GitHub Pages)

The web application is hosted on GitHub Pages, deployed automatically
by `.github/workflows/deploy.yml` on every push to `main` (via
`peaceiris/actions-gh-pages`). The `npm run deploy` command below is
the same thing run by hand — use it only for an out-of-band deploy,
not as the normal path, and only with every `VITE_FIREBASE_*` env var
set locally first (see "Required environment variables" below):
`scripts/generate-sw.js` silently falls back to placeholder
credentials for any that are missing, so a build without them
succeeds but ships a service worker that can never receive push
notifications.

1.  **Build**:
    ```bash
    npm run build
    ```
    This command runs:
    *   `scripts/generate-sw.js`: Generates the Service Worker with environment variables.
    *   `tsc`: Type checks the code.
    *   `vite build`: Bundles the application into the `dist/` directory.

2.  **Deploy**:
    The project is configured to deploy via the `gh-pages` package.
    ```bash
    npm run deploy
    ```
    This pushes the `dist` folder to the `gh-pages` branch.

## Cloud Functions, Firestore Rules, and Storage Rules Deployment

Not currently automated in CI — deploy manually. `firebase deploy`
with no `--only` flag deploys functions, Firestore rules/indexes, and
Storage rules together and is the simplest way to avoid the three
drifting out of sync (e.g. shipping a Cloud Function that depends on a
rules change without the rules change itself, which is exactly what
would have happened deploying the bottle-scanner feature under the
command this doc used to list here):
```bash
cd functions && npm run build && cd ..
firebase deploy --only functions,firestore:rules,firestore:indexes,storage
```
`firebase deploy --only functions` alone (the old instruction here)
deploys functions ONLY — it does not touch `firestore.rules`,
`firestore.indexes.json`, or `storage.rules`, even though all three
are wired into `firebase.json` and any of them can change alongside
a functions change.

### Required environment variables

None of these are set anywhere in this repo or its CI — they must be
configured directly in the Firebase project (`firebase functions:config:set`
for v1-style config, or as actual environment variables/secrets for v2
functions, e.g. `firebase functions:secrets:set NAME`) before the POS
(Phase 3) or Calendar (Phase 4) OAuth flows can work at all. Every one
of them is read via `process.env.*` with no fallback.

| Variable | Used by | Purpose |
|---|---|---|
| `POS_KMS_KEY_NAME` | `functions/src/shared/kms.ts` (POS + Calendar) | Full resource name of a provisioned Cloud KMS key (`projects/*/locations/*/keyRings/*/cryptoKeys/*`) used to encrypt every stored OAuth token — POS and Calendar secrets alike, despite the POS-specific name. The Cloud Functions service account needs `roles/cloudkms.cryptoKeyEncrypterDecrypter` on it. |
| `SQUARE_CLIENT_ID` / `SQUARE_CLIENT_SECRET` | `functions/src/pos/square.ts`, `functions/src/pos/oauth.ts` | Square OAuth application credentials (from the Square Developer Dashboard). |
| `POS_OAUTH_CALLBACK_BASE_URL` | `functions/src/pos/oauth.ts` | Public base URL the `oauthCallback` function is reachable at — Square redirects here after consent. |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | `functions/src/calendar/google.ts`, `functions/src/calendar/oauth.ts` | Google Cloud OAuth 2.0 client credentials, scoped to the Calendar API. |
| `CALENDAR_OAUTH_CALLBACK_BASE_URL` | `functions/src/calendar/oauth.ts`, `functions/src/calendar/calendars.ts`, `functions/src/calendar/resubscribe.ts` | Public base URL the `calendarOauthCallback` and `calendarWebhook` functions are reachable at — used both as the OAuth redirect target and as the base for Google's push-notification webhook. |

Toast (`functions/src/pos/toast.ts`) doesn't use OAuth-redirect
credentials — a manager enters partner-issued `clientId`/`clientSecret`/
`restaurantGuid` directly at connect time, so there's nothing to
configure here for it.

### Client-side env vars for the calendar feed

`VITE_ICAL_FEED_BASE_URL` (see `src/vite-env.d.ts`) — the base URL
`CalendarSettings` builds the outbound iCal feed link from. The web
client (GitHub Pages) and the `icalFeed` Cloud Function are two
separate hosts, so this can't be inferred from `window.location.origin`.
Point it at wherever `/ical/**` actually resolves — a Firebase Hosting
site using the rewrite in `firebase.json`, or the function's own Cloud
Run URL. Left unset, the feed URL is deliberately not shown rather than
handing out a link that 404s.

### BottleScanner (on-device OCR)

`BottleScanner.tsx` / `utils/bottleRecognition.ts` (premium bars only)
uses `tesseract.js` to OCR a scanned bottle label entirely client-side
— no server call, no cloud vision API. Recognition itself runs
on-device via WebAssembly, but by default `tesseract.js` fetches its
worker script, wasm core, and English trained-data file from a public
CDN (jsdelivr) the first time a bar uses the scanner, then caches
them in the browser. That first fetch needs outbound network access;
everything after is served from cache. No env vars or server
provisioning are required for this feature.

## Android Deployment

The Android application is a Capacitor wrapper around the web app.

### Prerequisites
*   Android Studio
*   Java 21 (JDK 21)
*   Keystore file (for signing)

### Build Process (CI/CD)
The `.github/workflows/build-mobile.yml` workflow handles this automatically on tag push or manual trigger.

1.  **Environment Setup**: Installs Node, Java 21.
2.  **Web Build**: Runs `npm run build`.
3.  **Capacitor Sync**:
    ```bash
    npx cap sync android
    ```
    Copies the web assets (`dist/`) into the Android project (`android/app/src/main/assets/public`).
4.  **Resource Generation**:
    *   `scripts/generate-google-services.js` creates `google-services.json` from secrets.
5.  **Gradle Build**:
    ```bash
    cd android && ./gradlew assembleDebug
    ```
6.  **Signing**: Signs the APK if a keystore is provided.
7.  **Release**: Uploads the APK to GitHub Releases.

### Manual Local Build
1.  Ensure `dist/` is up to date: `npm run build`.
2.  Sync Capacitor: `npx cap sync android`.
3.  Open Android Studio: `npx cap open android`.
4.  Build/Run from Android Studio.
