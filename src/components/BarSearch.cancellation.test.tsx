import { render, fireEvent, act, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import BarSearch, { SEARCH_DEBOUNCE_MS } from './BarSearch';
import { getDocs } from 'firebase/firestore';

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
        getDocs: vi.fn(),
        limit: vi.fn(),
        orderBy: vi.fn(),
        startAt: vi.fn(),
        endAt: vi.fn(),
    };
});

describe('BarSearch Cancellation', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('resets isSearching when switching modes during active search', async () => {
    let resolveFetch: (val: any) => void;
    const fetchPromise = new Promise(resolve => { resolveFetch = resolve; });

    vi.spyOn(global, 'fetch').mockReturnValue(fetchPromise as any);
    (getDocs as any).mockResolvedValue({ docs: [] });

    const { container } = render(<BarSearch onJoin={() => {}} />);
    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    // 1. Start a search
    await act(async () => {
        (input as any).value = 'long query';
        fireEvent.input(input);
    });

    // 2. Advance time to trigger the fetch
    await act(async () => {
        vi.advanceTimersByTime(SEARCH_DEBOUNCE_MS + 100);
    });

    expect(global.fetch).toHaveBeenCalled();
    // Spinner should be visible
    const spinner = container.querySelector('md-circular-progress');
    expect(spinner).toBeTruthy();

    // 3. Switch to 'create' mode
    const createButton = screen.getByText('Create');
    await act(async () => {
        fireEvent.click(createButton);
    });

    // 4. Resolve the fetch while in 'Create' mode
    await act(async () => {
        resolveFetch({
            json: async () => ([])
        });
    });

    // 5. Switch back to 'Search' mode
    const searchButton = screen.getByText('Search');
    await act(async () => {
        fireEvent.click(searchButton);
    });

    // 6. Check if spinner is visible immediately
    // If bug exists, spinner is visible immediately because isSearching stuck at true.
    // If fixed, spinner should NOT be visible yet (waiting for debounce).
    const spinnerAfter = container.querySelector('md-circular-progress');

    // We expect it NOT to be there immediately.
    expect(spinnerAfter).toBeNull();
  });
});
