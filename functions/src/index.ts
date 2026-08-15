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
export { calendarGetAuthorizeUrl, calendarOauthCallback, calendarDisconnect } from "./calendar/oauth";
export { calendarListCalendars, calendarSelectCalendar } from "./calendar/calendars";
export { onEventWritten } from "./calendar/outboundSync";
export { calendarWebhook } from "./calendar/webhook";
export { resubscribeCalendarWatches } from "./calendar/resubscribe";
export { icalFeed } from "./calendar/icalFeed";
export { pollICalSubscriptions, removeICalSubscriptionEvents } from "./calendar/icalPoll";
export { rotateICalFeedToken } from "./calendar/feedToken";
export { sendShiftReminders } from "./calendar/shiftReminders";
