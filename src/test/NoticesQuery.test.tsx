import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import * as firestore from 'firebase/firestore';

// Mock Firebase Auth
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  OAuthProvider: vi.fn(),
  onAuthStateChanged: vi.fn((auth, callback) => {
    // Simulate logged in user
    callback({ uid: 'test-user', email: 'test@example.com' });
    return () => {};
  }),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}));

// Mock Firebase Firestore
// We need to spy on 'query' and 'where' so we don't mock them completely in the factory
// Instead we mock the module in a way that allows spying
vi.mock('firebase/firestore', async () => {
    const actual = await vi.importActual<typeof firestore>('firebase/firestore');
    return {
        ...actual,
        getFirestore: vi.fn(),
        collection: vi.fn(() => 'mock-collection'),
        doc: vi.fn(() => 'mock-doc'),
        addDoc: vi.fn(() => Promise.resolve({ id: 'mock-id' })),
        setDoc: vi.fn(() => Promise.resolve()),
        updateDoc: vi.fn(() => Promise.resolve()),
        deleteDoc: vi.fn(() => Promise.resolve()),
        onSnapshot: vi.fn((query, callback) => {
            // Simulate snapshot with empty docs to prevent errors
            callback({
                docs: [],
                exists: () => true,
                data: () => ({ role: 'Manager' })
            });
            return () => {};
        }),
        query: vi.fn(() => 'mock-query'),
        where: vi.fn((field) => `mock-where-${field}`),
        orderBy: vi.fn(() => 'mock-order-by'),
        limit: vi.fn((n) => `mock-limit-${n}`),
        serverTimestamp: vi.fn(),
    };
});

vi.mock('firebase/messaging', () => ({
  getMessaging: vi.fn(),
  getToken: vi.fn(),
  onMessage: vi.fn(),
}));

vi.mock('../firebase', () => ({
  auth: {},
  db: {},
  googleProvider: {},
  requestNotificationPermission: vi.fn(() => Promise.resolve('mock-token')),
  onMessageListener: vi.fn(() => Promise.resolve()),
}));

vi.mock('../hooks/useLatestRelease', () => ({
  useLatestRelease: () => ({ downloadUrl: 'http://example.com/app.apk', loading: false }),
}));

// Mock Audio
class MockAudio {
    constructor(src: string) {}
    play() { return Promise.resolve(); }
    pause() {}
}
global.Audio = MockAudio as any;

describe('Notices Query Optimization', () => {

  beforeEach(() => {
      vi.clearAllMocks();
      // Setup localStorage for barId to ensure we skip the bar search screen
      localStorage.setItem('barId', 'test-bar-id');
  });

  afterEach(() => {
      localStorage.clear();
      vi.useRealTimers();
  });

  it('initial query should have timestamp filter and limit', async () => {
    // Setup time
    const fixedNow = new Date('2024-01-10T00:00:00Z');
    vi.setSystemTime(fixedNow); // Only mock Date, avoid timer issues with waitFor

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
       expect(firestore.onSnapshot).toHaveBeenCalled();
    });

    // Find the call to onSnapshot for notices
    // The App calls onSnapshot multiple times (user, bar, requests, users, notices)

    // Verify collection call
    const collectionCalls = vi.mocked(firestore.collection).mock.calls;
    const noticesCollectionCall = collectionCalls.find(call => call[1] === 'bars/test-bar-id/notices');
    expect(noticesCollectionCall).toBeDefined();

    // Verify timestamp filter creation
    const whereCalls = vi.mocked(firestore.where).mock.calls;
    const expectedTimestampBoundary = new Date(fixedNow.getTime() - 3 * 24 * 60 * 60 * 1000);

    // Find the specific timestamp filter that matches the 3-day cutoff
    const timestampFilter = whereCalls.find(call =>
        call[0] === 'timestamp' &&
        call[1] === '>=' &&
        (call[2] instanceof Date) &&
        call[2].getTime() === expectedTimestampBoundary.getTime()
    );

    expect(timestampFilter).toBeDefined();
    expect(timestampFilter?.[1]).toBe('>=');
    expect(timestampFilter?.[2]).toEqual(expectedTimestampBoundary);

    // Verify query composition
    // We expect a query call that includes the timestamp filter AND limit(100)
    const queryCalls = vi.mocked(firestore.query).mock.calls;

    // We look for a query that contains 'mock-where-timestamp' AND 'mock-limit-100'
    // args are [collection, constraint1, constraint2, ...]
    const noticesQuery = queryCalls.find(args =>
        args.includes('mock-where-timestamp') &&
        args.includes('mock-limit-100')
    );

    expect(noticesQuery).toBeDefined();
  });
});
