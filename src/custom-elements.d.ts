declare namespace JSX {
  interface IntrinsicElements {
    'md-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      anchor?: string;
      open?: boolean;
      quick?: boolean;
      positioning?: string;
    };
    'md-menu-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      headline?: string;
    };
  }
}
