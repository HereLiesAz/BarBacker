import { describe, it, expect } from 'vitest';
import { ButtonConfig } from '../types';

describe('BarManager Filtering Performance', () => {
  // Setup
  const generateData = (totalButtons: number, hiddenCount: number) => {
    const allButtons: ButtonConfig[] = [];
    for (let i = 0; i < totalButtons; i++) {
      allButtons.push({
        id: `btn_${i}`,
        label: `Button ${i}`,
      });
    }

    const hiddenButtonIds: string[] = [];
    // Hide a subset of buttons. Using a stride to pick them deterministically but spread out.
    // We pick every 5th button up to hiddenCount
    let count = 0;
    for (let i = 0; i < totalButtons && count < hiddenCount; i += 5) {
        hiddenButtonIds.push(`btn_${i}`);
        count++;
    }
    return { allButtons, hiddenButtonIds };
  };

  // Use a large dataset to make the difference significant
  const { allButtons, hiddenButtonIds } = generateData(20000, 4000);

  it('benchmarks array.includes vs set.has', () => {
    // Baseline: Array.includes
    // Run multiple times to reduce noise
    const iterations = 10;

    const startArray = performance.now();
    for (let i = 0; i < iterations; i++) {
        allButtons.filter(b => !hiddenButtonIds.includes(b.id));
    }
    const endArray = performance.now();
    const timeArray = (endArray - startArray) / iterations;

    // Optimization: Set.has
    // Note: In the React component, we'd memoize the Set creation.
    // For this benchmark, we include the Set creation cost if we assume it happens on render,
    // but typically we'd memoize it so the steady state is just the lookup.
    // Let's measure the steady state lookup speed primarily, but we can also measure with creation.

    // Scenario A: Set created once (memoized behavior)
    const hiddenSet = new Set(hiddenButtonIds);
    const startSet = performance.now();
    for (let i = 0; i < iterations; i++) {
        allButtons.filter(b => !hiddenSet.has(b.id));
    }
    const endSet = performance.now();
    const timeSet = (endSet - startSet) / iterations;

    // Correctness check
    const resultArr = allButtons.filter(b => !hiddenButtonIds.includes(b.id));
    const resultSet = allButtons.filter(b => !hiddenSet.has(b.id));
    expect(resultArr.length).toBe(resultSet.length);
    if (resultArr.length > 0) {
        expect(resultArr[0].id).toBe(resultSet[0].id);
    }

    console.log(`\n--- BENCHMARK RESULTS (N=${allButtons.length}, M=${hiddenButtonIds.length}) ---`);
    console.log(`Avg time per filter (over ${iterations} runs)`);
    console.log(`Array.includes: ${timeArray.toFixed(4)}ms`);
    console.log(`Set.has (memoized): ${timeSet.toFixed(4)}ms`);
    console.log(`Improvement: ${(timeArray / timeSet).toFixed(2)}x faster`);
    console.log(`-------------------------\n`);

    // Expect significant improvement
    expect(timeSet).toBeLessThan(timeArray);
  });
});
