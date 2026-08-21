# Data Model

BarBacker uses **Cloud Firestore** (NoSQL documents) plus a small amount of **Firebase Storage** (photos/logos). This doc describes every collection, its fields, and who can read/write it. TypeScript types for most of these live in `src/types.ts` — treat that file as the source of truth for shape, and `firestore.rules`/`storage.rules` as the source of truth for access.

A note on the security model: server-side access is enforced by a per-bar **privilege role** (`'Staff' | 'Manager' | 'Owner'`), stamped as a custom claim on the user's Firebase Auth ID token by the `onUserRoleChange` Cloud Function and read by `firestore.rules`/`storage.rules` as `request.auth.token.bars[barId]`. This is distinct from a member's **job title** (`Bartender`, `Barback`, etc.), which is purely a UI/notification concern. See [ARCHITECTURE.md](ARCHITECTURE.md) for how the claim gets there and its staleness tradeoffs.

## Root collections

### `users/{uid}`
Global, self-only account document — not bar-scoped.

| Field | Type | Notes |
|---|---|---|
| `joinedBars` | `string[]` | Bar IDs this account has joined. Capped at 50 by `firestore.rules` (`onUserRoleChange` does an unbounded read per entry, so this doubles as a cost-amplification guard). |
| `ntfyTopic` | `string` | Auto-generated (`barbacker-<random>`) on first login by `useMyBars.ts`. The single source of truth for this account's iOS push topic — server-side fanout (`onRequestCreated`) reads it from here, never from a per-bar doc. |

Read/write: self only.

### `requests/{requestId}`
Top-level collection (not nested under a bar) so a device only ever needs one listener regardless of how many bars it's a member of; every doc carries its own `barId`.

| Field | Type | Notes |
|---|---|---|
| `barId` | `string` | Which bar this request belongs to. Immutable after create. |
| `label` | `string` | e.g. `"ICE: Well 1"`, `"BEER: Jameson"`, or free text for a custom/"(Ask Me)" request. 1–500 chars. |
| `requesterId` | `string` | Caller's uid — must match `request.auth.uid`. |
| `requesterName`, `requesterRole` | `string` | Snapshotted from the caller's own per-bar user doc at write time (not client-asserted — see security notes below). |
| `status` | `'pending' \| 'claimed'` | |
| `timestamp` | `Timestamp` | Must be the `serverTimestamp()` sentinel. |
| `lastNotification` | `Timestamp` | Used by the scheduled nag job to throttle re-notifies; must also be `serverTimestamp()` on create. |
| `buttonId` | `string?` | The top-level button id this request resolved to (e.g. `restock_beer`), if any. Drives notification-preference filtering server-side; absent for free-text requests, which notify everyone as a safety default. |
| `claimedBy`, `claimerName`, `claimedAt` | | Set on claim. |
| `photoUrl` | `string?` | Set by the bottle scanner's "Send Alert" action. Regex-constrained server-side to this bar's own `bottlePhotos` Storage path — see the security note in `firestore.rules` about why a bare type check wasn't enough. |

**Security**: create requires membership in the target bar and binds `requesterName`/`requesterRole` to the caller's real per-bar profile (can't be forged to impersonate someone else in the push/ntfy fanout). The only client-side updates are claim (`pending → claimed`) and unclaim (`claimed → pending`, claimer only) — Firestore's single-document write serialization is what actually prevents two people claiming the same request at once, no client transaction needed. Delete is allowed for the requester or Manager+.

## `bars/{barId}` (root)

