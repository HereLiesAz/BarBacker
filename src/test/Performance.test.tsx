import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// Mocks
const mockUser = { uid: 'test-user', email: 'test@example.com' };

// Hoist spies so they can be used in mock factories
const { collectionSpy, querySpy, whereSpy, orderBySpy, limitSpy } = vi.hoisted(() => ({
  collectionSpy: vi.fn((db, name) => ({ type: 'collection', name })),
  querySpy: vi.fn((...args) => ({ type: 'query', args })),
  whereSpy: vi.fn((field, op, val) => ({ type: 'where', field, op, val })),
  orderBySpy: vi.fn((field, dir) => ({ type: 'orderBy', field, dir })),
  limitSpy: vi.fn((n) => ({ type: 'limit', n })),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  OAuthProvider: vi.fn(),
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback(mockUser); // Simulate logged in
    return () => {};
  }),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  collection: collectionSpy,
  doc: vi.fn(() => ({ type: 'doc' })),
  addDoc: vi.fn(() => Promise.resolve({ id: 'new-doc-id' })),
  setDoc: vi.fn(() => Promise.resolve()),
  getDoc: vi.fn(() => Promise.resolve({ exists: () => true, data: () => ({ name: 'Test Bar' }) })),
  updateDoc: vi.fn(() => Promise.resolve()),
  deleteDoc: vi.fn(() => Promise.resolve()),
  onSnapshot: vi.fn((q, cb) => {
      if (typeof cb === 'function') {
          if (q && q.type === 'doc') {
               // Document Snapshot Mock
               cb({
                   exists: () => true,
                   data: () => ({ role: 'Bartender', status: 'active', name: 'Test Bar' }),
                   id: 'test-doc-id'
               });
          } else {
               // Query Snapshot Mock
               cb({ docs: [] });
          }
      }
      return () => {};
  }),
  query: querySpy,
  where: whereSpy,
  orderBy: orderBySpy,
  limit: limitSpy,
  serverTimestamp: vi.fn(),
}));

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

// Mock useLatestRelease
vi.mock('../hooks/useLatestRelease', () => ({
  useLatestRelease: () => ({ downloadUrl: 'http://example.com/app.apk', loading: false, version: null, error: null }),
}));

class MockAudio {
    constructor(src: string) {}
    play() { return Promise.resolve(); }
    pause() {}
}
global.Audio = MockAudio as any;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Performance Optimization', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.setItem('barId', 'test-bar-id');
  });

  it('verifies requests query constraints', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Wait for the query to be called
    await waitFor(() => {
        expect(querySpy).toHaveBeenCalled();
    });

    // Find the query call for 'requests'
    // querySpy returns { type: 'query', args: [...] }
    // We inspect the calls to querySpy
    const calls = querySpy.mock.calls;

    // Each call is array of args passed to query()
    // query(collection(...), where(...), orderBy(...))
    // Arg 0 is collection, Arg 1..n are constraints

    const requestsQueryArgs = calls.find(args => {
        const firstArg = args[0];
        return firstArg && firstArg.type === 'collection' && firstArg.name === 'requests';
    });

    expect(requestsQueryArgs).toBeDefined();

    // Check arguments
    const constraints = requestsQueryArgs.slice(1); // constraints

    const hasWhereBarId = constraints.some((a: any) => a.type === 'where' && a.field === 'barId');
    const hasOrderByTimestamp = constraints.some((a: any) => a.type === 'orderBy' && a.field === 'timestamp');
    const hasLimit = constraints.some((a: any) => a.type === 'limit');

    expect(hasWhereBarId).toBe(true);
    expect(hasOrderByTimestamp).toBe(true);

    // Optimized State: Should have limit(100)
    expect(hasLimit).toBe(true);

    // Verify limit count
    const limitConstraint = constraints.find((a: any) => a.type === 'limit');
    expect(limitConstraint).toBeDefined();
    expect(limitConstraint.n).toBe(100);

    // Verify timestamp filter
    const hasTimestampFilter = constraints.some((a: any) =>
        a.type === 'where' && a.field === 'timestamp' && a.op === '>='
    );
    expect(hasTimestampFilter).toBe(true);
  });

  it('verifies users query constraints (prevents unbounded query)', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
        expect(querySpy).toHaveBeenCalled();
    });

    const calls = querySpy.mock.calls;

    // Look for query on bars/test-bar-id/users
    const usersQueryArgs = calls.find(args => {
        const firstArg = args[0];
        // collectionSpy returns { type: 'collection', name: ... }
        // The second arg to collection() in App.tsx is `bars/${barId}/users`
        return firstArg && firstArg.type === 'collection' && firstArg.name === 'bars/test-bar-id/users';
    });

    expect(usersQueryArgs).toBeDefined();

    const constraints = usersQueryArgs.slice(1);

    // Verify it has 'where' constraint on 'status'
    const statusConstraint = constraints.find((a: any) => a.type === 'where' && a.field === 'status');
    expect(statusConstraint).toBeDefined();
    expect(statusConstraint.op).toBe('in');

    // Default valid statuses
    expect(statusConstraint.val).toEqual(expect.arrayContaining(['active', 'pending']));
  });
});
