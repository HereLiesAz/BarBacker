import { describe, it, expect } from 'vitest';
import { matchBrand } from './bottleRecognition';

describe('matchBrand', () => {
  it('matches an exact (case-insensitive) line', () => {
    expect(matchBrand(['JAMESON'], ['Jameson', 'Jack Daniel\'s'])).toBe('Jameson');
  });

  it('matches a candidate embedded in a longer OCR line', () => {
    expect(matchBrand(['JAMESON IRISH WHISKEY 750ML 40% ABV'], ['Jameson', 'Jack Daniel\'s'])).toBe('Jameson');
  });

  it('matches across multiple OCR lines, picking the best line', () => {
    expect(matchBrand(['DISTILLED IN IRELAND', 'JAMESON', 'SINCE 1780'], ['Jameson'])).toBe('Jameson');
  });

  it('tolerates minor OCR character errors via edit distance', () => {
    // 'O' misread as '0' — one substitution.
    expect(matchBrand(['JAMES0N'], ['Jameson'])).toBe('Jameson');
  });

  it('returns null when nothing crosses the match threshold', () => {
    expect(matchBrand(['SOME RANDOM UNRELATED LABEL TEXT'], ['Jameson', 'Grey Goose'])).toBeNull();
  });

  it('returns null for empty input', () => {
    expect(matchBrand([], ['Jameson'])).toBeNull();
    expect(matchBrand(['JAMESON'], [])).toBeNull();
  });

  it('picks the closer of two plausible candidates', () => {
    expect(matchBrand(['GREY GOOSE VODKA'], ['Grey Goose', 'Ketel One'])).toBe('Grey Goose');
  });

  it('does not confidently match a short generic OCR fragment against an unrelated longer candidate', () => {
    // "GIN" is a substring of "Hendrick's Gin", but that alone
    // shouldn't be enough to call it a match for a completely
    // different (and un-candidated, here) gin bottle.
    expect(matchBrand(['GIN'], ['Hendrick\'s Gin'])).toBeNull();
  });
});
