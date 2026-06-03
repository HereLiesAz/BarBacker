# Feature Set Hardening + Build-Out — Design

**Date:** 2026-05-21
**Scope:** Staff-side feature set only. Customer-facing ordering PWA deferred to a separate brainstorm.

## Background

An audit found that of eleven advertised features, most are unimplemented stubs, broken, or have security holes:

- Role/admin management exists as strings but has no UI for promote/demote/kick.
- Signup restriction is a `console.log` stub.
- The "Approvals" badge in the dashboard opens the wrong dialog; the pending-approval flow is unreachable because `confirmRole` hard-codes `status: 'active'`.
- 86'd list is functionally correct on the client but Firestore rules let any authenticated user read private entries.
- Notices are 3-day rolling, not persistent, with no role gate in rules.
- POS integration is ten mock adapters, none wired into the app.
- Calendar is `console.log("Calendar Synced")`.
- Custom theming is the one feature that works.

This design fixes the staff side in four sequential phases.

## Phase 1 — Hardening: rules, roles, signup, 86'd, user management

### Role model

Three roles per bar. Stored on `bars/{barId}/users/{uid}.role`. Mirrored into Firebase Auth custom claims via Cloud Function on role change so Firestore rules can read role without a recursive document fetch.

- **Staff** — post requests, post non-pinned chat, view public 86'd, set own prefs.
- **Manager** — full operational admin. Approve/reject users, manage 86'd (public + private if premium), pin notices, configure POS, configure calendar, edit theme, manage subscription/billing. Can change roles of Staff and other Managers. Cannot touch Owners.
- **Owner** — same powers as Manager, plus immunity from role changes by anyone but themselves. The Owner title is primarily a recognition badge; multiple Owners per bar are allowed and co-equal. An Owner can self-relinquish via "Step down as Owner."

Bars with no Owner are a first-class supported state. Managers run them. Many bars will never have a claimed Owner.

### Permission matrix

| Actor → Target  | Staff | Manager | Owner |
|-----------------|:-----:|:-------:|:-----:|
| Manager         |   ✅  |    ✅   |   ❌  |
| Owner           |   ✅  |    ✅   |   ❌  |

### Signup gating

New field `bars/{barId}.joinPolicy: 'open' | 'approval'` (default `'open'` to preserve current behavior). When `'approval'`, `confirmRole` writes `status: 'pending'` instead of `'active'`. The existing pending-approval screen at `App.tsx:1385` finally becomes reachable.

### Invites

`bars/{barId}/invites/{inviteId}` with `{email, role, createdBy, createdAt, consumed}`. On sign-in, the app checks for a matching un-consumed invite by email; if found, auto-creates an `active` user record at the invited role and marks the invite consumed. Cloud Function trigger sends email via existing mail provider; if none configured, surface a copy-able deep-link the inviter can share manually.

### Ownership claim flow

