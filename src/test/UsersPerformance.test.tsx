import { render, waitFor, fireEvent, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

// Mocks
const mockUser = { uid: 'test-user', email: 'test@example.com' };

const { collectionSpy, querySpy, whereSpy, orderBySpy, limitSpy, onSnapshotSpy } = vi.hoisted(() => ({
  collectionSpy: vi.fn((db, name) => ({ type: 'collection', name, path: name })),
  querySpy: vi.fn((...args) => ({ type: 'query', args })),
  whereSpy: vi.fn((field, op, val) => ({ type: 'where', field, op, val })),
  orderBySpy: vi.fn((field, dir) => ({ type: 'orderBy', field, dir })),
  limitSpy: vi.fn((n) => ({ type: 'limit', n })),
  onSnapshotSpy: vi.fn(),
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
  signOut: vi.fn(),
  deleteUser: vi.fn(),
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
      onSnapshotSpy(q);
      if (typeof cb === 'function') {
           if (q && q.type === 'doc') {
               cb({
                   exists: () => true,
                   data: () => ({ role: 'Manager', status: 'active', name: 'Test Bar' }),
                   id: 'test-user'
               });
           } else {
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

vi.mock('../hooks/useLatestRelease', () => ({
  useLatestRelease: () => ({ downloadUrl: 'http://example.com/app.apk', loading: false }),
}));

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

describe('Users Query Performance', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.setItem('barId', 'test-bar-id');
  });

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  it('maintains restricted query when Bar Manager is opened', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(onSnapshotSpy).toHaveBeenCalled());
    onSnapshotSpy.mockClear();

    // Open Manager
    let manageBtn = screen.queryByText('Manage Bar');
    if (!manageBtn) {
        const menuIcon = screen.getByText('menu');
        fireEvent.click(menuIcon);
        manageBtn = await screen.findByText('Manage Bar');
    }
    if (!manageBtn) {
         const btns = screen.queryAllByText('Manage Bar');
         if(btns.length > 0) manageBtn = btns[0];
    }
    if(manageBtn) fireEvent.click(manageBtn);

    // Check dialog is open using the added testid
    const dialog = await screen.findByTestId('bar-manager-dialog');
    await waitFor(() => expect(dialog).toHaveAttribute('open'));

    // Assert NO extended query
    const calls = onSnapshotSpy.mock.calls;
    const extendedCalls = calls.filter(args => {
        const q = args[0];
        if (q.type !== 'query') return false;
        const constraints = q.args.slice(1);
        const statusWhere = constraints.find((c: any) => c.type === 'where' && c.field === 'status');
        return statusWhere && statusWhere.val.includes('off_clock');
    });
    expect(extendedCalls.length).toBe(0);

    // Verify it IS using the default query (active/pending)
    const defaultCalls = calls.filter(args => {
        const q = args[0];
        // We expect NO new query call for users actually, because dependency didn't change!
        // But if we want to be sure what the current subscription is, we rely on the fact that
        // onSnapshot was NOT called with the extended query.
        return true;
    });

    // Cleanup - Close using test id to be polite
    const closeBtn = await screen.findByTestId('bar-manager-close');
    fireEvent.click(closeBtn);
    await waitFor(() => {
         expect(dialog).not.toHaveAttribute('open');
    });
  });
});
