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
    console.log("--> Checking for duplicate Bars...");
    const barsRef = db.collection('bars');
    const snapshot = await barsRef.get();

    // Group bars by a normalized key to detect duplicates.
    // Key format: "name|city|zip" (all lowercased and trimmed).
    const groups = {};
    snapshot.forEach(doc => {
        const data = doc.data();
        const key = `${data.name?.toLowerCase().trim()}|${data.city?.toLowerCase().trim()}|${data.zip?.trim()}`;
        if (!groups[key]) groups[key] = [];
        // Store full doc data and reference for later use.
        groups[key].push({ id: doc.id, ...data, ref: doc.ref });
    });

    // Iterate over groups to find collisions (groups with >1 bar).
    for (const [key, bars] of Object.entries(groups)) {
        if (bars.length < 2) continue;

        console.log(`Duplicate Group Found: ${key} (${bars.length} items)`);

        // --- Select Master Record ---
        // Heuristic: Prefer a bar that is already 'verified'. Fallback to the first one found (oldest usually).
        let master = bars.find(b => b.status === 'verified') || bars[0];
        // Identify the duplicates that will be merged into the master.
        const duplicates = bars.filter(b => b.id !== master.id);

        for (const dup of duplicates) {
            console.log(`  Squashing ${dup.id} into ${master.id}...`);
            const batch = db.batch();

            // --- 1. Migrate Users ---
            // Fetch users from the duplicate bar.
            const usersSnap = await db.collection(`bars/${dup.id}/users`).get();
            for (const userDoc of usersSnap.docs) {
                // Check if this user already exists in the master bar to avoid overwriting.
                const masterUserRef = db.doc(`bars/${master.id}/users/${userDoc.id}`);
                const masterUserSnap = await masterUserRef.get();
                if (!masterUserSnap.exists) {
                    // Copy user data to master.
                    batch.set(masterUserRef, userDoc.data());
                }
                // Note: We don't delete the old user doc here; it gets deleted when the parent bar is deleted?
                // Actually, Firestore subcollections are NOT automatically deleted when parent is deleted.
                // Ideally, we should delete them, but for safety in this script, we might leave them or delete explicitly.
                // The original code commented out the delete, likely for safety.
                // batch.delete(userDoc.ref);
            }

            // --- 2. Migrate Requests ---
            // Requests are stored in a root collection but link to 'barId'.
            // We find all requests for the duplicate bar and point them to the master bar.
            const requestsSnap = await db.collection('requests').where('barId', '==', dup.id).get();
            requestsSnap.forEach(reqDoc => {
                batch.update(reqDoc.ref, { barId: master.id });
            });

            // --- 3. Merge Bar Data (Inventory, Wells) ---
            const updates = {};

            // Merge Wells (Set union).
            if (dup.wells) {
                const combinedWells = new Set([...(master.wells || []), ...dup.wells]);
                updates.wells = Array.from(combinedWells);
            }

            // Merge Beer Inventory.
            if (dup.beerInventory) {
                const masterInv = master.beerInventory || {};
                const dupInv = dup.beerInventory;
                for (const [brand, types] of Object.entries(dupInv)) {
                    if (!masterInv[brand]) {
                        // If brand missing in master, add it.
                        masterInv[brand] = types;
                    } else {
                        // If brand exists, merge the types list.
                        masterInv[brand] = Array.from(new Set([...masterInv[brand], ...types]));
                    }
                }
                updates.beerInventory = masterInv;
            }

            // Apply updates to the master bar if any data was merged.
            if (Object.keys(updates).length > 0) {
                batch.update(master.ref, updates);
            }

            // --- 4. Delete Duplicate Bar ---
            // Delete the duplicate bar document itself.
            batch.delete(dup.ref);

            // Commit the batch operation.
            await batch.commit();
            console.log(`  Squashed ${dup.id}.`);
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
