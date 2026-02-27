import { POSClient } from '../../types';

export class LavuAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to Lavu POS...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Lavu');
    return [{ id: 'lavu-1', items: ['Cocktail', 'Nachos'], status: 'OPEN' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Lavu');
    return [{ id: 'lavu-item-1', name: 'House Margarita', price: 10.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to Lavu');
    return { total_revenue: 800.00 };
  }
}
