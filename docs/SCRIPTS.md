# Scripts Documentation

The `scripts/` directory contains plain Node.js scripts used for build automation and scheduled maintenance — these are separate from the actual Cloud Functions backend (`functions/`, see [ARCHITECTURE.md](ARCHITECTURE.md) and [DATA_MODEL.md](DATA_MODEL.md)), which handles real-time notification fanout, OAuth, and its own scheduled jobs.

## `generate-sw.js`
*   **Purpose**: Generates the `firebase-messaging-sw.js` service worker file.
*   **Why**: The service worker resides in the `public/` folder but needs access to environment variables (API keys) which are not natively available to static files.
*   **How**: It reads `.env` variables and injects them into a template string, writing the result to `public/firebase-messaging-sw.js`.

## `generate-google-services.js`
*   **Purpose**: Generates the `google-services.json` file required by the Android build.
*   **Why**: We do not commit `google-services.json` to git for security.
*   **How**: It reads individual fields from environment variables (e.g., `VITE_FIREBASE_PROJECT_ID`) and constructs the JSON file at `android/app/google-services.json`.

## `enrich-bars.js`
*   **Purpose**: Backfills/normalizes `bars` documents (e.g. filling in missing fields from an OpenStreetMap lookup).
*   **Runs**: Scheduled every 6 hours via `.github/workflows/enrich-bars.yml`, using `FIREBASE_SERVICE_ACCOUNT`. Also runnable manually (`workflow_dispatch`) or locally.

## `deduplicate.js`
*   **Purpose**: Finds and removes duplicate `bars` documents (e.g. two entries for the same venue created independently via search).
*   **Runs**: Scheduled daily at 2 AM UTC via `.github/workflows/deduplicate.yml`, using `FIREBASE_SERVICE_ACCOUNT`. Also runnable manually or locally.

## `nag-bot.js`
*   **Purpose**: Re-notifies (FCM + `ntfy.sh`) anyone who hasn't dismissed a pending request that matches their notification preferences — the same eligibility logic as the server-side `onRequestCreated` Cloud Function (`shouldNagUserAbout` mirrors `notifyEligibility.ts`; kept manually in sync since nothing shares a build step between `scripts/` and `functions/`). Chunks its FCM sends at 400 tokens (under the SDK's 500 hard limit) and bumps each bar's `lastNotification` immediately after that bar's send attempt, not once at the end for every bar.
*   **Runs**: Scheduled every 5 minutes via `.github/workflows/nag.yml`, using `FIREBASE_SERVICE_ACCOUNT`. Also runnable manually or locally — this is the primary reliability net for missed pushes, not an optional/experimental feature.

## `debug-test.cjs`
*   **Purpose**: A CommonJS script for testing the debugging utilities in a standalone node environment.

## `set-admin-claim.js`
*   **Purpose**: Grants or revokes the `admin: true` Firebase custom claim on a user — this is the ONLY way to create an admin. `firestore.rules` and `storage.rules` both gate moderation/bypass behavior on this claim (`isAdmin()`); a fresh Firebase project has zero admins until this script is run once against it.
*   **Requires**: `GOOGLE_APPLICATION_CREDENTIALS` pointing at a service-account JSON key with the Firebase Admin role — a different credential mechanism than the `FIREBASE_SERVICE_ACCOUNT` JSON-in-a-secret used by the scheduled workflows (nag/deduplicate/enrich-bars) below. Run this locally, not in CI.
*   **Usage**:
    ```bash
    node scripts/set-admin-claim.js --email owner@example.com
    node scripts/set-admin-claim.js --uid abc123 --revoke
    ```
    The target user must sign out and back in (or wait up to an hour) for the claim to appear in their ID token.
