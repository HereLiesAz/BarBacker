import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../hooks/useLatestRelease', () => ({
  useLatestRelease: () => ({ downloadUrl: 'http://example.com/app.apk', loading: false }),
}));

// --- Mocks Setup ---

// Spy for property access
let buttonAccessCount = 0;

// Mock User
const mockUser = { uid: 'test-user', email: 'test@example.com' };

// Mock Firestore
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
  doc: vi.fn((db, path, ...segments) => ({ type: 'doc', path: [path, ...segments].join('/') })),
  addDoc: vi.fn(() => Promise.resolve({ id: 'new-doc-id' })),
  setDoc: vi.fn(() => Promise.resolve()),
  getDoc: vi.fn(() => Promise.resolve({ exists: () => true, data: () => ({ name: 'Test Bar' }) })),
  updateDoc: vi.fn(() => Promise.resolve()),
  deleteDoc: vi.fn(() => Promise.resolve()),
  onSnapshot: vi.fn((q, cb) => {
      // Mock Requests
      if (q && q.args && q.args[0] && q.args[0].name === 'requests') {
          const requests = [
              {
                  id: 'req1',
                  data: () => ({
                      barId: 'test-bar-id',
                      label: 'UNKNOWN_REQUEST', // Will cause iteration over all buttons
                      status: 'pending',
                      requesterId: 'user2',
                      timestamp: { seconds: 1000 },
                      lastNotification: { seconds: 1000 }
                  })
              }
          ];
          cb({ docs: requests });
          return () => {};
      }

      // Mock User (Self)
      if (q && q.type === 'doc' && q.path.includes('users/test-user')) {
           cb({
               exists: () => true,
               data: () => ({
                   role: 'Bartender',
                   status: 'active',
                   displayName: 'Test User',
                   notificationPreferences: []
               }),
               id: 'test-user'
           });
           return () => {};
      }

      // Mock Bar
      if (q && q.type === 'doc' && q.path.includes('bars/test-bar-id')) {
           cb({
               exists: () => true,
               data: () => ({
                   name: 'Test Bar',
                   // Inject spy button
                   buttons: [
                       {
                           id: 'spy_btn',
                           get label() {
                               buttonAccessCount++;
                               return 'SPY_LABEL';
                           },
                           children: []
                       }
                   ],
                   hiddenButtonIds: ['spy_btn']
               }),
               id: 'test-bar-id'
           });
           return () => {};
      }

      // Default empty for others (allUsers, notices)
      cb({ docs: [] });
      return () => {};
  }),
  query: querySpy,
  where: whereSpy,
  orderBy: orderBySpy,
  limit: limitSpy,
  serverTimestamp: vi.fn(),
  arrayUnion: vi.fn(),
  increment: vi.fn(),
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

// Mock Audio
class MockAudio {
    constructor(src: string) {}
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

// Mock dnd-kit
vi.mock('@dnd-kit/core', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual as any,
        DndContext: ({ children }: any) => <div>{children}</div>,
        DragOverlay: () => null,
    };
});

// Mock Child Components to isolate activeRequests performance
vi.mock('../components/NotificationSettings', () => ({
    default: () => <div data-testid="mock-notification-settings"></div>
}));
vi.mock('../components/BarManager', () => ({
    default: () => <div data-testid="mock-bar-manager"></div>
}));

describe('App Performance Benchmark: Active Requests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.setItem('barId', 'test-bar-id');
    buttonAccessCount = 0;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('avoids recalculating activeRequests on unrelated renders', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // 1. Wait for initial render and data load
    await waitFor(() => {
        expect(screen.getByText('Test User')).toBeInTheDocument();
        // The request 'UNKNOWN_REQUEST' should appear
        expect(screen.getByText('UNKNOWN_REQUEST')).toBeInTheDocument();
    });

    // Allow any pending effects to settle
    await new Promise(resolve => setTimeout(resolve, 100));

    // Reset counter.
    const initialCount = buttonAccessCount;
    console.log(`Initial Button Access Count: ${initialCount}`);
    // Should be > 0 because getting request button ID iterates buttons
    expect(initialCount).toBeGreaterThan(0);

    buttonAccessCount = 0;

    // 2. Trigger an unrelated state update (open menu)
    const menuButton = document.getElementById('menu-anchor');
    expect(menuButton).toBeDefined();

    await act(async () => {
        fireEvent.click(menuButton!);
    });

    // 3. Check if button label was accessed again
    // Without optimization: activeRequests runs -> getButtonIdForLabel runs -> accesses spy button label -> count > 0
    // With optimization: activeRequests uses memo -> count == 0

    console.log(`Button Access Count after re-render: ${buttonAccessCount}`);

    expect(buttonAccessCount).toBe(0);
  });
});
