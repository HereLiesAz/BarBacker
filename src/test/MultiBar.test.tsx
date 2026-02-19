import { render, waitFor, fireEvent, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// Mocks
const mockUser = { uid: 'test-user', email: 'test@example.com', displayName: 'Test User' };

const { setDocSpy, updateDocSpy, deleteDocSpy, signOutSpy, arrayRemoveSpy, updateProfileSpy, arrayUnionSpy, querySpy, whereSpy } = vi.hoisted(() => ({
  setDocSpy: vi.fn(() => Promise.resolve()),
  updateDocSpy: vi.fn(() => Promise.resolve()),
  deleteDocSpy: vi.fn(() => Promise.resolve()),
  signOutSpy: vi.fn(() => Promise.resolve()),
  arrayRemoveSpy: vi.fn((...args) => ({ type: 'arrayRemove', args })),
  updateProfileSpy: vi.fn(() => Promise.resolve()),
  arrayUnionSpy: vi.fn((...args) => ({ type: 'arrayUnion', args })),
  querySpy: vi.fn((...args) => ({ type: 'query', args })),
  whereSpy: vi.fn((field, op, val) => ({ type: 'where', field, op, val })),
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
  updateProfile: updateProfileSpy,
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
            // Check if it's a document reference
            if (ref && ref.type === 'doc') {
                if (ref.path === 'users/test-user') {
                    cb({ exists: () => true, data: () => ({ joinedBars: ['bar-1'] }), id: 'test-user' });
                } else if (ref.path === 'bars/bar-1') {
                    cb({ exists: () => true, data: () => ({ name: 'Bar One', buttons: [] }), id: 'bar-1' });
                } else if (ref.path === 'bars/bar-1/users/test-user') {
                    cb({ exists: () => true, data: () => ({ role: 'Bartender', status: 'active', displayName: 'Test User' }), id: 'test-user' });
                } else {
                    // Default fallback for other docs (e.g. unknown bar users)
                    cb({ exists: () => false, data: () => undefined, id: 'unknown' });
                }
            } else {
                // Assume it's a query (collection)
                cb({ docs: [] });
            }
            return () => {};
        }),
        query: querySpy,
        where: whereSpy,
        orderBy: vi.fn(),
        limit: vi.fn(),
        serverTimestamp: vi.fn(),
        arrayUnion: arrayUnionSpy,
        arrayRemove: arrayRemoveSpy,
        increment: vi.fn(),
        getDocs: vi.fn(async () => {
             return {
                 forEach: (cb: any) => {
                     cb({ id: 'bar-1', data: () => ({ name: 'Bar One' }), exists: () => true });
                 },
                 docs: [{ id: 'bar-1', data: () => ({ name: 'Bar One' }), exists: () => true }]
             };
        }),
        documentId: vi.fn(() => 'docId'),
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

    it('clicking a bar in "My Bars" joins it and updates localStorage', async () => {
        render(<MemoryRouter><App /></MemoryRouter>);
        await waitFor(() => screen.getByText('Bar One'));

        fireEvent.click(screen.getByText('Bar One'));

        await waitFor(() => {
            const headers = screen.getAllByText('Bar One');
            expect(headers.length).toBeGreaterThan(0);
        });

        expect(localStorage.getItem('barId')).toBe('bar-1');
    });

    it('joining a bar adds it to global user document (joinedBars)', async () => {
        // Use a new bar ID to ensure RoleSelector appears
        localStorage.setItem('barId', 'new-bar-123');
        render(<MemoryRouter><App /></MemoryRouter>);

        // Wait for RoleSelector
        await waitFor(() => screen.getByText('Identification'));

        // Click role and Clock In
        const role = screen.getByText('Bartender');
        fireEvent.click(role);

        const clockIn = screen.getByText('Clock In');
        fireEvent.click(clockIn);

        await waitFor(() => {
            expect(setDocSpy).toHaveBeenCalledWith(
                expect.objectContaining({ path: 'users/test-user' }),
                expect.objectContaining({ joinedBars: expect.objectContaining({ type: 'arrayUnion', args: ['new-bar-123'] }) }),
                { merge: true }
            );
        });
    });

    it('RoleSelector initializes with user.displayName', async () => {
        localStorage.setItem('barId', 'bar-new');
        const { container } = render(<MemoryRouter><App /></MemoryRouter>);

        await waitFor(() => screen.getByText('Identification'));

        const input = container.querySelector('md-filled-text-field') as any;
        expect(input).toBeInTheDocument();
        // Check value property
        expect(input.value).toBe('Test User');
    });

    it('Edit Name updates profile and document', async () => {
        localStorage.setItem('barId', 'bar-1');
        const { container } = render(<MemoryRouter><App /></MemoryRouter>);

        await waitFor(() => screen.getAllByText('Bar One'));

        // Open Menu
        const menuIcon = screen.getByText('menu');
        fireEvent.click(menuIcon);

        // Open Account Options
        const accountOpts = await screen.findAllByText('Account Options');
        fireEvent.click(accountOpts[0]);

        // Click Edit Name button (in Account Dialog)
        const editBtns = await screen.findAllByText('Edit Name');
        fireEvent.click(editBtns[0]);

        // Find Input in Edit Name Dialog (wait for unique label)
        const input = await waitFor(() => {
             const fields = Array.from(container.querySelectorAll('md-filled-text-field'));
             return fields.find((f: any) => f.label === 'Display Name');
        }) as any;

        // Update value directly on component instance
        input.value = 'New Name';
        fireEvent.input(input);

        // Click Save (this button is in the new dialog)
        const saveBtns = screen.getAllByText('Save');
        const saveBtn = saveBtns[saveBtns.length - 1]; // Pick the last one (topmost)
        fireEvent.click(saveBtn);

        await waitFor(() => {
            expect(updateProfileSpy).toHaveBeenCalledWith(expect.anything(), { displayName: 'New Name' });
            expect(updateDocSpy).toHaveBeenCalledWith(
                expect.objectContaining({ path: 'bars/bar-1/users/test-user' }),
                { displayName: 'New Name' }
            );
        });
    });

    it('Queries active/pending users only (hides off_clock)', async () => {
        localStorage.setItem('barId', 'bar-1');
        render(<MemoryRouter><App /></MemoryRouter>);

        await waitFor(() => screen.getAllByText('Bar One'));

        const hasStatusFilter = querySpy.mock.calls.some(callArgs => {
             return callArgs.some((arg: any) =>
                 arg && arg.type === 'where' &&
                 arg.field === 'status' &&
                 arg.op === 'in' &&
                 JSON.stringify(arg.val) === JSON.stringify(['active', 'pending'])
             );
        });

        expect(hasStatusFilter).toBe(true);
    });

    it('Switch Bar returns to bar selection without signing out', async () => {
        localStorage.setItem('barId', 'bar-1');
        render(<MemoryRouter><App /></MemoryRouter>);

        await waitFor(() => {
             const headers = screen.getAllByText('Bar One');
             expect(headers.length).toBeGreaterThan(0);
        });

        const menuIcon = screen.getByText('menu');
        fireEvent.click(menuIcon);

        const switchBtn = await screen.findByText('Switch Bar');
        fireEvent.click(switchBtn, { bubbles: true });

        await waitFor(() => {
            expect(screen.getByText('Select Bar')).toBeInTheDocument();
        });

        expect(signOutSpy).not.toHaveBeenCalled();
    });

    it('Leave Bar removes user from joinedBars', async () => {
        window.confirm = vi.fn(() => true);
        localStorage.setItem('barId', 'bar-1');
        render(<MemoryRouter><App /></MemoryRouter>);

        await waitFor(() => {
             const headers = screen.getAllByText('Bar One');
             expect(headers.length).toBeGreaterThan(0);
        });

        const userDisplay = screen.getByText('Test User');
        fireEvent.click(userDisplay);

        const leaveBtn = await screen.findByText('Leave Bar');
        fireEvent.click(leaveBtn);

        await waitFor(() => {
            expect(deleteDocSpy).toHaveBeenCalled();
            expect(updateDocSpy).toHaveBeenCalledWith(
                expect.objectContaining({ path: 'users/test-user' }),
                expect.objectContaining({ joinedBars: expect.objectContaining({ type: 'arrayRemove' }) })
            );
        });

        await waitFor(() => {
            expect(screen.getByText('Select Bar')).toBeInTheDocument();
        });

        expect(signOutSpy).not.toHaveBeenCalled();
    });
});
