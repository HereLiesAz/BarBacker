import { describe, it, expect } from 'vitest';
import { pMap } from './async';

describe('pMap', () => {
    it('processes items with concurrency limit', async () => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let running = 0;
        let maxRunning = 0;

        const results = await pMap(items, async (item) => {
            running++;
            maxRunning = Math.max(maxRunning, running);

            // Simulate work
            await new Promise(resolve => setTimeout(resolve, 10));

            running--;
            return item * 2;
        }, 3); // Concurrency 3

        expect(results).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        expect(maxRunning).toBeLessThanOrEqual(3);
    });

    it('handles empty array', async () => {
        const results = await pMap([], async () => 1, 5);
        expect(results).toEqual([]);
    });

    it('propagates errors', async () => {
        const items = [1, 2, 3];
        await expect(pMap(items, async (item) => {
            if (item === 2) throw new Error('Failed');
            return item;
        }, 2)).rejects.toThrow('Failed');
    });
});
