import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { requireManagerPlus } from "../shared/authz";
import { getConnectedClient } from "./connection";
import { POSProvider } from "./types";

function parseArgs(data: unknown): { barId: string; provider: POSProvider } {
  const { barId, provider } = (data ?? {}) as { barId?: string; provider?: string };
  if (!barId || !provider) throw new HttpsError("invalid-argument", "barId and provider are required.");
  return { barId, provider: provider as POSProvider };
}

// Menu sync as a smoke test — see "What Phase 3 ships" in the design
// doc. Synced items land in bars/{barId}/menu/{itemId}, readable by
// any bar member (Manager+ triggers the sync, everyone can see it).
export const posSyncMenu = onCall(async (request) => {
  const { barId, provider } = parseArgs(request.data);
  requireManagerPlus(request.auth, barId);

  const client = await getConnectedClient(barId, provider);
  const items = await client.syncMenu();

  const db = getFirestore();
  const batches: Promise<FirebaseFirestore.WriteResult[]>[] = [];
  for (let i = 0; i < items.length; i += 400) {
    const batch = db.batch();
    for (const item of items.slice(i, i + 400)) {
      batch.set(db.doc(`bars/${barId}/menu/${item.id}`), { ...item, provider, syncedAt: FieldValue.serverTimestamp() });
    }
    batches.push(batch.commit());
  }
  await Promise.all(batches);

  await db.doc(`bars/${barId}/posConnection/${provider}`).set(
    { lastSyncedAt: FieldValue.serverTimestamp(), lastSyncedCount: items.length }, { merge: true },
  );

  return { count: items.length };
});

export const posGetOrders = onCall(async (request) => {
  const { barId, provider } = parseArgs(request.data);
  requireManagerPlus(request.auth, barId);
  const { since } = (request.data ?? {}) as { since?: string };

  const client = await getConnectedClient(barId, provider);
  const orders = await client.getOrders(since ? { since: new Date(since) } : undefined);
  return { orders };
});

export const posGetSales = onCall(async (request) => {
  const { barId, provider } = parseArgs(request.data);
  requireManagerPlus(request.auth, barId);
  const { start, end } = (request.data ?? {}) as { start?: string; end?: string };
  if (!start || !end) throw new HttpsError("invalid-argument", "start and end are required.");

  const client = await getConnectedClient(barId, provider);
  const summary = await client.getSales(new Date(start), new Date(end));
  return summary;
});
