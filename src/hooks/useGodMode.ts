import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { adminManager } from '../services/subscription';

// Resolves whether the current user has elevated ("god mode")
// privileges. NOTE: this currently routes through `adminManager`,
// which checks `user.email` against VITE_GOD_MODE_EMAIL — a
// client-side gate that ships the admin address in the bundle. The
// rules in firestore.rules do NOT enforce this, so anything gated by
// the returned value should be treated as UI affordance only. A
// follow-up should replace this with a Firebase Auth custom claim
// read via getIdTokenResult().
export function useGodMode(user: User | null) {
  const [isGodMode, setIsGodMode] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsGodMode(false);
      return;
    }
    setIsGodMode(adminManager.checkSubscription(user.email));
  }, [user]);

  return isGodMode;
}
