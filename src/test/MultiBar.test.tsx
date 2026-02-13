import { render, waitFor, fireEvent, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// Mocks
const mockUser = { uid: 'test-user', email: 'test@example.com', displayName: 'Test User' };

const { setDocSpy, updateDocSpy, deleteDocSpy, signOutSpy, arrayRemoveSpy } = vi.hoisted(() => ({
  setDocSpy: vi.fn(() => Promise.resolve()),
  updateDocSpy: vi.fn(() => Promise.resolve()),
  deleteDocSpy: vi.fn(() => Promise.resolve()),
  signOutSpy: vi.fn(() => Promise.resolve()),
  arrayRemoveSpy: vi.fn((...args) => ({ type: 'arrayRemove', args })),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  GoogleAuthProvider: vi.fn(),
  OAuthProvider: vi.fn(),
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback(mockUser);
    return () => {};
  }),
  signInWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: signOutSpy,
  deleteUser: vi.fn(),
  updateProfile: vi.fn(),
}));

vi.mock('firebase/firestore', () => {
    return {
        getFirestore: vi.fn(),
        collection: vi.fn(() => ({ type: 'collection' })),
        doc: vi.fn((db, path, ...args) => {
            const fullPath = path + (args.length ? '/' + args.join('/') : '');
            return { type: 'doc', path: fullPath };
        }),
        addDoc: vi.fn(() => Promise.resolve({ id: 'new-doc-id' })),
        setDoc: setDocSpy,
        updateDoc: updateDocSpy,
        deleteDoc: deleteDocSpy,
        getDoc: vi.fn((ref) => {
            if (ref.path.includes('bars/bar-1')) return Promise.resolve({ exists: () => true, data: () => ({ name: 'Bar One' }) });
            return Promise.resolve({ exists: () => false });
        }),
        onSnapshot: vi.fn((ref, cb) => {
            if (ref && ref.path === 'users/test-user') {
                cb({ exists: () => true, data: () => ({ joinedBars: ['bar-1'] }) });
            } else if (ref && ref.path === 'bars/bar-1') {
                cb({ exists: () => true, data: () => ({ name: 'Bar One', buttons: [] }) });
            } else if (ref && ref.path === 'bars/bar-1/users/test-user') {
                cb({ exists: () => true, data: () => ({ role: 'Bartender', status: 'active', displayName: 'Test User' }) });
            } else {
                if (typeof cb === 'function') cb({ exists: () => false, docs: [] });
            }
            return () => {};
        }),
        query: vi.fn(),
        where: vi.fn(),
        orderBy: vi.fn(),
        limit: vi.fn(),
        serverTimestamp: vi.fn(),
        arrayUnion: vi.fn((...args) => ({ type: 'arrayUnion', args })),
        arrayRemove: arrayRemoveSpy,
        increment: vi.fn(),
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

global.URL.createObjectURL = vi.fn();

class MockAudio {
    constructor(src: string) {}
    play() { return Promise.resolve(); }
    pause() {}
}
global.Audio = MockAudio as any;

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

describe('Multi-Bar Features', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    afterEach(() => {
        cleanup();
        document.body.innerHTML = '';
    });

    it('renders "My Bars" list with joined bars', async () => {
        render(<MemoryRouter><App /></MemoryRouter>);

        await waitFor(() => {
            expect(screen.getByText('My Bars')).toBeInTheDocument();
            expect(screen.getByText('Bar One')).toBeInTheDocument();
        });
    });

    it('clicking a bar in "My Bars" joins it', async () => {
        render(<MemoryRouter><App /></MemoryRouter>);
        await waitFor(() => screen.getByText('Bar One'));

        fireEvent.click(screen.getByText('Bar One'));

        await waitFor(() => {
            const headers = screen.getAllByText('Bar One');
            expect(headers.length).toBeGreaterThan(0);
        });
    });

    it('Switch Bar returns to bar selection without signing out', async () => {
        localStorage.setItem('barId', 'bar-1');
        render(<MemoryRouter><App /></MemoryRouter>);

        // Wait for dashboard to load (look for Bar Name)
        await waitFor(() => {
             const headers = screen.getAllByText('Bar One');
             expect(headers.length).toBeGreaterThan(0);
        });

        // Open Menu
        const menuIcon = screen.getByText('menu');
        fireEvent.click(menuIcon);

        // Click Switch Bar
        // Use bubbles: true just in case
        const switchBtn = await screen.findByText('Switch Bar');
        fireEvent.click(switchBtn, { bubbles: true });

        // Should return to Select Bar screen
        await waitFor(() => {
            expect(screen.getByText('Select Bar')).toBeInTheDocument();
        });

        // Sign Out should NOT be called
        expect(signOutSpy).not.toHaveBeenCalled();
    });

    it('Leave Bar removes user from joinedBars', async () => {
        window.confirm = vi.fn(() => true);
        localStorage.setItem('barId', 'bar-1');
        render(<MemoryRouter><App /></MemoryRouter>);

        // Wait for dashboard
        await waitFor(() => {
             const headers = screen.getAllByText('Bar One');
             expect(headers.length).toBeGreaterThan(0);
        });

        // Open Account Dialog by clicking user name/role area
        // "Test User" is the name.
        const userDisplay = screen.getByText('Test User');
        fireEvent.click(userDisplay);

        // Click Leave Bar
        const leaveBtn = await screen.findByText('Leave Bar');
        fireEvent.click(leaveBtn);

        await waitFor(() => {
            expect(deleteDocSpy).toHaveBeenCalled();
            expect(updateDocSpy).toHaveBeenCalledWith(
                expect.objectContaining({ path: 'users/test-user' }),
                expect.objectContaining({ joinedBars: expect.objectContaining({ type: 'arrayRemove' }) })
            );
        });

        // Should return to Select Bar
        await waitFor(() => {
            expect(screen.getByText('Select Bar')).toBeInTheDocument();
        });

        expect(signOutSpy).not.toHaveBeenCalled();
    });
});
