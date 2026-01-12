import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RoleSelector from '../components/RoleSelector';
import { ROLES } from '../constants';

describe('RoleSelector', () => {
  it('renders all roles', () => {
    render(<RoleSelector onSelect={() => {}} />);
    ROLES.forEach(role => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
    // Explicitly check for "Owner" since it was added
    expect(screen.getByText('Owner')).toBeInTheDocument();
  });

  it('disables clock in button initially', () => {
    const { container } = render(<RoleSelector onSelect={() => {}} />);
    const button = container.querySelector('md-filled-button');
    expect(button).toHaveProperty('disabled', true);
  });

  it('enables clock in button when role and name are selected', async () => {
    const handleSelect = vi.fn();
    const { container } = render(<RoleSelector onSelect={handleSelect} />);

    // Enter name
    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    // Simulate user input on custom element
    await act(async () => {
        (input as any).value = 'Steve';
        fireEvent.input(input);
    });

    // Select role
    const roleItem = screen.getByText(ROLES[0]);
    await act(async () => {
        fireEvent.click(roleItem);
    });

    // Click clock in
    const button = container.querySelector('md-filled-button');
    if (!button) throw new Error('Button not found');

    // Wait for the button to be enabled after state updates, then assert
    await waitFor(() => {
        expect(button).not.toHaveAttribute('disabled');
    });

    await act(async () => {
        fireEvent.click(button);
    });

    expect(handleSelect).toHaveBeenCalledWith(ROLES[0], 'Steve');
  });
});
