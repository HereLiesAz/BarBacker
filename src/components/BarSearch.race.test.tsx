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

describe('BarSearch Race Condition', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('ignores stale search results when query changes rapidly', async () => {
    let resolveFetch1: (val: any) => void;
    let resolveFetch2: (val: any) => void;

    const promise1 = new Promise(resolve => { resolveFetch1 = resolve; });
    const promise2 = new Promise(resolve => { resolveFetch2 = resolve; });

    const fetchMock = vi.spyOn(global, 'fetch')
        .mockReturnValueOnce(promise1 as any)
        .mockReturnValueOnce(promise2 as any);

    (getDocs as any).mockResolvedValue({ docs: [] });

    const { container } = render(<BarSearch onJoin={() => {}} />);
    const input = container.querySelector('md-filled-text-field');

    // --- Search 1 ---
    await act(async () => {
        (input as any).value = 'first';
        fireEvent.input(input);
    });

    await act(async () => {
        vi.advanceTimersByTime(SEARCH_DEBOUNCE_MS);
    });

    // --- Search 2 ---
    await act(async () => {
        (input as any).value = 'second';
        fireEvent.input(input);
    });

    await act(async () => {
        vi.advanceTimersByTime(SEARCH_DEBOUNCE_MS);
    });

    expect(fetchMock).toHaveBeenCalledTimes(2);

    // Resolve Search 2 (Latest) FIRST
    await act(async () => {
        resolveFetch2!({
            json: async () => ([
                { place_id: 2, osm_id: 222, display_name: 'Second Result', lat: '0', lon: '0' }
            ])
        });
    });

    // Check that Search 2 is displayed
    expect(screen.getAllByText('Second Result').length).toBeGreaterThan(0);

    // Resolve Search 1 (Stale) LAST
    await act(async () => {
        resolveFetch1!({
            json: async () => ([
                { place_id: 1, osm_id: 111, display_name: 'First Result', lat: '0', lon: '0' }
            ])
        });
    });

    // If race condition exists, "First Result" will overwrite "Second Result".
    // We expect the stale result ("First Result") to NOT be visible.
    // And "Second Result" SHOULD still be visible.

    const firstResults = screen.queryAllByText('First Result');
    const secondResults = screen.queryAllByText('Second Result');

    // To verify we have reproduced the bug, we expect this expectation to FAIL initially.
    // The current buggy code should show First Result and hide Second Result (because it overwrites).

    if (firstResults.length > 0) {
        console.log('Race condition detected: Stale result overwrote latest result.');
        throw new Error('Race condition detected: Stale result overwrote latest result.');
    }

    expect(secondResults.length).toBeGreaterThan(0);
  });
});
