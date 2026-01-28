import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to handle undefined env vars
const getEnv = (key) => {
  const val = process.env[key];
  if (!val) {
     console.error(`Error: Environment variable ${key} is missing.`);
     return null;
  }
  return val;
};

// Map env vars to google-services.json structure
const project_number = getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID');
const project_id = getEnv('VITE_FIREBASE_PROJECT_ID');
const storage_bucket = getEnv('VITE_FIREBASE_STORAGE_BUCKET');
const mobilesdk_app_id = getEnv('VITE_FIREBASE_APP_ID');
const current_key = getEnv('VITE_FIREBASE_API_KEY');
const package_name = 'com.HereLiesAz.BarBacker'; // Fixed value

if (!project_number || !project_id || !mobilesdk_app_id || !current_key || !storage_bucket) {
    console.error("Failed to generate google-services.json due to missing variables.");
    process.exit(1);
}

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

const outputDir = path.join(__dirname, '../android/app');
const outputFile = path.join(outputDir, 'google-services.json');

// Ensure directory exists (it should)
if (!fs.existsSync(outputDir)) {
    console.error(`Error: Directory ${outputDir} does not exist.`);
    process.exit(1);
}

fs.writeFileSync(outputFile, JSON.stringify(googleServices, null, 2));
console.log(`Successfully generated ${outputFile}`);
