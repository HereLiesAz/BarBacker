import { render, waitFor, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import * as firestore from 'firebase/firestore';

// Hoist spies
const {
  getDocSpy,
  getDocsSpy,
  querySpy,
  whereSpy,
  collectionSpy,
  onSnapshotSpy,
  docSpy
} = vi.hoisted(() => ({
  getDocSpy: vi.fn(),
  getDocsSpy: vi.fn(),
  querySpy: vi.fn((...args) => ({ type: 'query', args })),
  whereSpy: vi.fn((field, op, val) => ({ type: 'where', field, op, val })),
  collectionSpy: vi.fn(),
  onSnapshotSpy: vi.fn(),
  docSpy: vi.fn(),
}));

// Mock Firebase Auth
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback({ uid: 'test-user', email: 'test@example.com' }); // Logged in
    return () => {};
  }),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}));

// Mock Firebase Firestore
vi.mock('firebase/firestore', async () => {
  const actual = await vi.importActual('firebase/firestore');
  return {
    ...actual,
    getFirestore: vi.fn(),
    collection: collectionSpy,
    doc: docSpy, // Use spy
    getDoc: getDocSpy,
    getDocs: getDocsSpy,
    query: querySpy,
    where: whereSpy,
    onSnapshot: onSnapshotSpy,
    addDoc: vi.fn(() => Promise.resolve({ id: 'new-doc' })),
    setDoc: vi.fn(() => Promise.resolve()),
    updateDoc: vi.fn(() => Promise.resolve()),
    deleteDoc: vi.fn(() => Promise.resolve()),
    orderBy: vi.fn(),
    limit: vi.fn(),
    serverTimestamp: vi.fn(),
    arrayUnion: vi.fn(),
    arrayRemove: vi.fn(),
    increment: vi.fn(),
    documentId: vi.fn(() => 'documentId_sentinel'),
  };
});

// Mock other dependencies
vi.mock('../firebase', () => ({
  auth: {},
  db: {},
  googleProvider: {},
  requestNotificationPermission: vi.fn(() => Promise.resolve('mock-token')),
  onMessageListener: vi.fn(() => Promise.resolve()),
}));

vi.mock('../hooks/useLatestRelease', () => ({
  useLatestRelease: vi.fn(() => ({ downloadUrl: null, version: null, loading: false, error: null })),
}));

// Mock Audio
global.Audio = class {
  play() { return Promise.resolve(); }
  pause() {}
} as any;

describe('BarList Performance', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.removeItem('barId');

    // Default mocks setup
    docSpy.mockImplementation((db, ...pathSegments) => ({
        type: 'doc',
        path: pathSegments.join('/')
    }));

    collectionSpy.mockImplementation((db, path) => ({
        type: 'collection',
        path
    }));

    // Setup onSnapshot to handle user data with joinedBars
    onSnapshotSpy.mockImplementation((ref, callback) => {
        if (ref.path === 'users/test-user') {
            // Simulate user having 3 joined bars
            callback({
                exists: () => true,
                data: () => ({
                    joinedBars: ['bar1', 'bar2', 'bar3']
                })
            });
        } else {
            // Default empty snapshot for other listeners
             callback({
                exists: () => false,
                data: () => ({}),
                docs: []
            });
        }
        return () => {};
    });

    // Setup getDoc to return bar details (Legacy / Fallback)
    getDocSpy.mockImplementation((ref) => {
        if (ref.path.startsWith('bars/')) {
            const barId = ref.path.split('/')[1];
            return Promise.resolve({
                exists: () => true,
                data: () => ({ name: `Name of ${barId}` })
            });
        }
        return Promise.resolve({ exists: () => false });
    });

    // Setup getDocs to return multiple bar details (Optimized)
    getDocsSpy.mockImplementation(async (query) => {
        const args = query.args;
        // Look for 'where(documentId(), "in", [...])'
        // documentId() mock returns 'documentId_sentinel'

        // args[1] should be the where constraint
        const whereConstraint = args.find((a: any) =>
            a.type === 'where' &&
            a.op === 'in'
        );

        if (whereConstraint) {
            const ids = whereConstraint.val; // Array of IDs
            const docs = ids.map((id: string) => ({
                id,
                exists: () => true,
                data: () => ({ name: `Name of ${id}` })
            }));
            return {
                forEach: (cb: any) => docs.forEach(cb),
                docs
            };
        }

        return { forEach: () => {}, docs: [] };
    });
  });

  it('renders bar list efficiently using getDocs (Optimized)', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Wait for "My Bars" to appear
    await waitFor(() => {
        expect(screen.getByText('My Bars')).toBeDefined();
    });

    // Wait for bar names to load
    await waitFor(() => {
        expect(screen.getByText('Name of bar1')).toBeDefined();
        expect(screen.getByText('Name of bar2')).toBeDefined();
        expect(screen.getByText('Name of bar3')).toBeDefined();
    });

    // Analyze getDoc calls (Individual fetches)
    // We expect 0 calls to getDoc for 'bars/*'
    const barDocCalls = getDocSpy.mock.calls.filter(args => {
        const ref = args[0];
        return ref.path && ref.path.startsWith('bars/') && !ref.path.includes('users');
    });

    console.log('Individual Bar fetch calls:', barDocCalls.length);
    expect(barDocCalls.length).toBe(0);

    // Verify getDocs was called (Batch fetch)
    expect(getDocsSpy).toHaveBeenCalled();
  });
});
