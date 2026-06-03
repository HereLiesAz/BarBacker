import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EightySixDialog from './EightySixDialog';
import type { EightySixEntry } from '../types';

const mockEntries: EightySixEntry[] = [
  {
    id: '1',
    patronName: 'John Doe',
    submittedBy: 'user1',
    submitterName: 'Manager Mike',
    visibility: 'public',
    timestamp: { toDate: () => new Date('2026-01-15'), seconds: 0 } as any,
  },
  {
    id: '2',
    patronName: 'Jane Smith',
    submittedBy: 'user2',
    submitterName: 'Manager Mike',
    reason: 'Aggressive behavior',
    visibility: 'private',
    timestamp: { toDate: () => new Date('2026-01-16'), seconds: 0 } as any,
  },
];

describe('EightySixDialog', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    entries: mockEntries,
    onAdd: vi.fn().mockResolvedValue(undefined),
    onDelete: vi.fn().mockResolvedValue(undefined),
    isPremium: false,
    userRole: 'Bartender' as string | null,
    currentUserId: 'user3',
  };

  it('renders public entries for all users', () => {
    render(<EightySixDialog {...defaultProps} entries={[mockEntries[0]]} />);
    expect(screen.getByText('John Doe')).toBeDefined();
    expect(screen.getByText(/Manager Mike/)).toBeDefined();
  });

  it('shows upsell banner for free-tier users', () => {
    render(<EightySixDialog {...defaultProps} />);
    expect(screen.getByText(/Upgrade to Premium/)).toBeDefined();
  });

  it('hides upsell banner for premium users', () => {
    render(<EightySixDialog {...defaultProps} isPremium={true} userRole="Owner" />);
    expect(screen.queryByText(/Upgrade to Premium/)).toBeNull();
  });

  it('shows add button only for Owner/Manager', () => {
    const { rerender } = render(<EightySixDialog {...defaultProps} userRole="Bartender" />);
    expect(screen.queryByText('Add Person')).toBeNull();

    rerender(<EightySixDialog {...defaultProps} userRole="Owner" />);
    expect(screen.getByText('Add Person')).toBeDefined();

    rerender(<EightySixDialog {...defaultProps} userRole="Manager" />);
    expect(screen.getByText('Add Person')).toBeDefined();
  });

  it('shows private entry details for premium Owner/Manager', () => {
    render(<EightySixDialog {...defaultProps} isPremium={true} userRole="Owner" />);
    expect(screen.getByText('Jane Smith')).toBeDefined();
    expect(screen.getByText('Aggressive behavior')).toBeDefined();
  });

  it('shows empty state when no entries', () => {
    render(<EightySixDialog {...defaultProps} entries={[]} />);
    expect(screen.getByText(/No one on the 86'd list/)).toBeDefined();
  });

  it('shows add form when Add Person is clicked', () => {
    render(<EightySixDialog {...defaultProps} userRole="Owner" />);
    fireEvent.click(screen.getByText('Add Person'));
    expect(screen.getByText('Add')).toBeDefined();
  });

  it('shows private toggle only for premium Owner/Manager in add form', () => {
    render(<EightySixDialog {...defaultProps} userRole="Owner" isPremium={true} />);
    fireEvent.click(screen.getByText('Add Person'));
    expect(screen.getByText(/Private entry/)).toBeDefined();
  });

  it('hides private toggle for non-premium users in add form', () => {
    render(<EightySixDialog {...defaultProps} userRole="Owner" isPremium={false} />);
    fireEvent.click(screen.getByText('Add Person'));
    expect(screen.queryByText(/Private entry/)).toBeNull();
  });
});
