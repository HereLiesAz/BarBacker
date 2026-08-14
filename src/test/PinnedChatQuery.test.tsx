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
    callback({ uid: 'test-user', email: 'test@example.com', getIdTokenResult: () => Promise.resolve({ claims: {} }) });
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
        deleteField: vi.fn(() => 'mock-delete-field'),
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
        orderBy: vi.fn((field, dir) => `mock-order-by-${field}-${dir}`),
        limit: vi.fn((n) => `mock-limit-${n}`),
        serverTimestamp: vi.fn(),
    };
});

vi.mock('firebase/functions', () => ({
  getFunctions: vi.fn(() => ({})),
  httpsCallable: vi.fn(() => vi.fn(() => Promise.resolve({ data: {} }))),
}));

vi.mock('firebase/messaging', () => ({
  getMessaging: vi.fn(),
  getToken: vi.fn(),
  onMessage: vi.fn(),
}));

vi.mock('../firebase', () => ({
  auth: {},
  db: {},
  functions: {},
  googleProvider: {},
  requestNotificationPermission: vi.fn(() => Promise.resolve('mock-token')),
  onForegroundMessage: vi.fn(() => () => {}),
}));

vi.mock('../hooks/useLatestRelease', () => ({
  useLatestRelease: vi.fn(() => ({ downloadUrl: null, version: null, loading: false, error: null })),
}));

// Mock Audio
class MockAudio {
    constructor(src: string) {}
    play() { return Promise.resolve(); }
    pause() {}
}
global.Audio = MockAudio as any;

describe('Pinned Chat Query Optimization', () => {

  beforeEach(() => {
      vi.clearAllMocks();
      // Setup localStorage for barId to ensure we skip the bar search screen
      localStorage.setItem('barId', 'test-bar-id');
  });

  afterEach(() => {
      localStorage.clear();
      vi.useRealTimers();
  });

  it('pinned-messages query filters on pinned==true, orders by pinnedAt desc, and limits', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
       expect(firestore.onSnapshot).toHaveBeenCalled();
    });

    // Verify collection call — chat lives under bars/{barId}/chat, the
    // same path the full scrollback listener (only live while the
    // panel is open) would also use, but this listener is always on.
    const collectionCalls = vi.mocked(firestore.collection).mock.calls;
    const chatCollectionCall = collectionCalls.find(call => call[1] === 'bars/test-bar-id/chat');
    expect(chatCollectionCall).toBeDefined();

    // Verify the pinned filter.
    const whereCalls = vi.mocked(firestore.where).mock.calls;
    const pinnedFilter = whereCalls.find(call => call[0] === 'pinned' && call[1] === '==' && call[2] === true);
    expect(pinnedFilter).toBeDefined();

    // Verify query composition: where('pinned') + orderBy('pinnedAt', 'desc') + limit(50).
    const queryCalls = vi.mocked(firestore.query).mock.calls;
    const pinnedQuery = queryCalls.find(args =>
        args.includes('mock-where-pinned') &&
        args.includes('mock-order-by-pinnedAt-desc') &&
        args.includes('mock-limit-50')
    );

    expect(pinnedQuery).toBeDefined();
  });
});
