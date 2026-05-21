import { describe, it, beforeAll, afterAll, beforeEach, expect } from 'vitest';
import {
  initializeTestEnvironment,
  RulesTestEnvironment,
  assertSucceeds,
  assertFails,
} from '@firebase/rules-unit-testing';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
} from 'firebase/firestore';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PROJECT_ID = 'barbacker-rules-test';

// Resolve the rules file relative to this test via import.meta.url so
// it works under vitest's ESM mode in CI, where `__dirname` is not
// reliably defined for projects with type=module.
const RULES_PATH = fileURLToPath(new URL('../../firestore.rules', import.meta.url));

let env: RulesTestEnvironment;

const ALICE = 'alice';
const BOB = 'bob';
const ADMIN = 'admin-uid';
const BAR_A = 'bar-a';
const BAR_B = 'bar-b';

// Seed: alice is a member of bar-a, bob is a member of bar-b, no
// crossover. Admin user has the `admin: true` custom claim but is not a
// member of either bar.
async function seed() {
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, 'bars', BAR_A), { name: 'Alice Bar', status: 'verified' });
    await setDoc(doc(db, 'bars', BAR_B), { name: 'Bob Bar', status: 'verified' });
    await setDoc(doc(db, `bars/${BAR_A}/users`, ALICE), { displayName: 'Alice', role: 'Bartender', status: 'active' });
    await setDoc(doc(db, `bars/${BAR_B}/users`, BOB), { displayName: 'Bob', role: 'Bartender', status: 'active' });
    await setDoc(doc(db, 'users', ALICE), { joinedBars: [BAR_A] });
    await setDoc(doc(db, 'users', BOB), { joinedBars: [BAR_B] });
    await setDoc(doc(db, `bars/${BAR_A}/notices`, 'n1'), {
      text: 'hello', authorId: ALICE, authorName: 'Alice', timestamp: new Date(),
    });
    await setDoc(doc(db, `bars/${BAR_A}/tokens`, ALICE), { token: 'alice-token' });
  });
}

describe('Firestore security rules', () => {
  beforeAll(async () => {
    env = await initializeTestEnvironment({
      projectId: PROJECT_ID,
      firestore: {
        rules: readFileSync(RULES_PATH, 'utf8'),
        host: '127.0.0.1',
        port: 8080,
      },
    });
  });

  afterAll(async () => {
    await env?.cleanup();
  });

  beforeEach(async () => {
    await env.clearFirestore();
    await seed();
  });

  describe('global users/{uid}', () => {
    it('allows reading own doc', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertSucceeds(getDoc(doc(db, 'users', ALICE)));
    });

    it('denies reading another user doc', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(getDoc(doc(db, 'users', ALICE)));
    });
  });

  describe('bars/{barId}', () => {
    it('lets any signed-in user read a bar (search/join flow)', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertSucceeds(getDoc(doc(db, 'bars', BAR_A)));
    });

    it('lets a non-member create a new bar (claim flow)', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertSucceeds(setDoc(doc(db, 'bars', 'fresh-bar'), { name: 'New', status: 'temporary' }));
    });

    it('denies a non-member updating a bar', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(updateDoc(doc(db, 'bars', BAR_A), { name: 'pwned' }));
    });

    it('allows a member to update their own bar', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertSucceeds(updateDoc(doc(db, 'bars', BAR_A), { name: 'renamed' }));
    });

    it('allows an admin to update any bar without membership', async () => {
      const db = env.authenticatedContext(ADMIN, { admin: true }).firestore();
      await assertSucceeds(updateDoc(doc(db, 'bars', BAR_A), { name: 'admin renamed' }));
    });
  });

  describe('bars/{barId}/tokens/{userId}', () => {
    it('allows a user to read their own token', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertSucceeds(getDoc(doc(db, `bars/${BAR_A}/tokens`, ALICE)));
    });

    it('denies a different user reading another user token (no FCM hijack)', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(getDoc(doc(db, `bars/${BAR_A}/tokens`, ALICE)));
    });

    it('denies a different user writing another user token', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(setDoc(doc(db, `bars/${BAR_A}/tokens`, ALICE), { token: 'attacker' }));
    });
  });

  describe('bars/{barId}/notices', () => {
    it('denies a non-member reading notices', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(getDoc(doc(db, `bars/${BAR_A}/notices`, 'n1')));
    });

    it('allows a member to read notices', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertSucceeds(getDoc(doc(db, `bars/${BAR_A}/notices`, 'n1')));
    });

    it('rejects a notice create where authorId does not match auth.uid', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/notices`), {
        text: 'spoof', authorId: BOB, authorName: 'Bob', timestamp: new Date(),
      }));
    });

    it('accepts a notice create where authorId matches', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertSucceeds(addDoc(collection(db, `bars/${BAR_A}/notices`), {
        text: 'hi', authorId: ALICE, authorName: 'Alice', timestamp: new Date(),
      }));
    });
  });

  describe('requests/{requestId}', () => {
    beforeEach(async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        const db = ctx.firestore();
        await setDoc(doc(db, 'requests', 'r-a'), {
          barId: BAR_A, label: 'ICE', requesterId: ALICE, status: 'pending', timestamp: new Date(),
        });
      });
    });

    it('denies a non-member reading a request from another bar', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(getDoc(doc(db, 'requests', 'r-a')));
    });

    it('allows a member to read a request in their bar', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertSucceeds(getDoc(doc(db, 'requests', 'r-a')));
    });

    it('rejects a create where requesterId does not match auth.uid', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertFails(addDoc(collection(db, 'requests'), {
        barId: BAR_A, label: 'ICE', requesterId: BOB, status: 'pending', timestamp: new Date(),
      }));
    });

    it('rejects a create when the user is not a member of the target bar', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(addDoc(collection(db, 'requests'), {
        barId: BAR_A, label: 'ICE', requesterId: BOB, status: 'pending', timestamp: new Date(),
      }));
    });

    it('allows a requester to delete (cancel) their own request', async () => {
      const db = env.authenticatedContext(ALICE).firestore();
      await assertSucceeds(deleteDoc(doc(db, 'requests', 'r-a')));
    });

    it('allows an admin to read across bars', async () => {
      const db = env.authenticatedContext(ADMIN, { admin: true }).firestore();
      await assertSucceeds(getDoc(doc(db, 'requests', 'r-a')));
    });
  });
});
