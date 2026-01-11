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
  it('renders search mode by default', () => {
    render(<BarSearch onJoin={() => {}} />);

    // Check that "Search" is the filled button (active)
    // screen.getByText('Search') usually returns the element containing the text.
    // In this case, it should be the md-filled-button itself.
    const searchBtn = screen.getByText('Search');
    expect(searchBtn.tagName.toLowerCase()).toBe('md-filled-button');

    // "Create Temp" should be outlined (inactive)
    const createBtn = screen.getByText('Create Temp');
    expect(createBtn.tagName.toLowerCase()).toBe('md-outlined-button');
  });

  it('switches to create mode', async () => {
    render(<BarSearch onJoin={() => {}} />);
    const createBtn = screen.getByText('Create Temp');

    await act(async () => {
      fireEvent.click(createBtn);
    });

    await waitFor(() => {
        // "Create Bar" submit button should appear
        expect(screen.getByText('Create Bar')).toBeInTheDocument();

        // Check that "Create Temp" is now filled
        const activeBtn = screen.getByText('Create Temp');
        expect(activeBtn.tagName.toLowerCase()).toBe('md-filled-button');
    });

    const input = container.querySelector('md-filled-text-field[name="name"]');
    expect(input).toBeInTheDocument();
  });

  it('submits new bar when no duplicate found', async () => {
    const handleJoin = vi.fn();
    mockGetDocs.mockResolvedValue({ empty: true, forEach: () => {} });
    mockAddDoc.mockResolvedValue({ id: 'new-id' });

    const { container } = render(<BarSearch onJoin={handleJoin} />);

    // Switch to create mode
    const createBtn = screen.getByText('Create Temp');
    await act(async () => {
      fireEvent.click(createBtn);
    });

    await waitFor(() => {
        expect(screen.getByText('Create Bar')).toBeInTheDocument();
    });

    class MockFormData {
        constructor(form: HTMLFormElement) {}
        get(key: string) {
            if (key === 'name') return 'New Bar';
            if (key === 'zip') return '90210';
            return '';
        }
    }

    await act(async () => {
        (input as any).value = 'My Bar';
        fireEvent.input(input);
    });

    // Submit
    const form = container.querySelector('form');
    if (form) {
       await act(async () => {
         fireEvent.submit(form);
       });
    } else {
       // fallback
       const button = screen.getByText('Create Bar');
       fireEvent.click(button);
    }
  });
});
