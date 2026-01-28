import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BarSearch from './BarSearch';

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
        getDocs: vi.fn().mockReturnValue(new Promise(() => {})), // Never resolve to keep loading state
        limit: vi.fn(),
        orderBy: vi.fn(),
        startAt: vi.fn(),
        endAt: vi.fn(),
    };
});

// Mock fetch to never resolve
const fetchMock = vi.fn().mockReturnValue(new Promise(() => {}));
global.fetch = fetchMock;

describe('BarSearch Performance', () => {
  it('renders redundant progress indicators during search', async () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);

    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    // Type query > 2 chars to trigger search
    await act(async () => {
        (input as any).value = 'TestQuery';
        fireEvent.input(input);
    });

    // Wait for the debounce timeout (500ms) to trigger the effect and set isSearching=true
    await waitFor(() => {
        const progressBars = container.querySelectorAll('md-circular-progress');
        // We expect 2 currently: 1 in input, 1 below
        expect(progressBars.length).toBe(2);
    }, { timeout: 2000 });
  });
});
