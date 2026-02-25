import { POSClient } from '../../types';

export class SquareAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to Square POS...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Square');
    return [{ id: 'sq-1', items: ['Coffee', 'Muffin'], status: 'COMPLETED' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Square');
    return [{ id: 'sq-item-1', name: 'Square Latte', price: 5.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to Square');
    return { total: 500.00, count: 50 };
  }
}
