import { POSClient } from '../../types';

export class SpotOnAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to SpotOn POS...', credentials);
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to SpotOn');
    return [{ id: 'so-1', items: ['Tacos', 'Soda'], status: 'KITCHEN' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to SpotOn');
    return [{ id: 'so-item-1', name: 'SpotOn Taco', price: 4.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to SpotOn');
    return { revenue: 400.00, tips: 50.00 };
  }
}
