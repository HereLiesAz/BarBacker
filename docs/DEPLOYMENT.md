# Deployment Guide

## CI Overview

Every workflow lives in `.github/workflows/`; details of the notable
ones are in their own sections below. Quick reference:

| Workflow | Trigger | Purpose |
|---|---|---|
| `rules-tests.yml` | push/PR to `main` | Firestore + Storage security-rules test suite (Firebase emulator) and Cloud Functions build+tests — this is the PR-side build/test signal for the whole repo. |
| `build-mobile.yml` | push to `main`, `workflow_dispatch` | Builds and publishes the Android release APK (see "Android Deployment" below). Not run on PRs. |
| `deploy.yml` | push to `main` | Builds and publishes the web app to GitHub Pages. |
| `codeql.yml` | push/PR to `main`, weekly schedule | Static analysis (CodeQL) — `javascript-typescript` and `actions` (the workflow files themselves). Advanced setup, not GitHub's managed Default setup, specifically so triggers/concurrency are editable here. `java-kotlin`/`swift` are deliberately excluded: both are Capacitor's generated wrapper boilerplate with no real app logic, and CodeQL's `autobuild` can't build either without first running `npx cap sync`, which this workflow doesn't do. |
| `nag.yml` | every 5 minutes | Runs `scripts/nag-bot.js` — re-notifies anyone who hasn't dismissed a matching pending request. |
| `deduplicate.yml` | daily | Runs `scripts/deduplicate.js`. |
| `enrich-bars.yml` | every 6 hours | Runs `scripts/enrich-bars.js`. |
| `clear-cache.yml` | `workflow_dispatch` | Manual cache-clearing utility. |
| `jules-issue-handler.yml` / `jules-branch-handler.yml` | issue opened / comment created | Hands work to the Jules autonomous coding agent. Gated to owner/member/collaborator-authored issues and comments (`author_association`) so an attacker-authored issue/comment can't trigger it. |

`build-mobile.yml` and `codeql.yml` both apply a `concurrency` group
(keyed on `head_ref || ref`, `cancel-in-progress: true`) so a rapid
second push supersedes an in-flight run for the same ref instead of
both running to completion — worth knowing if you're watching the
Actions tab and see more runs than expected. `rules-tests.yml` has no
such group as of this writing; a burst of pushes will run each to
completion independently.

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

## GitHub Actions CI secrets

Every one of these is a repo secret (Settings → Secrets and variables
→ Actions), consumed by the workflows in `.github/workflows/`. None
of this was documented anywhere before — the table below is the full
set as of this writing; re-grep `secrets\.[A-Z_0-9]*` across
`.github/workflows/` if it's been a while, since nothing enforces this
staying in sync.

| Secret | Used by | Purpose |
|---|---|---|
| `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`, `VITE_FIREBASE_VAPID_KEY` | `deploy.yml`, `build-mobile.yml` | Same Firebase Web SDK config used client-side (see `src/firebase.ts`) — injected as build-time env vars for both the web deploy and the Android web-asset build. |
| `VITE_ICAL_FEED_BASE_URL` | `deploy.yml`, `build-mobile.yml` | See "Client-side env vars for the calendar feed" above. Not actually sensitive; kept as a secret only for consistency with the `VITE_FIREBASE_*` vars next to it. |
| `KEYSTORE_PRIVATE`, `KEYSTORE_CHAIN`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` | `build-mobile.yml` | Android app-signing identity — a private key + certificate chain (PEM), reassembled into a JKS keystore at build time, plus the store/key passwords and alias. `KEY_PASSWORD` must equal `KEYSTORE_PASSWORD` — the keystore-generation step never sets a distinct key password, so the two secrets have to hold the same value despite being named separately. |
| `FIREBASE_SERVICE_ACCOUNT` | `nag.yml`, `deduplicate.yml`, `enrich-bars.yml` | A full service-account JSON key (Admin SDK credential) for the scheduled maintenance scripts (`scripts/nag-bot.js`, `scripts/deduplicate.js`, `scripts/enrich-bars.js`) — a different credential mechanism than `set-admin-claim.js`'s `GOOGLE_APPLICATION_CREDENTIALS` (see docs/SCRIPTS.md). |
| `JULES_API_KEY` | `jules-branch-handler.yml`, `jules-issue-handler.yml` | API key for the Jules autonomous coding agent (`google-labs-code/jules-action`). Both workflows are gated to repo owner/member/collaborator-authored comments and issues — see the SECURITY comments in those files. |
| `GH_TOKEN` | `jules-branch-handler.yml` | A personal-access-token-scoped token distinct from the auto-provided `GITHUB_TOKEN`, used because Jules needs to merge PRs — `GITHUB_TOKEN` alone can be insufficient for that depending on branch protection settings. Broader-scoped than `GITHUB_TOKEN`; treat as sensitive as any other repo-write credential. |
| `GITHUB_TOKEN` | `deploy.yml`, `build-mobile.yml`, `jules-issue-handler.yml` (via `secrets.GITHUB_TOKEN`, not listed above where it's `github-token:`) | Auto-provided by GitHub Actions per run — not something to set manually. |

## Android Deployment

The Android application is a Capacitor wrapper around the web app.

### Prerequisites
*   Android Studio
*   Java 21 (JDK 21)
*   Keystore file (for signing)

### Build Process (CI/CD)
The `.github/workflows/build-mobile.yml` workflow runs on push to
`main` and on `workflow_dispatch` only — there is no tag-based
trigger, and (as of this writing) no PR-side run either: PR-side
build/test coverage comes from `rules-tests.yml` instead (see "CI
Overview" below), and this workflow's job is specifically the release
pipeline, which only ever fires on `main` anyway. It computes its own
version (`major.minor.patch.build`, from `version.properties` +
commit count) and publishes that as a prerelease under a floating
`latest-debug-v<major>.<minor>` tag it creates/force-moves itself.
The concurrency group is keyed on `head_ref || ref` and cancels an
in-progress run for the same ref, so a rapid second push to `main`
supersedes rather than races the first.

A step immediately before keystore generation reports (by name only,
never value) whether each of the four `KEYSTORE_*` secrets below is
actually set — useful for diagnosing "secret is definitely set but
the build says it's missing" without guessing (usually a name
mismatch or the secret having been added at the wrong scope —
Environment secrets vs. Repository secrets — see that step's own
comment in the workflow file).

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
6.  **Signing**: Signs the APK if `KEYSTORE_PRIVATE` is set — required
    (the build fails otherwise) on a push to `main`, since that's the
    build that gets published; optional elsewhere.
7.  **Release**: On a successful push-to-`main` build only, uploads the APK to GitHub Releases.

### Manual Local Build
1.  Ensure `dist/` is up to date: `npm run build`.
2.  Sync Capacitor: `npx cap sync android`.
3.  Open Android Studio: `npx cap open android`.
4.  Build/Run from Android Studio.
