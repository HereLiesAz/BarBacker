import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Polyfill ElementInternals for JSDOM
if (typeof ElementInternals !== 'undefined') {
  ElementInternals.prototype.setFormValue = function(value) {
    // no-op for testing
  };
  ElementInternals.prototype.setValidity = function(flags, message, anchor) {
    // no-op
  };
  Object.defineProperty(ElementInternals.prototype, 'validationMessage', {
      get: () => '',
      configurable: true
  });
  Object.defineProperty(ElementInternals.prototype, 'willValidate', {
      get: () => true,
      configurable: true
  });
  Object.defineProperty(ElementInternals.prototype, 'validity', {
      get: () => ({ valid: true }),
      configurable: true
  });
}

// Polyfill Web Animations API used by Material Web
if (typeof Element.prototype.animate === 'undefined') {
  Element.prototype.animate = function() {
    return {
      onfinish: null,
      play: () => {},
      cancel: () => {},
      finish: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      finished: Promise.resolve(), // Add finished promise
    } as any;
  };
}

// Polyfill IntersectionObserver
if (typeof IntersectionObserver === 'undefined') {
  class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver
  });
}

// Polyfill HTMLDialogElement
if (typeof HTMLDialogElement !== 'undefined') {
    HTMLDialogElement.prototype.show = function() {
        this.open = true;
    };
    HTMLDialogElement.prototype.showModal = function() {
        this.open = true;
    };
    HTMLDialogElement.prototype.close = function() {
        this.open = false;
        this.dispatchEvent(new Event('close'));
    };
}


afterEach(() => {
  cleanup();
});
