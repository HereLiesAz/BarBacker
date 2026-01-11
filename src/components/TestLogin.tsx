import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { ROLES } from '../constants';
import '@material/web/button/outlined-button.js';
import '@material/web/icon/icon.js';
import '@material/web/progress/circular-progress.js';

const TestLogin = () => {
  const [loadingRole, setLoadingRole] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTestLogin = async (role: string) => {
    setLoadingRole(role);
    setError(null);
    const email = `test-${role.toLowerCase()}@barbacker.com`;
    const password = 'password123';
    const testBarId = 'test-bar';

    try {
      let userCredential;
      try {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } catch (e: any) {
        if (e.code === 'auth/user-not-found' || e.code === 'auth/invalid-credential') {
          userCredential = await createUserWithEmailAndPassword(auth, email, password);
        } else {
          throw e;
        }
      }

      const user = userCredential.user;

      // Setup Test Bar
      await setDoc(doc(db, 'bars', testBarId), {
        name: 'Test Bar',
        status: 'verified', // 'verified' so it doesn't look temporary
        address: '123 Test St',
        buttons: [] // Uses default buttons
      }, { merge: true });

      // Setup User Role in Test Bar
      await setDoc(doc(db, `bars/${testBarId}/users`, user.uid), {
        role: role,
        displayName: `Test ${role}`,
        email: email,
        status: 'active',
        joinedAt: serverTimestamp(),
        lastSeen: serverTimestamp()
      }, { merge: true });

      // Set LocalStorage so App.tsx picks it up immediately
      localStorage.setItem('barId', testBarId);

      // Force reload to pick up localStorage change if needed,
      // but App.tsx listens to auth state change, which will trigger.
      // However, App.tsx reads localStorage for initial state.
      // If we are already on the page, we might need to trigger a URL change or just rely on the component re-render.
      // App.tsx: const [barId, setBarId] = useState(initialBarId)
      // It has an effect: useEffect(() => { if (!user || !barId) return; ... })
      // But `barId` state needs to be updated.
      // We can't update App's state from here easily.
      // But we can reload the page which is simplest for a "Test Tool".
      window.location.href = `/?bar=${testBarId}`;

    } catch (err: any) {
      console.error(err);
      setError(err.message);
      setLoadingRole(null);
    }
  };

  return (
    <div className="w-full max-w-sm mt-8 border-t border-gray-800 pt-6">
      <div className="text-gray-500 text-sm font-bold mb-4 uppercase tracking-widest text-center">
        Developer Login
      </div>

      {error && (
        <div className="bg-red-900/50 border border-red-800 text-red-200 p-2 rounded mb-4 text-xs">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-2">
        {ROLES.map((role) => (
          <md-outlined-button
            key={role}
            onClick={() => handleTestLogin(role)}
            disabled={loadingRole !== null || undefined}
            style={{ width: '100%' }}
          >
            {loadingRole === role ? (
                 <md-circular-progress indeterminate style={{ width: 20, height: 20 }} slot="icon" />
            ) : (
                 <md-icon slot="icon">bug_report</md-icon>
            )}
            {role}
          </md-outlined-button>
        ))}
      </div>
    </div>
  );
};

export default TestLogin;
