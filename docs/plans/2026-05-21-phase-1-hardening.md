# Phase 1 — Hardening Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Land the role model, signup gating, user-management UI, hardened Firestore rules, custom-claims stamping, 86'd rules enforcement, and the full optional ownership-claim waterfall — the foundation every later phase depends on.

**Architecture:** Roles (`Staff` / `Manager` / `Owner`) live in `bars/{barId}/users/{uid}.role` and are mirrored to Firebase Auth custom claims by a Cloud Function so Firestore rules can read them without recursive document reads. Multiple Owners per bar allowed; Owners are immune to role changes by anyone but themselves. A new `joinPolicy` field on each bar toggles open join vs. pending-approval. A new `UsersDialog` component replaces the misrouted "N Approvals" badge target. Ownership is optional and acquired through a five-step waterfall implemented as Cloud Functions: OSM-contact code → email-domain match → existing-Manager approval → 7-day dispute window → manual escalation.

**Tech Stack:** Existing — React 19, TypeScript, Vite, Vitest, Firebase Web SDK, Material Web Components, Tailwind. New for this phase — Firebase Cloud Functions (Node 20, TypeScript), `@firebase/rules-unit-testing`, `firebase-admin`, `firebase-functions`. External services for the claim waterfall: SendGrid (email) and Twilio Verify (SMS) — both configured via Cloud Function env vars with graceful no-op fallbacks when not configured.

**Reference design:** See `docs/plans/2026-05-21-feature-set-purr-design.md` for context and rationale.

---

## Section A — Infrastructure bootstrap

### Task A1: Initialize Firebase project files (firebase.json + .firebaserc)

**Files:**
- Create: `firebase.json`
- Create: `.firebaserc`

**Step 1: Create `firebase.json`**

```json
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "functions": [
    {
      "source": "functions",
      "codebase": "default",
      "runtime": "nodejs20",
      "ignore": ["node_modules", ".git", "*.local", "**/__tests__/**"]
    }
  ],
  "emulators": {
    "auth": { "port": 9099 },
    "functions": { "port": 5001 },
    "firestore": { "port": 8080 },
    "ui": { "enabled": true, "port": 4000 },
    "singleProjectMode": true
  }
}
```

**Step 2: Create `.firebaserc` — use the project ID already present in `.env`**

```json
{
  "projects": {
    "default": "<paste VITE_FIREBASE_PROJECT_ID value here>"
  }
}
```

**Step 3: Commit**

```bash
git add firebase.json .firebaserc
git commit -m "chore: initialize firebase project files"
```

### Task A2: Scaffold the `functions/` package

**Files:**
- Create: `functions/package.json`
- Create: `functions/tsconfig.json`
- Create: `functions/.gitignore`
- Create: `functions/src/index.ts`

**Step 1: Create `functions/package.json`**

```json
{
  "name": "barbacker-functions",
  "private": true,
  "main": "lib/index.js",
  "engines": { "node": "20" },
  "scripts": {
    "build": "tsc",
    "build:watch": "tsc --watch",
    "serve": "npm run build && firebase emulators:start --only functions",
    "deploy": "firebase deploy --only functions",
    "test": "vitest run"
  },
  "dependencies": {
    "firebase-admin": "^12.0.0",
    "firebase-functions": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "vitest": "^4.0.16",
    "@types/node": "^20.10.0"
  }
}
```

**Step 2: Create `functions/tsconfig.json`**

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2022",
    "moduleResolution": "node",
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "outDir": "lib",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

**Step 3: Create `functions/.gitignore`**

```
node_modules/
lib/
*.local
```

**Step 4: Create `functions/src/index.ts` (placeholder)**

```typescript
import * as admin from "firebase-admin";

admin.initializeApp();

export const ping = () => "ok";
```

**Step 5: Install + build**

Run: `cd functions && npm install && npm run build`
Expected: builds without errors, produces `functions/lib/index.js`.

**Step 6: Commit**

```bash
git add functions/
git commit -m "chore: scaffold cloud functions package"
```

### Task A3: Add rules-testing dev dependency to root

**Files:**
- Modify: `package.json` (devDependencies)

**Step 1: Install**

Run: `npm install --save-dev @firebase/rules-unit-testing@^4.0.0`
Expected: installs cleanly; `package.json` updated.

**Step 2: Add npm scripts**

Modify `package.json` `scripts`:

```json
"test:rules": "vitest run src/test/rules",
"emulators": "firebase emulators:start --only firestore,auth,functions"
```

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add @firebase/rules-unit-testing + emulator scripts"
```

---

## Section B — Type updates

### Task B1: Extend `Bar`, `BarUser`, and add new types

**Files:**
- Modify: `src/types.ts`

**Step 1: Add fields to `Bar`** (`src/types.ts:18`)

Add after `subscription?:`:

```typescript
// Join policy for new users. 'open' = auto-active. 'approval' = pending until Manager approves.
joinPolicy?: 'open' | 'approval';
```

**Step 2: Update `BarUser`** (`src/types.ts:110`)

Replace the `status` line with:

```typescript
status?: 'active' | 'off_clock' | 'pending' | 'rejected';
```

**Step 3: Add new type definitions** at end of file:

```typescript
// Define an invite for a specific email to join a bar at a specific role.
export interface BarInvite {
  id: string;
  email: string;            // normalized lowercase
  role: 'Staff' | 'Manager' | 'Owner';
  createdBy: string;        // uid
  createdByName: string;
  createdAt: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  consumed: boolean;
  consumedBy?: string;      // uid of the user who used it
  consumedAt?: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}

