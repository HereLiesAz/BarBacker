import { Request } from '../types';

export interface FilterAndSortActiveRequestsArgs {
  requests: Request[];
  ignoredIds: string[];
  notificationPreferences: string[];
  currentUserId: string | undefined;
  getButtonIdForLabel: (label: string) => string | undefined;
}

// Filters requests down to the ones relevant to the current user, then
// sorts ignored requests to the bottom. Split out of App.tsx so it can
// be tested directly against real inputs — previously the only test
// covering this logic (src/benchmarks/ActiveRequestsSort.test.tsx)
// compared two hand-copied stand-ins for speed, which proved nothing
// about this actual filter/sort.
export function filterAndSortActiveRequests({
  requests,
  ignoredIds,
  notificationPreferences,
  currentUserId,
  getButtonIdForLabel,
}: FilterAndSortActiveRequestsArgs): Request[] {
  const ignoredSet = new Set(ignoredIds);
  const prefsSet = new Set(notificationPreferences);

  return requests
    .filter((r) => {
      // Only show pending requests.
      if (r.status !== 'pending') return false;

      // Always show the requester's own pending requests, regardless
      // of their notification preferences — otherwise a bartender's
      // own SECURITY/MANAGER tap (not in their default prefs) never
      // appears in their own footer: no confirmation it sent, no way
      // to cancel a mis-tap.
      if (currentUserId && r.requesterId === currentUserId) return true;

      const btnId = getButtonIdForLabel(r.label);

      // Special Logic: ALWAYS show BREAK requests. Exact match only
      // (not a substring check) — free text containing "BREAK" (e.g.
      // "BREAKAGE AT WELL 3") shouldn't bypass everyone's preferences.
      if (btnId === 'break') return true;

      // If we can't identify the button type, show it by default (safety).
      if (!btnId) return true;

      // Otherwise, check if the user has subscribed to this notification type.
      return prefsSet.has(btnId);
    })
    .sort((a, b) => {
      // Sort Logic: Ignored requests go to the bottom.
      const aIgnored = ignoredSet.has(a.id);
      const bIgnored = ignoredSet.has(b.id);
      if (aIgnored === bIgnored) return 0;
      return aIgnored ? 1 : -1;
    });
}
