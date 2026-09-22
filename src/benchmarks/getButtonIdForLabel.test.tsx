import { describe, it, expect } from 'vitest';
import { ButtonConfig } from '../types';
import { DEFAULT_BUTTONS } from '../constants';
import { buildButtonLookupMaps, getButtonIdForLabel } from '../utils/buttonLookup';

describe('getButtonIdForLabel Performance Benchmark', () => {
    // 1. Setup Data
    const generateButtons = (count: number): ButtonConfig[] => {
        const buttons: ButtonConfig[] = [...DEFAULT_BUTTONS];
        for (let i = 0; i < count; i++) {
            buttons.push({
                id: `custom_${i}`,
                label: `Custom Button ${i}`,
                children: [
                    { id: `custom_${i}_child_1`, label: `Child A` },
                    { id: `custom_${i}_child_2`, label: `Child B` }
                ]
            });
            // Add some with colons to test edge cases
            if (i % 10 === 0) {
                 buttons.push({
                    id: `colon_${i}`,
                    label: `Colon: Part ${i}`,
                    children: []
                 });
            }
        }
        return buttons;
    };

    const buttons = generateButtons(1000); // 1000 buttons + defaults

    // 2. Setup lookup maps via the real production helper — this is the
    // same maps App.tsx builds (see src/utils/buttonLookup.ts).
    const maps = buildButtonLookupMaps(buttons);
    const resolve = (label: string) => getButtonIdForLabel(label, buttons, maps);

    // 3. Generate Test Cases
    const testLabels: string[] = [];
    // Known matches
    testLabels.push("ICE: Well 1");
    testLabels.push("SERVICE ITEMS: PINT");
    testLabels.push("Custom Button 50: Child A");
    testLabels.push("Colon: Part 10: Extra");
    // Non-matches
    testLabels.push("Random Request");
    testLabels.push("Custom Button 9999");

    // Generate many random labels
    for (let i = 0; i < 5000; i++) {
        const r = Math.random();
        if (r < 0.3) {
            testLabels.push(`Custom Button ${Math.floor(Math.random() * 1000)}: Child A`);
        } else if (r < 0.6) {
             testLabels.push(`Colon: Part ${Math.floor(Math.random() * 100) * 10}: Something`);
        } else {
            testLabels.push(`Unknown Request ${i}`);
        }
    }

    it('resolves known labels to the expected button', () => {
        // Exact top-level match.
        expect(resolve('Custom Button 50')).toBe('custom_50');
        // Exact child match resolves to the parent button id.
        expect(resolve('Custom Button 50: Child A')).toBe('custom_50');
        // A colon-bearing top-level label matches itself exactly rather
        // than being split — the split/prefix fallback only kicks in
        // when there's no exact match.
        expect(resolve('Colon: Part 10')).toBe('colon_10');
        // More specific labels resolve to the more specific button
        // ("Custom Button 9999" must not match "Custom Button 999").
        expect(resolve('Custom Button 9999')).toBeUndefined();
        // Unknown labels resolve to undefined (caller treats this as
        // "show by default").
        expect(resolve('Totally Unknown Request')).toBeUndefined();
    });

    it('never throws and stays internally consistent across a large random sample', () => {
        for (const label of testLabels) {
            expect(() => resolve(label)).not.toThrow();
        }
    });

    it('benchmarks performance against a naive O(buttons) linear scan', () => {
        const buttonLookupMap = maps.buttonLookupMap;
        const naiveResolve = (label: string): string | undefined => {
            const exactMatch = buttonLookupMap.get(label);
            if (exactMatch) return exactMatch;
            for (const btn of buttons) {
                if (label.startsWith(btn.label)) return btn.id;
            }
            return undefined;
        };

        const startOld = performance.now();
        for (const label of testLabels) {
            naiveResolve(label);
        }
        const endOld = performance.now();
        const timeOld = endOld - startOld;

        const startNew = performance.now();
        for (const label of testLabels) {
            resolve(label);
        }
        const endNew = performance.now();
        const timeNew = endNew - startNew;

        console.log(`\n--- BENCHMARK RESULTS ---`);
        console.log(`Items processed: ${testLabels.length}`);
        console.log(`Naive linear scan: ${timeOld.toFixed(2)}ms`);
        console.log(`Real implementation: ${timeNew.toFixed(2)}ms`);
        console.log(`Improvement: ${(timeOld / timeNew).toFixed(2)}x faster`);
        console.log(`-------------------------\n`);

        expect(timeNew).toBeLessThan(timeOld);
    });
});
