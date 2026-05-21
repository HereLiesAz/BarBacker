#!/usr/bin/env node
/**
 * Set or unset the `admin: true` custom claim on a Firebase Auth user.
 *
 * Custom claims propagate to ID tokens, are signed by Firebase, and are
 * readable from both client (getIdTokenResult) and Firestore rules
 * (request.auth.token.admin). This replaces the previous client-side
 * VITE_GOD_MODE_EMAIL env-var check, which was trivially spoofable and
 * leaked the admin email in the built bundle.
 *
 * Requires GOOGLE_APPLICATION_CREDENTIALS to point at a service-account
 * JSON with the Firebase Admin role.
 *
 * Usage:
 *   node scripts/set-admin-claim.js --email user@example.com
 *   node scripts/set-admin-claim.js --uid abc123
 *   node scripts/set-admin-claim.js --email user@example.com --revoke
 *
 * The target user must log out and back in (or wait up to an hour) for
 * the new claim to appear in their ID token.
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

function parseArgs(argv) {
  const args = { revoke: false };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--email') args.email = argv[++i];
    else if (arg === '--uid') args.uid = argv[++i];
    else if (arg === '--revoke') args.revoke = true;
    else if (arg === '--help' || arg === '-h') {
      console.log('Usage: node scripts/set-admin-claim.js (--email <e> | --uid <u>) [--revoke]');
      process.exit(0);
    }
  }
  if (!args.email && !args.uid) {
    console.error('Error: provide --email or --uid');
    process.exit(1);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv);
  initializeApp({ credential: applicationDefault() });
  const auth = getAuth();

  const user = args.uid
    ? await auth.getUser(args.uid)
    : await auth.getUserByEmail(args.email);

  const existing = user.customClaims || {};
  const updated = { ...existing };
  if (args.revoke) {
    delete updated.admin;
  } else {
    updated.admin = true;
  }

  await auth.setCustomUserClaims(user.uid, updated);
  console.log(`Updated claims for ${user.email || user.uid}:`, updated);
  console.log('User must re-authenticate (sign out/in) before the new claim takes effect.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