// Define an ownership-claim request and its waterfall state.
export interface OwnershipClaim {
  id: string;
  barId: string;
  claimantId: string;       // uid
  claimantEmail: string;
  claimantName: string;
  // Method that succeeded, if any.
  approvedVia?: 'osm_code' | 'domain_match' | 'manager_approval' | 'dispute_window' | 'manual';
  status: 'pending_code' | 'pending_manager' | 'pending_dispute' | 'pending_manual' | 'approved' | 'rejected' | 'expired';
  // OSM step.
  codeSentTo?: string;      // masked phone or email
  codeChannel?: 'email' | 'sms';
  codeHash?: string;        // bcrypt of the code; never store plaintext
  codeExpiresAt?: import('firebase/firestore').Timestamp;
  codeAttempts?: number;
  // Dispute step.
  disputeOpensAt?: import('firebase/firestore').Timestamp;
  disputeClosesAt?: import('firebase/firestore').Timestamp;
  disputedBy?: string[];    // uids
  createdAt: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
  updatedAt: import('firebase/firestore').FieldValue | import('firebase/firestore').Timestamp;
}
```

**Step 4: Commit**

```bash
git add src/types.ts
git commit -m "feat(types): add joinPolicy, BarInvite, OwnershipClaim"
```

---

## Section C — Custom-claims stamping function

### Task C1: TDD — onUserRoleChange Cloud Function

**Files:**
- Create: `functions/src/onUserRoleChange.ts`
- Create: `functions/src/__tests__/onUserRoleChange.test.ts`
- Modify: `functions/src/index.ts`

**Step 1: Write the failing test**

`functions/src/__tests__/onUserRoleChange.test.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from "vitest";

const setCustomUserClaims = vi.fn().mockResolvedValue(undefined);
vi.mock("firebase-admin", () => ({
  initializeApp: vi.fn(),
  auth: () => ({ setCustomUserClaims })
}));

import { computeClaimsForUser } from "../onUserRoleChange";

describe("computeClaimsForUser", () => {
  beforeEach(() => setCustomUserClaims.mockClear());

  it("aggregates roles across multiple bars", () => {
    const userDocs = [
      { barId: "bar_A", role: "Manager" },
      { barId: "bar_B", role: "Owner" },
      { barId: "bar_C", role: "Staff" }
    ];
    expect(computeClaimsForUser(userDocs)).toEqual({
      bars: { bar_A: "Manager", bar_B: "Owner", bar_C: "Staff" }
    });
  });

  it("returns empty object when user has no bars", () => {
    expect(computeClaimsForUser([])).toEqual({ bars: {} });
  });
});
```

**Step 2: Run — expect FAIL** ("Cannot find module '../onUserRoleChange'")

Run: `cd functions && npx vitest run src/__tests__/onUserRoleChange.test.ts`

**Step 3: Implement** `functions/src/onUserRoleChange.ts`:

```typescript
import * as admin from "firebase-admin";
import { onDocumentWritten } from "firebase-functions/v2/firestore";

type UserRoleDoc = { barId: string; role: string };

export function computeClaimsForUser(docs: UserRoleDoc[]): { bars: Record<string, string> } {
  const bars: Record<string, string> = {};
  for (const d of docs) bars[d.barId] = d.role;
  return { bars };
}

export const onUserRoleChange = onDocumentWritten(
  "bars/{barId}/users/{userId}",
  async (event) => {
    const userId = event.params.userId;
    const db = admin.firestore();

    // Aggregate this user's role across every bar.
    const snap = await db.collectionGroup("users")
      .where(admin.firestore.FieldPath.documentId(), "==", userId)
      .get();
    // collectionGroup query against doc id won't work — replace with a fan-out below.
    const docs: UserRoleDoc[] = [];
    snap.forEach((d) => {
      const parent = d.ref.parent.parent;
      if (parent && d.data().role) docs.push({ barId: parent.id, role: d.data().role });
    });

    const claims = computeClaimsForUser(docs);
    await admin.auth().setCustomUserClaims(userId, claims);
  }
);
```

**Note on the collectionGroup query:** the `documentId()` filter on a collectionGroup query is not actually supported. Replace the implementation with a fan-out using the `joinedBars` array stored on `users/{uid}` (already maintained by `confirmRole` in `App.tsx:1026`):

```typescript
const userDoc = await db.collection("users").doc(userId).get();
const joinedBars: string[] = userDoc.data()?.joinedBars ?? [];
const docs: UserRoleDoc[] = [];
await Promise.all(joinedBars.map(async (barId) => {
  const u = await db.doc(`bars/${barId}/users/${userId}`).get();
  if (u.exists && u.data()?.role) docs.push({ barId, role: u.data()!.role });
}));
```

**Step 4: Wire into `functions/src/index.ts`**

```typescript
import * as admin from "firebase-admin";
admin.initializeApp();

