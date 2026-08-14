import { useEffect } from 'react';
import type { BarTheme } from '../types';
import { getContrastColor } from '../utils/color';

/**
 * Applies a bar's custom theme to the document root via CSS custom properties.
 * Removes custom properties when theme is undefined or bar is not premium.
 */
export function useBarTheme(theme: BarTheme | undefined, isPremium: boolean): void {
  useEffect(() => {
    const root = document.documentElement;

    if (!isPremium || !theme) {
      root.style.removeProperty('--md-sys-color-primary');
      root.style.removeProperty('--md-sys-color-on-primary');
      root.style.removeProperty('--md-sys-color-secondary-container');
      root.style.removeProperty('--bb-button-label-color');
      root.style.removeProperty('font-family');
      return;
    }

    if (theme.primaryColor) {
      root.style.setProperty('--md-sys-color-primary', theme.primaryColor);
      root.style.setProperty('--md-sys-color-on-primary', getContrastColor(theme.primaryColor));
    }
    if (theme.accentColor) {
      root.style.setProperty('--md-sys-color-secondary-container', theme.accentColor);
      // The grid button label/icon color is otherwise a fixed red
      // (see --bb-button-label-color's default in index.css) — on a
      // themed bar the button's background IS this accent color, so
      // a red/pink/orange brand color would make the label illegible
      // against its own background without this override.
      root.style.setProperty('--bb-button-label-color', getContrastColor(theme.accentColor));
    }
    if (theme.fontFamily) {
      root.style.setProperty('font-family', theme.fontFamily);
    }

    return () => {
      root.style.removeProperty('--md-sys-color-primary');
      root.style.removeProperty('--md-sys-color-on-primary');
      root.style.removeProperty('--md-sys-color-secondary-container');
      root.style.removeProperty('--bb-button-label-color');
      root.style.removeProperty('font-family');
    };
  }, [theme, isPremium]);
}