Hybrid waterfall, optional (bars don't need an Owner to function). All steps execute in a Cloud Function:

1. **OSM phone/email code** — if the bar's OSM record has a contact, send a 6-digit code there; claimant enters it; auto-approved.
2. **Domain-match auto-approval** — if OSM has a website and claimant's email domain matches, auto-approved.
3. **Manager-approval fallback** — claim posts to a queue any existing Manager can approve from the Users dialog.
4. **Dispute-window auto-approval** — if the bar has fewer than 3 active users or zero Managers, claim is posted to the bar's chat with a 7-day no-dispute window. Auto-approved if uncontested.
5. **Manual review escalation** — only if all four above fail AND claimant explicitly escalates. UI explicitly steers them back to fixing OSM data first: "We can't auto-verify you. Update your bar's contact info on OpenStreetMap and try again, or submit a manual review request that may take weeks." Manual queue is intentionally low-traffic.

Each claim runs independently; multiple successful claims produce multiple co-equal Owners.

### User-management UI

New `UsersDialog` component (mirrors `BarManager` shape). Three tabs: **Active**, **Pending**, **Invites**. Each row exposes role dropdown + actions appropriate to caller's role. The yellow "N Approvals" badge in the dashboard footer at `App.tsx:1820` rewires from `setShowBarManager` to `setShowUsersDialog`.

### 86'd hardening

Rules-side enforcement of visibility — current client-side filter is insufficient:

- `read` — allowed if `resource.data.visibility == 'public'` OR caller's role custom claim is in `['Manager','Owner']`.
- `create` — Manager+ only. `visibility: 'private'` additionally requires the bar's subscription claim to be `premium`.
- `delete` — Manager+ only.

### Firestore rules rewrite

Replace the wide-open rules at `firestore.rules:18-48`:

- `bars/{barId}` — read by any member; write only by Manager+ for operational fields; Owner-level for `joinPolicy` etc. Wait — no, in this model Manager has full operational powers including those fields. Owner gates only role-change-of-Manager. Restate: `bars/{barId}` writable by Manager+ for everything; the Owner gate lives on the `users` sub-collection role field.
- `users/{uid}` sub-collection — self can write `lastSeen`, `notificationPreferences`, `displayName`, `status: 'off_clock'`. Cannot write `role`, cannot promote self to `status: 'active'`. Role/status changes only by Manager+ (with Owner-immunity rule for target role == Owner).
- `notices` — to be removed in Phase 2 (replaced by chat).
- `requests`, `tokens` — keep current behavior, scope writes to caller's UID where appropriate.

### Bar deletion

Out of scope until requested. If an Owner exists, only an Owner can delete; otherwise it's a support request.

## Phase 2 — Real chat with pinned notices

### Surface

Full-screen sheet/dialog opened from a chat icon in the top toolbar. **Active-requests footer at `App.tsx:1814` is sacrosanct and remains untouched.** Unread badge on the icon when sheet is closed.

### Pinned-message glance bar

Pinned messages continue to render in the existing marquee bar at `App.tsx:1632`. The marquee just changes its source from the `notices` collection to `chat.where(pinned == true)`. That preserves the "persistent notice visible from the main dashboard" property without consuming any dashboard real estate.

### Data model

Single collection `bars/{barId}/chat/{messageId}` with:

```
{
  text: string,
  authorId: string,
  authorName: string,        // snapshot at write
  authorRole: string,        // snapshot at write
  timestamp: serverTimestamp,
  pinned: boolean,
  pinnedBy?: string,
  pinnedAt?: timestamp
}
```

Pagination via `limit(50)` + cursor for scrollback.

### Migration

One-shot Cloud Function copies existing `bars/{barId}/notices` docs into `chat` with `pinned: true`, preserves snapshot `authorName`, then `notices` listener and collection are dropped.

### Permissions

- `read` — any authenticated bar member.
- `create` — Staff+ for `pinned: false`; Manager+ for `pinned: true`. Server validates `authorId == auth.uid` and `authorName/authorRole` match caller's bar user doc.
- `update` — only `pinned`, `pinnedBy`, `pinnedAt` fields, by Manager+. Text is immutable (no edit in v1).
- `delete` — author can delete own; Manager+ can delete any.

### Notifications

Pinning fires an FCM push to all bar members. Regular chat messages do not push. Per-user "notify on every chat" preference deferred to follow-up.

### UI behavior

- Author name + role badge (Owner gets a visible badge), timestamp on each message.
- Pin/unpin button for Manager+ on hover or long-press.
- Delete: own messages always; any message for Manager+.
- Auto-scroll-to-bottom unless user has scrolled up.

### Out of scope (Phase 2)

Typing indicators, reactions, threading, attachments, DMs, message edit, search.

## Phase 3 — POS: Square + Toast (real), eight others stay stubbed

### Adapter inventory

Square and Toast get real OAuth + API implementations. The eight existing stubs (`Clover`, `Lightspeed`, `SpotOn`, `TouchBistro`, `Revel`, `Lavu`, `Talech`, `Aloha`) stay as scaffolding files conforming to the interface — useful for future implementations. UI honesty is enforced at the provider-picker level instead of deleting code.

### Tightened POSClient interface

Current shape at `types.ts:160` returns `Promise<any[]>` everywhere. Replace with concrete shapes — the intersection of what Square and Toast actually return now, to prevent abstraction leaks later:

```
interface POSClient {
  connect(creds): Promise<{ connected: boolean; merchantId: string; error?: string }>
  disconnect(): Promise<void>
  syncMenu(): Promise<MenuItem[]>           // { id, name, price, category?, modifiers?[] }
  getOrders(opts?: { since?: Date }): Promise<Order[]>
  getSales(start, end): Promise<SalesSummary>
}
```

### Provider-picker honesty

`POS_PROVIDER_STATUS` constant lists each adapter as `'available'` or `'coming_soon'`. The picker enables only `'available'` entries; the rest render with a disabled state and "Coming soon — not yet available" label. Flipping a stub to a real implementation is a one-line constant change.

### OAuth flow

1. Manager opens POS Settings dialog (gated by `isPremium && role ∈ {Manager, Owner}`).
2. Picks provider → app redirects to provider's OAuth consent URL with our `clientId` + bar-scoped `state`.
3. Provider redirects to Cloud Function callback `/oauth/{provider}/callback` with `code`.
4. Function exchanges `code` for tokens, **encrypts with KMS**, writes to `bars/{barId}/posConnection/{provider}`. Tokens never leave the server.
5. Scheduled Function rotates refresh tokens hourly for anything within 24h of expiry.

### Server-only API calls

All POS API calls happen in Cloud Functions. Three callable Functions: `posSyncMenu(barId)`, `posGetOrders(barId, since?)`, `posGetSales(barId, start, end)`. Each verifies caller's role from custom claims before doing anything. Browser never sees tokens.

### What Phase 3 ships

- POS Settings dialog (connect/disconnect, list status of each provider).
- Menu sync as a smoke test: synced menu lands in `bars/{barId}/menu/{itemId}`, shown in POS Settings as "✓ Connected — synced 47 items."
- Tiny "POS Insights" panel inside bar settings: last 7 days gross, today's count.

### Out of scope (Phase 3)

Webhooks (poll on demand instead), modifiers/variants beyond name+price, multi-location bars, refunds, voids, tip allocation, loyalty, real reporting dashboards, customer-facing menu consumption (Phase 5+).

### Provider config

- Square: `SQUARE_CLIENT_ID`, `SQUARE_CLIENT_SECRET` in Cloud Function env. Sandbox URL for dev.
- Toast: same pattern. Toast partner-app approval is slow — start that application early.

## Phase 4 — Calendar: two-way Google + iCal in/out

### Honest scope

"Two-way iCal" doesn't exist; iCal is a one-way file format. Phase 4 ships: **two-way Google Calendar** + **outbound iCal feed** (other apps subscribe) + **inbound iCal subscription** (we poll a URL the manager pastes). That covers Apple Calendar, Outlook, etc. without writing N adapters.

### Data model

`bars/{barId}/events/{eventId}`:

```
{
  title, start, end, description?,
  type,                    // 'shift' | 'booking' | 'event' | ...
  assignedTo?: [uid],      // for shifts
  externalId?: string,
  externalProvider?: string,  // 'google' | 'ical:<url-hash>' | future: 'asana', 'clickup', etc.
  lastSyncedAt?: timestamp,
  deletedAt?: timestamp
}
```

This shape is the future extension point: Asana, ClickUp, Trello and similar tools plug in as new `externalProvider` values with their own adapters and OAuth — no schema changes needed.

### Google two-way sync

- OAuth connect in Calendar Settings (KMS-encrypted server-side tokens, same pattern as POS).
- Manager picks **one** Google calendar to mirror — not "all calendars," too many ways to send the wrong invite.
- **Outbound:** Firestore trigger on `events` create/update/delete mirrors to Google via `externalId`. New events get Google ID written back.
- **Inbound:** subscribe to Google Calendar `watch` push notifications on connect (refresh weekly). On ping, fetch incremental changes via `events.list` + `syncToken`. Upsert.
- **Conflict resolution:** last-write-wins on `updatedAt`. Both-sides-changed logs to `bars/{barId}/syncConflicts/{id}` and surfaces a Calendar Settings banner. No auto-merge — bars want predictability.
- **Delete semantics:** delete in our app → delete in Google. Delete in Google → soft-delete here (sets `deletedAt`, recoverable for 30 days). Asymmetric on purpose.

### Outbound iCal feed

Cloud Function endpoint `/ical/{barId}/{token}.ics` serves a `.ics` of current events. `{token}` is a random opaque secret stored on the bar; Manager+ can rotate or revoke. Anyone with the URL gets read-only access — that's the iCal model.

### Inbound iCal subscription

Manager pastes an external `.ics` URL into Calendar Settings. Scheduled Function polls every 15 min, parses with `node-ical`, upserts events with `externalProvider: 'ical:<url-hash>'`. These events are read-only in our app (can't edit something you don't own). Removing the subscription removes all its events.

### UI surfaces

- **Calendar Settings dialog** — connect Google, manage iCal subscriptions, copy/rotate outbound feed URL, view conflicts.
- **Calendar view** — month/week/agenda, color-coded by `type`. Manager+ create/edit (non-external-owned); Staff read; Staff view own shifts.
- **Shift auto-clock-in** — if a user has an active `type: 'shift'` event with their UID in `assignedTo` when they sign in, status auto-promotes to `active`. Connects to the existing `confirmRole` flow at `App.tsx:1019`.

### Notifications

15-min-before reminders for upcoming shifts via existing FCM/ntfy plumbing. Per-user opt-out preference.

### Permissions

- Read — any member.
- Create/edit/delete — Manager+. Externally-owned events are read-only.
- Outbound feed token — Manager+ can rotate/revoke.

### Out of scope (Phase 4)

Recurring events with per-instance exceptions (v1 supports simple `RRULE-MONTHLY/WEEKLY/DAILY` with no overrides), invitee management, video-call links, multiple Google calendars per bar.

## Cross-cutting infrastructure

These get built in Phase 1 because everything else depends on them:

- **Cloud Functions environment** — currently the app is largely client-only. POS OAuth, Google Calendar sync, role-claim-stamping, invite emails, ownership-claim waterfall, iCal poller, etc. all need server-side execution. Standing up the Functions project, env-var management, and KMS key for token encryption is Phase 1 infrastructure work.
- **Firebase Auth custom claims** — role stamping so rules can read role without recursive fetches. Cloud Function on `users` doc role change updates claims.
- **Honest free-tier vs premium gating** — current `isPremium` derivation at `App.tsx:642` is fine; it just needs to be enforced in rules too (subscription tier on custom claims).

## Testing strategy

- **Firestore rules tests** — required for Phase 1. Every rule path (Staff-as-actor on Manager target, Manager-as-actor on Owner target, etc.) gets a unit test using `@firebase/rules-unit-testing`. Owner-immunity is the kind of thing that breaks silently in code review without these tests.
- **Cloud Function tests** — emulator-based integration tests for OAuth callback handling, claim waterfall step transitions, sync engines.
- **Component tests** — extend the existing Vitest setup for `UsersDialog`, `ChatPanel`, `POSSettings`, `CalendarSettings`.
- **Manual end-to-end** — for each phase, walk through the golden path in a real browser before declaring done. UI behavior is not verified by type-checking.

## Build sequence

1. Phase 1 (hardening) — rules, roles, signup, 86'd, user mgmt. **Ships before anything else** because everything else depends on the role model and Cloud Functions infrastructure it introduces.
2. Phase 2 (chat) — replaces the broken notices marquee.
3. Phase 3 (POS, Square + Toast).
4. Phase 4 (Google + iCal calendar).

Customer-facing ordering PWA (CMS, billing, tips, reports, pager-status) is its own brainstorm after Phase 4 lands.
