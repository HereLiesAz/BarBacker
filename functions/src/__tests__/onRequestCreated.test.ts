import { describe, it, expect } from "vitest";
import { chunk } from "../onRequestCreated";

// sendEachForMulticast throws SYNCHRONOUSLY (not a rejected promise)
// above 500 tokens — chunk() is what keeps a bar with more devices
// than that from losing FCM entirely. See onRequestCreated.ts's
// FCM_BATCH_SIZE comment.

describe("chunk", () => {
  it("returns a single batch when under the size limit", () => {
    expect(chunk([1, 2, 3], 500)).toEqual([[1, 2, 3]]);
  });

  it("splits exactly at the boundary with no empty trailing batch", () => {
    const items = Array.from({ length: 500 }, (_, i) => i);
    expect(chunk(items, 500)).toHaveLength(1);
  });

  it("splits into multiple batches when over the size limit", () => {
    const items = Array.from({ length: 1001 }, (_, i) => i);
    const batches = chunk(items, 500);
    expect(batches).toHaveLength(3);
    expect(batches[0]).toHaveLength(500);
    expect(batches[1]).toHaveLength(500);
    expect(batches[2]).toHaveLength(1);
  });

  it("returns an empty array for empty input", () => {
    expect(chunk([], 500)).toEqual([]);
  });
});
