import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CalendarView } from './CalendarView';
import { CalendarEvent } from '../types';

const mockOnClose = vi.fn();
const mockOnCreate = vi.fn(() => Promise.resolve());
const mockOnUpdate = vi.fn(() => Promise.resolve());
const mockOnDelete = vi.fn(() => Promise.resolve());

const localEvent: CalendarEvent = {
  id: 'e1', title: 'Friday Shift', start: '2026-01-01T18:00:00.000Z', end: '2026-01-01T23:00:00.000Z', type: 'shift',
};
const externalEvent: CalendarEvent = {
  id: 'e2', title: 'Synced Booking', start: '2026-01-02T18:00:00.000Z', end: '2026-01-02T20:00:00.000Z',
  type: 'booking', externalProvider: 'google', externalId: 'g1',
};

function renderView(overrides: Partial<React.ComponentProps<typeof CalendarView>> = {}) {
  return render(
    <CalendarView
      open={true}
      onClose={mockOnClose}
      events={[localEvent, externalEvent]}
      isManagerPlus={true}
      onCreate={mockOnCreate}
      onUpdate={mockOnUpdate}
      onDelete={mockOnDelete}
      {...overrides}
    />
  );
}

describe('CalendarView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders events with title and shows a synced badge for externally-owned ones', () => {
    renderView();
    expect(screen.getByText('Friday Shift')).toBeInTheDocument();
    expect(screen.getByText('Synced Booking')).toBeInTheDocument();
    expect(screen.getByText(/synced from google/i)).toBeInTheDocument();
  });

  it('shows Edit/Delete for a local event but not for an externally-owned one', () => {
    renderView();
    // Local event gets both; external event gets neither.
    expect(screen.getAllByText('Edit').length).toBe(1);
    expect(screen.getAllByText('Delete').length).toBe(1);
  });

  it('hides Add Event and Edit/Delete entirely for non-Manager+ viewers', () => {
    renderView({ isManagerPlus: false });
    expect(screen.queryByText('Add Event')).not.toBeInTheDocument();
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });

  it('shows an empty state with no events', () => {
    renderView({ events: [] });
    expect(screen.getByText('No events.')).toBeInTheDocument();
  });

  it('calls onDelete for the right event', () => {
    renderView();
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith('e1');
  });

  it('opens the add-event form and creates an event on save', async () => {
    const { container } = renderView();
    fireEvent.click(screen.getByText('Add Event'));

    const titleField = container.querySelector('md-filled-text-field') as any;
    titleField.value = 'New Event';
    fireEvent.input(titleField);

    fireEvent.click(screen.getByText('Save'));
    expect(mockOnCreate).toHaveBeenCalled();
    const [payload] = mockOnCreate.mock.calls[0];
    expect(payload.title).toBe('New Event');
    expect(payload.type).toBe('event');
  });
});
