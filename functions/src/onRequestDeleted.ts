import { onDocumentDeleted } from "firebase-functions/v2/firestore";
import { getStorage } from "firebase-admin/storage";

// The bottle scanner's "Send Alert" action (App.tsx's sendBottleAlert)
// uploads a photo to Storage *before* creating the /requests doc that
// references it via photoUrl — an upload and a Firestore write can't
// be made atomic, so a request can exist without a photo, but never
// the reverse. Nothing ever cleaned the photo up once its request
// went away: cancelRequest deletes the doc directly, and
// cleanupStaleRequests batch-deletes anything pending for 12+ hours,
// and neither touches Storage. Every bottle alert that got claimed-
// and-forgotten, cancelled, or aged out left its photo in the bucket
// forever. Triggering on delete (rather than trying to thread cleanup
// through every place a request doc can go away) covers all of those
// paths uniformly, including any added later.
// getDownloadURL() URLs look like
// https://firebasestorage.googleapis.com/v0/b/{bucket}/o/{urlEncodedObjectPath}?alt=media&token=...
// — exported standalone so its parsing can be unit tested without
// mocking the Firestore trigger or Admin Storage SDK.
export function parseStorageObjectPath(photoUrl: string): string | null {
  const match = photoUrl.match(/\/o\/([^?]+)/);
  if (!match) return null;
  return decodeURIComponent(match[1]);
}

export const onRequestDeleted = onDocumentDeleted("requests/{requestId}", async (event) => {
  const photoUrl = event.data?.data()?.photoUrl as string | undefined;
  if (!photoUrl) return;

  const objectPath = parseStorageObjectPath(photoUrl);
  if (!objectPath) {
    console.warn(`onRequestDeleted: could not parse a Storage object path from photoUrl: ${photoUrl}`);
    return;
  }

  try {
    await getStorage().bucket().file(objectPath).delete();
  } catch (e) {
    // Already gone — e.g. a duplicate delete event, or a previous
    // invocation that succeeded but crashed before returning. Not
    // worth logging as an error.
    const code = (e as { code?: number })?.code;
    if (code !== 404) {
      console.error(`onRequestDeleted: failed to delete photo at ${objectPath}`, e);
    }
  }
});
