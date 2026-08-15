import * as admin from "firebase-admin";

admin.initializeApp();

export { onUserRoleChange } from "./onUserRoleChange";
export { onRequestCreated } from "./onRequestCreated";
export { cleanupStaleRequests } from "./cleanupStaleRequests";
export { onInviteConsumed } from "./onInviteConsumed";
export { fileOwnershipClaim, reviewOwnershipClaim } from "./ownershipClaims";
export { migrateNoticesToChat } from "./migrateNoticesToChat";
export { onChatPinned } from "./onChatPinned";
export { posGetAuthorizeUrl, oauthCallback, posConnectToast, posDisconnect } from "./pos/oauth";
export { posSyncMenu, posGetOrders, posGetSales } from "./pos/callables";
export { rotatePOSTokens } from "./pos/rotateTokens";
