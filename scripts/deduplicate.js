import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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

async function deduplicate() {
  console.log("Starting Deduplication...");

  await deduplicateBars();
  await deduplicateButtons(); // Pagers

  console.log("Deduplication Complete.");
}

async function deduplicateBars() {
    console.log("--> Checking for duplicate Bars...");
    const barsRef = db.collection('bars');
    const snapshot = await barsRef.get();

    // Group by normalized key: name|city|zip
    const groups = {};
    snapshot.forEach(doc => {
        const data = doc.data();
        const key = `${data.name?.toLowerCase().trim()}|${data.city?.toLowerCase().trim()}|${data.zip?.trim()}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push({ id: doc.id, ...data, ref: doc.ref });
    });

    for (const [key, bars] of Object.entries(groups)) {
        if (bars.length < 2) continue;

        console.log(`Duplicate Group Found: ${key} (${bars.length} items)`);

        // Pick Master: Prefer 'verified', then oldest created (if timestamp exists), or just first
        // Assuming 'verified' status exists
        let master = bars.find(b => b.status === 'verified') || bars[0];
        const duplicates = bars.filter(b => b.id !== master.id);

        for (const dup of duplicates) {
            console.log(`  Squashing ${dup.id} into ${master.id}...`);
            const batch = db.batch();

            // 1. Move Users
            const usersSnap = await db.collection(`bars/${dup.id}/users`).get();
            for (const userDoc of usersSnap.docs) {
                // Check if user already exists in master
                const masterUserRef = db.doc(`bars/${master.id}/users/${userDoc.id}`);
                const masterUserSnap = await masterUserRef.get();
                if (!masterUserSnap.exists) {
                    batch.set(masterUserRef, userDoc.data());
                }
                // batch.delete(userDoc.ref); // Delete from old bar (done via deleting parent bar later usually, but safe to do explicit)
            }

            // 2. Move Requests
            // Requests are a top level collectionGroup query often, but stored with barId
            const requestsSnap = await db.collection('requests').where('barId', '==', dup.id).get();
            requestsSnap.forEach(reqDoc => {
                batch.update(reqDoc.ref, { barId: master.id });
            });

            // 3. Merge Data (Inventory, Wells, etc)
            // Simple array merges
            const updates = {};
            if (dup.wells) {
                const combinedWells = new Set([...(master.wells || []), ...dup.wells]);
                updates.wells = Array.from(combinedWells);
            }
            // Beer Inventory Merge
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

            // 4. Delete Duplicate Bar
            batch.delete(dup.ref);

            await batch.commit();
            console.log(`  Squashed ${dup.id}.`);
        }
    }
}

async function deduplicateButtons() {
    console.log("--> Checking for duplicate Pagers...");
    const barsRef = db.collection('bars');
    const snapshot = await barsRef.get(); // Iterate all bars again to be safe

    for (const doc of snapshot.docs) {
        const data = doc.data();
        if (!data.buttons || !Array.isArray(data.buttons)) continue;

        const uniqueButtons = [];
        const seenLabels = new Set();
        let changed = false;

        // Recursive dedupe logic if needed, but top-level first
        // We only care about ID collisions or exact Label collisions in the same list

        for (const btn of data.buttons) {
            const key = btn.label.toLowerCase().trim();
            if (seenLabels.has(key)) {
                changed = true;
                continue; // Skip duplicate
            }
            seenLabels.add(key);

            // Also clean children if they exist
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
