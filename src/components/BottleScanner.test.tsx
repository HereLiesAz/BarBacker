import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import BottleScanner from './BottleScanner';

const mockTakePhoto = vi.fn();
vi.mock('@capacitor/camera', () => ({
  Camera: { takePhoto: (...args: any[]) => mockTakePhoto(...args) },
}));

const mockRecognizeBottleText = vi.fn();
const mockMatchBrand = vi.fn();
vi.mock('../utils/bottleRecognition', () => ({
  recognizeBottleText: (...args: any[]) => mockRecognizeBottleText(...args),
  matchBrand: (...args: any[]) => mockMatchBrand(...args),
}));

const mockOnAddToMenu = vi.fn();
const mockOnEightySix = vi.fn();
const mockOnSendAlert = vi.fn();
const mockOnClose = vi.fn();

const fakeBlob = new Blob(['fake-photo-bytes'], { type: 'image/jpeg' });

function renderScanner(overrides: Partial<React.ComponentProps<typeof BottleScanner>> = {}) {
  return render(
    <BottleScanner
      open={true}
      onClose={mockOnClose}
      isManagerPlus={true}
      candidates={['Jameson']}
      existingBrands={[]}
      onAddToMenu={mockOnAddToMenu}
      onEightySix={mockOnEightySix}
      onSendAlert={mockOnSendAlert}
      {...overrides}
    />
  );
}

// Drives the component through Take Photo -> fetch(webPath) -> OCR,
// landing on the 'ready' stage with `recognizedBrand` prefilled in
// the Brand field (or blank, if recognizedBrand is null).
async function capturePhoto(recognizedBrand: string | null = 'Jameson') {
  mockTakePhoto.mockResolvedValueOnce({ webPath: 'blob:fake-photo' });
  vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({ blob: () => Promise.resolve(fakeBlob) }));
  mockRecognizeBottleText.mockResolvedValueOnce(['JAMESON IRISH WHISKEY']);
  mockMatchBrand.mockReturnValueOnce(recognizedBrand);

  fireEvent.click(screen.getByText('Take Photo'));
  await waitFor(() => expect(screen.getByText('Send Alert')).toBeInTheDocument());
}

function getField(container: HTMLElement, label: string) {
  return Array.from(container.querySelectorAll('md-filled-text-field')).find((f: any) => f.label === label) as any;
}

describe('BottleScanner', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows a Take Photo button before any capture', () => {
    renderScanner();
    expect(screen.getByText('Take Photo')).toBeInTheDocument();
    expect(screen.queryByText('Send Alert')).not.toBeInTheDocument();
  });

  it('prefills the recognized brand after capture + OCR', async () => {
    const { container } = renderScanner();
    await capturePhoto('Jameson');
    expect(getField(container, 'Brand').value).toBe('Jameson');
  });

  it('leaves the brand field blank when nothing is recognized', async () => {
    const { container } = renderScanner();
    await capturePhoto(null);
    expect(getField(container, 'Brand').value).toBe('');
  });

  it('shows an error and returns to idle if the camera capture fails', async () => {
    mockTakePhoto.mockRejectedValueOnce(new Error('User cancelled photos app'));
    renderScanner();
    fireEvent.click(screen.getByText('Take Photo'));
    await waitFor(() => expect(screen.getByText('User cancelled photos app')).toBeInTheDocument());
    expect(screen.getByText('Take Photo')).toBeInTheDocument();
  });

  it('only shows Send Alert for a non-manager', async () => {
    renderScanner({ isManagerPlus: false });
    await capturePhoto('Jameson');
    expect(screen.getByText('Send Alert')).toBeInTheDocument();
    expect(screen.queryByText('Add to Menu')).not.toBeInTheDocument();
    expect(screen.queryByText('86 It')).not.toBeInTheDocument();
  });

  it('shows 86 It only when the recognized brand already exists', async () => {
    const { rerender } = renderScanner({ existingBrands: [] });
    await capturePhoto('Jameson');
    expect(screen.queryByText('86 It')).not.toBeInTheDocument();

    rerender(
      <BottleScanner
        open={true}
        onClose={mockOnClose}
        isManagerPlus={true}
        candidates={['Jameson']}
        existingBrands={['Jameson']}
        onAddToMenu={mockOnAddToMenu}
        onEightySix={mockOnEightySix}
        onSendAlert={mockOnSendAlert}
      />
    );
    expect(screen.getByText('86 It')).toBeInTheDocument();
  });

  it('sends an alert with the brand name and captured photo blob', async () => {
    mockOnSendAlert.mockResolvedValueOnce(undefined);
    renderScanner();
    await capturePhoto('Jameson');
    fireEvent.click(screen.getByText('Send Alert'));
    await waitFor(() => expect(mockOnSendAlert).toHaveBeenCalledWith('Jameson', fakeBlob));
    await waitFor(() => expect(mockOnClose).toHaveBeenCalled());
  });

  it('adds the edited brand and type to the menu', async () => {
    mockOnAddToMenu.mockResolvedValueOnce(undefined);
    const { container } = renderScanner();
    await capturePhoto('Jameson');

    const typeField = getField(container, 'Type (optional)');
    typeField.value = 'Bottle';
    fireEvent.input(typeField);

    fireEvent.click(screen.getByText('Add to Menu'));
    await waitFor(() => expect(mockOnAddToMenu).toHaveBeenCalledWith('Jameson', 'Bottle'));
  });

  it('86s the recognized brand when it already exists on the menu', async () => {
    mockOnEightySix.mockResolvedValueOnce(undefined);
    renderScanner({ existingBrands: ['Jameson'] });
    await capturePhoto('Jameson');

    fireEvent.click(screen.getByText('86 It'));
    await waitFor(() => expect(mockOnEightySix).toHaveBeenCalledWith('Jameson'));
  });

  it('shows an inline error and keeps the dialog open when an action fails', async () => {
    mockOnSendAlert.mockRejectedValueOnce(new Error('network error'));
    renderScanner();
    await capturePhoto('Jameson');
    fireEvent.click(screen.getByText('Send Alert'));
    await waitFor(() => expect(screen.getByText('That failed. Please try again.')).toBeInTheDocument());
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
