import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BarSearch from '../components/BarSearch';

// Mock fetch
global.fetch = vi.fn();

describe('BarSearch', () => {
  it('renders search mode by default', () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);
    const searchChip = container.querySelector('md-filter-chip[label="Search"]');
    expect(searchChip).toBeInTheDocument();
  });

  it('switches to create mode', async () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);
    const createChip = container.querySelector('md-filter-chip[label="Create Temp"]');
    if (!createChip) throw new Error('Create chip not found');

    await act(async () => {
      fireEvent.click(createChip);
    });

    await waitFor(() => {
        const button = container.querySelector('md-filled-button');
        expect(button).toBeInTheDocument();
        expect(button?.textContent).toBe('Create Bar');
    });
  });

  it('calls onJoin when creating a temp bar', async () => {
    const handleJoin = vi.fn();
    const { container } = render(<BarSearch onJoin={handleJoin} />);

    // Switch to create mode
    const createChip = container.querySelector('md-filter-chip[label="Create Temp"]');
    if (!createChip) throw new Error('Create chip not found');

    await act(async () => {
      fireEvent.click(createChip);
    });

    await waitFor(() => {
        expect(container.querySelector('md-filled-button')).toBeInTheDocument();
    });

    // Fill form
    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    // Set value
    Object.defineProperty(input, 'value', { value: 'My Bar', writable: true });

    await act(async () => {
      const event = new Event('input', { bubbles: true, cancelable: true });
      input.dispatchEvent(event);
    });

    // Submit
    const form = container.querySelector('form');
    if (form) {
       await act(async () => {
         fireEvent.submit(form);
       });
    } else {
       // fallback
       const button = container.querySelector('md-filled-button');
       if(button) fireEvent.click(button);
    }

    expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
      name: 'My Bar',
      status: 'temporary'
    }));
  });
});
