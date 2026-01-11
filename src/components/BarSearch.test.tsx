import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BarSearch from '../components/BarSearch';

// Mock fetch
global.fetch = vi.fn();

describe('BarSearch', () => {
  it('renders search mode by default', () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);
    // Check for the "Search" button being active (filled)
    const searchBtn = screen.getByText('Search').closest('md-filled-button');
    expect(searchBtn).toBeInTheDocument();
  });

  it('switches to create mode', async () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);
    // Find "Create Temp" button (initially inactive/outlined)
    const createBtn = screen.getByText('Create Temp');
    expect(createBtn).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(createBtn);
    });

    await waitFor(() => {
        // "Create Bar" submit button should appear
        const submitBtn = screen.getByText('Create Bar');
        expect(submitBtn).toBeInTheDocument();
    });
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

    // Fill form
    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    await act(async () => {
        (input as any).value = 'My Bar';
        fireEvent.input(input);
    });

    // Submit
    const form = container.querySelector('form');
    if (form) {
       await act(async () => {
         fireEvent.submit(form);
       });
    } else {
       // fallback
       const button = screen.getByText('Create Bar');
       fireEvent.click(button);
    }

    expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
      name: 'My Bar',
      status: 'temporary'
    }));
  });
});
