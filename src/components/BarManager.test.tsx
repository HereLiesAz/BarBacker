import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BarManager from './BarManager';
import { ButtonConfig } from '../types';

// Mock Web Components to avoid JSDOM errors with custom elements or shadow DOM issues
// We just render them as simple divs with the same tag name or just rely on them being unknown elements.
// Vitest/JSDOM handles unknown elements fine, they just behave like spans.
// But we need to ensure their children are rendered.

describe('BarManager', () => {
  const buttons: ButtonConfig[] = [
    { id: '1', label: 'Visible Button A' },
    { id: '2', label: 'Hidden Button B' },
    { id: '3', label: 'Visible Button C' },
  ];

  it('filters out hidden buttons correctly using the new Set optimization', () => {
    const onHide = vi.fn();
    const onClose = vi.fn();

    render(
      <BarManager
        open={true}
        onClose={onClose}
        barName="Test Bar"
        allButtons={buttons}
        hiddenButtonIds={['2']}
        onHideButton={onHide}
      />
    );

    // Visible buttons should be present
    expect(screen.getByText('Visible Button A')).toBeDefined();
    expect(screen.getByText('Visible Button C')).toBeDefined();

    // Hidden button should NOT be present
    expect(screen.queryByText('Hidden Button B')).toBeNull();
  });

  it('updates when hiddenButtonIds prop changes', () => {
    const onHide = vi.fn();
    const onClose = vi.fn();

    const { rerender } = render(
      <BarManager
        open={true}
        onClose={onClose}
        barName="Test Bar"
        allButtons={buttons}
        hiddenButtonIds={['2']}
        onHideButton={onHide}
      />
    );

    expect(screen.queryByText('Hidden Button B')).toBeNull();

    // Now unhide it
    rerender(
      <BarManager
        open={true}
        onClose={onClose}
        barName="Test Bar"
        allButtons={buttons}
        hiddenButtonIds={[]}
        onHideButton={onHide}
      />
    );

    expect(screen.getByText('Hidden Button B')).toBeDefined();
  });

  it('renders restorable buttons when in God Mode', () => {
    const onHide = vi.fn();
    const onClose = vi.fn();
    const onUnhide = vi.fn();

    render(
      <BarManager
        open={true}
        onClose={onClose}
        barName="Test Bar"
        allButtons={buttons}
        hiddenButtonIds={['2']}
        onHideButton={onHide}
        godMode={true}
        onUnhideButton={onUnhide}
      />
    );

    // Should show the hidden button in the "Restorable" section
    expect(screen.getByText('Restorable Buttons (God Mode)')).toBeDefined();
    expect(screen.getByText('Hidden Button B')).toBeDefined();
  });
});
