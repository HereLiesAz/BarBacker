/**
 * Returns '#000000' or '#FFFFFF' for readable text contrast against the given hex background.
 * Uses the WCAG relative luminance formula.
 */
export function getContrastColor(hex: string): string {
  // Remove # prefix if present.
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;

  // sRGB to linear conversion.
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  return luminance > 0.179 ? '#000000' : '#FFFFFF';
}
