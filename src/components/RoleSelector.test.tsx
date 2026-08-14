import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RoleSelector from '../components/RoleSelector';
import { JOB_TITLES } from '../constants';

describe('RoleSelector', () => {
  it('renders all job titles', () => {
    render(<RoleSelector onSelect={() => {}} />);
    JOB_TITLES.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  // Owner/Manager are privilege tiers, not self-selectable job
  // titles — granting either from this list would let any joiner
  // self-escalate. Owner is auto-assigned via the isNewBar path
  // below; Manager only comes from promotion by an existing Manager+.
  it('does not offer Owner or Manager as self-selectable job titles', () => {
    render(<RoleSelector onSelect={() => {}} />);
    expect(screen.queryByText('Owner')).not.toBeInTheDocument();
    expect(screen.queryByText('Manager')).not.toBeInTheDocument();
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
    const roleItem = screen.getByText(JOB_TITLES[0]);
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

    expect(handleSelect).toHaveBeenCalledWith(JOB_TITLES[0], 'Steve');
  });

  it('skips the job-title picker and auto-assigns Owner for a newly created bar', async () => {
    const handleSelect = vi.fn();
    const { container } = render(<RoleSelector onSelect={handleSelect} isNewBar />);

    expect(screen.getByText(/You Own This Bar/i)).toBeInTheDocument();
    // No job-title list in this mode.
    JOB_TITLES.forEach(title => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });

    const input = container.querySelector('md-filled-text-field');
    if (!input) throw new Error('Input not found');
    await act(async () => {
        (input as any).value = 'Steve';
        fireEvent.input(input);
    });

    const button = container.querySelector('md-filled-button');
    if (!button) throw new Error('Button not found');
    await waitFor(() => {
        expect(button).not.toHaveAttribute('disabled');
    });
    await act(async () => {
        fireEvent.click(button);
    });

    expect(handleSelect).toHaveBeenCalledWith('Owner', 'Steve');
  });
});
