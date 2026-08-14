import { onDocumentUpdated } from "firebase-functions/v2/firestore";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

// Grants the invited role once the invitee flips `consumed` to true
// (the only update firestore.rules lets them make client-side — see
// the invites match block). Without this the invites collection had
// rules but nothing that ever acted on a consumption: an invite could
// be created and "consumed" and still grant nothing.
//
// Ownership is deliberately never grantable via invite — only bar
// creation or the ownershipClaims approval flow can produce an Owner
// — so an invite that somehow specifies role:'Owner' (the rules don't
// block Manager+ from creating one) is downgraded to 'Manager' here.
export const onInviteConsumed = onDocumentUpdated(
  "bars/{barId}/invites/{inviteId}",
  async (event) => {
    const before = event.data?.before.data();
    const after = event.data?.after.data();
    if (!before || !after) return;
    if (before.consumed === true || after.consumed !== true) return;

    const { barId } = event.params;
    const consumedBy: string | undefined = after.consumedBy;
    const invitedRole: string | undefined = after.role;
    if (!consumedBy || !invitedRole) return;

    const role = invitedRole === "Owner" ? "Manager" : invitedRole;
    const db = getFirestore();
    const userRef = db.doc(`bars/${barId}/users/${consumedBy}`);
    const existing = await userRef.get();
    const existingData = existing.data();

    await userRef.set(
      {
        role,
        jobTitle: existingData?.jobTitle ?? role,
        status: "active",
        displayName: existingData?.displayName ?? after.email,
        email: after.email,
        joinedAt: existingData?.joinedAt ?? FieldValue.serverTimestamp(),
        lastSeen: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    await db.doc(`users/${consumedBy}`).set(
      { joinedBars: FieldValue.arrayUnion(barId) },
      { merge: true }
    );
  }
);
