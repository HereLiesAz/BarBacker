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

    // "Create Temp" should be outlined (inactive)
    const createBtn = screen.getByText('Create Temp');
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
    const createBtn = screen.getByText('Create Temp');

    await act(async () => {
        fireEvent.click(createBtn);
    });

    await waitFor(() => {
        expect(screen.getByText('Create Bar')).toBeInTheDocument();
        const activeBtn = screen.getByText('Create Temp');
        expect(activeBtn.tagName.toLowerCase()).toBe('md-filled-button');
    });

    // Note: The text field in 'create' mode doesn't have name="name" in the component implementation,
    // it just has label="Bar Name". So we select by tag.
    const input = container.querySelector('md-filled-text-field');
    expect(input).toBeInTheDocument();
  });

  it('calls onJoin when creating a temp bar', async () => {
    const handleJoin = vi.fn();

    const { container } = render(<BarSearch onJoin={handleJoin} />);

    // Switch to create mode
    const createBtn = screen.getByText('Create Temp');
    await act(async () => {
        fireEvent.click(createBtn);
    });

    await waitFor(() => {
        expect(screen.getByText('Create Bar')).toBeInTheDocument();
    });

    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    await act(async () => {
        (input as any).value = 'My Bar';
        fireEvent.input(input);
    });

    // Submit
    const form = container.querySelector('form');
    if (!form) throw new Error('Form not found');

    await act(async () => {
        fireEvent.submit(form);
    });

    expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
      name: 'My Bar',
      status: 'temporary',
      type: 'bar'
    }));
  });
});
