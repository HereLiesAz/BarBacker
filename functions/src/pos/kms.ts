import { KeyManagementServiceClient } from "@google-cloud/kms";

// KMS-backed encryption for POS OAuth tokens at rest — see the "OAuth
// flow" section of docs/plans/2026-05-21-feature-set-purr-design.md.
// Requires a real KMS key ring/key provisioned in the deploying GCP
// project, with the Cloud Functions service account granted
// roles/cloudkms.cryptoKeyEncrypterDecrypter on it, and
// POS_KMS_KEY_NAME set to that key's full resource name
// (projects/*/locations/*/keyRings/*/cryptoKeys/*). None of that
// exists in this sandbox — encrypt/decrypt can't be exercised until
// the user provisions the key post-merge.
const kmsClient = new KeyManagementServiceClient();

function keyName(): string {
  const name = process.env.POS_KMS_KEY_NAME;
  if (!name) throw new Error("POS_KMS_KEY_NAME is not configured.");
  return name;
}

export async function encryptSecret(plaintext: string): Promise<string> {
  const [result] = await kmsClient.encrypt({ name: keyName(), plaintext: Buffer.from(plaintext, "utf8") });
  if (!result.ciphertext) throw new Error("KMS encrypt returned no ciphertext.");
  return Buffer.from(result.ciphertext as Uint8Array).toString("base64");
}

export async function decryptSecret(ciphertextB64: string): Promise<string> {
  const [result] = await kmsClient.decrypt({ name: keyName(), ciphertext: Buffer.from(ciphertextB64, "base64") });
  if (!result.plaintext) throw new Error("KMS decrypt returned no plaintext.");
  return Buffer.from(result.plaintext as Uint8Array).toString("utf8");
}
