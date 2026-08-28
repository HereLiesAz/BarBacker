// Import File System, Path, and URL modules for file handling.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Import 'dotenv' to load environment variables from .env file.
import dotenv from 'dotenv';

// Load environment variables.
dotenv.config();

// Resolve current directory path.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The Android package name. Must match `applicationId` in
// android/app/build.gradle and the package the Firebase console has
// registered for the Android app — the Google Services Gradle plugin
// fails the build outright ("No matching client found for package
// name") when this doesn't line up, which is the one misconfiguration
// here that is NOT silent.
const PACKAGE_NAME = 'com.HereLiesAz.BarBacker';

// Collected problems. We report every one of them at once rather than
// dying on the first: a CI run that has to be re-triggered per missing
// secret wastes a build cycle each time.
const problems = [];

// Shared between both paths below: what an Android (not web, not iOS)
// Firebase app ID looks like.
const ANDROID_APP_ID_RE = /^1:\d+:android:[0-9a-f]+$/i;

const outputDir = path.join(__dirname, '../android/app');
const outputFile = path.join(outputDir, 'google-services.json');

// Preferred path: GOOGLE_SERVICES holds the *entire* google-services.json
// file, exactly as downloaded from the Firebase console, pasted whole
// into one repository secret. That's the file Firebase itself generated
// for the registered Android app, so it's authoritative — no
// reassembling it field-by-field from separate secrets, and no chance of
// the web app's ID leaking in by accident. Still validated against the
// same two things that make the synthesized path below safe to skip:
// the package name has to match this app, and the app ID has to
// actually be an Android one.
const rawGoogleServices = (process.env.GOOGLE_SERVICES || '').trim();
if (rawGoogleServices) {
  let parsed;
  try {
    parsed = JSON.parse(rawGoogleServices);
  } catch (e) {
    console.error(`Failed to parse GOOGLE_SERVICES secret as JSON: ${e.message}`);
    process.exit(1);
  }

  const client = parsed?.client?.[0];
  const packageName = client?.client_info?.android_client_info?.package_name;
  const appId = client?.client_info?.mobilesdk_app_id;

  if (packageName !== PACKAGE_NAME) {
    problems.push(
      `GOOGLE_SERVICES secret's package_name ("${packageName}") does not match `
      + `this app's applicationId ("${PACKAGE_NAME}"). Re-download `
      + `google-services.json from Firebase console → Project settings → `
      + `Your apps → the Android app registered for ${PACKAGE_NAME}.`
    );
  } else if (!ANDROID_APP_ID_RE.test(appId || '')) {
    problems.push(
      `GOOGLE_SERVICES secret's mobilesdk_app_id ("${appId}") is not an Android `
      + 'app ID (expected 1:<project number>:android:<hash>).'
    );
  }

  if (problems.length > 0) {
    console.error('Failed to use GOOGLE_SERVICES secret:');
    problems.forEach((p) => console.error(`  - ${p}`));
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    console.error(`Error: Directory ${outputDir} does not exist.`);
    process.exit(1);
  }
  fs.writeFileSync(outputFile, JSON.stringify(parsed, null, 2));
  console.log(`Successfully wrote ${outputFile} from the GOOGLE_SERVICES secret.`);
  process.exit(0);
}

// Fallback path: no GOOGLE_SERVICES secret, so synthesize the file from
// the individual VITE_FIREBASE_* secrets already used for the web build,
// plus FIREBASE_ANDROID_APP_ID.

// Helper function to validate and retrieve environment variables.
const getEnv = (key, hint) => {
  const val = process.env[key];
  if (!val) {
    problems.push(`${key} is missing or empty.${hint ? ` ${hint}` : ''}`);
    return null;
  }
  return val.trim();
};

// Retrieve required Firebase configuration values from environment variables.
const project_number = getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'); // Project Number.
const project_id = getEnv('VITE_FIREBASE_PROJECT_ID');
const storage_bucket = getEnv('VITE_FIREBASE_STORAGE_BUCKET');

