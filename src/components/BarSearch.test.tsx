import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BarSearch from '../components/BarSearch';

// Mock fetch
global.fetch = vi.fn();

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

  it('switches to create mode', async () => {
    render(<BarSearch onJoin={() => {}} />);
    const createBtn = screen.getByText('Create Temp');

    await act(async () => {
      fireEvent.click(createBtn);
    });

    await waitFor(() => {
        // "Create Bar" submit button should appear
        expect(screen.getByText('Create Bar')).toBeInTheDocument();

        // Check that "Create Temp" is now filled
        const activeBtn = screen.getByText('Create Temp');
        expect(activeBtn.tagName.toLowerCase()).toBe('md-filled-button');
    });
  });

  it('calls onJoin when creating a temp bar with default type', async () => {
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

    // Fill form
    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    await act(async () => {
        (input as any).value = 'My Bar';
        fireEvent.input(input);
    });

    // Submit form explicitly since custom element button click might not trigger it in JSDOM
    const form = container.querySelector('form');
    if (!form) throw new Error('Form not found');

    await act(async () => {
        fireEvent.submit(form);
    });

    expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
      name: 'My Bar',
      status: 'temporary',
      type: 'bar' // default
    }));
  });

  it('calls onJoin when creating a temp restaurant', async () => {
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

    // Fill form
    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    await act(async () => {
        (input as any).value = 'My Restaurant';
        fireEvent.input(input);
    });

    // Select "Restaurant" radio
    const restaurantLabel = screen.getByText('Restaurant');
    await act(async () => {
        fireEvent.click(restaurantLabel);
    });

    // Submit form explicitly
    const form = container.querySelector('form');
    if (!form) throw new Error('Form not found');

    await act(async () => {
        fireEvent.submit(form);
    });

    expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
      name: 'My Restaurant',
      status: 'temporary',
      type: 'restaurant'
    }));
  });
});
