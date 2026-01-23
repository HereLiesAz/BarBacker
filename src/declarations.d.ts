import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        anchor?: string;
        open?: boolean;
        quick?: boolean;
        positioning?: string;
        onClosed?: () => void;
      };
      'md-menu-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        headline?: string;
      };
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
