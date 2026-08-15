# Deployment Guide

## Web Deployment (GitHub Pages)

The web application is hosted on GitHub Pages.

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

## Cloud Functions Deployment

Not currently automated in CI — deploy manually from `functions/`:
```bash
cd functions && npm run build
firebase deploy --only functions
```

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