export { onUserRoleChange } from "./onUserRoleChange";
```

**Step 5: Run — expect PASS**

Run: `cd functions && npx vitest run src/__tests__/onUserRoleChange.test.ts`

**Step 6: Commit**

```bash
git add functions/src/onUserRoleChange.ts functions/src/__tests__/onUserRoleChange.test.ts functions/src/index.ts
git commit -m "feat(functions): stamp role claims on user role change"
```

---

## Section D — Firestore rules rewrite (TDD)

### Task D1: Rules test harness

**Files:**
- Create: `src/test/rules/helpers.ts`
- Create: `src/test/rules/sanity.test.ts`

**Step 1: Create helper** `src/test/rules/helpers.ts`:

```typescript
import {
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import * as fs from "node:fs";
import * as path from "node:path";

export async function getTestEnv(): Promise<RulesTestEnvironment> {
  return initializeTestEnvironment({
    projectId: "barbacker-test",
    firestore: {
      rules: fs.readFileSync(path.resolve(__dirname, "../../../firestore.rules"), "utf8"),
      host: "127.0.0.1",
      port: 8080,
    },
  });
}

export function authedAs(env: RulesTestEnvironment, uid: string, claims: object = {}) {
  return env.authenticatedContext(uid, claims).firestore();
}
```

**Step 2: Sanity test** `src/test/rules/sanity.test.ts`:

```typescript
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { doc, setDoc } from "firebase/firestore";
import { getTestEnv, authedAs } from "./helpers";

describe("rules sanity", () => {
  let env: Awaited<ReturnType<typeof getTestEnv>>;
  beforeAll(async () => { env = await getTestEnv(); });
  afterAll(async () => { await env.cleanup(); });

  it("unauthenticated user cannot read /users/anyone", async () => {
    const db = env.unauthenticatedContext().firestore();
    await assertFails(setDoc(doc(db, "users/anyone"), { foo: "bar" }));
  });
});
```

**Step 3: Run with emulators**

Run (in one terminal): `firebase emulators:start --only firestore`
Run (in another): `npm run test:rules`
Expected: PASS.

**Step 4: Commit**

```bash
git add src/test/rules/
git commit -m "test(rules): add rules-testing harness + sanity check"
```

### Task D2: TDD — bar read/write rules

**Files:**
- Create: `src/test/rules/bar.test.ts`
- Modify: `firestore.rules`

**Step 1: Write failing tests** `src/test/rules/bar.test.ts`:

```typescript
import { describe, it, expect, beforeAll, beforeEach, afterAll } from "vitest";
import { assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { getTestEnv, authedAs } from "./helpers";

describe("bar rules", () => {
  let env: Awaited<ReturnType<typeof getTestEnv>>;

  beforeAll(async () => { env = await getTestEnv(); });
  beforeEach(async () => {
    await env.clearFirestore();
    // Seed: bar_A with manager_alice (Manager), staff_bob (Staff).
    await env.withSecurityRulesDisabled(async (ctx) => {
      const db = ctx.firestore();
      await setDoc(doc(db, "bars/bar_A"), { name: "Bar A", joinPolicy: "open" });
      await setDoc(doc(db, "bars/bar_A/users/manager_alice"), { role: "Manager", status: "active" });
      await setDoc(doc(db, "bars/bar_A/users/staff_bob"), { role: "Staff", status: "active" });
    });
  });
  afterAll(async () => { await env.cleanup(); });

  it("Manager can read the bar doc", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertSucceeds(getDoc(doc(db, "bars/bar_A")));
  });

  it("Staff can read the bar doc", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertSucceeds(getDoc(doc(db, "bars/bar_A")));
  });

  it("non-member cannot read the bar doc", async () => {
    const db = authedAs(env, "outsider_carol", { bars: {} });
    await assertFails(getDoc(doc(db, "bars/bar_A")));
  });

  it("Manager can update operational fields", async () => {
    const db = authedAs(env, "manager_alice", { bars: { bar_A: "Manager" } });
    await assertSucceeds(updateDoc(doc(db, "bars/bar_A"), { wells: ["Well 1"] }));
  });

  it("Staff cannot update bar doc", async () => {
    const db = authedAs(env, "staff_bob", { bars: { bar_A: "Staff" } });
    await assertFails(updateDoc(doc(db, "bars/bar_A"), { wells: ["Well 1"] }));
  });
});
```

**Step 2: Run — expect failures** (current rules allow everything authenticated).

Run: `npm run test:rules -- bar.test`

**Step 3: Rewrite `firestore.rules`** (full file replacement):

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    function isAuthed() { return request.auth != null; }

    function roleIn(barId) {
      return isAuthed() && request.auth.token.bars[barId];
    }

    function isManagerPlus(barId) {
      return roleIn(barId) in ['Manager', 'Owner'];
    }

    function isOwner(barId) {
      return roleIn(barId) == 'Owner';
    }

    // Global /users/{userId}
    match /users/{userId} {
      allow read, write: if isAuthed() && request.auth.uid == userId;
    }

    match /bars/{barId} {
      allow read: if roleIn(barId) != null;
      allow create: if isAuthed();
      allow update: if isManagerPlus(barId);
      allow delete: if isOwner(barId);

      match /users/{userId} {
        // Self-write limited to safe operational fields.
        allow write: if isAuthed() && request.auth.uid == userId &&
          request.resource.data.diff(resource.data).affectedKeys()
            .hasOnly(['displayName', 'lastSeen', 'notificationPreferences', 'ntfyTopic', 'email']) ||
          // Self can set own status to off_clock only.
          (isAuthed() && request.auth.uid == userId &&
           request.resource.data.status == 'off_clock' &&
           resource.data.status != null);

        // Managers can promote pending → active, set role for non-Owners, kick non-Owners.
        allow update: if isManagerPlus(barId) &&
          resource.data.role != 'Owner';

        // Owners can do anything to any user (including other Owners only via self-relinquish).
        allow update: if isOwner(barId) &&
          (resource.data.role != 'Owner' || request.auth.uid == userId);

        allow read: if roleIn(barId) != null;
        // New user creating own pending/active record at join time.
        allow create: if isAuthed() && request.auth.uid == userId;
        allow delete: if isManagerPlus(barId) && resource.data.role != 'Owner';
      }

      match /tokens/{userId} {
        allow read, write: if isAuthed() && request.auth.uid == userId;
      }

      match /eightySixed/{entryId} {
        allow read: if (resource.data.visibility == 'public' && roleIn(barId) != null) ||
                       isManagerPlus(barId);
        allow create: if isManagerPlus(barId) &&
          (request.resource.data.visibility == 'public' ||
           (request.resource.data.visibility == 'private' &&
            request.auth.token.bars[barId] != null));
        allow delete: if isManagerPlus(barId);
        allow update: if false;
      }

      match /notices/{noticeId} {
        // Kept wide for Phase 1 — replaced in Phase 2 by chat.
        allow read, write: if roleIn(barId) != null;
      }

      match /invites/{inviteId} {
        allow read: if isManagerPlus(barId) ||
                       (isAuthed() && resource.data.email == request.auth.token.email);
        allow create: if isManagerPlus(barId);
        allow update: if isAuthed() && resource.data.email == request.auth.token.email &&
                        request.resource.data.diff(resource.data).affectedKeys()
                          .hasOnly(['consumed', 'consumedBy', 'consumedAt']);
        allow delete: if isManagerPlus(barId);
      }

      match /ownershipClaims/{claimId} {
        allow read: if isManagerPlus(barId) ||
                       (isAuthed() && resource.data.claimantId == request.auth.uid);
        // Writes go through Cloud Functions only.
        allow write: if false;
      }
    }

    match /requests/{requestId} {
      allow read: if isAuthed() && roleIn(resource.data.barId) != null;
      allow create: if isAuthed() && roleIn(request.resource.data.barId) != null &&
                      request.resource.data.requesterId == request.auth.uid;
      allow update, delete: if isAuthed() && (
        resource.data.requesterId == request.auth.uid ||
        isManagerPlus(resource.data.barId)
      );
    }
  }
}
```

