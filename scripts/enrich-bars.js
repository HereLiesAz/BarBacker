import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { chromium } from 'playwright';

/**
 * Enrichment Bot
 *
 * Uses Playwright (Headless Browser) to fill in missing details (Phone, Address) for bars
 * that were created with minimal info by users.
 */

// Initialize Firebase Admin SDK.
let serviceAccount;
try {
    // Requires the service account JSON to be in env var (CI/CD friendly).
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT env var is missing");
    serviceAccount = JSON.parse(raw);
} catch (error) {
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT:", error.message);
    process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function enrich() {
  console.log("Starting Enrichment...");

  // 1. Scan Firestore for incomplete bars.
  const barsRef = db.collection('bars');
  const snapshot = await barsRef.get();

  const incompleteBars = [];
  snapshot.forEach(doc => {
      const data = doc.data();
      // Definition of 'incomplete': Missing any key contact field.
      if (!data.address || !data.phone || !data.city || !data.state || !data.zip) {
          incompleteBars.push({ id: doc.id, ...data });
      }
  });

  if (incompleteBars.length === 0) {
      console.log("No incomplete bars found.");
      return;
  }

  console.log(`Found ${incompleteBars.length} bars to enrich.`);

  // 2. Launch Headless Browser.
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
      // Spoof User Agent to avoid immediate blocking by Google.
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  });
  const page = await context.newPage();

  // 3. Process each bar sequentially.
  for (const bar of incompleteBars) {
      try {
          console.log(`Enriching: ${bar.name}...`);

          // Construct Search Query: Name + City + State.
          const queryParts = [bar.name];
          if (bar.city) queryParts.push(bar.city);
          if (bar.state) queryParts.push(bar.state);

          const q = queryParts.join(' ');
          await page.goto(`https://www.google.com/search?q=${encodeURIComponent(q)}`);

          // Wait for results to settle.
          await page.waitForLoadState('domcontentloaded');

          const updates = {};

          // Strategy: Scrape Google Knowledge Panel.
          // Selectors are based on common classes/attributes for the "Address" and "Phone" sections.

          // Address Extraction.
          if (!bar.address) {
              // Try multiple selectors.
              const addressText = await page.locator('[data-attrid="kc:/location/location:address"] .LrzXr').first().textContent().catch(() => null)
                               || await page.locator('[data-attrid="kc:/location/location:address"]').first().textContent().catch(() => null);
              if (addressText) {
                  // Clean up prefix like "Address: ".
                  updates.address = addressText.replace(/^Address:\s*/i, '').trim();
                  console.log(`  Found Address: ${updates.address}`);
              }
          }

          // Phone Extraction.
          if (!bar.phone) {
              const phoneText = await page.locator('[data-attrid="kc:/collection/knowledge_panels/has_phone:phone"] .LrzXr').first().textContent().catch(() => null)
                             || await page.locator('[data-attrid="kc:/collection/knowledge_panels/has_phone:phone"] span').last().textContent().catch(() => null);
              if (phoneText) {
                  updates.phone = phoneText.replace(/^Phone:\s*/i, '').trim();
                  console.log(`  Found Phone: ${updates.phone}`);
              }
          }

          // 4. Update Firestore with findings.
          if (Object.keys(updates).length > 0) {
              await barsRef.doc(bar.id).update(updates);
              console.log(`  Updated ${bar.name}`);
          } else {
              console.log(`  No info found for ${bar.name}`);
          }

          // Random delay (2-4s) to act human and avoid rate limits.
          await page.waitForTimeout(2000 + Math.random() * 2000);

      } catch (e) {
          console.error(`  Error processing ${bar.name}:`, e.message);
      }
  }

  await browser.close();
}

enrich().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});
