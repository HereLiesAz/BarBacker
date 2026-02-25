import { render, fireEvent, act, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import BarSearch, { SEARCH_DEBOUNCE_MS } from '../components/BarSearch';

// Mock Firebase
vi.mock('../firebase', () => ({
  db: {},
}));

vi.mock('firebase/firestore', async () => {
    const actual = await vi.importActual('firebase/firestore');
    return {
        ...actual,
        collection: vi.fn(),
        query: vi.fn(),
        where: vi.fn(),
        getDocs: vi.fn(), // Will be mocked per test
        limit: vi.fn(),
        orderBy: vi.fn(),
        startAt: vi.fn(),
        endAt: vi.fn(),
    };
});

import { getDocs } from 'firebase/firestore';

describe('BarSearch Incremental Rendering', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders Firebase results immediately before OSM results arrive', async () => {
    // Create controlled promises
    let resolveFetch: (val: any) => void;
    const fetchPromise = new Promise(resolve => { resolveFetch = resolve; });

    let resolveFirestore: (val: any) => void;
    const firestorePromise = new Promise(resolve => { resolveFirestore = resolve; });

    // Mock fetch and Firestore
    vi.spyOn(global, 'fetch').mockReturnValue(fetchPromise as any);
    (getDocs as any).mockReturnValue(firestorePromise);

    const { container } = render(<BarSearch onJoin={() => {}} />);

    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    // Type query
    await act(async () => {
        (input as any).value = 'TestQuery';
        fireEvent.input(input);
    });

    // Advance timer to trigger search
    await act(async () => {
        vi.advanceTimersByTime(SEARCH_DEBOUNCE_MS);
    });

    // Resolve Firebase only
    const fbData = [{ data: () => ({ name: 'Firebase Bar', city: 'City', state: 'State' }), id: 'fb1' }];
    await act(async () => {
        resolveFirestore!({ docs: fbData });
    });

    // With incremental rendering, results should be visible immediately after Firebase resolves,
    // even if the fetchPromise (OSM) is still pending.

    // Check if Firebase result is visible
    const fbResult = screen.queryByText('Firebase Bar');

    // Assert that the Firebase result is displayed immediately
    expect(fbResult).toBeInTheDocument();

    // Now resolve OSM
    const osmData = [{ place_id: 'osm1', osm_id: 'osm1', display_name: 'OSM Bar, City', name: 'OSM Bar' }];
    await act(async () => {
        resolveFetch!({ json: async () => osmData });
    });

    // Now both should be visible
    expect(screen.getByText('Firebase Bar')).toBeInTheDocument();
    expect(screen.getByText('OSM Bar')).toBeInTheDocument();
  });
});