**Step 4: Run — expect PASS**

Run: `npm run test:rules -- bar.test`

**Step 5: Commit**

```bash
git add firestore.rules src/test/rules/bar.test.ts
git commit -m "feat(rules): role-gated bar reads/writes"
```

### Task D3: TDD — user-subcollection role-change rules (Owner immunity)

**Files:**
- Create: `src/test/rules/userRoles.test.ts`

**Step 1: Write failing tests**

Critical paths to cover:
- Staff cannot change any role.
- Manager can promote Staff → Manager.
- Manager can demote Manager → Staff.
- Manager cannot touch an Owner's record.
- Owner can promote Manager → Owner.
- Owner can demote Manager → Staff.
- Owner cannot demote another Owner (only self can).
- Self can self-relinquish Owner → Manager.
- Self can change own `lastSeen` without role.

Write each as a separate `it()` block following the pattern in D2. Use `withSecurityRulesDisabled` to seed each scenario.

**Step 2: Run — expect FAIL on any incorrectly-permitted writes**

If a test fails because the rule allows something it shouldn't, refine `firestore.rules` and re-run.

**Step 3: Iterate on rules until all tests pass**

The rule for owner-immunity is subtle. Validate by hand that the existing rule from D2 handles every case; add additional sub-cases if not. The pattern:

```
// Anyone Manager+ can write to non-Owner records.
// Owners can write to any record but cannot demote other Owners.
// Self can always relinquish.
```

**Step 4: Commit**

```bash
git add src/test/rules/userRoles.test.ts firestore.rules
git commit -m "test(rules): owner immunity matrix"
```

### Task D4: TDD — 86'd visibility rules

**Files:**
- Create: `src/test/rules/eightySixed.test.ts`

**Step 1: Write failing tests**

Cover:
- Staff can read public entries.
- Staff cannot read private entries.
- Manager can read both.
- Staff cannot create any entry.
- Manager can create public entries.
- Manager can create private entries only if bar subscription claim is `premium`.
- Manager can delete entries.

For premium gating in the test, set `request.auth.token.subscription_bar_A = 'premium'` (see Section H for how the claims function will set this; for now, just stub the claim in the test).

**Step 2: Adjust the `match /eightySixed/{entryId}` rule** to check `request.auth.token.subscription[barId] == 'premium'` for private-create.

```
match /eightySixed/{entryId} {
  allow read: if (resource.data.visibility == 'public' && roleIn(barId) != null) ||
                 isManagerPlus(barId);
  allow create: if isManagerPlus(barId) &&
    (request.resource.data.visibility == 'public' ||
     (request.resource.data.visibility == 'private' &&
      request.auth.token.subscription[barId] == 'premium'));
  allow delete: if isManagerPlus(barId);
  allow update: if false;
}
```

**Step 3: Run — expect PASS**

**Step 4: Commit**

```bash
git add src/test/rules/eightySixed.test.ts firestore.rules
git commit -m "feat(rules): 86'd visibility + premium gate"
```

---

## Section E — `joinPolicy` + `confirmRole` honors it

### Task E1: TDD — `confirmRole` writes `pending` when joinPolicy is `approval`

**Files:**
- Modify: `src/App.tsx:1019` (`confirmRole`)
- Create: `src/test/JoinPolicy.test.tsx`

**Step 1: Write failing test** that mounts the app with a bar of `joinPolicy: 'approval'`, simulates role selection, and asserts the resulting `bars/{barId}/users/{uid}` doc has `status: 'pending'`. Use the existing test pattern in `src/test/App.test.tsx` for setup.

**Step 2: Run — expect FAIL** (current code hard-codes `'active'`).

**Step 3: Modify `confirmRole`** at `src/App.tsx:1019`:

Replace `const status = 'active';` with:

```typescript
// Read joinPolicy from the bar doc we already have in state.
const status: BarUser["status"] =
  bar?.joinPolicy === "approval" ? "pending" : "active";
```

Ensure `bar` is in scope; if not, fall back to a one-shot `getDoc` of the bar before deciding status.

**Step 4: Run — expect PASS**

**Step 5: Commit**

```bash
git add src/App.tsx src/test/JoinPolicy.test.tsx
git commit -m "feat: honor joinPolicy on user confirmRole"
```

