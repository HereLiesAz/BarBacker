import { describe, it, expect } from 'vitest';
import { POSIntegration } from '../subscription/index';

describe('POSIntegration', () => {
  it('instantiates Toast adapter and connects', async () => {
    const pos = new POSIntegration();
    const result = await pos.connect('toast', { apiKey: 'dummy' });
    expect(result).toBe(true);
    const orders = await pos.getOrders();
    expect(orders[0].id).toBe('toast-1');
  });

  it('instantiates Square adapter and connects', async () => {
    const pos = new POSIntegration();
    const result = await pos.connect('square', { accessToken: 'dummy' });
    expect(result).toBe(true);
    const orders = await pos.getOrders();
    expect(orders[0].id).toBe('sq-1');
  });

  it('handles unknown provider', async () => {
    const pos = new POSIntegration();
    const result = await pos.connect('invalid', {});
    expect(result).toBe(false);
  });
});
