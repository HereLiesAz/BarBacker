import { POSClient } from '../../types';

export class RevelAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to Revel Systems...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Revel');
    return [{ id: 'revel-1', items: ['Pizza', 'Coke'], status: 'Cooking' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Revel');
    return [{ id: 'revel-item-1', name: 'Margherita Pizza', price: 12.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to Revel');
    return { net_sales: 1200.00, orders: 30 };
  }
}
