import { onSchedule } from "firebase-functions/v2/scheduler";
import { getFirestore } from "firebase-admin/firestore";
import { rotateIfNeeded } from "./connection";
import { POSProvider } from "./types";

const PROACTIVE_MARGIN_MS = 24 * 60 * 60 * 1000;

// Hourly proactive rotation for anything within 24h of expiry — see
// the "OAuth flow" section of
// docs/plans/2026-05-21-feature-set-purr-design.md. Requires a
// Firestore composite/collection-group index on posSecrets (none
// needed here beyond the default collection-group scan since there's
// no additional filter/order).
export const rotatePOSTokens = onSchedule("every 60 minutes", async () => {
  const db = getFirestore();
  const secretsSnap = await db.collectionGroup("posSecrets").get();

  for (const doc of secretsSnap.docs) {
    const barId = doc.ref.parent.parent?.id;
    const provider = doc.id as POSProvider;
    if (!barId) continue;
    try {
      await rotateIfNeeded(barId, provider, PROACTIVE_MARGIN_MS);
    } catch (e) {
      console.error(`Failed to rotate POS token for bar ${barId} provider ${provider}`, e);
    }
  }
});
