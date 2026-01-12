/// <reference types="vite/client" />

import * as React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
        value?: string;
      };
      'md-outlined-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };
      'md-text-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
        href?: string;
        target?: string;
      };
      'md-filled-tonal-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };
      'md-elevated-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };
      'md-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        open?: boolean;
        onClose?: (e: Event) => void;
      };
      'md-filled-text-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
        value?: string;
        type?: string;
        placeholder?: string;
        required?: boolean;
        disabled?: boolean;
        error?: boolean;
        errorText?: string;
        supportingText?: string;
        name?: string;
        onInput?: (e: Event) => void;
        onChange?: (e: Event) => void;
        min?: string | number;
        max?: string | number;
      };
      'md-checkbox': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        checked?: boolean;
        disabled?: boolean;
        indeterminate?: boolean;
        onChange?: (e: Event) => void;
      };
      'md-switch': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        selected?: boolean;
        disabled?: boolean;
        onChange?: (e: Event) => void;
      };
      'md-list': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'md-list-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: 'button' | 'link' | 'text';
        href?: string;
        disabled?: boolean;
        active?: boolean;
        selected?: boolean;
      };
      'md-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        slot?: string;
      };
      'md-icon-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        disabled?: boolean;
        href?: string;
        target?: string;
        onClick?: (e: Event) => void;
      };
      'md-radio': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        checked?: boolean;
        disabled?: boolean;
        value?: string;
        name?: string;
        onChange?: (e: Event) => void;
        'touch-target'?: 'wrapper' | 'none';
      };
      'md-circular-progress': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        indeterminate?: boolean;
        value?: number;
        max?: number;
      };
      'md-chip-set': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'md-filter-chip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
        selected?: boolean;
        disabled?: boolean;
        onClick?: (e: Event) => void;
      };
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-dialog': any;
  }
}
