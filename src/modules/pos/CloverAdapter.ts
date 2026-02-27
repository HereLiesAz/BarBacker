import { POSClient } from '../../types';

export class CloverAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to Clover POS...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Clover');
    return [{ id: 'clover-1', items: ['Steak', 'Wine'], status: 'PAID' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Clover');
    return [{ id: 'cl-item-1', name: 'Clover Ribeye', price: 35.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to Clover');
    return { gross: 3500.00, net: 3200.00 };
  }
}
