import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useRequestActions } from '../hooks/useRequestActions';
import type { BarUser } from '../types';

// This file used to only benchmark pMap's concurrency in isolation
// (now covered by src/utils/async.test.ts) under a name that promised
// coverage of the actual ntfy dispatch behavior in useRequestActions
// but never imported it. These tests exercise the real hook instead.

vi.mock('../firebase', () => ({ db: {} }));

const addDocMock = vi.fn(() => Promise.resolve({ id: 'req1' }));
const updateDocMock = vi.fn(() => Promise.resolve());
const deleteDocMock = vi.fn(() => Promise.resolve());

vi.mock('firebase/firestore', async () => {
  const actual = await vi.importActual('firebase/firestore');
  return {
    ...actual,
    collection: vi.fn(() => ({})),
    doc: vi.fn(() => ({})),
    addDoc: (...args: unknown[]) => addDocMock(...args),
    updateDoc: (...args: unknown[]) => updateDocMock(...args),
    deleteDoc: (...args: unknown[]) => deleteDocMock(...args),
    serverTimestamp: vi.fn(() => 'server-timestamp'),
  };
});

const user = { uid: 'me' } as any;

function makeUser(overrides: Partial<BarUser> & { id: string }): BarUser {
  return {
    displayName: overrides.id,
    status: 'active',
    ntfyTopic: `topic-${overrides.id}`,
    notificationPreferences: [],
    ...overrides,
  };
}

describe('useRequestActions ntfy dispatch', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    addDocMock.mockClear();
    fetchMock = vi.fn(() => Promise.resolve({ ok: true }));
    global.fetch = fetchMock as any;
  });

  const setup = (allUsers: BarUser[], getButtonIdForLabel: (label: string) => string | undefined) =>
    renderHook(() =>
      useRequestActions({
        user,
        barId: 'bar1',
        displayName: 'Me',
        userRole: 'Staff',
        allUsers,
        getButtonIdForLabel,
      })
    ).result.current;

  it('only pages users subscribed to the resolved button id', async () => {
    const allUsers = [
      makeUser({ id: 'subscribed', notificationPreferences: ['ice'] }),
      makeUser({ id: 'unsubscribed', notificationPreferences: ['keg'] }),
    ];
    const { submitRequest } = setup(allUsers, () => 'ice');

    await submitRequest('ICE: Well 1');

    const topics = fetchMock.mock.calls.map((c) => c[0]);
    expect(topics).toContain('https://ntfy.sh/topic-subscribed');
    expect(topics).not.toContain('https://ntfy.sh/topic-unsubscribed');
  });

  it('excludes the requester from their own fanout', async () => {
    const allUsers = [
      makeUser({ id: 'me', notificationPreferences: ['ice'] }),
      makeUser({ id: 'other', notificationPreferences: ['ice'] }),
    ];
    const { submitRequest } = setup(allUsers, () => 'ice');

    await submitRequest('ICE: Well 1');

    const topics = fetchMock.mock.calls.map((c) => c[0]);
    expect(topics).not.toContain('https://ntfy.sh/topic-me');
    expect(topics).toContain('https://ntfy.sh/topic-other');
  });

  it('excludes off-clock users regardless of preferences', async () => {
    const allUsers = [
      makeUser({ id: 'offclock', status: 'off_clock', notificationPreferences: ['ice'] }),
    ];
    const { submitRequest } = setup(allUsers, () => 'ice');

    await submitRequest('ICE: Well 1');

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('pages everyone on a BREAK request, bypassing individual preferences', async () => {
    const allUsers = [
      makeUser({ id: 'a', notificationPreferences: [] }),
      makeUser({ id: 'b', notificationPreferences: ['ice'] }),
    ];
    const { submitRequest } = setup(allUsers, () => 'break');

    await submitRequest('BREAK');

    const topics = fetchMock.mock.calls.map((c) => c[0]);
    expect(topics).toContain('https://ntfy.sh/topic-a');
    expect(topics).toContain('https://ntfy.sh/topic-b');
  });

  it('pages everyone for a free-text request with no resolvable button id', async () => {
    // Matches the in-app "show to everyone" safety default for
    // requests activeRequests can't classify (App.tsx) — a custom
    // request should page the same set of people it's shown to, not
    // page nobody while appearing to everyone in-app.
    const allUsers = [
      makeUser({ id: 'a', notificationPreferences: [] }),
      makeUser({ id: 'b', notificationPreferences: ['ice'] }),
    ];
    const { submitRequest } = setup(allUsers, () => undefined);

    await submitRequest('Someone spilled a whole tray of glasses at the end of the bar');

    const topics = fetchMock.mock.calls.map((c) => c[0]);
    expect(topics).toContain('https://ntfy.sh/topic-a');
    expect(topics).toContain('https://ntfy.sh/topic-b');
  });

  it('does not fan out to a user with no ntfy topic', async () => {
    const allUsers = [
      makeUser({ id: 'no-topic', notificationPreferences: ['ice'], ntfyTopic: undefined }),
    ];
    const { submitRequest } = setup(allUsers, () => 'ice');

    await submitRequest('ICE: Well 1');

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('one failing topic does not prevent the others from being dispatched', async () => {
    const allUsers = [
      makeUser({ id: 'fails', notificationPreferences: ['ice'] }),
      makeUser({ id: 'succeeds', notificationPreferences: ['ice'] }),
    ];
    fetchMock.mockImplementation((url: string) =>
      url.includes('topic-fails') ? Promise.reject(new Error('network error')) : Promise.resolve({ ok: true })
    );
    const { submitRequest } = setup(allUsers, () => 'ice');

    await expect(submitRequest('ICE: Well 1')).resolves.toBeUndefined();

    const topics = fetchMock.mock.calls.map((c) => c[0]);
    expect(topics).toContain('https://ntfy.sh/topic-succeeds');
  });

  it('claimRequest rejects when the write is denied (already claimed by someone else)', async () => {
    updateDocMock.mockRejectedValueOnce(new Error('permission-denied'));
    const { claimRequest } = setup([], () => undefined);

    await expect(claimRequest('req1')).rejects.toThrow('permission-denied');
  });
});
