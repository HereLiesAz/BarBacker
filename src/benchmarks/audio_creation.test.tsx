import { describe, it, expect, vi, beforeEach, afterEach, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { useEffect, useRef } from 'react';
import { useNag } from '../hooks/useNag';

// Mock Audio
const AudioMock = vi.fn(function() {
  return {
    play: vi.fn().mockResolvedValue(undefined),
    catch: vi.fn(),
    currentTime: 0,
  };
});

vi.stubGlobal('Audio', AudioMock);

// --- Original Implementation ---
// Replicates the logic found in src/App.tsx lines 229+ (before optimization)
function OriginalNag({ activeRequests, ignoredIds }: { activeRequests: any[], ignoredIds: string[] }) {
  const activeRequestsRef = useRef(activeRequests);

  useEffect(() => {
    activeRequestsRef.current = activeRequests;
  }, [activeRequests]);

  useEffect(() => {
    const interval = setInterval(() => {
       const pending = activeRequestsRef.current.filter(r => !ignoredIds.includes(r.id));
       if (pending.length > 0) {
           const audio = new Audio('/alert.wav');
           audio.play().catch(e => console.log('Audio play failed', e));
           // vibrate removed for test simplicity as we focus on Audio
       }
    }, 1000); // 1 second for test speed (original was 1 min)
    return () => clearInterval(interval);
  }, [ignoredIds]);

  return null;
}

// --- Optimized Implementation ---
// Uses the actual hook, verifying the real implementation
function OptimizedNag({ activeRequests, ignoredIds }: { activeRequests: any[], ignoredIds: string[] }) {
  useNag(activeRequests, ignoredIds);
  return null;
}

describe('Audio Creation Benchmark', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    AudioMock.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it('Original: creates new Audio instance on every tick', () => {
    const requests = [{ id: '1', status: 'pending' }];
    render(<OriginalNag activeRequests={requests} ignoredIds={[]} />);

    // Tick 1
    vi.advanceTimersByTime(1000);
    expect(AudioMock).toHaveBeenCalledTimes(1);

    // Tick 2
    vi.advanceTimersByTime(1000);
    expect(AudioMock).toHaveBeenCalledTimes(2);

    // Tick 3
    vi.advanceTimersByTime(1000);
    expect(AudioMock).toHaveBeenCalledTimes(3);
  });

  it('Optimized: reuses Audio instance', () => {
    // Note: The hook uses 60000ms (1 min) interval, while OriginalNag above was hardcoded to 1000ms.
    // We need to advance by 60000ms for the hook.

    const requests = [{ id: '1', status: 'pending' } as any];
    render(<OptimizedNag activeRequests={requests} ignoredIds={[]} />);

    // Tick 1
    vi.advanceTimersByTime(60000);
    expect(AudioMock).toHaveBeenCalledTimes(1);

    // Tick 2
    vi.advanceTimersByTime(60000);
    expect(AudioMock).toHaveBeenCalledTimes(1); // Should still be 1

    // Tick 3
    vi.advanceTimersByTime(60000);
    expect(AudioMock).toHaveBeenCalledTimes(1); // Should still be 1
  });
});
