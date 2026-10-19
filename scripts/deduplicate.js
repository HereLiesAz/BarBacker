// Import necessary Firebase Admin SDK modules.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// --- Environment Configuration & Validation ---
let serviceAccount;
try {
    // Parse the service account from environment variable.
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT env var is missing");
    serviceAccount = JSON.parse(raw);
} catch (error) {
    console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT:", error.message);
    process.exit(1);
}

// Initialize Firebase Admin.
initializeApp({
  credential: cert(serviceAccount)
});

// Get Firestore reference.
const db = getFirestore();

// Main function to coordinate deduplication tasks.
async function deduplicate() {
  console.log("Starting Deduplication...");

  // Run bar deduplication first.
  await deduplicateBars();
  // Run button (pager) deduplication second.
  await deduplicateButtons();

  console.log("Deduplication Complete.");
}

// Function to find and merge duplicate Bar documents.
async function deduplicateBars() {
    // Identity cannot be established from name, city and ZIP alone.
    // Report candidates only; never merge membership, requests or ownership automatically.
    const snapshot = await db.collection('bars').get();
    const groups = new Map();
    for (const doc of snapshot.docs) {
        const data = doc.data();
        const fields = [data.name, data.city, data.zip];
        if (fields.some(value => typeof value !== 'string' || !value.trim())) continue;
        const key = fields.map(value => value.trim().toLowerCase()).join('|');
        const ids = groups.get(key) || [];
        ids.push(doc.id);
        groups.set(key, ids);
    }
    for (const [key, ids] of groups) {
        if (ids.length > 1) {
            console.warn(`Possible duplicate bars (manual review required): ${key}: ${ids.join(', ')}`);
        }
    }
}

// Function to clean up duplicate buttons within a single bar.
async function deduplicateButtons() {
    console.log("--> Checking for duplicate Pagers...");
    const barsRef = db.collection('bars');
    const snapshot = await barsRef.get();

    for (const doc of snapshot.docs) {
        const data = doc.data();
        if (!data.buttons || !Array.isArray(data.buttons)) continue;

        const uniqueButtons = [];
        const seenLabels = new Set();
        let changed = false;

        // Iterate through buttons to find duplicates by Label.
        for (const btn of data.buttons) {
            const key = btn.label.toLowerCase().trim();
            if (seenLabels.has(key)) {
                changed = true;
                continue; // Skip this button as it's a duplicate.
            }
            seenLabels.add(key);

            // Also check for duplicates in children (sub-menus).
            if (btn.children) {
               const uniqueChildren = [];
               const seenChildLabels = new Set();
               for (const child of btn.children) {
                   const childKey = child.label.toLowerCase().trim();
                   if (seenChildLabels.has(childKey)) {
                       changed = true;
                       continue;
                   }
                   seenChildLabels.add(childKey);
                   uniqueChildren.push(child);
               }
               // If children list changed, update the button object.
               if (uniqueChildren.length !== btn.children.length) {
                   btn.children = uniqueChildren;
                   changed = true;
               }
            }

            uniqueButtons.push(btn);
        }

        // If any changes were detected, update the bar document.
        if (changed) {
            console.log(`  Fixing duplicates in bar ${data.name} (${doc.id})...`);
            await doc.ref.update({ buttons: uniqueButtons });
        }
    }
}

// Execute logic.
deduplicate().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});
