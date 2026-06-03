import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useBarTheme } from './useBarTheme';
import type { BarTheme } from '../types';

describe('useBarTheme', () => {
  beforeEach(() => {
    // Reset any inline styles on the document root.
    const root = document.documentElement;
    root.style.removeProperty('--md-sys-color-primary');
    root.style.removeProperty('--md-sys-color-on-primary');
    root.style.removeProperty('--md-sys-color-secondary-container');
    root.style.removeProperty('font-family');
  });

  it('does nothing when theme is undefined', () => {
    renderHook(() => useBarTheme(undefined, true));
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--md-sys-color-primary')).toBe('');
  });

  it('does nothing when not premium', () => {
    const theme: BarTheme = { primaryColor: '#FF0000', accentColor: '#00FF00' };
    renderHook(() => useBarTheme(theme, false));
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--md-sys-color-primary')).toBe('');
  });

  it('applies CSS variables when premium with theme', () => {
    const theme: BarTheme = { primaryColor: '#FF0000', accentColor: '#00FF00' };
    renderHook(() => useBarTheme(theme, true));
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--md-sys-color-primary')).toBe('#FF0000');
    expect(root.style.getPropertyValue('--md-sys-color-secondary-container')).toBe('#00FF00');
  });

  it('sets white contrast for dark primary color', () => {
    const theme: BarTheme = { primaryColor: '#000000', accentColor: '#1E1E1E' };
    renderHook(() => useBarTheme(theme, true));
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--md-sys-color-on-primary')).toBe('#FFFFFF');
  });

  it('sets black contrast for light primary color', () => {
    const theme: BarTheme = { primaryColor: '#FFFFFF', accentColor: '#1E1E1E' };
    renderHook(() => useBarTheme(theme, true));
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--md-sys-color-on-primary')).toBe('#000000');
  });

  it('applies font family when provided', () => {
    const theme: BarTheme = { primaryColor: '#FFFFFF', accentColor: '#1E1E1E', fontFamily: 'Inter, sans-serif' };
    renderHook(() => useBarTheme(theme, true));
    const root = document.documentElement;
    expect(root.style.getPropertyValue('font-family')).toBe('Inter, sans-serif');
  });

  it('removes CSS variables on cleanup', () => {
    const theme: BarTheme = { primaryColor: '#FF0000', accentColor: '#00FF00' };
    const { unmount } = renderHook(() => useBarTheme(theme, true));
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--md-sys-color-primary')).toBe('#FF0000');

    unmount();
    expect(root.style.getPropertyValue('--md-sys-color-primary')).toBe('');
  });
});
