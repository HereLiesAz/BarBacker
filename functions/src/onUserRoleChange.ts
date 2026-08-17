import * as admin from "firebase-admin";
import { onDocumentWritten } from "firebase-functions/v2/firestore";

type UserRoleDoc = { barId: string; role: string; status?: string };

// Statuses that must NOT translate into a live claim. 'pending' means
// a Manager hasn't approved the join yet (joinPolicy: 'approval');
// 'rejected' means one explicitly declined it. Every other status
// ('active', 'off_clock', or historically undefined/legacy docs) is
// treated as a real member — off_clock is just "not currently on
// shift", not "not approved".
//
// This distinction is security-critical: firestore.rules' hasRole()/
// isManagerPlus() read ONLY this claim, never the live per-bar doc,
// so before this filter existed, self-creating a 'pending' doc (which
// any signed-in user can do — see firestore.rules' self-create rule)
// granted full read/write access to that bar's chat, roster (with
// emails), requests, and 86'd list immediately, before any Manager
// ever saw the approval prompt. joinPolicy:'approval' was gating only
// what the UI *rendered*, not what the backend actually allowed.
const UNAPPROVED_STATUSES = new Set(["pending", "rejected"]);

export function computeClaimsForUser(docs: UserRoleDoc[]): { bars: Record<string, string> } {
  const bars: Record<string, string> = {};
  for (const d of docs) {
    if (d.status !== undefined && UNAPPROVED_STATUSES.has(d.status)) continue;
    bars[d.barId] = d.role;
  }
  return { bars };
}

/**
 * Stamps the user's `bars` claim from their role docs on every write to a role
 * doc under `bars/{barId}/users/{userId}`.
 *
 * Contract:
 *   - This function OWNS the `bars` claim namespace. Other claim keys
 *     (e.g. `subscription` set by Task H1) are preserved via merge.
 *   - Deletion of a role doc effectively revokes the bar's claim (the bar
 *     drops out of the aggregated map).
 *   - The triggering `barId` is always included in the enumeration so that
 *     races against `users/{uid}.joinedBars` writes do not produce stale claims.
 *   - A doc with status 'pending' or 'rejected' contributes NO claim at
 *     all for that bar — see computeClaimsForUser above.
 */
export const onUserRoleChange = onDocumentWritten(
  "bars/{barId}/users/{userId}",
  async (event) => {
    const userId = event.params.userId;
    const triggeringBarId = event.params.barId;
    const db = admin.firestore();
    const userDoc = await db.collection("users").doc(userId).get();
    const joinedBars: string[] = (userDoc.data()?.joinedBars as string[]) ?? [];
    const barIds = Array.from(new Set([triggeringBarId, ...joinedBars]));
    const docs: UserRoleDoc[] = [];
    await Promise.all(barIds.map(async (barId) => {
      const u = await db.doc(`bars/${barId}/users/${userId}`).get();
      const role = u.data()?.role;
      const status = u.data()?.status;
      if (u.exists && typeof role === "string") {
        docs.push({ barId, role, status: typeof status === "string" ? status : undefined });
      }
    }));
    const { bars } = computeClaimsForUser(docs);
    let existingClaims: Record<string, unknown> = {};
    let userExists = true;
    try {
      const userRecord = await admin.auth().getUser(userId);
      existingClaims = userRecord.customClaims ?? {};
    } catch (err: any) {
      if (err?.code === "auth/user-not-found") {
        // User deleted from Auth (or race during user creation).
        // Skip the claim write entirely — setCustomUserClaims would
        // also throw auth/user-not-found and crash the trigger.
        userExists = false;
      } else {
        throw err;
      }
    }
    if (userExists) {
      const merged = { ...existingClaims, bars };
      await admin.auth().setCustomUserClaims(userId, merged);
    }
  }
);
