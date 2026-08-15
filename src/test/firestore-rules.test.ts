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
  deleteField,
  collection,
  addDoc,
} from 'firebase/firestore';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PROJECT_ID = 'barbacker-rules-test';
const RULES_PATH = fileURLToPath(new URL('../../firestore.rules', import.meta.url));

let env: RulesTestEnvironment;

const ALICE = 'alice';
const BOB = 'bob';
const MANAGER = 'manager-uid';
const ADMIN = 'admin-uid';
const BAR_A = 'bar-a';
const BAR_B = 'bar-b';

// Helper: build claims for the role-based rule model.
const staffOf = (barId: string) => ({ bars: { [barId]: 'Staff' } });
const managerOf = (barId: string) => ({ bars: { [barId]: 'Manager' } });

// Seed: alice = Staff at bar-a, bob = Staff at bar-b, no crossover.
// Manager = Manager at bar-a. Admin user has the `admin: true`
// custom claim but no per-bar role.
async function seed() {
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, 'bars', BAR_A), { name: 'Alice Bar', status: 'verified' });
    await setDoc(doc(db, 'bars', BAR_B), { name: 'Bob Bar', status: 'verified' });
    await setDoc(doc(db, `bars/${BAR_A}/users`, ALICE),
      { displayName: 'Alice', role: 'Staff', status: 'active' });
    await setDoc(doc(db, `bars/${BAR_A}/users`, MANAGER),
      { displayName: 'M', role: 'Manager', status: 'active' });
    await setDoc(doc(db, `bars/${BAR_B}/users`, BOB),
      { displayName: 'Bob', role: 'Staff', status: 'active' });
    await setDoc(doc(db, 'users', ALICE), { joinedBars: [BAR_A] });
    await setDoc(doc(db, 'users', BOB), { joinedBars: [BAR_B] });
    await setDoc(doc(db, `bars/${BAR_A}/chat`, 'm1'),
      { text: 'hello', authorId: ALICE, authorName: 'Alice', authorRole: 'Staff', timestamp: new Date(), pinned: false });
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
      // The creator must name themselves as ownerId — this is what
      // lets their own upcoming bars/{id}/users/{uid} self-create
      // claim the 'Owner' role (see the userRoles.test.ts create-path
      // cases for that half of the flow).
      await assertSucceeds(setDoc(doc(db, 'bars', 'fresh-bar'),
        { name: 'New', status: 'temporary', ownerId: BOB }));
    });

    it('denies creating a bar with someone else named as ownerId', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(setDoc(doc(db, 'bars', 'fresh-bar-2'),
        { name: 'New', status: 'temporary', ownerId: ALICE }));
    });

    it('denies Staff from updating bar settings', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(updateDoc(doc(db, 'bars', BAR_A), { name: 'pwned' }));
    });

    it('allows a Manager to update their own bar', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(updateDoc(doc(db, 'bars', BAR_A), { name: 'renamed' }));
    });

    it('allows an admin to update any bar without role claims', async () => {
      const db = env.authenticatedContext(ADMIN, { admin: true }).firestore();
      await assertSucceeds(updateDoc(doc(db, 'bars', BAR_A), { name: 'admin renamed' }));
    });
  });

  describe('bars/{barId}/tokens/{userId}', () => {
    it('allows a user to read their own token', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(db, `bars/${BAR_A}/tokens`, ALICE)));
    });

    it('denies a different user reading another user token (no FCM hijack)', async () => {
      const db = env.authenticatedContext(BOB, staffOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(db, `bars/${BAR_A}/tokens`, ALICE)));
    });

    it('denies a different user writing another user token', async () => {
      const db = env.authenticatedContext(BOB, staffOf(BAR_A)).firestore();
      await assertFails(setDoc(doc(db, `bars/${BAR_A}/tokens`, ALICE),
        { token: 'attacker' }));
    });
  });

  describe('bars/{barId}/chat', () => {
    it('denies a user with no role from reading chat', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(getDoc(doc(db, `bars/${BAR_A}/chat`, 'm1')));
    });

    it('allows a user with a role to read chat', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(db, `bars/${BAR_A}/chat`, 'm1')));
    });

    it('rejects a create where authorId does not match auth.uid', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/chat`), {
        text: 'spoof', authorId: BOB, authorName: 'Bob', authorRole: 'Staff', timestamp: new Date(), pinned: false,
      }));
    });

    it('rejects a create where authorName does not match the caller\'s own bar-user doc', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/chat`), {
        text: 'spoof name', authorId: ALICE, authorName: 'Not Alice', authorRole: 'Staff', timestamp: new Date(), pinned: false,
      }));
    });

    it('rejects a create where authorRole does not match the caller\'s own bar-user doc', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/chat`), {
        text: 'spoof role', authorId: ALICE, authorName: 'Alice', authorRole: 'Manager', timestamp: new Date(), pinned: false,
      }));
    });

    it('accepts an unpinned create where authorId/authorName/authorRole all match', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(addDoc(collection(db, `bars/${BAR_A}/chat`), {
        text: 'hi', authorId: ALICE, authorName: 'Alice', authorRole: 'Staff', timestamp: new Date(), pinned: false,
      }));
    });

    it('rejects Staff creating a pre-pinned message', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/chat`), {
        text: 'pin me', authorId: ALICE, authorName: 'Alice', authorRole: 'Staff', timestamp: new Date(), pinned: true,
      }));
    });

    it('allows Manager+ to create a pre-pinned message', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(addDoc(collection(db, `bars/${BAR_A}/chat`), {
        text: 'announcement', authorId: MANAGER, authorName: 'M', authorRole: 'Manager', timestamp: new Date(), pinned: true,
      }));
    });

    it('allows Manager+ to pin an existing message (update scoped to pin fields)', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(updateDoc(doc(db, `bars/${BAR_A}/chat`, 'm1'), {
        pinned: true, pinnedBy: MANAGER, pinnedAt: new Date(),
      }));
    });

    it('denies Staff from pinning a message', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(updateDoc(doc(db, `bars/${BAR_A}/chat`, 'm1'), {
        pinned: true, pinnedBy: ALICE, pinnedAt: new Date(),
      }));
    });

    it('denies a pin update that also changes the message text', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(updateDoc(doc(db, `bars/${BAR_A}/chat`, 'm1'), {
        pinned: true, pinnedBy: MANAGER, pinnedAt: new Date(), text: 'edited',
      }));
    });

    it('allows the author to delete their own message', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(deleteDoc(doc(db, `bars/${BAR_A}/chat`, 'm1')));
    });

    it('allows Manager+ to delete any message', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(deleteDoc(doc(db, `bars/${BAR_A}/chat`, 'm1')));
    });

    it('denies a non-author, non-Manager+ user from deleting a message', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/users`, BOB),
          { displayName: 'Bob', role: 'Staff', status: 'active' });
      });
      // Bob has a role at bar A (seeded above) but didn't author m1.
      const barAClaims = { bars: { [BAR_A]: 'Staff' } };
      const db = env.authenticatedContext(BOB, barAClaims).firestore();
      await assertFails(deleteDoc(doc(db, `bars/${BAR_A}/chat`, 'm1')));
    });
  });

  describe('bars/{barId}/posConnection, posSecrets, menu (Phase 3)', () => {
    beforeEach(async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/posConnection`, 'square'),
          { provider: 'square', connected: true, merchantId: 'merch-1' });
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/posSecrets`, 'square'),
          { accessToken: 'encrypted-blob' });
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/menu`, 'item-1'),
          { name: 'Well Whiskey', price: 800, provider: 'square' });
      });
    });

    it('allows Manager+ to read posConnection status', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(db, `bars/${BAR_A}/posConnection`, 'square')));
    });

    it('denies Staff from reading posConnection status', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(db, `bars/${BAR_A}/posConnection`, 'square')));
    });

    it('denies any client write to posConnection, even by Manager+', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(setDoc(doc(db, `bars/${BAR_A}/posConnection`, 'square'),
        { provider: 'square', connected: true, merchantId: 'attacker' }));
    });

    it('denies any client read or write of posSecrets, even by Manager+', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(db, `bars/${BAR_A}/posSecrets`, 'square')));
      await assertFails(setDoc(doc(db, `bars/${BAR_A}/posSecrets`, 'square'), { accessToken: 'stolen' }));
    });

    it('allows any bar member to read the synced menu', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(db, `bars/${BAR_A}/menu`, 'item-1')));
    });

    it('denies any client write to the menu, even by Manager+', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(setDoc(doc(db, `bars/${BAR_A}/menu`, 'item-1'),
        { name: 'Free Drinks', price: 0, provider: 'square' }));
    });

    it('denies any client access to posOAuthStates', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), 'posOAuthStates', 'state-1'), { barId: BAR_A, provider: 'square' });
      });
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(db, 'posOAuthStates', 'state-1')));
    });
  });

  describe('bars/{barId}/events, calendarConnection, calendarSecrets, icalFeed, icalSubscriptions (Phase 4)', () => {
    beforeEach(async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/events`, 'local-1'),
          { title: 'Staff Meeting', start: '2026-01-01T18:00:00.000Z', end: '2026-01-01T19:00:00.000Z', type: 'event' });
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/events`, 'external-1'),
          { title: 'Synced', start: '2026-01-02T18:00:00.000Z', end: '2026-01-02T19:00:00.000Z',
            type: 'event', externalId: 'g1', externalProvider: 'google' });
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/calendarConnection`, 'google'),
          { provider: 'google', connected: true, calendarId: 'cal-1' });
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/calendarSecrets`, 'google'),
          { accessToken: 'encrypted-blob' });
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/icalFeed`, 'config'), { token: 'feed-token' });
      });
    });

    it('allows any bar member to read events', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(db, `bars/${BAR_A}/events`, 'local-1')));
    });

    it('allows Manager+ to create a purely local event', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(addDoc(collection(db, `bars/${BAR_A}/events`), {
        title: 'New Event', start: '2026-01-03T18:00:00.000Z', end: '2026-01-03T19:00:00.000Z', type: 'event',
      }));
    });

    it('denies Staff from creating an event', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/events`), {
        title: 'New Event', start: '2026-01-03T18:00:00.000Z', end: '2026-01-03T19:00:00.000Z', type: 'event',
      }));
    });

    it('denies creating an event pre-marked as externally-owned', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/events`), {
        title: 'Spoofed', start: '2026-01-03T18:00:00.000Z', end: '2026-01-03T19:00:00.000Z',
        type: 'event', externalId: 'fake', externalProvider: 'google',
      }));
    });

    it('allows Manager+ to edit a local event', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(updateDoc(doc(db, `bars/${BAR_A}/events`, 'local-1'), { title: 'Renamed' }));
    });

    it('denies editing an externally-owned event, even by Manager+', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(updateDoc(doc(db, `bars/${BAR_A}/events`, 'external-1'), { title: 'Renamed' }));
    });

    it('denies deleting an externally-owned event, even by Manager+', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(deleteDoc(doc(db, `bars/${BAR_A}/events`, 'external-1')));
    });

    it('allows Manager+ to read calendarConnection status but denies Staff', async () => {
      const managerDb = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(managerDb, `bars/${BAR_A}/calendarConnection`, 'google')));
      const staffDb = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(staffDb, `bars/${BAR_A}/calendarConnection`, 'google')));
    });

    it('denies any client read or write of calendarSecrets, even by Manager+', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(db, `bars/${BAR_A}/calendarSecrets`, 'google')));
      await assertFails(setDoc(doc(db, `bars/${BAR_A}/calendarSecrets`, 'google'), { accessToken: 'stolen' }));
    });

    it('allows Manager+ to read the iCal feed config but denies Staff', async () => {
      const managerDb = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(managerDb, `bars/${BAR_A}/icalFeed`, 'config')));
      const staffDb = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(staffDb, `bars/${BAR_A}/icalFeed`, 'config')));
    });

    it('allows Manager+ to add an iCal subscription naming themselves as creator', async () => {
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(addDoc(collection(db, `bars/${BAR_A}/icalSubscriptions`), {
        url: 'https://example.com/cal.ics', createdBy: MANAGER, createdAt: new Date(),
      }));
    });

    it('denies Staff from adding an iCal subscription', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, `bars/${BAR_A}/icalSubscriptions`), {
        url: 'https://example.com/cal.ics', createdBy: ALICE, createdAt: new Date(),
      }));
    });

    it('denies any client update to an iCal subscription (poller-only fields)', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), `bars/${BAR_A}/icalSubscriptions`, 'sub-1'),
          { url: 'https://example.com/cal.ics', createdBy: MANAGER, createdAt: new Date() });
      });
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(updateDoc(doc(db, `bars/${BAR_A}/icalSubscriptions`, 'sub-1'), { lastError: 'hacked' }));
    });

    it('denies any client access to calendarOAuthStates', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), 'calendarOAuthStates', 'state-1'), { barId: BAR_A });
      });
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertFails(getDoc(doc(db, 'calendarOAuthStates', 'state-1')));
    });
  });

  describe('requests/{requestId}', () => {
    beforeEach(async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), 'requests', 'r-a'), {
          barId: BAR_A, label: 'ICE', requesterId: ALICE, status: 'pending', timestamp: new Date(),
        });
      });
    });

    it('denies a no-role user reading a request from another bar', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(getDoc(doc(db, 'requests', 'r-a')));
    });

    it('allows a user with a role to read a request in their bar', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(getDoc(doc(db, 'requests', 'r-a')));
    });

    it('rejects a create where requesterId does not match auth.uid', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(addDoc(collection(db, 'requests'), {
        barId: BAR_A, label: 'ICE', requesterId: BOB, status: 'pending', timestamp: new Date(),
      }));
    });

    it('rejects a create when the user has no role for the target bar', async () => {
      const db = env.authenticatedContext(BOB).firestore();
      await assertFails(addDoc(collection(db, 'requests'), {
        barId: BAR_A, label: 'ICE', requesterId: BOB, status: 'pending', timestamp: new Date(),
      }));
    });

    it('allows a requester to delete (cancel) their own request', async () => {
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertSucceeds(deleteDoc(doc(db, 'requests', 'r-a')));
    });

    it('lets the claimer release a claim back to pending (unclaim)', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), 'requests', 'r-a'), {
          barId: BAR_A, label: 'ICE', requesterId: ALICE, status: 'claimed',
          claimedBy: MANAGER, claimerName: 'M', timestamp: new Date(), claimedAt: new Date(),
        });
      });
      const db = env.authenticatedContext(MANAGER, managerOf(BAR_A)).firestore();
      await assertSucceeds(updateDoc(doc(db, 'requests', 'r-a'), {
        status: 'pending', claimedBy: deleteField(), claimerName: deleteField(), claimedAt: deleteField(),
      }));
    });

    it('denies unclaiming a request someone else is holding', async () => {
      await env.withSecurityRulesDisabled(async (ctx) => {
        await setDoc(doc(ctx.firestore(), 'requests', 'r-a'), {
          barId: BAR_A, label: 'ICE', requesterId: ALICE, status: 'claimed',
          claimedBy: MANAGER, claimerName: 'M', timestamp: new Date(), claimedAt: new Date(),
        });
      });
      // Alice has a role at bar A but never claimed this request.
      const db = env.authenticatedContext(ALICE, staffOf(BAR_A)).firestore();
      await assertFails(updateDoc(doc(db, 'requests', 'r-a'), {
        status: 'pending', claimedBy: deleteField(), claimerName: deleteField(), claimedAt: deleteField(),
      }));
    });

    it('allows an admin to read across bars', async () => {
      const db = env.authenticatedContext(ADMIN, { admin: true }).firestore();
      await assertSucceeds(getDoc(doc(db, 'requests', 'r-a')));
    });
  });
});
