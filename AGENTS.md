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

*   **`src/components/`**: Place new reusable components here.
*   **`src/types.ts`**: All shared interfaces must be defined here.
*   **`src/constants.ts`**: hardcoded values like Roles and Default Buttons.

## Testing

*   **Framework**: Vitest + React Testing Library.
*   **Requirement**: All new features must have accompanying tests.
*   **Running**: `npm test` runs all tests.

## Firebase

*   Use the exported `db` and `auth` instances from `src/firebase.ts`.
*   Ensure security rules are considered when modifying data structures.

## Material Web

*   This project uses Material Web (Web Components).
*   Custom elements (e.g., `md-filled-button`) are declared in `src/vite-env.d.ts`.
*   When adding new Material Web components, ensure they are imported in `App.tsx` or the relevant file to register the custom element.
