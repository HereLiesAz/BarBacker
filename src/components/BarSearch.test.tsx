import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import BarSearch from '../components/BarSearch';

// Mock dependencies
vi.mock('../firebase', () => ({
  db: {}
}));

const mockAddDoc = vi.fn();
const mockGetDocs = vi.fn();

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  getDocs: (q: any) => mockGetDocs(q),
  addDoc: (c: any, d: any) => mockAddDoc(c, d)
}));

global.fetch = vi.fn();
global.confirm = vi.fn(() => true);
global.alert = vi.fn();

// Mock HTMLDialogElement
beforeEach(() => {
    // Basic mock to prevent crashes
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
});

describe('BarSearch', () => {
  it('renders search input and persistent create option', () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);

    // md-filled-text-field label is tricky in JSDOM/TestingLibrary as it might not use standard <label>
    // but the component renders the text.
    // Try finding by text or display value.
    // Or just look for the custom element attributes if needed.
    const input = container.querySelector('md-filled-text-field[label="Search OpenStreetMap"]');
    expect(input).toBeInTheDocument();

    // Check for the list item specifically
    const texts = screen.getAllByText('Create Bar Listing');
    expect(texts.length).toBeGreaterThan(0);
  });

  it('opens dialog when create option is clicked', async () => {
    const { container } = render(<BarSearch onJoin={() => {}} />);

    const createBtn = screen.getAllByText('Create Bar Listing').find(el => el.closest('md-list-item'));
    if (!createBtn) throw new Error("Button not found");

    await act(async () => {
      fireEvent.click(createBtn);
    });

    await waitFor(() => {
        const dialog = container.querySelector('md-dialog');
        expect(dialog).toHaveAttribute('open');
    });

    const input = container.querySelector('md-filled-text-field[name="name"]');
    expect(input).toBeInTheDocument();
  });

  it('submits new bar when no duplicate found', async () => {
    const handleJoin = vi.fn();
    mockGetDocs.mockResolvedValue({ empty: true, forEach: () => {} });
    mockAddDoc.mockResolvedValue({ id: 'new-id' });

    const { container } = render(<BarSearch onJoin={handleJoin} />);

    const createBtn = screen.getAllByText('Create Bar Listing').find(el => el.closest('md-list-item'));
    if (!createBtn) throw new Error("Button not found");

    await act(async () => {
      fireEvent.click(createBtn);
    });

    const dialog = container.querySelector('md-dialog');
    await waitFor(() => expect(dialog).toHaveAttribute('open'));

    // Fix FormData mocking
    const originalFormData = window.FormData;

    class MockFormData {
        constructor(form: HTMLFormElement) {}
        get(key: string) {
            if (key === 'name') return 'New Bar';
            if (key === 'zip') return '90210';
            return '';
        }
    }

    window.FormData = MockFormData as any;

    try {
        const submitBtn = screen.getByText('Create');
        await act(async () => {
            fireEvent.click(submitBtn);
        });

        await waitFor(() => {
            expect(mockAddDoc).toHaveBeenCalled();
            expect(handleJoin).toHaveBeenCalledWith(expect.objectContaining({
                name: 'New Bar',
                zip: '90210',
                status: 'temporary'
            }));
        });
    } finally {
        window.FormData = originalFormData;
    }
  });
});
