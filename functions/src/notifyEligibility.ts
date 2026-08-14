// Mirrors src/constants.ts's ROLE_NOTIFICATION_DEFAULTS. Functions
// run under a separate TypeScript project from the Vite app (no
// shared build step), so this is a hand-kept copy — see
// scripts/nag-bot.js for the same duplication on the plain-JS side.
export const ROLE_NOTIFICATION_DEFAULTS: Record<string, string[]> = {
  Owner: ['manager', 'security', 'keg', 'trash', 'ice', 'glass', 'fruit', 'restock', 'mixers', 'restock_beer', 'break'],
  Manager: ['manager', 'security', 'keg', 'trash', 'break'],
  Bartender: ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer'],
  Barback: ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer', 'break'],
  Server: [],
  Runner: ['ice', 'glass', 'restock', 'mixers', 'restock_beer'],
  Security: ['security', 'manager', 'break'],
};

export interface NotifiableRequest {
  buttonId?: string | null;
  label: string;
}

export interface BarMember {
  id: string;
  status?: string;
  notificationPreferences?: string[];
  jobTitle?: string;
  role?: string;
}

// Mirrors useRequestActions.ts's client-side fanout decision (and
// nag-bot.js's shouldNagUserAbout) exactly, so a request notifies the
// same people regardless of which path sends it.
export function shouldNotifyMember(req: NotifiableRequest, member: BarMember, requesterId: string): boolean {
  if (member.id === requesterId) return false;
  const isActive = member.status === 'active' || member.status === undefined;
  if (!isActive) return false;

  // Exact resolved-id match only — a substring check on the label
  // would let free text like "BREAKAGE AT WELL 3" mass-notify
  // everyone regardless of preferences.
  if (req.buttonId === 'break') return true;

  // Free-text / unrecognized labels (custom requests, "(Ask Me)"
  // auto-submits) have no buttonId to check preferences against.
  // The client's activeRequests treats this the same way — shown to
  // everyone as a safety default — so mirror that here.
  if (!req.buttonId) return true;

  const prefs = member.notificationPreferences
    ?? ROLE_NOTIFICATION_DEFAULTS[member.jobTitle ?? ''] ?? ROLE_NOTIFICATION_DEFAULTS[member.role ?? ''] ?? [];
  return prefs.includes(req.buttonId);
}
