import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BarSearch from '../components/BarSearch';

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

  it('searches OpenStreetMap and displays results', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ([
        { place_id: 1, osm_id: 123, name: 'Test Bar', display_name: 'Test Bar, Main St', lat: '0', lon: '0' }
      ])
    });

    const handleJoin = vi.fn();
    const { container } = render(<BarSearch onJoin={handleJoin} />);

    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    // Use fireEvent for custom element input as userEvent has known issues in JSDOM with shadow DOM
    await act(async () => {
        (input as any).value = 'Tes';
        fireEvent.input(input);
    });

    // Wait for debounce (500ms) + fetch
    await waitFor(() => {
        expect(fetchMock).toHaveBeenCalled();
    }, { timeout: 1000 });

    // Check result rendering
    await waitFor(() => {
        expect(screen.getByText('Test Bar')).toBeInTheDocument();
    });

    // Click result
    const resultItem = screen.getByText('Test Bar').closest('md-list-item');
    if (!resultItem) throw new Error('Result item not found');

    await act(async () => {
        fireEvent.click(resultItem);
    });

    expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
        id: '123',
        name: 'Test Bar',
        status: 'verified'
    }));
  });

  it('switches to create mode', async () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);
    // Select the mode toggle button (initially outlined)
    const createBtn = screen.getAllByText('Create').find(el => el.tagName.toLowerCase() === 'md-outlined-button');
    if (!createBtn) throw new Error('Create button not found');

    await act(async () => {
        fireEvent.click(createBtn);
    });

    await waitFor(() => {
        // Find by required attribute since label isn't reflecting
        const input = container.querySelector('md-filled-text-field[required]');
        expect(input).toBeInTheDocument();
        // Now the mode toggle should be filled
        const activeBtns = screen.getAllByText('Create').filter(el => el.tagName.toLowerCase() === 'md-filled-button');
        // There will be 2 filled buttons: one for submit, one for mode.
        expect(activeBtns.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('calls onJoin when creating a bar with required fields', async () => {
    const handleJoin = vi.fn();

    const { container } = render(<BarSearch onJoin={handleJoin} />);

    // Switch to create mode
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
    // 0: Name, 1: Address, 2: City, 3: State, 4: Zip, 5: Phone
    const nameInput = inputs[0];
    const zipInput = inputs[4];

    await act(async () => {
        (nameInput as any).value = 'My Bar';
        fireEvent.input(nameInput);
        (zipInput as any).value = '90210';
        fireEvent.input(zipInput);
    });

    // Submit
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