// The mobilesdk_app_id MUST be the *Android* app's ID, not the web
// app's. These are different apps inside the same Firebase project and
// their IDs differ only by the platform segment in the middle:
//
//   web:     1:869145643734:web:d902468d6942df6bc81777
//   android: 1:869145643734:android:xxxxxxxxxxxxxxxxxxxxxx
//
// Nothing downstream catches the wrong one. The Gradle plugin copies
// whatever it is given into the `google_app_id` string resource, and
// FirebaseOptions.fromResource() accepts any non-empty string — so the
// app boots fine and only fails later, when FirebaseMessaging.getToken()
// is rejected by the FCM backend because the app ID isn't bound to this
// package. That surfaces as a `registrationError` with an opaque
// message and no push notifications, forever. Hence the explicit
// platform check below.
const android_app_id = process.env.FIREBASE_ANDROID_APP_ID
  ? process.env.FIREBASE_ANDROID_APP_ID.trim()
  // VITE_FIREBASE_APP_ID is the *web* SDK's app ID (it is what
  // src/firebase.ts is configured with). Accept it only on the chance
  // that someone has pointed it at the Android app; the format check
  // below rejects it otherwise.
  : (process.env.VITE_FIREBASE_APP_ID || '').trim();

// The API key. Firebase auto-creates a separate "Android key" alongside
// the browser key; either works for FCM as long as it isn't restricted
// to HTTP referrers (browser keys often are, which silently breaks the
// Android client). Optional override, defaulting to the web key so this
// doesn't become a second mandatory secret.
const current_key = (process.env.FIREBASE_ANDROID_API_KEY || '').trim()
  || getEnv('VITE_FIREBASE_API_KEY');

if (!android_app_id) {
  problems.push(
    'FIREBASE_ANDROID_APP_ID is missing or empty. Firebase console → '
    + 'Project settings → Your apps → the Android app registered for '
    + `${PACKAGE_NAME} → "App ID". Add it as a repository secret.`
  );
} else if (!ANDROID_APP_ID_RE.test(android_app_id)) {
  const platform = android_app_id.split(':')[2];
  problems.push(
    `FIREBASE_ANDROID_APP_ID ("${android_app_id}") is not an Android app ID`
    + `${platform ? ` — it is a "${platform}" app ID` : ''}. It must look `
    + 'like 1:<project number>:android:<hash>. The web app ID that '
    + 'VITE_FIREBASE_APP_ID holds belongs to a different app in the same '
    + 'project and will not work for FCM on Android.'
  );
} else if (project_number && android_app_id.split(':')[1] !== project_number) {
  problems.push(
    `FIREBASE_ANDROID_APP_ID ("${android_app_id}") belongs to project number `
    + `${android_app_id.split(':')[1]}, but VITE_FIREBASE_MESSAGING_SENDER_ID `
    + `is ${project_number}. These must be the same Firebase project.`
  );
}

// Final validation check. Exit with error code 1 if anything is wrong.
//
// This deliberately fails the build rather than writing a partial file
// or skipping generation: an APK built without a usable
// google-services.json has no Firebase configuration compiled into it,
// and the very first PushNotifications.register() call then throws
// "Default FirebaseApp is not initialized in this process" from a
// native handler thread — an uncaught crash the JavaScript side cannot
// catch. A red build is cheaper than a released APK that dies on
// launch. android/app/build.gradle enforces the same rule from the
// Gradle side.
if (problems.length > 0) {
  console.error('Failed to generate google-services.json:');
  problems.forEach((p) => console.error(`  - ${p}`));
  process.exit(1);
}

// Construct the google-services.json object.
// This structure is required by the Google Services Gradle plugin.
const googleServices = {
  "project_info": {
    "project_number": project_number,
    "project_id": project_id,
    "storage_bucket": storage_bucket
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": android_app_id,
        "android_client_info": {
          "package_name": PACKAGE_NAME
        }
      },
      "oauth_client": [],
      "api_key": [
        {
          "current_key": current_key
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": []
        }
      }
    }
  ],
  "configuration_version": "1"
};

// outputDir/outputFile are declared above, alongside the GOOGLE_SERVICES
// path that also writes to them.

// Ensure the target directory exists.
if (!fs.existsSync(outputDir)) {
    console.error(`Error: Directory ${outputDir} does not exist.`);
    process.exit(1);
}

// Write the JSON file to disk.
fs.writeFileSync(outputFile, JSON.stringify(googleServices, null, 2));
console.log(`Successfully generated ${outputFile}`);
