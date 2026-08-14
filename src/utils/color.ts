/**
 * Returns '#000000' or '#FFFFFF' for readable text contrast against the given hex background.
 * Uses the WCAG relative luminance formula.
 */
export function getContrastColor(hex: string): string {
  // Remove # prefix if present, and expand 3-digit shorthand (#fff ->
  // ffffff) so the fixed-width substring reads below don't silently
  // misparse a short hex code (e.g. reading "f" as "6%" instead of
  // "100%" for the green channel of #fff).
  let clean = hex.replace('#', '');
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;

  // sRGB to linear conversion.
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  return luminance > 0.179 ? '#000000' : '#FFFFFF';
}
