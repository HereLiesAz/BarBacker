import { describe, it, expect, vi, afterEach } from 'vitest';

// Spies
const initializeFirestoreSpy = vi.fn(() => ({ type: 'firestore-instance' }));
const persistentLocalCacheSpy = vi.fn(() => ({ type: 'cache-config' }));
const persistentMultipleTabManagerSpy = vi.fn(() => ({ type: 'tab-manager' }));
const getFirestoreSpy = vi.fn(() => ({ type: 'firestore-default' }));

// Mock firebase/firestore
vi.mock('firebase/firestore', () => ({
  getFirestore: getFirestoreSpy,
  initializeFirestore: initializeFirestoreSpy,
  persistentLocalCache: persistentLocalCacheSpy,
  persistentMultipleTabManager: persistentMultipleTabManagerSpy,
  // Mock other potential exports if needed, but for initialization this is key
  collection: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
}));

// Mock firebase/app
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
}));

// Mock firebase/auth
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  GoogleAuthProvider: class {
    setCustomParameters = vi.fn()
  },
  OAuthProvider: class {},
}));

// Mock firebase/messaging
vi.mock('firebase/messaging', () => ({
  getMessaging: vi.fn(() => ({})),
  getToken: vi.fn(),
  onMessage: vi.fn(),
}));

describe('Firebase Persistence', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  it('should initialize Firestore with offline persistence', async () => {
    // Import the module dynamically to trigger initialization
    await import('../firebase');

    // We expect initializeFirestore to be called, NOT getFirestore alone
    // (or if getFirestore is called, initializeFirestore MUST be called to set persistence)

    // Check if initializeFirestore was called
    if (initializeFirestoreSpy.mock.calls.length === 0) {
        // If not called, fail with descriptive message
        // This is what we expect before the fix
        throw new Error('initializeFirestore was not called. Persistence is likely not enabled.');
    }

    expect(initializeFirestoreSpy).toHaveBeenCalled();

    // Verify arguments for persistence
    const args = initializeFirestoreSpy.mock.calls[0];
    const settings = args[1];

    expect(settings).toBeDefined();
    expect(settings.localCache).toBeDefined();

    // Verify persistentLocalCache was called
    expect(persistentLocalCacheSpy).toHaveBeenCalled();

    // Verify persistentMultipleTabManager was called (optional but good for multi-tab support)
    expect(persistentMultipleTabManagerSpy).toHaveBeenCalled();
  });
});
