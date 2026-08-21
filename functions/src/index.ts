import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

admin.initializeApp();
// Several write paths build payload objects with optional fields that
// come back `undefined` from an external API (e.g. a Google Calendar
// event with no description, an iCal VEVENT with no DESCRIPTION, a
// Square/Toast catalog item with no category) — the Admin SDK rejects
// `undefined` field values by default, which used to throw and abort
// the whole sync mid-batch. Dropping undefined fields silently (Admin
// SDK's documented behavior for this setting) is what every caller
// here actually wants: an absent field, not a write failure.
getFirestore().settings({ ignoreUndefinedProperties: true });

export { onUserRoleChange } from "./onUserRoleChange";
export { onRequestCreated } from "./onRequestCreated";
export { onRequestDeleted } from "./onRequestDeleted";
export { cleanupStaleRequests } from "./cleanupStaleRequests";
export { onInviteConsumed } from "./onInviteConsumed";
export {
  appleAuthBegin,
  appleAuthCallback,
  appleAuthClaim,
  cleanupAppleAuthSessions,
} from "./appleAuth";
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