### Task E2: Manager toggle for `joinPolicy` in BarManager

**Files:**
- Modify: `src/components/BarManager.tsx`
- Create: `src/components/BarManager.joinPolicy.test.tsx`

**Step 1: Write failing test** that mounts `BarManager` with a Manager user and asserts a toggle is present and toggles `joinPolicy`.

**Step 2: Add prop** `currentJoinPolicy` and `onJoinPolicyChange` to `BarManagerProps`; render a `md-switch` near the top of the dialog when `userRole === 'Owner' || userRole === 'Manager'` (pass `userRole` as a new prop).

**Step 3: Wire from `App.tsx`** at the BarManager invocation:

```typescript
<BarManager
  ...
  currentJoinPolicy={bar?.joinPolicy ?? 'open'}
  onJoinPolicyChange={async (next) => { await updateDoc(doc(db, 'bars', barId!), { joinPolicy: next }); }}
  userRole={userRole}
/>
```

**Step 4: Run — expect PASS**

**Step 5: Commit**

```bash
git add src/components/BarManager.tsx src/components/BarManager.joinPolicy.test.tsx src/App.tsx
git commit -m "feat(ui): join policy toggle in bar manager"
```

---

## Section F — `UsersDialog` (replaces broken "N Approvals" target)

### Task F1: Create `UsersDialog` skeleton with three tabs

**Files:**
- Create: `src/components/UsersDialog.tsx`
- Create: `src/components/UsersDialog.test.tsx`

**Step 1: Write a failing test** that mounts the dialog, asserts three tabs exist (`Active`, `Pending`, `Invites`), and asserts switching tabs renders the correct content.

**Step 2: Implement the skeleton.** Use `BarManager.tsx` as a structural reference. Tabs implemented as three buttons styling `data-active`, content area below switches by local state. Props:

```typescript
interface UsersDialogProps {
  open: boolean;
  onClose: () => void;
  barId: string;
  users: BarUser[];
  invites: BarInvite[];
  currentUserRole: 'Owner' | 'Manager' | 'Staff';
  currentUserId: string;
  onApprove: (uid: string) => Promise<void>;
  onReject: (uid: string) => Promise<void>;
  onChangeRole: (uid: string, role: 'Owner' | 'Manager' | 'Staff') => Promise<void>;
  onKick: (uid: string) => Promise<void>;
  onSendInvite: (email: string, role: 'Staff' | 'Manager' | 'Owner') => Promise<void>;
  onRevokeInvite: (inviteId: string) => Promise<void>;
}
```

**Step 3: Run — expect PASS**

**Step 4: Commit**

```bash
git add src/components/UsersDialog.tsx src/components/UsersDialog.test.tsx
git commit -m "feat(ui): UsersDialog skeleton with tabs"
```

### Task F2: Active tab — list users with role dropdown + kick

**Files:**
- Modify: `src/components/UsersDialog.tsx`
- Modify: `src/components/UsersDialog.test.tsx`

**Step 1: Write tests** asserting:
- Each active user renders with name + role.
- Owners render with a `verified` icon badge.
- Owner row's role dropdown and kick button are disabled for non-Owner viewers.
- Self row's "Step down" button appears for Owners viewing themselves.
- Clicking kick prompts confirmation, then calls `onKick(uid)`.

**Step 2: Implement.** Use `md-select`/native `<select>` for the role dropdown; gate options based on viewer's role + target's role.

**Step 3: Run — expect PASS**

**Step 4: Commit**

```bash
git add src/components/UsersDialog.tsx src/components/UsersDialog.test.tsx
git commit -m "feat(ui): active users tab"
```

### Task F3: Pending tab — approve / reject

**Files:**
- Modify: `src/components/UsersDialog.tsx`
- Modify: `src/components/UsersDialog.test.tsx`

**Step 1: Write tests** asserting:
- Pending users (`status === 'pending'`) render in this tab with name + role they requested.
- "Approve" button calls `onApprove(uid)`; "Reject" calls `onReject(uid)`.
- Visible only to Manager+.

**Step 2: Implement.**

**Step 3: Run — expect PASS**

**Step 4: Commit**

```bash
git add src/components/UsersDialog.tsx src/components/UsersDialog.test.tsx
git commit -m "feat(ui): pending users tab"
```

### Task F4: Invites tab — list + send invite

**Files:**
- Modify: `src/components/UsersDialog.tsx`
- Modify: `src/components/UsersDialog.test.tsx`

**Step 1: Write tests** asserting:
- Existing un-consumed invites render with email + role + creator + "Revoke."
- "Send invite" form (email field + role dropdown + Send button) calls `onSendInvite(email, role)`.
- Lowercase normalization on email before submit.
- Owner-role invites only selectable if current user is Owner.

**Step 2: Implement.**

**Step 3: Run — expect PASS**

**Step 4: Commit**

```bash
git add src/components/UsersDialog.tsx src/components/UsersDialog.test.tsx
git commit -m "feat(ui): invites tab"
```

### Task F5: Wire UsersDialog into App; rewire "N Approvals" badge

**Files:**
- Modify: `src/App.tsx`

**Step 1: Add state** `const [showUsersDialog, setShowUsersDialog] = useState(false);`

**Step 2: Add Firestore listener** for `bars/{barId}/invites` (mirrors the existing listener pattern around `App.tsx:582`):

```typescript
const unsubInvites = onSnapshot(
  query(collection(db, `bars/${barId}/invites`), where('consumed', '==', false)),
  (s) => setInvites(s.docs.map(d => ({ id: d.id, ...d.data() } as BarInvite)))
);
// add to cleanup return
```

