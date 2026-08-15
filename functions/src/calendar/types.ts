// Calendar types — Phase 4 of
// docs/plans/2026-05-21-feature-set-purr-design.md.

export type CalendarEventType = "shift" | "booking" | "event" | string;

export interface CalendarEvent {
  id: string;
  title: string;
  start: string; // ISO 8601
  end: string; // ISO 8601
  description?: string;
  type: CalendarEventType;
  assignedTo?: string[]; // uids, for type:'shift'
  externalId?: string;
  externalProvider?: string; // 'google' | 'ical:<url-hash>'
  lastSyncedAt?: FirebaseFirestore.Timestamp;
  deletedAt?: FirebaseFirestore.Timestamp;
  // Set by shiftReminders.ts once its 15-minutes-before push has gone
  // out, so a retry of that scheduled run doesn't double-send.
  reminderSentAt?: FirebaseFirestore.Timestamp;
}

export interface GoogleTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number; // epoch millis
}
