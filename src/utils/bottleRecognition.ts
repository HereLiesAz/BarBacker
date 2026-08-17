// On-device bottle-label recognition for the BottleScanner feature.
// OCR runs via tesseract.js, which executes entirely in-browser
// (WASM) — the photo and any recognized text never leave the device,
// unlike a cloud vision API call. matchBrand then fuzzy-matches the
// recognized text against a candidate brand list so a scan can
// prefill a known brand instead of always requiring manual typing.
import Tesseract from 'tesseract.js';

export async function recognizeBottleText(image: Blob | string): Promise<string[]> {
  const { data } = await Tesseract.recognize(image, 'eng');
  return data.text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 1);
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  let curr = new Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

// A recognized OCR line rarely matches a candidate brand exactly —
// bottle labels mix the brand name with ABV%, volume, decorative
// text, etc., and OCR itself introduces character errors. This
// checks every (line, candidate) pair for a normalized exact match,
// then a substring match, then falls back to edit distance scored as
// a fraction of the candidate's length, and returns whichever
// candidate scored best across all lines — capped by
// MAX_DISTANCE_RATIO so a bottle with no real match doesn't silently
// return a wrong brand.
const MAX_DISTANCE_RATIO = 0.34;

export function matchBrand(lines: string[], candidates: string[]): string | null {
  let best: { candidate: string; score: number } | null = null;
  for (const rawLine of lines) {
    const line = normalize(rawLine);
    if (!line) continue;
    for (const candidate of candidates) {
      const normCandidate = normalize(candidate);
      if (!normCandidate) continue;

      let score: number;
      if (line === normCandidate) {
        score = 0;
      } else if (line.includes(normCandidate) || normCandidate.includes(line)) {
        score = 0.05;
      } else {
        // Edit distance is only meaningful between strings of
        // comparable length — otherwise a one-word OCR line always
        // "wins" against a long candidate purely on raw distance.
        const lengthRatio = Math.min(line.length, normCandidate.length) / Math.max(line.length, normCandidate.length);
        if (lengthRatio < 0.5) continue;
        score = levenshtein(line, normCandidate) / normCandidate.length;
      }

      if (score <= MAX_DISTANCE_RATIO && (!best || score < best.score)) {
        best = { candidate, score };
      }
    }
  }
  return best?.candidate ?? null;
}
