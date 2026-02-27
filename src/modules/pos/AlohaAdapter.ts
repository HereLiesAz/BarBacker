import { POSClient } from '../../types';

export class AlohaAdapter implements POSClient {
  private connected: boolean = false;

  async connect(credentials: Record<string, string>): Promise<boolean> {
    console.log('Connecting to Aloha POS (NCR)...', credentials);
    // Likely requires local network bridge or cloud connect API
    this.connected = true;
    return true;
  }

  async getOrders(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Aloha');
    return [{ id: 'aloha-1', items: ['Steak', 'Red Wine'], status: 'Ordered' }];
  }

  async syncMenu(): Promise<any[]> {
    if (!this.connected) throw new Error('Not connected to Aloha');
    return [{ id: 'aloha-item-1', name: 'Filet Mignon', price: 45.00 }];
  }

  async getSales(startDate: Date, endDate: Date): Promise<any> {
    if (!this.connected) throw new Error('Not connected to Aloha');
    return { gross: 5000.00, guests: 80 };
  }
}
