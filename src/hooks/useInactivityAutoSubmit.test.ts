import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useInactivityAutoSubmit } from './useInactivityAutoSubmit';
import type { ButtonConfig } from '../types';

const navStack: ButtonConfig[] = [{ id: 'beer', label: 'BEER' }, { id: 'brand_Corona', label: 'Corona' }];

describe('useInactivityAutoSubmit', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('auto-submits after the timeout when navStack is non-empty and not paused', () => {
    const submit = vi.fn();
    const reset = vi.fn();
    renderHook(() => useInactivityAutoSubmit(navStack, submit, reset, 1000, false));

    vi.advanceTimersByTime(1000);

    expect(submit).toHaveBeenCalledWith('BEER: Corona (Ask Me)');
    expect(reset).toHaveBeenCalled();
  });

  it('does not arm the timer when navStack is empty', () => {
    const submit = vi.fn();
    const reset = vi.fn();
    renderHook(() => useInactivityAutoSubmit([], submit, reset, 1000, false));

    vi.advanceTimersByTime(5000);

    expect(submit).not.toHaveBeenCalled();
  });

  // Regression: a user who opens InputDialog (add brand/type) or the
  // quantity picker from within a sub-menu, and takes longer than the
  // timeout to decide, previously got hit with both an unwanted
  // auto-submitted request AND resetNavStack() yanking the sub-menu
  // out from under the dialog they were still using.
  it('does not fire while paused, even with a non-empty navStack', () => {
    const submit = vi.fn();
    const reset = vi.fn();
    renderHook(() => useInactivityAutoSubmit(navStack, submit, reset, 1000, true));

    vi.advanceTimersByTime(5000);

    expect(submit).not.toHaveBeenCalled();
    expect(reset).not.toHaveBeenCalled();
  });

  it('fires once un-paused and the timeout subsequently elapses', () => {
    const submit = vi.fn();
    const reset = vi.fn();
    const { rerender } = renderHook(
      ({ paused }) => useInactivityAutoSubmit(navStack, submit, reset, 1000, paused),
      { initialProps: { paused: true } },
    );

    vi.advanceTimersByTime(5000);
    expect(submit).not.toHaveBeenCalled();

    rerender({ paused: false });
    vi.advanceTimersByTime(1000);

    expect(submit).toHaveBeenCalledTimes(1);
  });
});
