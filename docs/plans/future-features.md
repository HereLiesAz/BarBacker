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

## Also already tracked, not yet built

The four-phase plan in `2026-05-21-feature-set-purr-design.md` has Phase 1
(hardening) effectively done as of the glee-audit rounds; Phases 2-4 are
still fully unbuilt and each independent enough to pick up on its own:

- **Phase 2** — real chat with pinned notices (replaces the 3-day rolling
  notices marquee).
- **Phase 3** — real POS integration (Square + Toast), OAuth + server-side
  API calls.
- **Phase 4** — two-way Google Calendar sync + inbound/outbound iCal.

And, per that doc, the customer-facing ordering PWA remains its own
separate brainstorm, not yet started.
