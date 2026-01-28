import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { useEffect, useRef } from 'react';

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
// Replicates the logic found in src/App.tsx lines 229+
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
function OptimizedNag({ activeRequests, ignoredIds }: { activeRequests: any[], ignoredIds: string[] }) {
  const activeRequestsRef = useRef(activeRequests);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    activeRequestsRef.current = activeRequests;
  }, [activeRequests]);

  useEffect(() => {
    const interval = setInterval(() => {
       const pending = activeRequestsRef.current.filter(r => !ignoredIds.includes(r.id));
       if (pending.length > 0) {
           if (!audioRef.current) {
               audioRef.current = new Audio('/alert.wav');
           }
           audioRef.current.currentTime = 0; // Reset for repeated plays
           audioRef.current.play().catch(e => console.log('Audio play failed', e));
       }
    }, 1000);
    return () => clearInterval(interval);
  }, [ignoredIds]);

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
    const requests = [{ id: '1', status: 'pending' }];
    render(<OptimizedNag activeRequests={requests} ignoredIds={[]} />);

    // Tick 1
    vi.advanceTimersByTime(1000);
    expect(AudioMock).toHaveBeenCalledTimes(1);

    // Tick 2
    vi.advanceTimersByTime(1000);
    expect(AudioMock).toHaveBeenCalledTimes(1); // Should still be 1

    // Tick 3
    vi.advanceTimersByTime(1000);
    expect(AudioMock).toHaveBeenCalledTimes(1); // Should still be 1
  });
});
