# Scripts Documentation

The `scripts/` directory contains Node.js scripts used for build automation and maintenance.

## `generate-sw.js`
*   **Purpose**: Generates the `firebase-messaging-sw.js` service worker file.
*   **Why**: The service worker resides in the `public/` folder but needs access to environment variables (API keys) which are not natively available to static files.
*   **How**: It reads `.env` variables and injects them into a template string, writing the result to `public/firebase-messaging-sw.js`.

## `generate-google-services.js`
*   **Purpose**: Generates the `google-services.json` file required by the Android build.
*   **Why**: We do not commit `google-services.json` to git for security.
*   **How**: It reads individual fields from environment variables (e.g., `VITE_FIREBASE_PROJECT_ID`) and constructs the JSON file at `android/app/google-services.json`.

## `enrich-bars.js`
*   **Purpose**: A utility script to backfill data or perform batch updates on Bar documents.
*   **Usage**: Run manually to migrate data schemas (e.g., adding a default button configuration to all bars).

## `deduplicate.js`
*   **Purpose**: A maintenance script to remove duplicate entries if they occur.

## `nag-bot.js`
*   **Purpose**: A standalone bot script (likely run on a server) that monitors requests and sends reminders if they are not claimed.
*   **Status**: Currently experimental/optional.

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
