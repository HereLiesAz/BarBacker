# Component Guide

The application is structured as a tree of React function components, with shared logic pulled out into custom hooks (`src/hooks/`) rather than a global state store — see [ARCHITECTURE.md](ARCHITECTURE.md).

## Core Components

### `App.tsx`
The root component, and by far the largest file in the client. Handles:
*   Authentication state monitoring (via `useAuth`).
*   Routing (the `?bar=` query param, `justCreatedBar` new-bar-onboarding state).
*   Every top-level Firestore listener (bar doc, per-bar user doc, all-users roster, requests, 86'd list) — each resets the state it owns before its `!user || !barId` guard returns, so a sign-out or bar switch can't leave stale data rendered on a shared device.
*   Main dashboard layout, drag-and-drop button grid, and the dialogs that hang off it (BarManager, RoleSelector, NotificationSettings, WhoIsOnDialog, ChatPanel, EightySixDialog, CalendarView/CalendarSettings, POSSettings, BottleScanner, ThemeEditor).
*   Request submission/claim/unclaim logic (delegated to `useRequestActions`) and the button-config actions (`saveBrand`, `saveType`, `saveWell`, `hideButton`/`unhideButton`).

### `main.tsx`
The entry point: wraps `App` in `StrictMode`, `ErrorBoundary`, and `HashRouter` (hash-based routing so a static host like GitHub Pages doesn't need server-side rewrite rules for deep links).

## Dialogs and feature UI (`src/components/`)

*   **`MdDialog.tsx`** — a thin wrapper around `<md-dialog>` that every other dialog in this codebase uses instead of the raw custom element. Fixes a real React 19 bug: React binds a JSX `onClose` prop on a custom (hyphenated) element by listening for an event named literally `"Close"`, but Material's `md-dialog` dispatches lowercase `close` — so the prop silently never fired and a dialog closed by Escape/scrim-click got permanently stuck. Binds the real DOM event via a ref instead. **Note**: `MdDialog` always renders its children regardless of the `open` prop (only the `open` attribute toggles) — several components' tests query `getAllByText(...)[n]` for this reason when a confirm-sub-dialog's own button text would otherwise collide with the parent dialog's.
*   **`BarSearch.tsx`** — search for a bar via OpenStreetMap Nominatim + Firestore, or create a new (temporary) one. Debounced input; handles OSM's `(osm_id, osm_type)` compound identity correctly (osm_id alone isn't unique) and keeps stale results from a slow/failed request off-screen.
*   **`RoleSelector.tsx`** — first-time-in-this-bar screen: pick a display name and job title. The security-relevant `role` (Staff/Manager/Owner) is computed in `App.tsx`'s `confirmRole`, never taken from anything client-selectable here.
*   **`BarManager.tsx`** — Manager+ dialog for hiding/restoring pager buttons and sending invites. Remove/restore controls are gated on `isManagerPlus` in the UI to match what `firestore.rules` actually enforces server-side (a non-Manager could otherwise see live but always-failing controls).
*   **`NotificationSettings.tsx`** — toggle which request types trigger alerts, and (for iOS) the `ntfy.sh` subscription link.
*   **`WhoIsOnDialog.tsx`** — roster of who's clocked in, off clock, and (Manager+) pending approval or a filed ownership claim, with approve/reject actions.
*   **`ChatPanel.tsx`** — full-screen chat sheet. Any bar member posts; Manager+ can pin (drives the dashboard marquee) and delete anyone's message; everyone can delete their own, behind a confirm dialog.
*   **`EightySixDialog.tsx`** — the 86'd list. Manager+ can add/remove entries (behind a confirm dialog); private entries (with a reason) are Manager+-only and premium-gated.
*   **`CalendarView.tsx`** — agenda-style (chronological list, not a grid) view of shifts/bookings/events. Manager+ can create/edit/delete local events; externally-synced (Google/iCal) events render read-only with a badge. Save failures surface inline instead of silently no-opping; delete requires confirmation.
*   **`CalendarSettings.tsx`** — connect/disconnect Google Calendar, manage inbound iCal subscriptions, and view/copy this bar's outbound iCal feed URL.
*   **`POSSettings.tsx`** — connect/disconnect a POS provider (Square via OAuth, Toast via manually-entered partner credentials), trigger a menu sync, and view the synced menu. Only `square`/`toast` are actually wired up (`POS_PROVIDER_STATUS` in `src/constants.ts`); the rest of the provider list renders disabled as "Coming soon".
*   **`BottleScanner.tsx`** — camera capture + on-device OCR (`utils/bottleRecognition.ts`, via `tesseract.js`) to recognize a bottle label against the bar's own inventory plus the curated brand lists in `src/constants.ts`. Confirm/correct the recognized brand, then Add to Menu, 86 It (if already on the menu), or Send Alert (uploads the photo and files a normal request referencing it). Guards its async capture/OCR chain with a close-token ref so closing the dialog mid-recognition can't repopulate stale state on next open.
*   **`ThemeEditor.tsx`** — premium-only bar branding: primary/accent color pickers, logo upload (Storage), and a font picker.
*   **`InputDialog.tsx`** — generic text-entry dialog used for adding a brand/type/well, with a "this already exists, navigate to it instead" flow rather than a blocking error.
*   **`SortableButton.tsx`** — `@dnd-kit` wrapper making a dashboard button draggable/reorderable, including keyboard (`KeyboardSensor`) support.
*   **`ErrorBoundary.tsx`** — catches render errors, shows a "Something went wrong" screen with a "Copy Debug Info" button (see `src/utils/debug.ts`).

## Hooks (`src/hooks/`)

Most shared/async logic lives here rather than inline in `App.tsx`, one hook per concern:

*   **`useAuth.ts`** — tracks the current Firebase Auth user; exposes sign-in (Google popup, email/password), sign-up, sign-out, and a `loading` flag.
*   **`useGodMode.ts`** — resolves whether the current user has the `admin` custom claim (set via `scripts/set-admin-claim.js`), the same claim `firestore.rules`/`storage.rules` check for moderation bypass.
*   **`useMyBars.ts`** — the account-level list of joined bars (with names resolved), plus the account's global `ntfyTopic` (auto-generated on first login if missing).
*   **`useRequestActions.ts`** — `submitRequest`/`claimRequest`/`unclaimRequest`/`cancelRequest`. Firestore's single-document write serialization is what actually resolves a claim race between two people tapping the same request — no client transaction needed.
*   **`useChat.ts`** — chat messages (paginated scrollback + always-live pinned-messages/unread-badge listeners), `sendMessage`/`togglePin`/`deleteMessage`. `loadMore` guards against a bar switch mid-fetch via a ref-snapshotted identity check after its `await`.
*   **`useCalendar.ts`** — calendar events CRUD (local events only — externally-synced ones are read-only per `firestore.rules`).
*   **`usePOS.ts`** — POS connection status/menu listeners and the connect/disconnect/sync actions (thin wrappers over the callable Cloud Functions).
*   **`useBarTheme.ts`** — applies a premium bar's custom theme as CSS custom properties on `document.documentElement`. Uses `useLayoutEffect`, not `useEffect`, specifically to avoid a one-frame flash of the previous theme.
*   **`useDragAndDrop.ts`** — `@dnd-kit` sensors/handlers for the button grid, including `onDragCancel` (Escape mid-drag) alongside the more obvious `onDragEnd`.
*   **`useInactivityAutoSubmit.ts`** — auto-submits an "(Ask Me)" request if a sub-menu sits open too long with no input; `paused` while a dialog reachable from that sub-menu is open, so it doesn't fire out from under an active interaction.
*   **`useUsageBatching.ts`** — buffers per-button tap counts locally and flushes to `bars/{barId}.buttonUsage` every 10s (and on unmount/backgrounding) instead of one write per tap.
*   **`usePushNotifications.ts`** — wires up FCM (web/native) and native push listeners once per mount, device-scoped (not re-run on auth changes, which previously stacked duplicate handlers).
*   **`useNag.ts`** — plays a periodic alert sound while there's an unclaimed, un-ignored request.
*   **`usePwaInstallPrompt.ts`** — captures the browser's `beforeinstallprompt` event to drive a custom "Install App" button.
*   **`useLatestRelease.ts`** — fetches the latest GitHub release APK download URL (for the in-app "update available" flow on Android).

## Utilities (`src/utils/`)

*   **`bottleRecognition.ts`** — `recognizeBottleText` (tesseract.js OCR) and `matchBrand` (fuzzy-matches recognized text against a candidate brand list via exact/substring/edit-distance scoring, with a length-ratio guard so a short generic OCR fragment can't confidently misidentify an unrelated bottle).
*   **`color.ts`** — hex color parsing and contrast-ratio computation, used by `ThemeEditor` to keep custom brand colors legible.
*   **`async.ts`** — small async helpers (debounce/retry primitives) shared across `BarSearch` and elsewhere.
*   **`debug.ts`** — builds the diagnostic report `ErrorBoundary`'s "Copy Debug Info" button copies to the clipboard. Extend this when adding new critical infrastructure (env vars, storage requirements) — see [AGENTS.md](../AGENTS.md).

## Material Web Integration

Custom elements (declared in `src/vite-env.d.ts`) used throughout: `md-filled-button`, `md-outlined-button`, `md-text-button`, `md-filled-tonal-button`, `md-filled-text-field`, `md-icon`, `md-icon-button`, `md-dialog` (wrapped, see `MdDialog.tsx` above), `md-list`/`md-list-item`, `md-menu`/`md-menu-item`, `md-circular-progress`, `md-switch`, `md-checkbox`, `md-radio`. React interacts with these by setting props/attributes and handling standard events; each component file imports the specific element modules it uses to register them.

## State Management

*   **Local UI state**: `useState` (dialog open/close, form fields, search text).
*   **Shared data**: Firestore subscriptions. There is no Redux/Zustand/etc. — the `onSnapshot` listeners in `App.tsx` and the feature hooks above are the single source of truth; local state variables are just their latest delivered snapshot.