**Step 3: Implement handler functions** (`approveUser`, `rejectUser`, `changeUserRole`, `kickUser`, `sendInvite`, `revokeInvite`) that wrap `updateDoc`/`deleteDoc` calls. `sendInvite` calls a callable Cloud Function (`createInvite`) defined later in Section G.

**Step 4: Render `UsersDialog`** in the dialogs block around `App.tsx:1400`:

```typescript
<UsersDialog
  open={showUsersDialog}
  onClose={() => setShowUsersDialog(false)}
  barId={barId!}
  users={allUsers}
  invites={invites}
  currentUserRole={userRole as any}
  currentUserId={user!.uid}
  onApprove={approveUser}
  onReject={rejectUser}
  onChangeRole={changeUserRole}
  onKick={kickUser}
  onSendInvite={sendInvite}
  onRevokeInvite={revokeInvite}
/>
```

**Step 5: Rewire the "N Approvals" badge** at `App.tsx:1820`. Change `onClick={() => setShowBarManager(true)}` to `onClick={() => setShowUsersDialog(true)}`.

**Step 6: Add a Users menu item** in the top-bar menu near `App.tsx:1591` for Manager+ to open `UsersDialog` directly.

**Step 7: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wire UsersDialog; rewire Approvals badge"
```

---

## Section G — Invites: callable Cloud Function + auto-consume

### Task G1: TDD — `createInvite` callable Cloud Function

**Files:**
- Create: `functions/src/createInvite.ts`
- Create: `functions/src/__tests__/createInvite.test.ts`
- Modify: `functions/src/index.ts`

**Step 1: Write failing test** asserting:
- Caller without Manager+ claim on the target bar gets `permission-denied`.
- Owner-role invite from a Manager caller gets `permission-denied`.
- Valid call writes a doc to `bars/{barId}/invites` with `email` normalized lowercase, `consumed: false`, the caller's name/uid, and a server timestamp.

**Step 2: Implement** `functions/src/createInvite.ts`:

```typescript
import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

export const createInvite = onCall<{ barId: string; email: string; role: "Staff" | "Manager" | "Owner" }>(
  async (req) => {
    const auth = req.auth;
    if (!auth) throw new HttpsError("unauthenticated", "Sign in required.");
    const { barId, email, role } = req.data;
    if (!barId || !email || !role) throw new HttpsError("invalid-argument", "Missing fields.");
    const callerRole = auth.token.bars?.[barId];
    if (callerRole !== "Manager" && callerRole !== "Owner") {
      throw new HttpsError("permission-denied", "Manager+ required.");
    }
    if (role === "Owner" && callerRole !== "Owner") {
      throw new HttpsError("permission-denied", "Only Owners can invite Owners.");
    }
    const db = admin.firestore();
    const userDoc = await db.doc(`bars/${barId}/users/${auth.uid}`).get();
    const createdByName = userDoc.data()?.displayName ?? "Unknown";
    await db.collection(`bars/${barId}/invites`).add({
      email: email.trim().toLowerCase(),
      role,
      createdBy: auth.uid,
      createdByName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      consumed: false,
    });
    return { ok: true };
  }
);
```

**Step 3: Export from `index.ts`**, run tests, expect PASS.

**Step 4: Commit**

```bash
git add functions/src/createInvite.ts functions/src/__tests__/createInvite.test.ts functions/src/index.ts
git commit -m "feat(functions): createInvite callable"
```

### Task G2: Auto-consume invites on sign-in

**Files:**
- Modify: `src/App.tsx` — auth sign-in effect

**Step 1: Find** the existing `onAuthStateChanged` block (search for `onAuthStateChanged` in `App.tsx`).

**Step 2: After sign-in**, query `collectionGroup('invites')` filtered by `email == user.email && consumed == false`. For each match, in a transaction:

- Mark invite `consumed: true`, `consumedBy: user.uid`, `consumedAt: serverTimestamp()`.
- Create `bars/{barId}/users/{user.uid}` with `role` from the invite and `status: 'active'`.

Add an index for the collectionGroup query: append to `firestore.indexes.json`:

```json
{
  "collectionGroup": "invites",
  "queryScope": "COLLECTION_GROUP",
  "fields": [
    { "fieldPath": "email", "order": "ASCENDING" },
    { "fieldPath": "consumed", "order": "ASCENDING" }
  ]
}
```

**Step 3: Manual test in emulator** — invite an email, sign in as that user, verify auto-join.

**Step 4: Commit**

```bash
git add src/App.tsx firestore.indexes.json
git commit -m "feat: auto-consume invites on sign-in"
```

### Task G3: Email delivery via SendGrid (with deep-link fallback)

**Files:**
- Create: `functions/src/sendInviteEmail.ts`
- Modify: `functions/src/createInvite.ts`

**Step 1: Add `@sendgrid/mail` to `functions/package.json` dependencies**, install.

**Step 2: Implement `sendInviteEmail.ts`:**

```typescript
import * as sgMail from "@sendgrid/mail";

