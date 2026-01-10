import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RoleSelector from '../components/RoleSelector';
import { ROLES } from '../constants';

describe('RoleSelector', () => {
  it('renders all roles', () => {
    render(<RoleSelector onSelect={() => {}} />);
    ROLES.forEach(role => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
  });

  it('disables clock in button initially', () => {
    const { container } = render(<RoleSelector onSelect={() => {}} />);
    const button = container.querySelector('md-filled-button');
    expect(button).toHaveAttribute('disabled');
  });

  it('enables clock in button when role and name are selected', async () => {
    const handleSelect = vi.fn();
    const { container } = render(<RoleSelector onSelect={handleSelect} />);

    // Enter name
    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');

    Object.defineProperty(input, 'value', { value: 'Steve', writable: true });
    await act(async () => {
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
    });

    // Select role
    const roleItem = screen.getByText(ROLES[0]);
    await act(async () => {
        fireEvent.click(roleItem);
    });

    // Click clock in
    const button = container.querySelector('md-filled-button');
    if (!button) throw new Error('Button not found');

    // Verify button is enabled
    expect(button).not.toHaveAttribute('disabled');

    await act(async () => {
        fireEvent.click(button);
    });

    expect(handleSelect).toHaveBeenCalledWith(ROLES[0], 'Steve');
  });
});
