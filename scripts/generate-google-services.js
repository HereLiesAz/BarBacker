import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables.
dotenv.config();

// Determine paths for ESM.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Helper to get Env var or log error.
 * Critical for Android build process to fail fast if config is missing.
 */
const getEnv = (key) => {
  const val = process.env[key];
  if (!val) {
     console.error(`Error: Environment variable ${key} is missing.`);
     return null;
  }
  return val;
};

// Retrieve necessary keys mapped from our VITE_ env vars to standard Google Services JSON fields.
const project_number = getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID');
const project_id = getEnv('VITE_FIREBASE_PROJECT_ID');
const storage_bucket = getEnv('VITE_FIREBASE_STORAGE_BUCKET');
const mobilesdk_app_id = getEnv('VITE_FIREBASE_APP_ID');
const current_key = getEnv('VITE_FIREBASE_API_KEY');
const package_name = 'com.HereLiesAz.BarBacker'; // Must match android/app/build.gradle applicationId

// Exit if any critical keys are missing.
if (!project_number || !project_id || !mobilesdk_app_id || !current_key || !storage_bucket) {
    console.error("Failed to generate google-services.json due to missing variables.");
    process.exit(1);
}

// Construct the JSON object required by the Google Services Gradle Plugin.
// This structure mimics the file downloaded from Firebase Console.
const googleServices = {
  "project_info": {
    "project_number": project_number,
    "project_id": project_id,
    "storage_bucket": storage_bucket
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": mobilesdk_app_id,
        "android_client_info": {
          "package_name": package_name
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

// Define output path (Android App Module Root).
const outputDir = path.join(__dirname, '../android/app');
const outputFile = path.join(outputDir, 'google-services.json');

// Safety check for directory existence (should exist if Capacitor is synced).
if (!fs.existsSync(outputDir)) {
    console.error(`Error: Directory ${outputDir} does not exist. Run 'npx cap add android' first.`);
    process.exit(1);
}

// Write the file.
fs.writeFileSync(outputFile, JSON.stringify(googleServices, null, 2));
console.log(`Successfully generated ${outputFile}`);
