import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';

// Resolves whether the current user has elevated ("god mode")
// privileges by reading the `admin` custom claim off their ID token.
// Claims are signed by Firebase so they cannot be spoofed from the
// client, and the same claim is checked in firestore.rules
// (request.auth.token.admin). Set the claim with
// `node scripts/set-admin-claim.js --email ...`.
export function useGodMode(user: User | null) {
  const [isGodMode, setIsGodMode] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!user) {
      setIsGodMode(false);
      return;
    }
    user.getIdTokenResult()
      .then(result => {
        if (cancelled) return;
        setIsGodMode(result.claims.admin === true);
      })
      .catch(err => {
        console.warn('Failed to read admin claim', err);
        if (!cancelled) setIsGodMode(false);
      });
    return () => { cancelled = true; };
  }, [user]);

  return isGodMode;
}
