// Import useEffect and useRef hooks from React.
import { useEffect, useRef } from 'react';
// Import the Request type definition.
import { Request } from '../types';

// Custom hook to implement the "Nag" feature: playing an alert sound periodically if there are pending requests.
// @param activeRequests - The list of currently active (pending) requests.
// @param ignoredIds - A list of request IDs that the user has locally muted/ignored.
export function useNag(activeRequests: Request[], ignoredIds: string[]) {
  // Use a ref to store the latest list of active requests.
  // This allows the interval closure to access the current state without needing to be recreated on every render.
  const activeRequestsRef = useRef<Request[]>([]);
  // Use a ref to store the Audio object.
  // This prevents creating a new Audio instance on every render, which saves memory and prevents audio glitches.
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Effect to keep the ref synchronized with the prop.
  useEffect(() => {
    activeRequestsRef.current = activeRequests;
  }, [activeRequests]);

  // Effect to set up the interval timer.
  useEffect(() => {
    // Define the interval function.
    const interval = setInterval(() => {
       // Filter the current requests to find those that are NOT ignored.
       const pending = activeRequestsRef.current.filter(r => !ignoredIds.includes(r.id));

       // If there are actionable pending requests...
       if (pending.length > 0) {
           // Initialize the Audio object if it doesn't exist yet.
           if (!audioRef.current) {
               audioRef.current = new Audio('/alert.wav');
           }

           // Reset the audio playback position to the start.
           audioRef.current.currentTime = 0;

           // Attempt to play the audio.
           // Browsers may block autoplay if there hasn't been user interaction yet, so we catch the error.
           audioRef.current.play().catch(e => console.log('Audio play failed', e));

           // Trigger device vibration if supported.
           // Pattern: 500ms on, 200ms off, 500ms on.
           if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
       }
    }, 1 * 60 * 1000); // Run every 60 seconds (1 minute).

    // Cleanup function to clear the interval when the component unmounts or ignoredIds changes.
    // Note: Re-creating the interval when ignoredIds changes is acceptable here.
    return () => clearInterval(interval);
  }, [ignoredIds]);
}
