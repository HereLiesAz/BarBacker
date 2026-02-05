import React from 'react';

/**
 * Module Declaration for React JSX.
 * This extends the IntrinsicElements interface to include Custom Elements (Web Components)
 * from the Material Web library (e.g., md-filled-button, md-icon).
 *
 * Without this, TypeScript would complain about unknown elements in JSX.
 */
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      /** Material Web Menu component */
      'md-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        anchor?: string;
        open?: boolean;
        quick?: boolean;
        positioning?: string;
        onClosed?: () => void;
      };
      /** Material Web Menu Item component */
      'md-menu-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        headline?: string;
      };
      // For simplicity, other Material Web components are typed as 'any',
      // but could be strictly typed similar to md-menu above.
      'md-filled-button': any;
      'md-filled-tonal-button': any;
      'md-outlined-button': any;
      'md-text-button': any;
      'md-icon': any;
      'md-filled-text-field': any;
      'md-list': any;
      'md-list-item': any;
      'md-switch': any;
      'md-dialog': any;
      'md-circular-progress': any;
      'md-chip-set': any;
      'md-filter-chip': any;
      'md-radio': any;
      'md-icon-button': any;
    }
  }
}
