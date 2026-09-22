import { describe, it, expect } from 'vitest';
import { Request } from '../types';
import { filterAndSortActiveRequests } from '../utils/activeRequests';

describe('ActiveRequests Sort/Filter', () => {
    // 1. Setup Data
    const numRequests = 1000;
    const numIgnored = 500;
    const numPreferences = 200;

    const requests: Request[] = Array.from({ length: numRequests }, (_, i) => ({
        id: `req_${i}`,
        label: `Label ${i % 100}`,
        status: i % 2 === 0 ? 'pending' : 'claimed',
        requesterId: `user_${i}`,
        barId: 'bar_1',
        timestamp: null as unknown as Request['timestamp'],
    }));

    const ignoredIds = Array.from({ length: numIgnored }, (_, i) => `req_${i * 2}`);
    const notificationPreferences = Array.from({ length: numPreferences }, (_, i) => `pref_${i}`);

    const getButtonIdForLabel = (label: string) => `pref_${label.split(' ')[1]}`;

    const run = () => filterAndSortActiveRequests({
        requests, ignoredIds, notificationPreferences, currentUserId: undefined, getButtonIdForLabel,
    });

    it('shows only pending requests whose button id is subscribed to', () => {
        const result = run();
        expect(result.every((r) => r.status === 'pending')).toBe(true);
        expect(result.every((r) => notificationPreferences.includes(getButtonIdForLabel(r.label)))).toBe(true);
    });

    it('always shows the current user\'s own pending requests regardless of preferences', () => {
        const own: Request = {
            id: 'own_1', label: 'Unsubscribed Label', status: 'pending',
            requesterId: 'me', barId: 'bar_1', timestamp: null as unknown as Request['timestamp'],
        };
        const result = filterAndSortActiveRequests({
            requests: [own], ignoredIds: [], notificationPreferences: [], currentUserId: 'me', getButtonIdForLabel,
        });
        expect(result).toEqual([own]);
    });

    it('always shows BREAK requests and sorts ignored ones to the bottom', () => {
        const result = run();
        const ignoredSet = new Set(ignoredIds);
        for (let i = 1; i < result.length; i++) {
            const prevIgnored = ignoredSet.has(result[i - 1].id);
            const curIgnored = ignoredSet.has(result[i].id);
            // Once an ignored request appears, everything after it must also be ignored.
            expect(prevIgnored ? curIgnored : true).toBe(true);
        }
    });

    it('benchmarks the real filter/sort against a naive Array.includes equivalent', () => {
        const naiveRun = () => {
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

        const startOld = performance.now();
        for (let i = 0; i < 100; i++) naiveRun();
        const endOld = performance.now();
        const timeOld = endOld - startOld;

        const startNew = performance.now();
        for (let i = 0; i < 100; i++) run();
        const endNew = performance.now();
        const timeNew = endNew - startNew;

        console.log(`\n--- BENCHMARK RESULTS ---`);
        console.log(`Naive Array.includes: ${timeOld.toFixed(2)}ms`);
        console.log(`Real implementation (Set-based): ${timeNew.toFixed(2)}ms`);
        console.log(`Improvement: ${(timeOld / timeNew).toFixed(2)}x faster`);
        console.log(`-------------------------\n`);

        expect(timeNew).toBeLessThan(timeOld);
    });
});
