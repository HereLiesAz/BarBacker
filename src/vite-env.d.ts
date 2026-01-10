/// <reference types="vite/client" />

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': any;
      'md-outlined-button': any;
      'md-elevated-button': any;
      'md-text-button': any;
      'md-filled-text-field': any;
      'md-icon': any;
      'md-list': any;
      'md-list-item': any;
      'md-divider': any;
      'md-dialog': any;
      'md-icon-button': any;
      'md-circular-progress': any;
      'md-chip-set': any;
      'md-filter-chip': any;
    }
  }
}
