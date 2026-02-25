/**
 * Maps over an array with a concurrency limit.
 *
 * @param items The array of items to process.
 * @param fn The async mapper function.
 * @param concurrency The maximum number of concurrent promises.
 * @returns A promise that resolves to an array of results.
 */
export async function pMap<T, R>(
    items: T[],
    fn: (item: T, index: number) => Promise<R>,
    concurrency: number
): Promise<R[]> {
    const results = new Array(items.length);
    const queue = items.map((item, index) => ({ item, index }));

    // Create workers
    const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
        while (queue.length > 0) {
            const { item, index } = queue.shift()!;
            try {
                results[index] = await fn(item, index);
            } catch (error) {
                // If one fails, we throw, which rejects the whole Promise.all.
                // The caller should handle this or wrap fn in a try/catch if they want partial success.
                throw error;
            }
        }
    });

    await Promise.all(workers);
    return results;
}
