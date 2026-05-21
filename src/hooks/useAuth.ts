import { useEffect, useState, useCallback } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  User,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

// Tracks the current Firebase Auth user and exposes the common auth
// actions used by the login form. authError is a UI-friendly string
// surfaced from Firebase exceptions. isRegistering toggles between
// the login and sign-up flows.
//
// Callers should chain any post-signout UI work (closing dialogs,
// clearing local bar selection) on top of `signOut` rather than
// folding it into the hook.
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const signInEmail = async (email: string, password: string) => {
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (e: any) {
      setAuthError(e.message);
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: any) {
      setAuthError(e.message);
    }
  };

  const signOut = () => fbSignOut(auth);

  return {
    user,
    authError,
    isRegistering,
    setIsRegistering,
    signInEmail,
    signInGoogle,
    signOut,
  };
}
