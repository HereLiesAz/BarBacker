# Agent Guidelines

This document provides guidelines for AI agents working on the BarBacker codebase.

## Coding Standards

*   **TypeScript**: Strict mode is enabled. No `any` types unless absolutely necessary.
*   **Components**: Functional components with hooks.
*   **Styling**: Tailwind CSS for layout and utilities. Material Web for core UI components.
*   **State**: Use local state for UI, Firestore for shared data.
*   **Imports**: Do not minify imports. Keep them readable. If an import statement has multiple named imports (more than 3-4), break them into multiple lines. Preserve existing import structures.

## Debugging

*   **Automatic Diagnostics**: The application `ErrorBoundary` (`src/components/ErrorBoundary.tsx`) includes an automatic diagnostic tool (`src/utils/debug.ts`).
*   **Usage**: If users report runtime errors, ask them to copy the debug info using the button on the error screen.
*   **Extension**: When adding new critical infrastructure (e.g., new env vars, storage requirements), update `src/utils/debug.ts` to include them in the report.

## Project Structure

*   **`src/components/`**: Place new reusable components here. See [docs/COMPONENTS.md](docs/COMPONENTS.md) for the current inventory.
*   **`src/hooks/`**: Shared/async logic (Firestore listeners + the actions that write to them) belongs in a hook here, not inline in `App.tsx` — this is the established pattern for every feature area (chat, calendar, POS, drag-and-drop, push notifications, usage batching, ...). One hook per concern; see [docs/COMPONENTS.md](docs/COMPONENTS.md) for the current list.
*   **`src/types.ts`**: All shared interfaces must be defined here. This file is close to a literal schema doc — see [docs/DATA_MODEL.md](docs/DATA_MODEL.md), which is generated from it plus `firestore.rules`.
*   **`src/constants.ts`**: hardcoded values like job titles, default buttons, notification defaults, and the POS provider list.
*   **`functions/src/`**: the Cloud Functions backend — a separate TypeScript project/build from the client (own `package.json`, own `tsconfig`). Organized by trigger type at the top level, with `pos/` and `calendar/` subdirectories for those integrations and `shared/` for cross-cutting helpers (KMS encryption, authz). See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full function inventory.
*   **`scripts/`**: plain Node.js scripts for build-time codegen and scheduled maintenance jobs — distinct from `functions/`. See [docs/SCRIPTS.md](docs/SCRIPTS.md).

## Testing

*   **Client**: Vitest + React Testing Library (`npm test`). All new features must have accompanying tests.
*   **Cloud Functions**: Vitest, run from `functions/` (`cd functions && npm test`). Prefer testing pure exported helpers over the trigger wiring itself — mocking the Admin SDK/Firebase Functions SDK for a full trigger is usually not worth it; the pattern used throughout `functions/src/__tests__/` is to extract the interesting logic into a small exported function and test that directly.
*   **Firestore/Storage security rules**: `npm run test:rules` (spins up the Firebase emulator, requires `firebase-tools`; also runs in CI via `rules-tests.yml`). Every rules change should come with both a positive test (the intended write still succeeds) and a negative one (the specific thing being closed off is actually rejected) — see `src/test/rules/` for the existing convention, especially `privilegeEscalation.test.ts` for the style of "one test per closed exploit."

## Firebase

*   Use the exported `db`, `auth`, and `storage` instances from `src/firebase.ts`.
*   Any new Firestore/Storage field, collection, or write path needs a corresponding `firestore.rules`/`storage.rules` change — the rules are the actual security boundary, not client-side checks. Never assume a field is safe just because the UI doesn't expose a way to set it maliciously.
*   Role (`Staff`/`Manager`/`Owner`, the privilege tier) and job title (`Bartender`/`Barback`/etc., cosmetic/notification routing) are separate fields — don't conflate them. See [docs/DATA_MODEL.md](docs/DATA_MODEL.md).
*   When adding a listener (`onSnapshot`) that depends on `user`/`barId`, reset every piece of state that effect owns *before* an early-return guard, not just skip the subscribe — otherwise a sign-out or bar switch leaves stale data rendered on a shared device. This is the single most common class of bug found in this codebase's audit history.

## Material Web

*   This project uses Material Web (Web Components).
*   Custom elements (e.g., `md-filled-button`) are declared in `src/vite-env.d.ts`.
*   When adding new Material Web components, ensure they are imported in `App.tsx` or the relevant file to register the custom element.
