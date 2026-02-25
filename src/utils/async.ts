
/**
 * Processes an array of items in parallel with a concurrency limit.
 *
 * @param items The array of items to process.
 * @param fn The async function to execute for each item.
 * @param concurrency The maximum number of concurrent executions.
 * @returns A promise that resolves to an array of results.
 */
export async function pMap<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency: number
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  const queue = items.map((item, index) => ({ item, index }));

  const worker = async () => {
    while (queue.length > 0) {
      const { item, index } = queue.shift()!;
      try {
        results[index] = await fn(item);
      } catch (error) {
        throw error; // Fail fast like Promise.all
      }
    }
  };

  const workers = Array.from({ length: Math.min(items.length, concurrency) }, () => worker());
  await Promise.all(workers);

  return results;
}
