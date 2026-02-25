import { POSClient } from '../../types';

export class TouchBistroAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to TouchBistro POS...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to TouchBistro');
    return [{ id: 'tb-1', items: ['Poutine', 'Beer'], status: 'PREPARING' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to TouchBistro');
    return [{ id: 'tb-item-1', name: 'Classic Burger', price: 16.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to TouchBistro');
    return { grossSales: 2000.00, checkCount: 45 };
  }
}
