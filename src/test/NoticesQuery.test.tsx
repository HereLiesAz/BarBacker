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
vi.mock('firebase/firestore', async (importOriginal) => {
    const actual = await importOriginal<typeof firestore>();
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
        where: vi.fn(() => 'mock-where'),
        orderBy: vi.fn(() => 'mock-order-by'),
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
  });

  it('initial query should have timestamp filter', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Wait for the useEffect to run (which calls onSnapshot)
    await waitFor(() => {
        expect(firestore.onSnapshot).toHaveBeenCalled();
    });

    // Find the call to onSnapshot for notices
    // The App calls onSnapshot multiple times (user, bar, requests, users, notices)
    // We need to find the one that targets the notices collection

    // Check collection calls
    // notices collection is `bars/${barId}/notices`
    const collectionCalls = vi.mocked(firestore.collection).mock.calls;
    const noticesCollectionCall = collectionCalls.find(call => call[1] === 'bars/test-bar-id/notices');
    expect(noticesCollectionCall).toBeDefined();

    // Check query calls
    // We expect query to be called with the collection and orderBy
    // We verify that 'where' is NOT called for this query (or at least not with 'timestamp')

    const queryCalls = vi.mocked(firestore.query).mock.calls;
    // Inspect arguments passed to query. One of them should be the result of collection('.../notices')
    // creating a specific match is tricky because we return string mocks.

    // Let's verify 'where' calls.
    const whereCalls = vi.mocked(firestore.where).mock.calls;
    const timestampFilter = whereCalls.find(call => call[0] === 'timestamp');

    // NEW BEHAVIOR: Server-side filtering on timestamp should be present
    expect(timestampFilter).toBeDefined();
    expect(timestampFilter?.[1]).toBe('>=');
    expect(timestampFilter?.[2]).toBeInstanceOf(Date);
  });
});
