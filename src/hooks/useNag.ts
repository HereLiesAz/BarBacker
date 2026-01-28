import { useEffect, useRef } from 'react';
import { Request } from '../types';

export function useNag(activeRequests: Request[], ignoredIds: string[]) {
  const activeRequestsRef = useRef<Request[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Keep ref updated for the interval
  useEffect(() => {
    activeRequestsRef.current = activeRequests;
  }, [activeRequests]);

  // Nag Script: Play sound every minute if there are pending requests
  useEffect(() => {
    const interval = setInterval(() => {
       const pending = activeRequestsRef.current.filter(r => !ignoredIds.includes(r.id));
       if (pending.length > 0) {
           if (!audioRef.current) {
               audioRef.current = new Audio('/alert.wav');
           }
           audioRef.current.currentTime = 0;
           audioRef.current.play().catch(e => console.log('Audio play failed', e));
           if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
       }
    }, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, [ignoredIds]);
}
