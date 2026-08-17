import { describe, it, expect } from "vitest";
import { parseStorageObjectPath } from "../onRequestDeleted";

describe("parseStorageObjectPath", () => {
  it("extracts and decodes the object path from a getDownloadURL()-style URL", () => {
    const url =
      "https://firebasestorage.googleapis.com/v0/b/my-bucket.appspot.com/o/bottlePhotos%2Fbar_A%2Fuser1_123.jpg?alt=media&token=abc-123";
    expect(parseStorageObjectPath(url)).toBe("bottlePhotos/bar_A/user1_123.jpg");
  });

  it("returns null for a URL with no /o/ segment", () => {
    expect(parseStorageObjectPath("https://example.com/not-a-storage-url")).toBeNull();
  });
});
