import * as admin from "firebase-admin";

admin.initializeApp();

export { onUserRoleChange } from "./onUserRoleChange";
export { onRequestCreated } from "./onRequestCreated";
export { onNoticeCreated } from "./onNoticeCreated";
export { cleanupStaleRequests } from "./cleanupStaleRequests";
export { onInviteConsumed } from "./onInviteConsumed";
export { fileOwnershipClaim, reviewOwnershipClaim } from "./ownershipClaims";
