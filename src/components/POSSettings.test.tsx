import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POSSettings } from './POSSettings';
import { POSConnectionStatus, POSMenuItem } from '../types';

const mockOnClose = vi.fn();
const mockOnConnectSquare = vi.fn(() => Promise.resolve());
const mockOnConnectToast = vi.fn(() => Promise.resolve());
const mockOnDisconnect = vi.fn(() => Promise.resolve());
const mockOnSyncMenu = vi.fn(() => Promise.resolve({ data: { count: 3 } }));
const mockOnGetSales = vi.fn(() => Promise.resolve({ grossCents: 12345, orderCount: 7 }));

function renderSettings(connections: Record<string, POSConnectionStatus> = {}, menu: POSMenuItem[] = []) {
  return render(
    <POSSettings
      open={true}
      onClose={mockOnClose}
      connections={connections}
      menu={menu}
      onConnectSquare={mockOnConnectSquare}
      onConnectToast={mockOnConnectToast}
      onDisconnect={mockOnDisconnect}
      onSyncMenu={mockOnSyncMenu}
      onGetSales={mockOnGetSales}
    />
  );
}

describe('POSSettings', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders available providers as actionable and the rest as coming soon', () => {
    renderSettings();
    expect(screen.getByText('Square')).toBeInTheDocument();
    expect(screen.getByText('Toast')).toBeInTheDocument();
    expect(screen.getByText('Connect Square')).toBeInTheDocument();
    expect(screen.getAllByText(/coming soon/i).length).toBe(8);
  });

  it('calls onConnectSquare when Connect Square is clicked', async () => {
    renderSettings();
    fireEvent.click(screen.getByText('Connect Square'));
    await waitFor(() => expect(mockOnConnectSquare).toHaveBeenCalled());
  });

  it('shows the Toast credential form and only enables Connect once all fields are filled', async () => {
    const { container } = renderSettings();
    await waitFor(() => expect(screen.getByText('Connect Toast')).toHaveAttribute('disabled'));

    const fields = Array.from(container.querySelectorAll('md-filled-text-field')) as any[];
    const clientIdField = fields.find((f) => f.label === 'Client ID');
    const clientSecretField = fields.find((f) => f.label === 'Client Secret');
    const guidField = fields.find((f) => f.label === 'Restaurant GUID');

    clientIdField.value = 'id-1'; fireEvent.input(clientIdField);
    clientSecretField.value = 'secret-1'; fireEvent.input(clientSecretField);
    guidField.value = 'guid-1'; fireEvent.input(guidField);

    await waitFor(() => expect(screen.getByText('Connect Toast')).not.toHaveAttribute('disabled'));
  });

  it('submits the Toast form values on connect', async () => {
    const { container } = renderSettings();
    const fields = Array.from(container.querySelectorAll('md-filled-text-field')) as any[];
    fields.find((f) => f.label === 'Client ID')!.value = 'id-1';
    fireEvent.input(fields.find((f) => f.label === 'Client ID')!);
    fields.find((f) => f.label === 'Client Secret')!.value = 'secret-1';
    fireEvent.input(fields.find((f) => f.label === 'Client Secret')!);
    fields.find((f) => f.label === 'Restaurant GUID')!.value = 'guid-1';
    fireEvent.input(fields.find((f) => f.label === 'Restaurant GUID')!);

    fireEvent.click(screen.getByText('Connect Toast'));
    await waitFor(() => expect(mockOnConnectToast).toHaveBeenCalledWith('id-1', 'secret-1', 'guid-1'));
  });

  it('shows connected status and sync/insights/disconnect actions for a connected provider', () => {
    renderSettings({ square: { provider: 'square', connected: true, merchantId: 'merch-1' } });
    expect(screen.getByText(/Connected — merch-1/)).toBeInTheDocument();
    expect(screen.getByText('Sync Menu')).toBeInTheDocument();
    expect(screen.getByText('View 7-Day Insights')).toBeInTheDocument();
    expect(screen.getByText('Disconnect')).toBeInTheDocument();
  });

  it('shows a connection error when present', () => {
    renderSettings({ square: { provider: 'square', connected: false, error: 'Token exchange failed.' } });
    expect(screen.getByText('Token exchange failed.')).toBeInTheDocument();
  });

  it('calls onDisconnect for the right provider', async () => {
    renderSettings({ square: { provider: 'square', connected: true, merchantId: 'merch-1' } });
    fireEvent.click(screen.getByText('Disconnect'));
    await waitFor(() => expect(mockOnDisconnect).toHaveBeenCalledWith('square'));
  });

  it('displays sales insights after fetching them', async () => {
    renderSettings({ square: { provider: 'square', connected: true, merchantId: 'merch-1' } });
    fireEvent.click(screen.getByText('View 7-Day Insights'));
    await waitFor(() => expect(screen.getByText(/123.45/)).toBeInTheDocument());
    expect(screen.getByText(/7 orders/)).toBeInTheDocument();
  });
});
