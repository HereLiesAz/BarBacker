import { ButtonConfig } from './types';

export const ROLES = ['Owner', 'Bartender', 'Barback', 'Server', 'Manager', 'Security', 'Runner'];

export const DEFAULT_BUTTONS: ButtonConfig[] = [
  { id: 'ice', label: 'ICE', icon: 'ac_unit' },
  {
    id: 'glass', label: 'GLASSWARE', icon: 'wine_bar',
    children: [
      { id: 'pint', label: 'PINT' },
      { id: 'rocks', label: 'ROCKS' },
      { id: 'collins', label: 'COLLINS' },
      { id: 'wine', label: 'WINE GLASS' },
      { id: 'coupe', label: 'COUPE' },
      { id: 'shot', label: 'SHOT GLASS' }
    ]
  },
  {
    id: 'fruit', label: 'FRUIT / GARNISH', icon: 'restaurant',
    children: [
      { id: 'lime', label: 'LIMES' },
      { id: 'lemon', label: 'LEMONS' },
      { id: 'orange', label: 'ORANGES' },
      { id: 'olive', label: 'OLIVES' },
      { id: 'cherry', label: 'CHERRIES' },
      { id: 'mint', label: 'MINT' }
    ]
  },
  { id: 'restock_beer', label: 'RESTOCK BEER', icon: 'sports_bar' },
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
  { id: 'restock_beer', label: 'RESTOCK BEER', icon: 'sports_bar' },
  { id: 'trash', label: 'TRASH / SPILL', icon: 'delete' },
  { id: 'keg', label: 'KEG KICKED', icon: 'keg' },
  { id: 'security', label: 'SECURITY', icon: 'security' },
  { id: 'manager', label: 'MANAGER', icon: 'manage_accounts' },
];

// Map of Role -> Array of Button IDs that are enabled by default
export const ROLE_NOTIFICATION_DEFAULTS: Record<string, string[]> = {
  'Owner': ['manager', 'security', 'keg', 'trash', 'ice', 'glass', 'fruit', 'restock', 'mixers', 'restock_beer'],
  'Manager': ['manager', 'security', 'keg', 'trash', 'restock', 'mixers', 'restock_beer'],
  'Bartender': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer'],
  'Barback': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer'],
  'Server': [],
  'Runner': ['ice', 'glass', 'restock', 'mixers', 'restock_beer'],
  'Security': ['security', 'fight', 'manager']
};
