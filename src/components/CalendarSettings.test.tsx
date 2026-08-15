import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CalendarSettings } from './CalendarSettings';

const mockOnClose = vi.fn();
const mockOnConnectGoogle = vi.fn(() => Promise.resolve());
const mockOnListGoogleCalendars = vi.fn(() => Promise.resolve([{ id: 'cal1', summary: 'Main', primary: true }]));
const mockOnSelectGoogleCalendar = vi.fn(() => Promise.resolve());
const mockOnDisconnectGoogle = vi.fn(() => Promise.resolve());
const mockOnAddICalSubscription = vi.fn(() => Promise.resolve());
const mockOnRemoveICalSubscription = vi.fn(() => Promise.resolve());
const mockOnRotateFeedToken = vi.fn(() => Promise.resolve());

function renderSettings(overrides: Partial<React.ComponentProps<typeof CalendarSettings>> = {}) {
  return render(
    <CalendarSettings
      open={true}
      onClose={mockOnClose}
      barId="bar-1"
      googleConnection={null}
      icalSubscriptions={[]}
      feedToken={null}
      onConnectGoogle={mockOnConnectGoogle}
      onListGoogleCalendars={mockOnListGoogleCalendars}
      onSelectGoogleCalendar={mockOnSelectGoogleCalendar}
      onDisconnectGoogle={mockOnDisconnectGoogle}
      onAddICalSubscription={mockOnAddICalSubscription}
      onRemoveICalSubscription={mockOnRemoveICalSubscription}
      onRotateFeedToken={mockOnRotateFeedToken}
      {...overrides}
    />
  );
}

describe('CalendarSettings', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // The feed URL is only ever shown once the deployment declares
    // where /ical/** is actually reachable — see CalendarSettings.tsx.
    vi.stubEnv('VITE_ICAL_FEED_BASE_URL', 'https://example.com');
  });

  it('shows a Connect button when Google is not connected', () => {
    renderSettings();
    expect(screen.getByText('Connect Google Calendar')).toBeInTheDocument();
  });

  it('calls onConnectGoogle when clicked', async () => {
    renderSettings();
    fireEvent.click(screen.getByText('Connect Google Calendar'));
    await waitFor(() => expect(mockOnConnectGoogle).toHaveBeenCalled());
  });

  it('shows connected status and lets a manager pick a calendar', async () => {
    renderSettings({ googleConnection: { provider: 'google', connected: true, calendarId: null } });
    expect(screen.getByText(/Connected/)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Pick Calendar'));
    await waitFor(() => expect(screen.getByText('Main (primary)')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Main (primary)'));
    await waitFor(() => expect(mockOnSelectGoogleCalendar).toHaveBeenCalledWith('cal1'));
  });

  it('shows the generate button with no feed token, then the URL controls once one exists', () => {
    const { rerender } = renderSettings({ feedToken: null });
    expect(screen.getByText('Generate Feed URL')).toBeInTheDocument();

    rerender(
      <CalendarSettings
        open={true} onClose={mockOnClose} barId="bar-1"
        googleConnection={null} icalSubscriptions={[]} feedToken="abc123"
        onConnectGoogle={mockOnConnectGoogle} onListGoogleCalendars={mockOnListGoogleCalendars}
        onSelectGoogleCalendar={mockOnSelectGoogleCalendar} onDisconnectGoogle={mockOnDisconnectGoogle}
        onAddICalSubscription={mockOnAddICalSubscription} onRemoveICalSubscription={mockOnRemoveICalSubscription}
        onRotateFeedToken={mockOnRotateFeedToken}
      />
    );
    expect(screen.getByText(/\/ical\/bar-1\/abc123\.ics/)).toBeInTheDocument();
    expect(screen.getByText('Rotate')).toBeInTheDocument();
    expect(screen.getByText('Revoke')).toBeInTheDocument();
  });

  it('shows a not-configured message instead of a broken link when VITE_ICAL_FEED_BASE_URL is unset', () => {
    vi.stubEnv('VITE_ICAL_FEED_BASE_URL', '');
    renderSettings({ feedToken: 'abc123' });
    expect(screen.getByText(/hasn't configured where the feed is actually served from/)).toBeInTheDocument();
    expect(screen.queryByText('Rotate')).not.toBeInTheDocument();
  });

  it('calls onRotateFeedToken(true) for revoke and (false) for rotate', async () => {
    renderSettings({ feedToken: 'abc123' });
    fireEvent.click(screen.getByText('Rotate'));
    await waitFor(() => expect(mockOnRotateFeedToken).toHaveBeenCalledWith(false));
    fireEvent.click(screen.getByText('Revoke'));
    await waitFor(() => expect(mockOnRotateFeedToken).toHaveBeenCalledWith(true));
  });

  it('lists existing iCal subscriptions and lets a manager remove one', async () => {
    renderSettings({ icalSubscriptions: [{ id: 'sub1', url: 'https://example.com/cal.ics', createdBy: 'u1', createdAt: null as any }] });
    expect(screen.getByText('https://example.com/cal.ics')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Remove'));
    await waitFor(() => expect(mockOnRemoveICalSubscription).toHaveBeenCalledWith('sub1'));
  });

  it('adds a new iCal subscription URL', async () => {
    const { container } = renderSettings();
    const field = container.querySelector('md-filled-text-field') as any;
    field.value = 'https://example.com/new.ics';
    fireEvent.input(field);
    fireEvent.click(screen.getByText('Add'));
    await waitFor(() => expect(mockOnAddICalSubscription).toHaveBeenCalledWith('https://example.com/new.ics'));
  });
});
