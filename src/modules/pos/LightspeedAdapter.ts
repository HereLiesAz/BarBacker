import { POSClient } from '../../types';

export class LightspeedAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to Lightspeed POS...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Lightspeed');
    return [{ id: 'ls-1', items: ['Pasta', 'Water'], status: 'PENDING' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Lightspeed');
    return [{ id: 'ls-item-1', name: 'Lightspeed Carbonara', price: 18.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to Lightspeed');
    return { totalSales: 1800.00, transactionCount: 100 };
  }
}
