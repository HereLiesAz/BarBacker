# Security Policy

BarBacker is a single continuously-deployed application (web + Android), not a versioned library — there's no "supported version" matrix to maintain. Security fixes land on `main` and go out with the next deploy.

## Security Model

*   **Authorization** is enforced server-side by Firestore and Storage security rules (`firestore.rules`, `storage.rules`), keyed off a per-bar privilege role (`Staff` / `Manager` / `Owner`) stamped as a Firebase Auth custom claim. See [ARCHITECTURE.md](docs/ARCHITECTURE.md) for how the claim is set and its known staleness window on revocation.
*   **Never trust the client** for anything security-relevant: privileged fields (role, subscription tier, ownership) are either bound to server-verified values in the rules themselves, or written exclusively by Cloud Functions running under the Admin SDK.
*   **Secrets** (OAuth tokens for POS/Calendar integrations) are encrypted with Cloud KMS before being stored, in Firestore collections with no client read/write access in either direction — see [DATA_MODEL.md](docs/DATA_MODEL.md).
*   Both rule files have an automated test suite (`npm run test:rules`, run in CI on every push/PR — see [DEPLOYMENT.md](docs/DEPLOYMENT.md)) that includes regression coverage for previously-found privilege-escalation issues, not just the happy path.

## Reporting a Vulnerability

If you find a security issue in this repository (a rules gap, a client-trust bug, exposed secrets, a CI/CD supply-chain issue, etc.), please report it privately rather than opening a public issue:

*   Preferred: use GitHub's [private vulnerability reporting](https://github.com/HereLiesAz/BarBacker/security/advisories/new) for this repository (Security tab → "Report a vulnerability").
*   If that's not available to you, open an issue with minimal detail asking for a private contact channel, and avoid posting exploit details publicly until a fix has shipped.

Please include:
*   What you found and where (file/rule/component).
*   Steps to reproduce, or a concrete scenario showing impact.
*   Anything you've already tried as a fix, if applicable.

There's no formal SLA (this is a small project maintained on a best-effort basis), but a report with clear reproduction steps will generally get triaged quickly.
