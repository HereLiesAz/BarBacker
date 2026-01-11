import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TestLogin from '../components/TestLogin';
import { ROLES } from '../constants';

// Mock dependencies
const mockSignIn = vi.fn();
const mockCreateUser = vi.fn();
const mockSetDoc = vi.fn();

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  signInWithEmailAndPassword: (a: any, e: any, p: any) => mockSignIn(a, e, p),
  createUserWithEmailAndPassword: (a: any, e: any, p: any) => mockCreateUser(a, e, p)
}));

vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  setDoc: (d: any, data: any, opt: any) => mockSetDoc(d, data, opt),
  serverTimestamp: vi.fn(),
  getFirestore: vi.fn()
}));

vi.mock('../firebase', () => ({
  auth: {},
  db: {}
}));

// Mock window.location
Object.defineProperty(window, 'location', {
  value: { href: '' },
  writable: true
});

describe('TestLogin', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

  it('renders buttons for all roles', () => {
    render(<TestLogin />);
    ROLES.forEach(role => {
        expect(screen.getByText(role)).toBeInTheDocument();
    });
  });

  it('handles existing user login', async () => {
    mockSignIn.mockResolvedValue({ user: { uid: 'test-uid' } });
    mockSetDoc.mockResolvedValue({});

    render(<TestLogin />);

    // Click Bartender
    const btn = screen.getByText('Bartender');
    await act(async () => {
      fireEvent.click(btn);
    });

    // Check sign in called
    expect(mockSignIn).toHaveBeenCalledWith(expect.anything(), 'test-bartender@barbacker.com', 'password123');

    // Check DB setup
    await waitFor(() => {
        expect(mockSetDoc).toHaveBeenCalledTimes(2); // Bar and User
        expect(window.location.href).toBe('/?bar=test-bar');
    });
  });

  it('handles new user signup (user not found)', async () => {
    mockSignIn.mockRejectedValue({ code: 'auth/user-not-found' });
    mockCreateUser.mockResolvedValue({ user: { uid: 'new-uid' } });
    mockSetDoc.mockResolvedValue({});

    render(<TestLogin />);

    const btn = screen.getByText('Server');
    await act(async () => {
      fireEvent.click(btn);
    });

    // Check sign in called, then failed
    // Then create user called
    await waitFor(() => {
         expect(mockCreateUser).toHaveBeenCalledWith(expect.anything(), 'test-server@barbacker.com', 'password123');
    });

    await waitFor(() => {
        expect(mockSetDoc).toHaveBeenCalledTimes(2);
        expect(window.location.href).toBe('/?bar=test-bar');
    });
  });
});
