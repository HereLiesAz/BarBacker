import { render, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import BarSearch, { SEARCH_DEBOUNCE_MS } from './BarSearch';

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

describe('BarSearch Performance', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders optimized progress indicators during search', async () => {
    // Create controlled promises that we can resolve later
    let resolveFetch: (val: any) => void;
    const fetchPromise = new Promise(resolve => { resolveFetch = resolve; });

    let resolveFirestore: (val: any) => void;
    const firestorePromise = new Promise(resolve => { resolveFirestore = resolve; });

    // Mock fetch and Firestore to return these pending promises
    const fetchMock = vi.spyOn(global, 'fetch').mockReturnValue(fetchPromise as any);
    (getDocs as any).mockReturnValue(firestorePromise);

    const { container, getByTestId } = render(<BarSearch onJoin={() => {}} />);

    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    // Type query > 2 chars to trigger search
    await act(async () => {
        (input as any).value = 'TestQuery';
        fireEvent.input(input);
    });

    // Advance timer to trigger the debounce effect, using the constant
    await act(async () => {
        vi.advanceTimersByTime(SEARCH_DEBOUNCE_MS);
    });

    // The component sets isSearching=true immediately when the timeout fires,
    // BEFORE awaiting the promises. So we can check for spinners now.

    // We expect 1 main spinner with the test ID
    const mainProgress = getByTestId('search-progress');
    expect(mainProgress).toBeInTheDocument();

    // Check total count including the one inside the input
    // The one in the input is in a slot, we'll still query all to ensure no extras
    const allProgressBars = container.querySelectorAll('md-circular-progress');
    expect(allProgressBars.length).toBe(2);

    expect(fetchMock).toHaveBeenCalled();

    // Clean up by resolving the promises so the test can finish gracefully
    await act(async () => {
        resolveFetch!({ json: async () => [] });
        resolveFirestore!({ docs: [] });
    });
  });
});
