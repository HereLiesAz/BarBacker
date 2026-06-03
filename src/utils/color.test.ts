import { describe, it, expect } from 'vitest';
import { getContrastColor } from './color';

describe('getContrastColor', () => {
  it('returns white for black', () => {
    expect(getContrastColor('#000000')).toBe('#FFFFFF');
  });

  it('returns black for white', () => {
    expect(getContrastColor('#FFFFFF')).toBe('#000000');
  });

  it('returns white for dark colors', () => {
    expect(getContrastColor('#1E1E1E')).toBe('#FFFFFF');
    expect(getContrastColor('#333333')).toBe('#FFFFFF');
    expect(getContrastColor('#0000FF')).toBe('#FFFFFF');
  });

  it('returns black for light colors', () => {
    expect(getContrastColor('#FFFF00')).toBe('#000000');
    expect(getContrastColor('#00FF00')).toBe('#000000');
    expect(getContrastColor('#CCCCCC')).toBe('#000000');
  });

  it('handles hex without # prefix', () => {
    expect(getContrastColor('000000')).toBe('#FFFFFF');
    expect(getContrastColor('FFFFFF')).toBe('#000000');
  });
});
