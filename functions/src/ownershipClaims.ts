import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

// Pure decision logic for reviewOwnershipClaim, extracted so it's
// directly unit-testable without mocking the Admin SDK. Manager+ (or
// admin) may review, EXCEPT the claimant reviewing their own claim —
// see the comment at its call site in reviewOwnershipClaim for why
// this can't just be "Owner-only" instead.
export function canReviewClaim(
  reviewerUid: string,
  claimantId: string,
  reviewerRole: string | undefined,
  isAdmin: boolean
): boolean {
  if (reviewerUid === claimantId) return false;
  return isAdmin || reviewerRole === "Owner" || reviewerRole === "Manager";
}

// ownershipClaims is `allow write: if false` in firestore.rules —
// writes flow through these two callables only, which is what the
// rules comment on that collection has always claimed but nothing
// previously implemented. Without this, a real-world bar owner had no
// way to reclaim a bar someone else set up (e.g. a temporary/claimed
// entry created by staff before the owner ever signed up), since the
// collection existed but no client write and no function ever touched
// it.

// Files a claim requesting ownership of `barId`. Any signed-in user
// may file one; approval is a separate step gated to the bar's
// current Manager+.
export const fileOwnershipClaim = onCall(async (request) => {
  const auth = request.auth;
  if (!auth) throw new HttpsError("unauthenticated", "Must be signed in.");

  const { barId, justification } = (request.data ?? {}) as { barId?: string; justification?: string };
  if (!barId || typeof barId !== "string") {
    throw new HttpsError("invalid-argument", "barId is required.");
  }

  const db = getFirestore();
  const barDoc = await db.doc(`bars/${barId}`).get();
  if (!barDoc.exists) throw new HttpsError("not-found", "Bar not found.");
  if (barDoc.data()?.ownerId === auth.uid) {
    throw new HttpsError("failed-precondition", "You already own this bar.");
  }

  const existing = await db
    .collection(`bars/${barId}/ownershipClaims`)
    .where("claimantId", "==", auth.uid)
    .where("status", "==", "pending")
    .limit(1)
    .get();
  if (!existing.empty) {
    throw new HttpsError("already-exists", "You already have a pending claim for this bar.");
  }

  const claimantName = (auth.token.name as string | undefined) || auth.token.email || "Unknown";
  const claimRef = await db.collection(`bars/${barId}/ownershipClaims`).add({
    barId,
    claimantId: auth.uid,
    claimantName,
    ...(justification ? { justification } : {}),
    status: "pending",
    createdAt: FieldValue.serverTimestamp(),
  });

  return { claimId: claimRef.id };
});

// Approves or rejects a claim. Caller must be Manager+ (or admin) on
// the bar the claim is against — checked against the same `bars`
// custom claim firestore.rules uses. On approval: transfers
// bars/{barId}.ownerId, promotes the claimant to 'Owner' (creating
// their per-bar user doc if they aren't a member yet — a real owner
// reclaiming a bar staff set up may never have joined it), and
// demotes whoever held ownerId previously to 'Manager' so the bar
// isn't left with a stale, now-inaccurate Owner role floating around.
export const reviewOwnershipClaim = onCall(async (request) => {
  const auth = request.auth;
  if (!auth) throw new HttpsError("unauthenticated", "Must be signed in.");

  const { barId, claimId, approve } = (request.data ?? {}) as { barId?: string; claimId?: string; approve?: boolean };
  if (!barId || !claimId || typeof approve !== "boolean") {
    throw new HttpsError("invalid-argument", "barId, claimId, and approve are required.");
  }

  const barsClaims = (auth.token.bars as Record<string, string> | undefined) ?? {};
  const isAdmin = auth.token.admin === true;
  const role = barsClaims[barId];

  const db = getFirestore();
  const claimRef = db.doc(`bars/${barId}/ownershipClaims/${claimId}`);
  const claimDoc = await claimRef.get();
  if (!claimDoc.exists) throw new HttpsError("not-found", "Claim not found.");
  const claim = claimDoc.data()!;
  if (claim.status !== "pending") {
    throw new HttpsError("failed-precondition", "This claim was already reviewed.");
  }
  // Blocks a reviewer approving their own claim — file one as a
  // Manager, then immediately approve it, and you're Owner with the
  // real Owner demoted — as well as anyone who isn't Manager+/admin.
  // See canReviewClaim's comment for why this is "not the claimant"
  // rather than "must be Owner".
  if (!canReviewClaim(auth.uid, claim.claimantId, role, isAdmin)) {
    throw new HttpsError(
      "permission-denied",
      claim.claimantId === auth.uid
        ? "You cannot review your own ownership claim."
        : "Only a Manager or Owner of this bar can review claims."
    );
  }

  if (!approve) {
    await claimRef.update({
      status: "rejected",
      reviewedAt: FieldValue.serverTimestamp(),
      reviewedBy: auth.uid,
    });
    return { status: "rejected" };
  }

  const barRef = db.doc(`bars/${barId}`);
  const barDoc = await barRef.get();
  const previousOwnerId = barDoc.data()?.ownerId as string | undefined;

  // The claimant may already be a member here (the comment above this
  // function calls that out explicitly — "a real owner reclaiming a
  // bar staff set up" doesn't necessarily mean they're new to it).
  // Preserve their existing joinedAt instead of always stamping now,
  // the same way onInviteConsumed.ts already does for the equivalent
  // case — otherwise an existing long-tenured member who wins an
  // ownership claim has their join date silently reset to today.
  const claimantRef = db.doc(`bars/${barId}/users/${claim.claimantId}`);
  const existingClaimantDoc = await claimantRef.get();
  const existingJoinedAt = existingClaimantDoc.data()?.joinedAt;

  const batch = db.batch();
  batch.update(barRef, { ownerId: claim.claimantId });
  batch.set(
    claimantRef,
    {
      role: "Owner",
      jobTitle: "Owner",
      status: "active",
      displayName: claim.claimantName || "Owner",
      joinedAt: existingJoinedAt ?? FieldValue.serverTimestamp(),
      lastSeen: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  if (previousOwnerId && previousOwnerId !== claim.claimantId) {
    batch.set(db.doc(`bars/${barId}/users/${previousOwnerId}`), { role: "Manager" }, { merge: true });
  }
  batch.update(claimRef, {
    status: "approved",
    reviewedAt: FieldValue.serverTimestamp(),
    reviewedBy: auth.uid,
  });
  await batch.commit();

  await db.doc(`users/${claim.claimantId}`).set(
    { joinedBars: FieldValue.arrayUnion(barId) },
    { merge: true }
  );

  return { status: "approved" };
});