export async function sendInviteEmail(args: { to: string; barName: string; role: string; inviteUrl: string }): Promise<{ sent: boolean; reason?: string }> {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) return { sent: false, reason: "no_api_key" };
  sgMail.setApiKey(key);
  await sgMail.send({
    to: args.to,
    from: process.env.INVITE_FROM_EMAIL ?? "no-reply@barbacker.app",
    subject: `You're invited to ${args.barName}`,
    text: `Join ${args.barName} as a ${args.role}: ${args.inviteUrl}`,
  });
  return { sent: true };
}
```

**Step 3: Call it from `createInvite`** after the doc write; return `{ ok: true, emailSent }` so the UI can show a "copy link manually" prompt when SendGrid isn't configured.

**Step 4: Commit**

```bash
git add functions/src/sendInviteEmail.ts functions/src/createInvite.ts functions/package.json functions/package-lock.json
git commit -m "feat(functions): send invite emails via SendGrid"
```

---

## Section H — Subscription claim stamping

### Task H1: Subscription field reflected in custom claims

**Files:**
- Modify: `functions/src/onUserRoleChange.ts` (rename or supplement) OR
- Create: `functions/src/onBarSubscriptionChange.ts`

**Step 1: Create `onBarSubscriptionChange`**, triggered on `bars/{barId}` document writes when `subscription` field changes. For every user in `bars/{barId}/users`, refresh their claims to include `subscription[barId]`.

**Step 2: Update `computeClaimsForUser`** to take `subscriptions: Record<string, string>` and emit `{ bars, subscription }`.

**Step 3: Write tests covering: subscription change cascades to all bar members.**

**Step 4: Commit**

```bash
git add functions/src/onBarSubscriptionChange.ts functions/src/__tests__/onBarSubscriptionChange.test.ts functions/src/index.ts
git commit -m "feat(functions): stamp subscription claims on bar change"
```

---

## Section I — Ownership claim waterfall

### Task I1: `OwnershipClaim` Firestore data model + UI entrypoint

**Files:**
- Modify: `src/components/UsersDialog.tsx` — add "Claim Owner" button visible to non-Owners.
- Modify: `src/App.tsx` — open new `ClaimOwnerDialog` when clicked.
- Create: `src/components/ClaimOwnerDialog.tsx`

**Step 1: Implement `ClaimOwnerDialog`** with stepper UI:

1. Confirmation: "You're requesting Owner of {barName}. We'll try to verify automatically before involving a human."
2. Outcome screen based on Cloud Function response.

**Step 2: Wire** to a callable `initiateOwnershipClaim` Function (created next task).

**Step 3: Commit**

```bash
git add src/components/ClaimOwnerDialog.tsx src/components/UsersDialog.tsx src/App.tsx
git commit -m "feat(ui): ownership claim entrypoint"
```

### Task I2: `initiateOwnershipClaim` Cloud Function — domain match + OSM lookup

**Files:**
- Create: `functions/src/initiateOwnershipClaim.ts`
- Create: `functions/src/osmLookup.ts`
- Create: `functions/src/__tests__/initiateOwnershipClaim.test.ts`

**Step 1: Implement `osmLookup.ts`** — given a bar's `osmId`, fetch `https://nominatim.openstreetmap.org/lookup?osm_ids=...&format=json&addressdetails=1&extratags=1`. Extract `phone`, `email`, `website` from `extratags`.

**Step 2: Implement `initiateOwnershipClaim`:**

Algorithm:
1. Validate caller is signed in and is a member of the bar.
2. Fetch bar doc + OSM extras.
3. **Domain match**: if `extratags.website` host equals the caller's email domain, immediately create an approved claim and a role-change to Owner. Return `{ outcome: 'approved', via: 'domain_match' }`.
4. **OSM code**: if `extratags.email` exists, generate a 6-digit code, bcrypt it, write a `pending_code` claim with `codeChannel: 'email'`, `codeExpiresAt: now+15min`, send the email via SendGrid. Return `{ outcome: 'code_sent', via: 'osm_code', channel: 'email', masked: maskEmail(extratags.email) }`.
5. **SMS fallback**: else if `extratags.phone` exists and `TWILIO_*` env vars are set, call Twilio Verify API. Same `pending_code` doc, `codeChannel: 'sms'`. Return `{ outcome: 'code_sent', via: 'osm_code', channel: 'sms', masked: maskPhone(extratags.phone) }`.
6. **Manager-approval fallback**: else if the bar has at least one Manager+, write a `pending_manager` claim and notify Managers via FCM. Return `{ outcome: 'pending_manager' }`.
7. **Dispute-window fallback**: else if `bars/{barId}/users` has fewer than 3 active users OR zero Managers, write a `pending_dispute` claim with `disputeClosesAt: now+7d` and post a pinned notice to the bar. Return `{ outcome: 'pending_dispute' }`.
8. **Manual escalation**: else write a `pending_manual` claim. Return `{ outcome: 'pending_manual' }`.

**Step 3: Write tests** for each branch using mocked OSM and SendGrid/Twilio clients.

**Step 4: Commit**

```bash
git add functions/src/initiateOwnershipClaim.ts functions/src/osmLookup.ts functions/src/__tests__/initiateOwnershipClaim.test.ts functions/src/index.ts
git commit -m "feat(functions): initiate ownership claim waterfall"
```

### Task I3: `verifyOwnershipCode` Cloud Function

**Files:**
- Create: `functions/src/verifyOwnershipCode.ts`
- Create: `functions/src/__tests__/verifyOwnershipCode.test.ts`

**Step 1: Implement.** Inputs: `{ claimId, code }`. Behavior:

- Load claim. Check status `pending_code`, `codeExpiresAt > now`, `codeAttempts < 5`.
- bcrypt-compare the code; on fail, increment `codeAttempts`.
- On success: mark claim `approved`, `approvedVia: 'osm_code'`, then promote the claimant to Owner by writing `bars/{barId}/users/{claimantId}.role = 'Owner'` (server-side bypasses rules via admin SDK).

**Step 2: Tests** for happy path, expired, max attempts, wrong code.

**Step 3: Commit**

```bash
git add functions/src/verifyOwnershipCode.ts functions/src/__tests__/verifyOwnershipCode.test.ts functions/src/index.ts
git commit -m "feat(functions): verify ownership code"
```

### Task I4: `approveOwnershipClaim` (Manager approval path)

**Files:**
- Create: `functions/src/approveOwnershipClaim.ts`
- Create: `functions/src/__tests__/approveOwnershipClaim.test.ts`
- Modify: `src/components/UsersDialog.tsx` — render pending Manager-approval claims in Pending tab.

