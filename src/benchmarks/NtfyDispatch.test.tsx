import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useRequestActions } from '../hooks/useRequestActions';

// This file originally benchmarked pMap's concurrency in isolation,
// then (after a rewrite) exercised the client-side ntfy fanout that
// used to live in useRequestActions.ts. That fanout has since moved
// server-side into functions/src/onRequestCreated.ts (see
// functions/src/__tests__/notifyEligibility.test.ts for the
// who-gets-notified logic coverage) — this file now just verifies
// what submitRequest itself is actually responsible for: writing the
// request doc and vibrating, and nothing else. Moving delivery
// server-side is also what makes double-notifying impossible; a
// lingering client-side fetch loop here would be exactly that bug.

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
    deleteField: vi.fn(() => 'DELETE_FIELD_SENTINEL'),
    serverTimestamp: vi.fn(() => 'server-timestamp'),
  };
});

const user = { uid: 'me' } as any;

describe('useRequestActions', () => {
  let fetchMock: ReturnType<typeof vi.fn>;
  let vibrateMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    addDocMock.mockClear();
    updateDocMock.mockClear();
    fetchMock = vi.fn(() => Promise.resolve({ ok: true }));
    global.fetch = fetchMock as any;
    vibrateMock = vi.fn();
    Object.defineProperty(navigator, 'vibrate', { value: vibrateMock, configurable: true });
  });

  const setup = (getButtonIdForLabel: (label: string) => string | undefined = () => undefined) =>
    renderHook(() =>
      useRequestActions({
        user,
        barId: 'bar1',
        displayName: 'Me',
        userRole: 'Staff',
        getButtonIdForLabel,
      })
    ).result.current;

  it('submitRequest writes the request doc with the resolved buttonId and does not call fetch itself', async () => {
    const { submitRequest } = setup(() => 'ice');

    await submitRequest('ICE: Well 1');

    expect(addDocMock).toHaveBeenCalledTimes(1);
    const [, payload] = addDocMock.mock.calls[0];
    expect(payload).toMatchObject({
      barId: 'bar1',
      label: 'ICE: Well 1',
      requesterId: 'me',
      status: 'pending',
      buttonId: 'ice',
    });
    // Delivery is server-side now (onRequestCreated) — a lingering
    // client-side fetch loop here would double-notify everyone.
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('submitRequest omits buttonId entirely for free text with no resolvable button', async () => {
    const { submitRequest } = setup(() => undefined);

    await submitRequest('Someone spilled a tray of glasses');

    const [, payload] = addDocMock.mock.calls[0];
    expect(payload).not.toHaveProperty('buttonId');
  });

  it('submitRequest vibrates for immediate haptic feedback', async () => {
    const { submitRequest } = setup(() => 'ice');
    await submitRequest('ICE: Well 1');
    expect(vibrateMock).toHaveBeenCalledWith(100);
  });

  it('claimRequest rejects when the write is denied (already claimed by someone else)', async () => {
    updateDocMock.mockRejectedValueOnce(new Error('permission-denied'));
    const { claimRequest } = setup();

    await expect(claimRequest('req1')).rejects.toThrow('permission-denied');
  });

  it('unclaimRequest reverts status to pending and clears claim fields', async () => {
    const { unclaimRequest } = setup();

    await unclaimRequest('req1');

    expect(updateDocMock).toHaveBeenCalledTimes(1);
    const [, payload] = updateDocMock.mock.calls[0];
    expect(payload).toMatchObject({
      status: 'pending',
      claimedBy: 'DELETE_FIELD_SENTINEL',
      claimerName: 'DELETE_FIELD_SENTINEL',
      claimedAt: 'DELETE_FIELD_SENTINEL',
    });
  });

  it('unclaimRequest rejects when the write is denied (not the current claimer)', async () => {
    updateDocMock.mockRejectedValueOnce(new Error('permission-denied'));
    const { unclaimRequest } = setup();

    await expect(unclaimRequest('req1')).rejects.toThrow('permission-denied');
  });
});
