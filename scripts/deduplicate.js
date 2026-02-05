import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

/**
 * Deduplication Script
 *
 * Scans the database for duplicate Bars (same Name + City + Zip) and merges them.
 * This handles cases where multiple users create the same bar slightly differently.
 */

// Environment check.
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

async function deduplicate() {
  console.log("Starting Deduplication...");

  await deduplicateBars();
  await deduplicateButtons(); // Also fixes duplicate buttons within bars.

  console.log("Deduplication Complete.");
}

async function deduplicateBars() {
    console.log("--> Checking for duplicate Bars...");
    const barsRef = db.collection('bars');
    const snapshot = await barsRef.get();

    // Group bars by a normalized key: name|city|zip.
    const groups = {};
    snapshot.forEach(doc => {
        const data = doc.data();
        const key = `${data.name?.toLowerCase().trim()}|${data.city?.toLowerCase().trim()}|${data.zip?.trim()}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push({ id: doc.id, ...data, ref: doc.ref });
    });

    // Process groups with >1 entry.
    for (const [key, bars] of Object.entries(groups)) {
        if (bars.length < 2) continue;

        console.log(`Duplicate Group Found: ${key} (${bars.length} items)`);

        // Pick Master: Prefer 'verified' status, then default to first found.
        let master = bars.find(b => b.status === 'verified') || bars[0];
        const duplicates = bars.filter(b => b.id !== master.id);

        for (const dup of duplicates) {
            console.log(`  Squashing ${dup.id} into ${master.id}...`);
            const batch = db.batch();

            // 1. Move Users.
            // Read users from the duplicate bar and copy them to the master bar.
            const usersSnap = await db.collection(`bars/${dup.id}/users`).get();
            for (const userDoc of usersSnap.docs) {
                const masterUserRef = db.doc(`bars/${master.id}/users/${userDoc.id}`);
                const masterUserSnap = await masterUserRef.get();
                // Only copy if user doesn't already exist in master.
                if (!masterUserSnap.exists) {
                    batch.set(masterUserRef, userDoc.data());
                }
                // Note: We leave the old user doc to be deleted with the bar or manually.
            }

            // 2. Move Requests.
            // Update the 'barId' field on all global requests.
            const requestsSnap = await db.collection('requests').where('barId', '==', dup.id).get();
            requestsSnap.forEach(reqDoc => {
                batch.update(reqDoc.ref, { barId: master.id });
            });

            // 3. Merge Data (Inventory, Wells).
            const updates = {};

            // Merge Wells (unique set).
            if (dup.wells) {
                const combinedWells = new Set([...(master.wells || []), ...dup.wells]);
                updates.wells = Array.from(combinedWells);
            }

            // Merge Beer Inventory (combine arrays per brand).
            if (dup.beerInventory) {
                const masterInv = master.beerInventory || {};
                const dupInv = dup.beerInventory;
                for (const [brand, types] of Object.entries(dupInv)) {
                    if (!masterInv[brand]) {
                        masterInv[brand] = types;
                    } else {
                        masterInv[brand] = Array.from(new Set([...masterInv[brand], ...types]));
                    }
                }
                updates.beerInventory = masterInv;
            }

            if (Object.keys(updates).length > 0) {
                batch.update(master.ref, updates);
            }

            // 4. Delete the Duplicate Bar Doc.
            batch.delete(dup.ref);

            await batch.commit();
            console.log(`  Squashed ${dup.id}.`);
        }
    }
}

/**
 * Cleans up duplicate buttons (same label) inside a single bar's config.
 * Iterates through all bars and checks for duplicates in the 'buttons' array.
 */
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

        for (const btn of data.buttons) {
            const key = btn.label.toLowerCase().trim();
            if (seenLabels.has(key)) {
                changed = true;
                continue; // Skip duplicate.
            }
            seenLabels.add(key);

            // Deduplicate Children recursively (1 level deep).
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
               if (uniqueChildren.length !== btn.children.length) {
                   btn.children = uniqueChildren;
                   changed = true;
               }
            }

            uniqueButtons.push(btn);
        }

        if (changed) {
            console.log(`  Fixing duplicates in bar ${data.name} (${doc.id})...`);
            await doc.ref.update({ buttons: uniqueButtons });
        }
    }
}

deduplicate().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});
