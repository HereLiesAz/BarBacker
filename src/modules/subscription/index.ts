export class AdminManager {
  checkSubscription(email?: string | null): boolean {
    if (email === import.meta.env.VITE_GOD_MODE_EMAIL) return true;
    // Logic for subscription check
    return false;
  }
}

export class UserManager {
  setSignupRestriction(restricted: boolean): void {
    console.log(`Signup restricted: ${restricted}`);
  }
  inviteUser(email: string): void {
    console.log(`User invited: ${email}`);
  }
}

// 86'd list is now handled via Firestore in App.tsx (bars/{barId}/eightySixed collection).
// See src/components/EightySixDialog.tsx for the UI.

import { POSClient } from '../../types';
import { ToastAdapter } from '../pos/ToastAdapter';
import { SquareAdapter } from '../pos/SquareAdapter';
import { CloverAdapter } from '../pos/CloverAdapter';
import { LightspeedAdapter } from '../pos/LightspeedAdapter';
import { SpotOnAdapter } from '../pos/SpotOnAdapter';
import { TouchBistroAdapter } from '../pos/TouchBistroAdapter';
import { RevelAdapter } from '../pos/RevelAdapter';
import { LavuAdapter } from '../pos/LavuAdapter';
import { TalechAdapter } from '../pos/TalechAdapter';
import { AlohaAdapter } from '../pos/AlohaAdapter';

export class NoticeManager {
  getNotices(): Promise<string[]> {
    return Promise.resolve(["Welcome to BarBacker Subscription!"]);
  }
}

export class POSIntegration {
  private client: POSClient | null = null;

  async connect(provider: string, credentials: Record<string, string>): Promise<boolean> {
    switch (provider.toLowerCase()) {
      case 'toast':
        this.client = new ToastAdapter();
        break;
      case 'square':
        this.client = new SquareAdapter();
        break;
      case 'clover':
        this.client = new CloverAdapter();
        break;
      case 'lightspeed':
        this.client = new LightspeedAdapter();
        break;
      case 'spoton':
        this.client = new SpotOnAdapter();
        break;
      case 'touchbistro':
        this.client = new TouchBistroAdapter();
        break;
      case 'revel':
        this.client = new RevelAdapter();
        break;
      case 'lavu':
        this.client = new LavuAdapter();
        break;
      case 'talech':
        this.client = new TalechAdapter();
        break;
      case 'aloha':
        this.client = new AlohaAdapter();
        break;
      default:
        console.error(`Unknown POS provider: ${provider}`);
        return false;
    }
    return this.client.connect(credentials);
  }

  async getOrders(): Promise<any[]> {
    if (!this.client) throw new Error('POS not connected');
    return this.client.getOrders();
  }

  getClient(): POSClient | null {
    return this.client;
  }
}

export class CalendarIntegration {
  sync(): void {
    console.log("Calendar Synced");
  }
}

// Theme is now handled via useBarTheme hook (src/hooks/useBarTheme.ts)
// and ThemeEditor component (src/components/ThemeEditor.tsx).

export class PublicMenu {
  getMenu(): any {
    return { items: [] };
  }
}