**Step 1: Implement** the callable: only callable by Manager+ on the target bar. Sets claim `approved` with `approvedVia: 'manager_approval'`, promotes claimant to Owner.

**Step 2: Pending tab** renders both pending users AND pending Manager-route claims; "Approve" on a claim calls this function.

**Step 3: Tests + commit**

```bash
git add functions/src/approveOwnershipClaim.ts functions/src/__tests__/approveOwnershipClaim.test.ts src/components/UsersDialog.tsx functions/src/index.ts
git commit -m "feat(functions): manager-approved ownership claims"
```

### Task I5: Scheduled `closeExpiredClaims` Cloud Function

**Files:**
- Create: `functions/src/closeExpiredClaims.ts`
- Create: `functions/src/__tests__/closeExpiredClaims.test.ts`

**Step 1: Implement** scheduled Function (daily): query all `pending_dispute` claims where `disputeClosesAt < now`. If `disputedBy` is empty, approve with `approvedVia: 'dispute_window'`; else mark `rejected`.

Also: expire `pending_code` claims that passed `codeExpiresAt`.

**Step 2: Tests + commit**

```bash
git add functions/src/closeExpiredClaims.ts functions/src/__tests__/closeExpiredClaims.test.ts functions/src/index.ts
git commit -m "feat(functions): scheduled claim resolver"
```

### Task I6: Dispute UI + endpoint

**Files:**
- Create: `functions/src/disputeOwnershipClaim.ts`
- Modify: `src/App.tsx` — render an in-app banner when a claim is in `pending_dispute` for the user's bar.

**Step 1: Implement** the callable: any bar member can dispute a `pending_dispute` claim. Adds their uid to `disputedBy`, immediately marks the claim `rejected`.

**Step 2: Banner UI** in the marquee bar at `App.tsx:1632` (the existing notice marquee — still wired for Phase 1; replaced in Phase 2 but Phase 1 ships first). Banner copy: "{claimantName} is requesting Owner of this bar. Tap to dispute if you don't recognize them."

**Step 3: Tests + commit**

```bash
git add functions/src/disputeOwnershipClaim.ts src/App.tsx functions/src/index.ts
git commit -m "feat: ownership claim dispute UI + endpoint"
```

### Task I7: Manual-escalation backstop

**Files:**
- Modify: `src/components/ClaimOwnerDialog.tsx` — render the "submit a manual review request" copy + button when the initiate call returns `pending_manual`.
- Modify: `functions/src/initiateOwnershipClaim.ts` — when `pending_manual`, send an email to `ADMIN_REVIEW_EMAIL` env var via SendGrid summarizing the claim.

**Step 1: Implement, test, commit**

```bash
git add src/components/ClaimOwnerDialog.tsx functions/src/initiateOwnershipClaim.ts
git commit -m "feat: manual claim escalation backstop"
```

### Task I8: Owner-self-relinquish

**Files:**
- Modify: `src/components/UsersDialog.tsx` — Owner viewing own row sees a "Step down as Owner" button.
- Modify: `src/App.tsx` — handler writes `role: 'Manager'` on own user doc (rules allow self-write here).

**Step 1: Confirm + commit**

```bash
git add src/components/UsersDialog.tsx src/App.tsx
git commit -m "feat: owner self-relinquish"
```

---

## Section J — Verification

### Task J1: Full emulator end-to-end smoke

**Step 1: Start emulators.**

Run: `firebase emulators:start`

**Step 2: Walk through the golden paths** in a browser:

- Owner-less bar: Manager toggles `joinPolicy → approval`. Second user joins → pending. Manager approves → active.
- Manager invites third user by email; third user signs in with that email → auto-active.
- Manager-promoted to Manager kicks another Manager → succeeds.
- Owner claim via OSM email code (test bar must have `osmId` with email contact); confirm code → claimant becomes Owner.
- Manager attempts to demote Owner → rules reject.
- Owner steps down → rules allow.
- 86'd: Staff creates entry → rejected. Manager creates public entry → succeeds. Manager creates private entry (free bar) → rejected. Set bar subscription to premium → manager creates private entry → succeeds. Staff queries private entries → empty.

**Step 3: Document any defects** in a follow-up `docs/plans/2026-05-21-phase-1-defects.md` and re-run failing tests.

### Task J2: Deploy to a Firebase project

**Step 1: Confirm `.firebaserc` has the right project ID.**

**Step 2: Deploy rules + functions**

Run: `firebase deploy --only firestore:rules,firestore:indexes,functions`

**Step 3: Smoke-test the deployed app** (same golden paths as J1).

**Step 4: Commit any post-deploy fixes; final tag.**

```bash
git tag -a phase-1-hardening -m "Phase 1: hardening complete"
git push --tags
```

---

## Notes for the executor

- **TDD strictly** for Cloud Functions and rules — they're the highest-risk surface and the most expensive to debug after the fact.
- **Don't skip the rules tests in D2/D3/D4.** Owner immunity in particular has 9+ permutations that are very easy to break with a one-character edit.
- **Use the Firestore emulator** for all rule and Function tests. Do not test against the live project.
- **SendGrid + Twilio are optional.** Both have free dev tiers; if you don't configure them, the related branches return `outcome: 'pending_manual'` immediately. That's acceptable for early dev.
- **Don't write the manual-review back-office UI yet.** The Firebase console + a Firestore query is enough for the rare cases that hit it.
- **The Phase 2 chat work assumes** rules already enforce `roleIn(barId)`, so don't postpone Section D.
- **Reference design:** `docs/plans/2026-05-21-feature-set-purr-design.md`.
