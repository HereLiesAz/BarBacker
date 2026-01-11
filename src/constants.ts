import { ButtonConfig } from './types';

export const ROLES = ['Owner', 'Bartender', 'Barback', 'Server', 'Manager', 'Security', 'Runner'];

export const DEFAULT_BUTTONS: ButtonConfig[] = [
  { id: 'ice', label: 'ICE', icon: 'ac_unit' },
  {
    id: 'glass', label: 'GLASSWARE', icon: 'wine_bar',
    children: [
      { id: 'rocks', label: 'ROCKS' },
      { id: 'collins', label: 'COLLINS' },
      { id: 'pint', label: 'PINT' },
      { id: 'coupe', label: 'COUPE' },
      { id: 'shot', label: 'SHOT GLASS' },
      { id: 'wine', label: 'WINE GLASS' }
    ]
  },
  {
    id: 'fruit', label: 'FRUIT / GARNISH', icon: 'restaurant',
    children: [
      { id: 'lime', label: 'LIMES' },
      { id: 'lemon', label: 'LEMONS' },
      { id: 'orange', label: 'ORANGES' },
      { id: 'cherry', label: 'CHERRIES' },
      { id: 'olive', label: 'OLIVES' },
      { id: 'mint', label: 'MINT' }
    ]
  },
  { id: 'restock_beer', label: 'RESTOCK BEER', icon: 'sports_bar' },
  {
    id: 'restock', label: 'RESTOCK WELL', icon: 'liquor',
    children: [
      { id: 'vodka', label: 'VODKA' },
      { id: 'gin', label: 'GIN' },
      { id: 'tequila', label: 'TEQUILA' },
      { id: 'rum', label: 'RUM' },
      { id: 'whiskey', label: 'WHISKEY' },
      { id: 'cordial', label: 'MIXERS' },
      { id: 'beer', label: 'BEER' }
    ]
  },
  { id: 'keg', label: 'KEG KICKED', icon: 'keg' },
  { id: 'trash', label: 'TRASH / SPILL', icon: 'delete' },
  { id: 'security', label: 'SECURITY', icon: 'security' },
  { id: 'manager', label: 'MANAGER', icon: 'manage_accounts' },
];

// Map of Role -> Array of Button IDs that are enabled by default
export const ROLE_NOTIFICATION_DEFAULTS: Record<string, string[]> = {
  'Owner': ['manager', 'security', 'keg', 'trash', 'ice', 'glass', 'fruit', 'restock'], // Owner gets everything
  'Manager': ['manager', 'security', 'keg', 'trash', 'restock'],
  'Bartender': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash'],
  'Barback': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash'],
  'Server': [], // Servers usually send, not receive? Or maybe "Table Ready"? For now, empty.
  'Runner': ['ice', 'glass', 'restock'],
  'Security': ['security', 'fight', 'manager'] // "fight" isn't in default buttons but might be custom? defaulting 'security'
};
