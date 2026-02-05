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

// Helper function to validate and retrieve environment variables.
// Exits if a required variable is missing to prevent generating an invalid config file.
const getEnv = (key) => {
  const val = process.env[key];
  if (!val) {
     console.error(`Error: Environment variable ${key} is missing.`);
     return null;
  }
  return val;
};

// Retrieve required Firebase configuration values from environment variables.
const project_number = getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'); // Project Number.
const project_id = getEnv('VITE_FIREBASE_PROJECT_ID');
const storage_bucket = getEnv('VITE_FIREBASE_STORAGE_BUCKET');
const mobilesdk_app_id = getEnv('VITE_FIREBASE_APP_ID');
const current_key = getEnv('VITE_FIREBASE_API_KEY');
const package_name = 'com.HereLiesAz.BarBacker'; // The Android package name (must match AndroidManifest.xml).

// Final validation check. Exit with error code 1 if any are missing.
if (!project_number || !project_id || !mobilesdk_app_id || !current_key || !storage_bucket) {
    console.error("Failed to generate google-services.json due to missing variables.");
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

// Define the output path for the JSON file (android/app/).
const outputDir = path.join(__dirname, '../android/app');
const outputFile = path.join(outputDir, 'google-services.json');

// Ensure the target directory exists.
if (!fs.existsSync(outputDir)) {
    console.error(`Error: Directory ${outputDir} does not exist.`);
    process.exit(1);
}

// Write the JSON file to disk.
fs.writeFileSync(outputFile, JSON.stringify(googleServices, null, 2));
console.log(`Successfully generated ${outputFile}`);
