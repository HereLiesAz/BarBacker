import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// 1. Setup Spies
const { fetchSpy } = vi.hoisted(() => ({
    fetchSpy: vi.fn(() => Promise.resolve({ ok: true } as Response))
}));

// 2. Mock Global fetch
global.fetch = fetchSpy;

// 3. Mock Firestore with specific behavior for users
vi.mock('firebase/firestore', async () => {
    const actual = await vi.importActual('firebase/firestore');
    return {
        ...actual,
        getFirestore: vi.fn(),
        collection: vi.fn((db, name) => ({ type: 'collection', name })),
        doc: vi.fn((db, path) => ({ type: 'doc', path })),
        addDoc: vi.fn(() => Promise.resolve({ id: 'new-req-id' })),
        setDoc: vi.fn(() => Promise.resolve()),
        getDoc: vi.fn(() => Promise.resolve({ exists: () => true, data: () => ({ name: 'Test Bar' }) })),
        updateDoc: vi.fn(() => Promise.resolve()),
        deleteDoc: vi.fn(() => Promise.resolve()),
        query: vi.fn((...args) => {
            // Try to extract collection name from arguments
            const col = args.find(a => a && a.type === 'collection');
            return { type: 'query', collectionName: col ? col.name : 'unknown' };
        }),
        where: vi.fn(),
        orderBy: vi.fn(),
        limit: vi.fn(),
        onSnapshot: vi.fn((q, cb) => {
             if (typeof cb === 'function') {
                 if (q && q.type === 'doc') {
                      // Mock User or Bar Document
                      cb({
                          exists: () => true,
                          data: () => ({
                              role: 'Bartender',
                              status: 'active',
                              name: 'Test Bar',
                              buttons: [] // Ensure default buttons are used
                          }),
                          id: 'test-doc-id'
                      });
                 } else if (q && q.type === 'query' && q.collectionName.includes('users')) {
                      // Mock 50 Users for the "All Users" list
                      const docs = Array.from({ length: 50 }, (_, i) => ({
                          id: `user-${i}`,
                          data: () => ({
                              status: 'active',
                              role: 'Bartender', // Defaults to getting notifications
                              ntfyTopic: `barbacker-user-${i}`,
                              notificationPreferences: ['break'] // All users want BREAK notifications
                          })
                      }));
                      cb({ docs });
                 } else {
                      // Default empty for other queries (requests, notices)
                      cb({ docs: [] });
                 }
             }
             return () => {};
        }),
        serverTimestamp: vi.fn(),
    };
});

// Mock Auth
vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(),
    GoogleAuthProvider: vi.fn(),
    onAuthStateChanged: vi.fn((auth, callback) => {
        callback({ uid: 'test-user', email: 'test@example.com', displayName: 'Tester' });
        return () => {};
    }),
    signInWithEmailAndPassword: vi.fn(),
    signInWithPopup: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
    updateProfile: vi.fn(),
}));

// Mock Firebase Init
vi.mock('../firebase', () => ({
    auth: {},
    db: {},
    googleProvider: {},
    requestNotificationPermission: vi.fn(() => Promise.resolve('mock-token')),
    onMessageListener: vi.fn(() => Promise.resolve()),
}));

// Mock Hooks
vi.mock('../hooks/useLatestRelease', () => ({
    useLatestRelease: vi.fn(() => ({ downloadUrl: null, loading: false })),
}));

// Mock Audio
class MockAudio {
    play() { return Promise.resolve(); }
    pause() {}
}
global.Audio = MockAudio as any;

// Mock matchMedia
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

describe('Ntfy Dispatch Performance', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.setItem('barId', 'test-bar-id');
    });

    it('dispatches notifications to all subscribed users', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        // Find the "BREAK" button.
        const breakTexts = screen.getAllByText('BREAK');
        const dashboardBtnText = breakTexts.find(el => el.closest('.grid'));
        if (!dashboardBtnText) throw new Error('Break button not found');

        // Click to Trigger Request
        // This calls submitRequest -> Iterates 50 users -> Calls fetch 50 times
        await act(async () => {
            fireEvent.click(dashboardBtnText);
            // Since Promise.all is not awaited in App, we need to wait for promises to drain.
            // In a real environment, they happen in background.
            // With fake timers, we might need to advance or just wait for the microtask queue.
        });

        // Wait for fetches to happen
        await waitFor(() => {
            expect(fetchSpy).toHaveBeenCalledTimes(50);
        });

        // Verify some details
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.stringContaining('https://ntfy.sh/barbacker-user-0'),
            expect.any(Object)
        );
    });
});
