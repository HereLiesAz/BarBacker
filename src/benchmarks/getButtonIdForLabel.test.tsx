import { describe, it, expect } from 'vitest';
import { ButtonConfig } from '../types';
import { DEFAULT_BUTTONS } from '../constants';

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

    // 2. Setup Lookup Maps
    // Original Map (from App.tsx)
    const buttonLookupMap = new Map<string, string>();
    for (const btn of buttons) {
        if (!buttonLookupMap.has(btn.label)) buttonLookupMap.set(btn.label, btn.id);
        if (btn.children) {
            for (const child of btn.children) {
                if (!buttonLookupMap.has(child.label)) buttonLookupMap.set(child.label, btn.id);
            }
        }
    }

    // New Map (Top Level Index)
    const topLevelIndexMap = new Map<string, number>();
    buttons.forEach((btn, index) => {
        if (!topLevelIndexMap.has(btn.label)) {
            topLevelIndexMap.set(btn.label, index);
        }
    });


    // 3. Define Implementations
    const oldGetButtonId = (label: string): string | undefined => {
        const exactMatch = buttonLookupMap.get(label);
        if (exactMatch) return exactMatch;

        for (const btn of buttons) {
            if (label.startsWith(btn.label)) return btn.id;
        }
        return undefined;
    };

    const newGetButtonId = (label: string): string | undefined => {
        const exactMatch = buttonLookupMap.get(label);
        if (exactMatch) return exactMatch;

        // Split and find lowest index match
        const parts = label.split(': ');
        let bestIndex = -1;

        // Construct candidates: "Part0", "Part0: Part1", etc.
        let currentLabel = "";
        for (let i = 0; i < parts.length; i++) {
            currentLabel += (i > 0 ? ": " : "") + parts[i];
            const idx = topLevelIndexMap.get(currentLabel);
            if (idx !== undefined) {
                if (bestIndex === -1 || idx < bestIndex) {
                    bestIndex = idx;
                }
            }
        }

        if (bestIndex !== -1) {
            return buttons[bestIndex].id;
        }

        return undefined;
    };

    // 4. Generate Test Cases
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

    it('should return results consistent with intended hierarchy', () => {
        let mismatches = 0;
        let fixes = 0;

        for (const label of testLabels) {
            const oldRes = oldGetButtonId(label);
            const newRes = newGetButtonId(label);

            if (oldRes !== newRes) {
                // Analyze mismatch
                // If Old matched "Custom Button 5" for "Custom Button 50", and New matched "Custom Button 50".
                // Then New is correct (more specific).
                if (oldRes && newRes && newRes.length > oldRes.length && newRes.includes(oldRes.replace('custom_', ''))) {
                     // This is the "prefix bug" fix.
                     fixes++;
                } else if (oldRes && !newRes && label.includes('9999')) {
                     // This is a false positive fix (Old matched "Custom Button 9" for "Custom Button 9999").
                     fixes++;
                } else {
                     console.error(`Unexpected Mismatch for label: "${label}". Old: ${oldRes}, New: ${newRes}`);
                     mismatches++;
                }
            }
        }
        console.log(`\nVerification: Found ${fixes} cases where new logic improved specificity (fixed prefix bug).`);
        console.log(`Verification: Found ${mismatches} unexpected mismatches.`);

        expect(mismatches).toBe(0);
    });

    it('benchmarks performance', () => {
        const startOld = performance.now();
        for (const label of testLabels) {
            oldGetButtonId(label);
        }
        const endOld = performance.now();
        const timeOld = endOld - startOld;

        const startNew = performance.now();
        for (const label of testLabels) {
            newGetButtonId(label);
        }
        const endNew = performance.now();
        const timeNew = endNew - startNew;

        console.log(`\n--- BENCHMARK RESULTS ---`);
        console.log(`Items processed: ${testLabels.length}`);
        console.log(`Old Implementation: ${timeOld.toFixed(2)}ms`);
        console.log(`New Implementation: ${timeNew.toFixed(2)}ms`);
        console.log(`Improvement: ${(timeOld / timeNew).toFixed(2)}x faster`);
        console.log(`-------------------------\n`);

        expect(timeNew).toBeLessThan(timeOld);
    });
});
