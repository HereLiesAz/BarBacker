import { POSClient } from '../../types';

export class TalechAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to Talech POS...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Talech');
    return [{ id: 'talech-1', items: ['Salad', 'Iced Tea'], status: 'closed' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Talech');
    return [{ id: 'talech-item-1', name: 'Caesar Salad', price: 11.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to Talech');
    return { sales: 600.00, transactions: 25 };
  }
}
