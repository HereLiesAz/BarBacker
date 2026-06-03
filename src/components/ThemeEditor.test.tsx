import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ThemeEditor from './ThemeEditor';
import type { BarTheme } from '../types';

// Mock Firebase Storage
vi.mock('../firebase', () => ({
  storage: {},
}));
vi.mock('firebase/storage', () => ({
  ref: vi.fn(),
  uploadBytes: vi.fn().mockResolvedValue({}),
  getDownloadURL: vi.fn().mockResolvedValue('https://example.com/logo.png'),
}));

describe('ThemeEditor', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    currentTheme: undefined as BarTheme | undefined,
    onSave: vi.fn().mockResolvedValue(undefined),
    barId: 'test-bar-id',
  };

  it('renders with default values when no theme is set', () => {
    render(<ThemeEditor {...defaultProps} />);
    expect(screen.getByText('Customize Theme')).toBeDefined();
    expect(screen.getByText('Primary Color')).toBeDefined();
    expect(screen.getByText('Accent Color')).toBeDefined();
    expect(screen.getByText('Font')).toBeDefined();
    expect(screen.getByText('Logo')).toBeDefined();
  });

  it('renders the live preview section', () => {
    render(<ThemeEditor {...defaultProps} />);
    expect(screen.getByText('Preview')).toBeDefined();
    expect(screen.getByText('Your Bar Name')).toBeDefined();
    expect(screen.getByText('Sample Button')).toBeDefined();
  });

  it('renders with current theme values', () => {
    const theme: BarTheme = {
      primaryColor: '#FF5722',
      accentColor: '#03A9F4',
      logoUrl: 'https://example.com/logo.png',
      fontFamily: 'Inter, sans-serif',
    };
    render(<ThemeEditor {...defaultProps} currentTheme={theme} />);
    // Logo preview should be visible
    const logoImg = screen.getByAltText('Logo');
    expect(logoImg).toBeDefined();
  });

  it('shows save and reset buttons', () => {
    render(<ThemeEditor {...defaultProps} />);
    expect(screen.getByText('Save')).toBeDefined();
    expect(screen.getByText('Reset')).toBeDefined();
    expect(screen.getByText('Cancel')).toBeDefined();
  });

  it('shows remove button when logo URL exists', () => {
    const theme: BarTheme = {
      primaryColor: '#FFFFFF',
      accentColor: '#1E1E1E',
      logoUrl: 'https://example.com/logo.png',
    };
    render(<ThemeEditor {...defaultProps} currentTheme={theme} />);
    expect(screen.getByText('Remove')).toBeDefined();
  });
});
