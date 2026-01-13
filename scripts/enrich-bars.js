import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { chromium } from 'playwright';

// Environment check
let serviceAccount;
try {
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

  // 1. Find incomplete bars
  const barsRef = db.collection('bars');
  const snapshot = await barsRef.get();

  const incompleteBars = [];
  snapshot.forEach(doc => {
      const data = doc.data();
      if (!data.address || !data.phone || !data.city || !data.state || !data.zip) {
          incompleteBars.push({ id: doc.id, ...data });
      }
  });

  if (incompleteBars.length === 0) {
      console.log("No incomplete bars found.");
      return;
  }

  console.log(`Found ${incompleteBars.length} bars to enrich.`);

  // 2. Launch Browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  });
  const page = await context.newPage();

  // 3. Process each bar
  for (const bar of incompleteBars) {
      try {
          console.log(`Enriching: ${bar.name}...`);

          // Construct Query
          const queryParts = [bar.name];
          if (bar.city) queryParts.push(bar.city);
          if (bar.state) queryParts.push(bar.state);
          // if (bar.zip) queryParts.push(bar.zip); // Optional, might be too specific if wrong

          const q = queryParts.join(' ');
          await page.goto(`https://www.google.com/search?q=${encodeURIComponent(q)}`);

          // Wait for results
          await page.waitForLoadState('domcontentloaded');

          // Scrape Data
          // Address: Often in [data-attrid="kc:/location/location:address"]
          // Phone: Often in [data-attrid="kc:/collection/knowledge_panels/has_phone:phone"]
          // Note: These selectors are brittle. We'll try a few strategies.

          const updates = {};

          // Strategy A: Knowledge Panel Selectors
          if (!bar.address) {
              const addressText = await page.locator('[data-attrid="kc:/location/location:address"] .LrzXr').first().textContent().catch(() => null)
                               || await page.locator('[data-attrid="kc:/location/location:address"]').first().textContent().catch(() => null);
              if (addressText) {
                  // Text often looks like: "Address: 123 Main St, City, ST 12345"
                  // Remove "Address: " prefix if present
                  updates.address = addressText.replace(/^Address:\s*/i, '').trim();
                  console.log(`  Found Address: ${updates.address}`);
              }
          }

          if (!bar.phone) {
              const phoneText = await page.locator('[data-attrid="kc:/collection/knowledge_panels/has_phone:phone"] .LrzXr').first().textContent().catch(() => null)
                             || await page.locator('[data-attrid="kc:/collection/knowledge_panels/has_phone:phone"] span').last().textContent().catch(() => null);
              if (phoneText) {
                  updates.phone = phoneText.replace(/^Phone:\s*/i, '').trim();
                  console.log(`  Found Phone: ${updates.phone}`);
              }
          }

          // Strategy B: Fallback Text Search if A failed
          // (Simplified for now, as text scraping full DOM is noisy)

          // 4. Update Firestore
          if (Object.keys(updates).length > 0) {
              await barsRef.doc(bar.id).update(updates);
              console.log(`  Updated ${bar.name}`);
          } else {
              console.log(`  No info found for ${bar.name}`);
          }

          // Random delay to be nice
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
