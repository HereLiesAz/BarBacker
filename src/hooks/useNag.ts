import { useEffect, useRef } from 'react';
import { Request } from '../types';

/**
 * Custom hook to provide persistent audio and vibration alerts ("Nagging")
 * when there are pending requests.
 *
 * This hook runs an interval every minute. If there are any requests in `activeRequests`
 * that are NOT in `ignoredIds`, it plays a sound and vibrates the device.
 *
 * @param {Request[]} activeRequests - The list of currently active requests to monitor.
 * @param {string[]} ignoredIds - A list of request IDs that have been "snoozed" or acknowledged locally.
 */
export function useNag(activeRequests: Request[], ignoredIds: string[]) {
  // Use a ref to store the latest activeRequests without triggering the effect re-run on every update.
  // This prevents the interval from resetting unnecessarily.
  const activeRequestsRef = useRef<Request[]>([]);

  // Audio element reference to ensure we reuse the same HTMLAudioElement instance
  // rather than creating a new one every tick (performance optimization).
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Keep the ref synchronized with the latest prop value.
  useEffect(() => {
    activeRequestsRef.current = activeRequests;
  }, [activeRequests]);

  // The Nag Logic: Play sound every minute if criteria are met.
  useEffect(() => {
    // Define the interval (1 minute)
    const interval = setInterval(() => {
       // Filter requests to find those that are strictly "pending" (not ignored).
       const pending = activeRequestsRef.current.filter(r => !ignoredIds.includes(r.id));

       if (pending.length > 0) {
           // Lazy initialization of the Audio object.
           if (!audioRef.current) {
               audioRef.current = new Audio('/alert.wav');
           }

           // Reset playback position to the start.
           audioRef.current.currentTime = 0;

           // Attempt to play. Note: Browsers block autoplay if no user interaction has occurred.
           // We catch the error to prevent app crash, logging it for debug purposes.
           audioRef.current.play().catch(e => console.log('Audio play failed', e));

           // Trigger vibration pattern: Vibrate 500ms, Pause 200ms, Vibrate 500ms.
           // Check for navigator.vibrate support first.
           if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
       }
    }, 1 * 60 * 1000); // 60 seconds * 1000 ms

    // Cleanup: clear the interval when the component unmounts or ignoredIds change.
    return () => clearInterval(interval);
  }, [ignoredIds]);
}
