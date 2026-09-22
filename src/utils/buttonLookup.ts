import { ButtonConfig } from '../types';

export interface ButtonLookupMaps {
  buttonLookupMap: Map<string, string>;
  topLevelIndexMap: Map<string, number>;
}

// Builds the two lookup maps getButtonIdForLabel needs. Split out of
// App.tsx so the real matching logic can be exercised by tests without
// mounting the whole app (see src/benchmarks/getButtonIdForLabel.test.tsx,
// which previously tested a hand-copied stand-in that could drift from
// this implementation unnoticed).
export function buildButtonLookupMaps(buttons: ButtonConfig[]): ButtonLookupMaps {
  const buttonLookupMap = new Map<string, string>();
  // Iterate in order; first match for a label wins, preserving original behavior.
  for (const btn of buttons) {
    if (!buttonLookupMap.has(btn.label)) buttonLookupMap.set(btn.label, btn.id);
    if (btn.children) {
      for (const child of btn.children) {
        if (!buttonLookupMap.has(child.label)) buttonLookupMap.set(child.label, btn.id);
      }
    }
  }

  const topLevelIndexMap = new Map<string, number>();
  buttons.forEach((btn, index) => {
    if (!topLevelIndexMap.has(btn.label)) {
      topLevelIndexMap.set(btn.label, index);
    }
  });

  return { buttonLookupMap, topLevelIndexMap };
}

// Finds the button ID a request label belongs to. Tries an exact match
// first (O(1) via buttonLookupMap), then falls back to splitting on
// ": " and finding the lowest-index top-level button whose label is a
// prefix of the given label (O(parts) instead of O(buttons)).
export function getButtonIdForLabel(
  label: string,
  buttons: ButtonConfig[],
  { buttonLookupMap, topLevelIndexMap }: ButtonLookupMaps,
): string | undefined {
  const exactMatch = buttonLookupMap.get(label);
  if (exactMatch) return exactMatch;

  const parts = label.split(': ');
  let bestIndex = -1;

  let currentLabel = '';
  for (let i = 0; i < parts.length; i++) {
    currentLabel += (i > 0 ? ': ' : '') + parts[i];
    const idx = topLevelIndexMap.get(currentLabel);
    if (idx !== undefined) {
      // "First match wins" logic implies finding the matching button with lowest index.
      if (bestIndex === -1 || idx < bestIndex) {
        bestIndex = idx;
      }
    }
  }

  if (bestIndex !== -1) {
    return buttons[bestIndex].id;
  }

  return undefined;
}
