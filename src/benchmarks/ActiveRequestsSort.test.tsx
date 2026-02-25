import { describe, it, expect } from 'vitest';

describe('ActiveRequests Sort/Filter Performance Benchmark', () => {
    // 1. Setup Data
    const numRequests = 1000;
    const numIgnored = 500;
    const numPreferences = 200;

    const requests = Array.from({ length: numRequests }, (_, i) => ({
        id: `req_${i}`,
        label: `Label ${i % 100}`,
        status: i % 2 === 0 ? 'pending' : 'claimed'
    }));

    const ignoredIds = Array.from({ length: numIgnored }, (_, i) => `req_${i * 2}`);
    const notificationPreferences = Array.from({ length: numPreferences }, (_, i) => `pref_${i}`);

    const getButtonIdForLabel = (label: string) => `pref_${label.split(' ')[1]}`;

    // 2. Define Implementations
    const oldImplementation = () => {
        return requests.filter(r => {
            if (r.status !== 'pending') return false;
            const btnId = getButtonIdForLabel(r.label);
            if (btnId === 'break' || r.label.includes('BREAK')) return true;
            if (!btnId) return true;
            return notificationPreferences.includes(btnId);
        }).sort((a, b) => {
            const aIgnored = ignoredIds.includes(a.id);
            const bIgnored = ignoredIds.includes(b.id);
            if (aIgnored === bIgnored) return 0;
            return aIgnored ? 1 : -1;
        });
    };

    const newImplementation = () => {
        const ignoredSet = new Set(ignoredIds);
        const prefsSet = new Set(notificationPreferences);
        return requests.filter(r => {
            if (r.status !== 'pending') return false;
            const btnId = getButtonIdForLabel(r.label);
            if (btnId === 'break' || r.label.includes('BREAK')) return true;
            if (!btnId) return true;
            return prefsSet.has(btnId);
        }).sort((a, b) => {
            const aIgnored = ignoredSet.has(a.id);
            const bIgnored = ignoredSet.has(b.id);
            if (aIgnored === bIgnored) return 0;
            return aIgnored ? 1 : -1;
        });
    };

    it('benchmarks performance', () => {
        const startOld = performance.now();
        for (let i = 0; i < 100; i++) oldImplementation();
        const endOld = performance.now();
        const timeOld = endOld - startOld;

        const startNew = performance.now();
        for (let i = 0; i < 100; i++) newImplementation();
        const endNew = performance.now();
        const timeNew = endNew - startNew;

        console.log(`\n--- BENCHMARK RESULTS ---`);
        console.log(`Old Implementation: ${timeOld.toFixed(2)}ms`);
        console.log(`New Implementation: ${timeNew.toFixed(2)}ms`);
        console.log(`Improvement: ${(timeOld / timeNew).toFixed(2)}x faster`);
        console.log(`-------------------------\n`);

        expect(timeNew).toBeLessThan(timeOld);
    });
});
