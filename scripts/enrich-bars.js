// Import necessary Firebase Admin SDK modules for server-side operations.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
// Import Playwright for web scraping capabilities.
import { chromium } from 'playwright';

// --- Environment Configuration & Validation ---
// Define a variable to hold the parsed service account object.
let serviceAccount;
try {
    // Attempt to read the service account JSON from the environment variable.
    // This is safer than committing the file to the repository.
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT env var is missing");
    serviceAccount = JSON.parse(raw);
} catch (error) {
    // Log error and exit if credentials are missing or invalid.
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT:", error.message);
    process.exit(1);
}

// Initialize the Firebase Admin app with the parsed credentials.
initializeApp({
  credential: cert(serviceAccount)
});

// Get a reference to the Firestore database.
const db = getFirestore();

// Main function to enrich bar data by scraping missing details from Google Search.
async function enrich() {
  console.log("Starting Enrichment...");

  // --- Step 1: Identify Incomplete Bars ---
  // Get all documents from the 'bars' collection.
  const barsRef = db.collection('bars');
  const snapshot = await barsRef.get();

  const incompleteBars = [];
  // Iterate through each bar to check for missing fields.
  snapshot.forEach(doc => {
      const data = doc.data();
      // Check if critical contact/location info is missing.
      if (!data.address || !data.phone || !data.city || !data.state || !data.zip) {
          incompleteBars.push({ id: doc.id, ...data });
      }
  });

  // Exit early if no work is needed.
  if (incompleteBars.length === 0) {
      console.log("No incomplete bars found.");
      return;
  }

  console.log(`Found ${incompleteBars.length} bars to enrich.`);

  // --- Step 2: Initialize Headless Browser ---
  // Launch Chromium in headless mode.
  const browser = await chromium.launch({ headless: true });
  // Create a new browser context with a standard User Agent to avoid bot detection.
  const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  });
  const page = await context.newPage();

  // --- Step 3: Process Each Bar ---
  for (const bar of incompleteBars) {
      try {
          console.log(`Enriching: ${bar.name}...`);

          // Construct a search query using available data (Name + City + State).
          const queryParts = [bar.name];
          if (bar.city) queryParts.push(bar.city);
          if (bar.state) queryParts.push(bar.state);
          // Zip is optional as it might be too specific if the user entered it incorrectly.
          // if (bar.zip) queryParts.push(bar.zip);

          const q = queryParts.join(' ');
          // Navigate to Google Search results.
          await page.goto(`https://www.google.com/search?q=${encodeURIComponent(q)}`);

          // Wait for the DOM to be ready.
          await page.waitForLoadState('domcontentloaded');

          // --- Step 3a: Scrape Data ---
          // We look for specific Google Knowledge Panel attributes.
          // Note: These selectors rely on Google's internal classes/attributes and are brittle.

          const updates = {};

          // Strategy A: Knowledge Panel Selectors
          // Attempt to find Address.
          if (!bar.address) {
              // Try multiple selectors that have worked in the past for the address field.
              const addressText = await page.locator('[data-attrid="kc:/location/location:address"] .LrzXr').first().textContent().catch(() => null)
                               || await page.locator('[data-attrid="kc:/location/location:address"]').first().textContent().catch(() => null);
              if (addressText) {
                  // Clean up the text (remove "Address:" prefix).
                  updates.address = addressText.replace(/^Address:\s*/i, '').trim();
                  console.log(`  Found Address: ${updates.address}`);
              }
          }

          // Attempt to find Phone Number.
          if (!bar.phone) {
              // Try selectors for the phone field.
              const phoneText = await page.locator('[data-attrid="kc:/collection/knowledge_panels/has_phone:phone"] .LrzXr').first().textContent().catch(() => null)
                             || await page.locator('[data-attrid="kc:/collection/knowledge_panels/has_phone:phone"] span').last().textContent().catch(() => null);
              if (phoneText) {
                  // Clean up text.
                  updates.phone = phoneText.replace(/^Phone:\s*/i, '').trim();
                  console.log(`  Found Phone: ${updates.phone}`);
              }
          }

          // Strategy B: Fallback Text Search (Not implemented to reduce noise)
          // If Strategy A fails, we could try regex searching the body, but it's risky.

          // --- Step 4: Update Firestore ---
          // If we found any new data, update the document.
          if (Object.keys(updates).length > 0) {
              await barsRef.doc(bar.id).update(updates);
              console.log(`  Updated ${bar.name}`);
          } else {
              console.log(`  No info found for ${bar.name}`);
          }

          // --- Step 5: Rate Limiting ---
          // Wait a random amount of time (2-4 seconds) to be polite and avoid IP bans.
          await page.waitForTimeout(2000 + Math.random() * 2000);

      } catch (e) {
          console.error(`  Error processing ${bar.name}:`, e.message);
      }
  }

  // Close browser resources.
  await browser.close();
}

// Execute the function and handle exit codes.
enrich().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});
