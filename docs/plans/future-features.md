# Future Feature List

Ideas raised but not scoped or scheduled. Not a commitment, not a plan —
just a place to keep track so they don't get lost. Promote an entry to its
own `docs/plans/<date>-<name>.md` design doc when it's actually picked up.

## Compose Multiplatform rewrite

Rewrite the client (currently React 19 + Vite + Capacitor, covering
Android/iOS/web from one codebase) in Kotlin with Compose Multiplatform.

Main tradeoff: CMP's Android/desktop story is mature, but iOS and
web/Wasm support are comparatively young next to the current Capacitor +
Firebase JS SDK setup, and none of the existing UI code carries over —
it's a from-scratch client rewrite sitting on top of the same Firestore
backend and Cloud Functions. Worth revisiting if native performance/UI
becomes a real requirement, or if there's a language/tooling reason to
move off the web stack.

## Status of the four-phase plan

All four phases in `2026-05-21-feature-set-purr-design.md` have shipped:

- **Phase 1** (hardening) — done as of the glee-audit rounds.
- **Phase 2** (chat with pinned messages, replacing the old notices
  marquee) — done; see `ChatPanel.tsx`, `useChat.ts`.
- **Phase 3** (POS integration — Square + Toast, OAuth + server-side API
  calls) — done for Square and Toast; see `POSSettings.tsx`, `usePOS.ts`,
  `functions/src/pos/`. Several more providers are listed in the picker
  (`POS_PROVIDERS` in `src/constants.ts`) but render "Coming soon" —
  `functions/src/pos/stubs.ts` has the adapter scaffolding for wiring one
  up.
- **Phase 4** (two-way Google Calendar sync + inbound/outbound iCal) —
  done; see `CalendarView.tsx`, `CalendarSettings.tsx`, `useCalendar.ts`,
  `functions/src/calendar/`.

The subsequent multi-round adversarial audit pass (privilege-escalation
fixes, notification-fanout reliability, CI/CD hardening, UX gating
consistency, and BottleScanner-specific bugs) is also done.

Not yet started, per that doc: the customer-facing ordering PWA remains
its own separate brainstorm.

## Genuinely open items

- **POS providers beyond Square/Toast** — Clover, Lightspeed, SpotOn,
  TouchBistro, Revel, Lavu, Talech, Aloha are all listed but disabled.
  Picking one up is a matter of building its adapter against the
  `POSClient` interface (`functions/src/pos/types.ts`) and flipping its
  entry in `POS_PROVIDER_STATUS`.
- **Billing/subscription flow** — `bars/{barId}.subscription` gates
  every premium feature (theme, calendar, POS, bottle scanner, private
  86'd entries) but has no legitimate write path at all today; it's set
  manually. No payment integration exists.
- **iOS native build** — an `ios/` Capacitor project scaffold exists but
  isn't part of the CI pipeline (no `build-ios.yml` equivalent to
  `build-mobile.yml`) and hasn't been shipped anywhere.