| Field | Type | Notes |
|---|---|---|
| `name` | `string` | |
| `ownerId` | `string` | Set once at creation, immutable. Lets the bar's creator self-assign `Owner` on join since there's no existing Owner to promote them. |
| `status` | `'verified' \| 'temporary'` | |
| `type` | `'bar' \| 'restaurant'?` | |
| `address`, `city`, `state`, `zip`, `phone` | `string?` | |
| `osmId`, `osmType` | `string?` | OpenStreetMap identity — the *pair* is the unique key, not `osmId` alone. |
| `buttons` | `ButtonConfig[]?` | Custom buttons, merged with `DEFAULT_BUTTONS` client-side. |
| `beerInventory` | `Record<string, string[]>?` | Brand → types, e.g. `{"Jameson": ["Bottle"]}`. Also where bottle-scanner-recognized spirits get filed (see [COMPONENTS.md](COMPONENTS.md)#BottleScanner for the known "spirits labeled as beer" simplification). |
| `wells`, `hiddenButtonIds` | `string[]?` | |
| `buttonUsage` | `Record<string, number>?` | Tap counts, drives "most used" sort. Any bar member (not just Manager+) can bump this. |
| `customOrders` | `Record<string, string[]>?` | Custom sort order per nav context. |
| `subscription` | `'free' \| 'premium'?` | Gates theme, POS, calendar, private 86'd entries, bottle scanner. No billing flow exists yet — nothing writes this field at all today; it's set manually. |
| `joinPolicy` | `'open' \| 'approval'?` | Default `open`. `approval` requires a Manager to flip a joining member from `pending` to `active`. |
| `theme` | `BarTheme?` | `{ primaryColor, accentColor, logoUrl?, fontFamily? }` |

**Security**: readable by any signed-in user (bar search). Only Manager+ can update it, and `ownerId`/`subscription` are pinned immutable on every update regardless of role (ownership transfer only via `ownershipClaims`; subscription has no legitimate write path client-side at all).

### `bars/{barId}/users/{uid}`
Per-bar membership/profile.

| Field | Type | Notes |
|---|---|---|
| `role` | `'Staff' \| 'Manager' \| 'Owner'` | **Privilege tier** — what the custom claim mirrors. |
| `jobTitle` | `string?` | **Job function** — `Bartender`, `Barback`, `Server`, `Security`, `Runner`, or `Staff` (the fallback `onInviteConsumed` uses for an invited member with no title picked yet). Distinct field from `role`. |
| `displayName`, `email` | `string?` | |
| `status` | `'active' \| 'off_clock' \| 'pending' \| 'rejected'` | |
| `joinedAt`, `lastSeen` | `Timestamp` | |
| `notificationPreferences` | `string[]?` | List of button ids this member wants alerts for; defaults from `ROLE_NOTIFICATION_DEFAULTS[jobTitle]` (see `src/constants.ts`) if unset. |

**Security**: role is never client-writable except at self-create time, where it can only be `'Staff'` — or `'Owner'` if `bars/{barId}.ownerId` already equals the caller (i.e., they created the bar). `status` on create must match the bar's `joinPolicy` (`active` for `open`, `pending` for `approval`); the bar's own creator always gets `active` regardless. Self-write after that is limited to a handful of operational fields, and `status` can only toggle `active ↔ off_clock` on your own doc (can't self-approve out of `pending`/`rejected`). Promotions/approvals/kicks go through the Manager+ update branch (can't touch existing Owners or promote to Owner) or the Owner branch (can do anything to non-Owners, or relinquish their own role).

### `bars/{barId}/tokens/{uid}`
FCM push token. `{ token, updated }`. Strictly self read/write.

### `bars/{barId}/chat/{messageId}`
Team chat (Phase 2). Replaces the old `notices` bulletin board.

| Field | Type | Notes |
|---|---|---|
| `text` | `string` | Immutable once posted — `update` is scoped to only the pin fields below. |
| `authorId`, `authorName`, `authorRole` | | Snapshotted from the caller's own profile at post time, same anti-spoofing pattern as `requests`. |
| `timestamp` | `Timestamp` | Must be `serverTimestamp()`. |
| `pinned` | `boolean` | Pinned messages drive the dashboard marquee. Only Manager+ can pin. |
| `pinnedBy`, `pinnedAt` | | |

Any bar member can post and delete their own message; Manager+ can delete anyone's and pin/unpin.

### `bars/{barId}/eightySixed/{entryId}`
The 86'd list.

| Field | Type | Notes |
|---|---|---|
| `patronName` | `string` | |
| `submittedBy`, `submitterName` | | Bound to the caller, like chat's author fields. |
| `reason` | `string?` | Private entries only. |
| `visibility` | `'public' \| 'private'` | Public: any member with a role can read. Private: Manager+ only, and gated behind `subscription == 'premium'` (or admin) at create time. |
| `timestamp` | `Timestamp` | |

Only Manager+ can create/delete; no update path exists (entries are immutable once filed — delete and recreate instead).

### `bars/{barId}/invites/{inviteId}`
`{ email, role, createdBy, createdByName, createdAt, consumed, consumedBy?, consumedAt? }`. Manager+ creates; the invitee (matched by verified email) can read their own and consume it — a strict one-way `consumed: false → true` transition naming themselves as `consumedBy`. `onInviteConsumed` (Cloud Function) grants the invite's role on consumption.

### `bars/{barId}/ownershipClaims/{claimId}`
`{ barId, claimantId, claimantName, justification?, status: 'pending'|'approved'|'rejected', createdAt }`. Writes are Cloud-Function-only (`fileOwnershipClaim`, `reviewOwnershipClaim`); readable by Manager+ or the claimant themselves.

### POS integration (Phase 3)
*   `bars/{barId}/posConnection/{provider}` — `{ provider, connected, merchantId?, error?, connectedAt?, lastSyncedAt?, lastSyncedCount? }`. Status only, Manager+-readable, Cloud-Function-write-only.
*   `bars/{barId}/posSecrets/{provider}` — encrypted OAuth tokens. No client access at all, in either direction — split into its own collection specifically so a client read of `posConnection` can never leak a credential.
*   `bars/{barId}/menu/{itemId}` — `{ id, name, price (cents), category?, provider, syncedAt? }`, synced in by `posSyncMenu`. Readable by any bar member; write is Cloud-Function-only.
*   `posOAuthStates/{state}` (root) — ephemeral OAuth CSRF-state tokens for the Square connect flow. No client access; short-lived, deleted by `oauthCallback`.

### Calendar (Phase 4)
*   `bars/{barId}/events/{eventId}` — `{ title, start, end (ISO 8601), description?, type: 'shift'|'booking'|'event'|string, assignedTo? (uids), externalId?, externalProvider? ('google' | 'ical:<hash>'), lastSyncedAt?, deletedAt? }`. Manager+ can create/edit/delete **local** events only — anything with `externalProvider` set was written by a Cloud Function via the Admin SDK (Google inbound sync or an iCal poll) and is read-only client-side.
*   `bars/{barId}/calendarConnection/{provider}` / `calendarSecrets/{provider}` — same status/secret split as POS, same reasoning.
*   `bars/{barId}/icalFeed/{doc}` — the opaque token in this bar's outbound iCal feed URL. Manager+-readable; only `rotateICalFeedToken` writes it.
*   `bars/{barId}/icalSubscriptions/{subId}` — `{ url, createdBy, createdAt, lastPolledAt?, lastError? }`, an external `.ics` URL a Manager+ has subscribed the bar's calendar to. Client can create/delete; only the scheduled poller writes `lastPolledAt`/`lastError`.
*   `calendarOAuthStates/{state}` (root) — same pattern as `posOAuthStates`, for the Google Calendar connect flow.

## Firebase Storage

| Path | Who can write | Notes |
|---|---|---|
| `bars/{barId}/logo.<ext>` | Manager+ of that bar (or admin) | Bar branding. Readable by any signed-in user — logos aren't sensitive. Max 2MB, must be an image `contentType`. |
| `bottlePhotos/{barId}/{fileName}` | Any member of that bar | Uploaded by the bottle scanner's "Send Alert" action. Unlike the logo, **read** is also scoped to bar membership — this is per-bar content, not public branding, and the download URL never expires. Max 5MB. |

`contentType` checks above are a UX nicety, not a security boundary — Storage rules can't inspect actual file bytes, only the client-supplied header.

## Notification model

Both the server-side fanout (`onRequestCreated`) and the scheduled nag job (`scripts/nag-bot.js`) apply the same eligibility logic (`functions/src/notifyEligibility.ts` / its hand-kept JS mirror): a member is notified if they're `active`, not the requester, and either the request has no resolvable `buttonId` (free text — notify everyone as a safety default) or their `notificationPreferences` (falling back to `ROLE_NOTIFICATION_DEFAULTS[jobTitle]`, see `src/constants.ts`) includes it. `BREAK` requests always notify everyone regardless of preferences, matched by exact `buttonId`, not a label substring.
