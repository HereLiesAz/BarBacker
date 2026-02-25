import { describe, it, expect, vi } from 'vitest';
import { pMap } from '../utils/async';

describe('pMap Concurrency', () => {
    it('should respect concurrency limits', async () => {
        let activeCount = 0;
        let maxActive = 0;
        const totalItems = 10;
        const concurrency = 2;

        await pMap(
            Array.from({ length: totalItems }),
            async () => {
                activeCount++;
                maxActive = Math.max(maxActive, activeCount);
                // Simulate work
                await new Promise(resolve => setTimeout(resolve, 10));
                activeCount--;
                return 'done';
            },
            concurrency
        );

        expect(maxActive).toBeLessThanOrEqual(concurrency);
    });

    it('should process all items', async () => {
        const input = [1, 2, 3, 4, 5];
        const result = await pMap(input, async (x) => x * 2, 2);
        expect(result).toEqual([2, 4, 6, 8, 10]);
    });
});
