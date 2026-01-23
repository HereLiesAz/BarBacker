import { ButtonConfig } from './types';

export const ROLES = ['Owner', 'Bartender', 'Barback', 'Server', 'Manager', 'Security', 'Runner'];

export const DEFAULT_BEERS = [
  'Amstel Light', 'Bass Ale', 'Beck\'s', 'Blue Moon', 'Bud Light', 'Bud Light Lime', 'Bud Light Platinum', 'Budweiser',
  'Busch', 'Busch Light', 'Coors', 'Coors Banquet', 'Coors Light', 'Corona', 'Corona Extra', 'Corona Light', 'Corona Premier',
  'Dos Equis Amber', 'Dos Equis Lager', 'Foster\'s', 'Goose Island IPA', 'Guinness', 'Heineken', 'Heineken 0.0', 'Heineken Light',
  'Hoegaarden', 'Kona Big Wave', 'Lagunitas IPA', 'Landshark Lager', 'Michelob', 'Michelob Light', 'Michelob Ultra', 'Michelob Ultra Amber',
  'Miller Genuine Draft', 'Miller High Life', 'Miller Lite', 'Modelo Especial', 'Modelo Negra', 'Natural Light', 'Newcastle Brown Ale',
  'Pabst Blue Ribbon', 'Pacifico', 'Peroni', 'Pilsner Urquell', 'Red Stripe', 'Rolling Rock', 'Samuel Adams Boston Lager', 'Sapporo',
  'Shiner Bock', 'Shock Top', 'Sierra Nevada Pale Ale', 'Sol', 'St. Pauli Girl', 'Stella Artois', 'Tecate', 'Victoria', 'Yuengling'
];

export const DEFAULT_BUTTONS: ButtonConfig[] = [
  { id: 'break', label: 'BREAK', icon: 'coffee' },
  { id: 'ice', label: 'ICE', icon: 'ac_unit' },
  {
    id: 'glass', label: 'SERVICE ITEMS', icon: 'wine_bar',
    children: [
      { id: 'pint', label: 'PINT' },
      { id: 'rocks', label: 'ROCKS' },
      { id: 'collins', label: 'COLLINS' },
      { id: 'wine', label: 'WINE GLASS' },
      { id: 'coupe', label: 'COUPE' },
      { id: 'shot', label: 'SHOT GLASS' },
      { id: 'napkins', label: 'NAPKINS' },
      { id: 'straws', label: 'STRAWS' },
      { id: 'coasters', label: 'COASTERS' }
    ]
  },
  {
    id: 'fruit', label: 'GARNISH', icon: 'restaurant',
    children: [
      { id: 'lime', label: 'LIMES' },
      { id: 'lemon', label: 'LEMONS' },
      { id: 'orange', label: 'ORANGES' },
      { id: 'olive', label: 'OLIVES' },
      { id: 'cherry', label: 'CHERRIES' },
      { id: 'mint', label: 'MINT' }
    ]
  },
  { id: 'restock_beer', label: 'BEER', icon: 'sports_bar' },
  {
    id: 'mixers', label: 'MIXERS', icon: 'local_bar',
    children: [
      { id: 'soda', label: 'SODA' },
      { id: 'tonic', label: 'TONIC' },
      { id: 'coke', label: 'COKE' },
      { id: 'diet', label: 'DIET COKE' },
      { id: 'sprite', label: 'SPRITE' },
      { id: 'ginger_ale', label: 'GINGER ALE' },
      { id: 'ginger_beer', label: 'GINGER BEER' },
      { id: 'cranberry', label: 'CRANBERRY' },
      { id: 'oj', label: 'OJ' },
      { id: 'pineapple', label: 'PINEAPPLE' },
      { id: 'grapefruit', label: 'GRAPEFRUIT' },
      { id: 'sour', label: 'SOUR MIX' },
      { id: 'simple', label: 'SIMPLE SYRUP' },
      { id: 'grenadine', label: 'GRENADINE' },
      { id: 'bitters', label: 'BITTERS' }
    ]
  },
  {
    id: 'restock', label: 'WELL', icon: 'liquor',
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
  { id: 'trash', label: 'TRASH / SPILL', icon: 'delete' },
  { id: 'keg', label: 'KEG', icon: 'keg' },
  { id: 'security', label: 'SECURITY', icon: 'security' },
  { id: 'manager', label: 'MANAGER', icon: 'manage_accounts' },
];

// Map of Role -> Array of Button IDs that are enabled by default
export const ROLE_NOTIFICATION_DEFAULTS: Record<string, string[]> = {
  'Owner': ['manager', 'security', 'keg', 'trash', 'ice', 'glass', 'fruit', 'restock', 'mixers', 'restock_beer', 'break'],
  'Manager': ['manager', 'security', 'keg', 'trash', 'break'],
  'Bartender': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer'],
  'Barback': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer', 'break'],
  'Server': [],
  'Runner': ['ice', 'glass', 'restock', 'mixers', 'restock_beer'],
  'Security': ['security', 'manager', 'break']
};
