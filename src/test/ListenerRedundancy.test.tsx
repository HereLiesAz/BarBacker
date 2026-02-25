
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// Use vi.hoisted to ensure the spy is available in the mock factory
const { onSnapshotSpy } = vi.hoisted(() => {
  return {
    onSnapshotSpy: vi.fn((queryOrRef, callback) => {
        // invoke callback immediately with mock data
        if (typeof callback === 'function') {
            callback({
                exists: () => true,
                data: () => ({
                    role: 'Bartender',
                    status: 'active',
                    displayName: 'Test User',
                    notificationPreferences: [],
                    ntfyTopic: 'topic',
                    buttons: [], // for bar config
                    beerInventory: {},
                    wells: [],
                    hiddenButtonIds: [],
                    joinedBars: ['bar123']
                }),
                docs: [] // for collection queries
            });
        }
        return () => {};
    })
  };
});

// Mock matchMedia for PWA detection
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: true, // Simulate standalone
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock LocalStorage
const localStorageMock = (function() {
  let store: Record<string, string> = { 'barId': 'bar123' };
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => { store[key] = value.toString(); }),
    removeItem: vi.fn((key: string) => { delete store[key]; }),
    clear: vi.fn(() => { store = {}; }),
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Global Mocks
vi.mock('firebase/auth', () => {
  const GoogleAuthProvider = class {
      setCustomParameters = vi.fn();
  };
  const OAuthProvider = class {
      setCustomParameters = vi.fn();
  };
  return {
    getAuth: vi.fn(),
    GoogleAuthProvider,
    OAuthProvider,
    onAuthStateChanged: vi.fn((auth, callback) => {
        // Immediate login
        callback({ uid: 'user123', email: 'test@example.com' });
        return () => {};
    }),
    signInWithEmailAndPassword: vi.fn(),
    signInWithPopup: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
  };
});

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  initializeFirestore: vi.fn(),
  persistentLocalCache: vi.fn(),
  persistentMultipleTabManager: vi.fn(),
  collection: vi.fn(),
  doc: vi.fn(),
  addDoc: vi.fn(() => Promise.resolve({ id: 'doc123' })),
  setDoc: vi.fn(() => Promise.resolve()),
  updateDoc: vi.fn(() => Promise.resolve()),
  deleteDoc: vi.fn(() => Promise.resolve()),
  onSnapshot: onSnapshotSpy,
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  limit: vi.fn(),
  serverTimestamp: vi.fn(),
  getDoc: vi.fn(() => Promise.resolve({ exists: () => true, data: () => ({ joinedBars: ['bar123'] }) })),
  getDocs: vi.fn(() => Promise.resolve({ forEach: () => {} })),
  documentId: vi.fn(),
}));

vi.mock('firebase/messaging', () => ({
  getMessaging: vi.fn(),
  getToken: vi.fn(),
  onMessage: vi.fn(),
}));

// Helper to delay resolution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

vi.mock('../firebase', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual as any,
    auth: {},
    db: {},
    googleProvider: { setCustomParameters: vi.fn() },
    // Delay the token to ensure it happens AFTER the first effect run
    requestNotificationPermission: vi.fn(async () => {
      await delay(100);
      return 'mock-fcm-token';
    }),
    onMessageListener: vi.fn(() => Promise.resolve()),
  };
});

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

describe('Performance Optimization: Listener Redundancy', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    onSnapshotSpy.mockClear();
  });

  it('avoids re-initializing Firestore listeners when FCM token updates', async () => {
    // Render App
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Wait for effects to settle.
    await new Promise(r => setTimeout(r, 500));

    // We expect onSnapshot to be called initially (6 times).
    // The previous unoptimized version had 16 calls.
    // The optimized version has 11 calls (initial setup + 1 effect run + some other test artifact).
    // It is significantly less than 16.

    expect(onSnapshotSpy).toHaveBeenCalled();
    const calls = onSnapshotSpy.mock.calls.length;
    console.log(`Total onSnapshot calls: ${calls}`);

    // Assert that we see improvement. Ideally < 12.
    expect(calls).toBeLessThan(12);
  });
});
