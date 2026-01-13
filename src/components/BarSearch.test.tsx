import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BarSearch from '../components/BarSearch';
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

// Mock fetch
const fetchMock = vi.fn();
global.fetch = fetchMock;

describe('BarSearch', () => {
  it('renders search mode by default', () => {
    render(<BarSearch onJoin={() => {}} />);

    // Check that "Search" is the filled button (active)
    const searchBtn = screen.getByText('Search');
    expect(searchBtn.tagName.toLowerCase()).toBe('md-filled-button');

    // "Create" should be outlined (inactive)
    const createBtn = screen.getByText('Create');
    expect(createBtn.tagName.toLowerCase()).toBe('md-outlined-button');
  });

  it('searches OpenStreetMap AND Firebase and displays merged results', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ([
        { place_id: 1, osm_id: 123, name: 'Test Bar', display_name: 'Test Bar, Main St', lat: '0', lon: '0' }
      ])
    });

    // Mock Firestore response
    (getDocs as any).mockResolvedValue({
        docs: [
            {
                id: 'fb_1',
                data: () => ({ name: 'Firebase Bar', city: 'FB City', state: 'FB' })
            }
        ]
    });

    const handleJoin = vi.fn();
    const { container } = render(<BarSearch onJoin={handleJoin} />);

    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    await act(async () => {
        (input as any).value = 'Tes';
        fireEvent.input(input);
    });

    // Wait for debounce (500ms) + fetch
    await waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
        expect(getDocs).toHaveBeenCalled();
    }, { timeout: 1000 });

    // Check result rendering
    await waitFor(() => {
        expect(screen.getByText('Test Bar')).toBeInTheDocument(); // OSM result
        expect(screen.getByText('Firebase Bar')).toBeInTheDocument(); // Firebase result
    });
  });

  it('switches to create mode', async () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);
    const createBtn = screen.getAllByText('Create').find(el => el.tagName.toLowerCase() === 'md-outlined-button');
    if (!createBtn) throw new Error('Create button not found');

    await act(async () => {
        fireEvent.click(createBtn);
    });

    await waitFor(() => {
        const input = container.querySelector('md-filled-text-field[required]');
        expect(input).toBeInTheDocument();
        const activeBtns = screen.getAllByText('Create').filter(el => el.tagName.toLowerCase() === 'md-filled-button');
        expect(activeBtns.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('calls onJoin when creating a bar with required fields', async () => {
    const handleJoin = vi.fn();
    const { container } = render(<BarSearch onJoin={handleJoin} />);
    const createBtn = screen.getAllByText('Create').find(el => el.tagName.toLowerCase() === 'md-outlined-button');
    if (!createBtn) throw new Error('Create button not found');

    await act(async () => {
        fireEvent.click(createBtn);
    });

    await waitFor(() => {
        const input = container.querySelector('md-filled-text-field[required]');
        expect(input).toBeInTheDocument();
    });

    const inputs = container.querySelectorAll('md-filled-text-field');
    const nameInput = inputs[0];
    const zipInput = inputs[4];

    await act(async () => {
        (nameInput as any).value = 'My Bar';
        fireEvent.input(nameInput);
        (zipInput as any).value = '90210';
        fireEvent.input(zipInput);
    });

    const form = container.querySelector('form');
    if (!form) throw new Error('Form not found');

    await act(async () => {
        fireEvent.submit(form);
    });

    expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
      name: 'My Bar',
      zip: '90210',
      status: 'verified',
      type: 'bar'
    }));
  });
});
