import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// Hoist spies so they are available in the mock factory
const { updateDocSpy, incrementSpy } = vi.hoisted(() => ({
    updateDocSpy: vi.fn(() => Promise.resolve()),
    incrementSpy: vi.fn((n) => ({ type: 'increment', n }))
}));

// Mock firebase/firestore
vi.mock('firebase/firestore', async () => {
    const actual = await vi.importActual('firebase/firestore');
    return {
        ...actual,
        getFirestore: vi.fn(),
        collection: vi.fn((db, name) => ({ type: 'collection', name })),
        doc: vi.fn(() => ({ type: 'doc' })),
        addDoc: vi.fn(() => Promise.resolve({ id: 'new-doc-id' })),
        setDoc: vi.fn(() => Promise.resolve()),
        getDoc: vi.fn(() => Promise.resolve({ exists: () => true, data: () => ({ name: 'Test Bar' }) })),
        updateDoc: updateDocSpy,
        deleteDoc: vi.fn(() => Promise.resolve()),
        onSnapshot: vi.fn((q, cb) => {
             if (typeof cb === 'function') {
                 if (q && q.type === 'doc') {
                      cb({
                          exists: () => true,
                          data: () => ({ role: 'Bartender', status: 'active', name: 'Test Bar' }),
                          id: 'test-doc-id'
                      });
                 } else {
                      cb({ docs: [] });
                 }
             }
             return () => {};
        }),
        query: vi.fn(),
        where: vi.fn(),
        orderBy: vi.fn(),
        limit: vi.fn(),
        increment: incrementSpy,
        serverTimestamp: vi.fn(),
    };
});

// Mock other dependencies
vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(),
    GoogleAuthProvider: vi.fn(),
    onAuthStateChanged: vi.fn((auth, callback) => {
        callback({ uid: 'test-user', email: 'test@example.com' });
        return () => {};
    }),
    signInWithEmailAndPassword: vi.fn(),
    signInWithPopup: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
    updateProfile: vi.fn(),
}));

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

describe('Button Usage Batching', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.setItem('barId', 'test-bar-id');
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('batches button usage updates', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        // Advance timers to allow initial effects to run and render dashboard
        await act(async () => {
             vi.advanceTimersByTime(1000);
        });

        // Find all "BREAK" texts
        const breakTexts = screen.getAllByText('BREAK');

        // Find the one in the grid (Dashboard button)
        // The dashboard buttons are in a div with class "grid"
        // We traverse up to find the closest grid
        const dashboardBtnText = breakTexts.find(el => el.closest('.grid'));

        if (!dashboardBtnText) {
            // Debugging
            screen.debug();
            throw new Error(`Could not find Dashboard BREAK button. Found ${breakTexts.length} elements.`);
        }

        // The text is inside the button. We click the text or the button.
        fireEvent.click(dashboardBtnText);
        fireEvent.click(dashboardBtnText);
        fireEvent.click(dashboardBtnText);
        fireEvent.click(dashboardBtnText);
        fireEvent.click(dashboardBtnText);

        // Filter calls to updateDoc related to buttonUsage
        const getUsageCalls = () => updateDocSpy.mock.calls.filter(args => {
             const data = args[1] as any;
             return data && Object.keys(data).some(k => k.startsWith('buttonUsage.'));
        });

        // Expect 0 immediate updates (Will fail until implemented)
        const immediateCalls = getUsageCalls();
        expect(immediateCalls.length).toBe(0);

        // Advance time by 10 seconds (flush interval)
        await act(async () => {
            vi.advanceTimersByTime(10000);
        });

        // Now expect 1 call
        const usageCalls = getUsageCalls();
        expect(usageCalls.length).toBe(1);

        // Verify the increment amount
        const updateData = usageCalls[0][1] as any;
        expect(updateData['buttonUsage.break'].n).toBe(5);
    });
});
