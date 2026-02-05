import { ButtonConfig } from './types';

/**
 * List of available user roles in the application.
 * - Owner: Can manage everything.
 * - Manager: Can manage bar settings and staff.
 * - Bartender: Primary requester.
 * - Barback: Primary fulfiller.
 * - Server/Runner/Security: Specialized roles.
 */
export const ROLES = ['Owner', 'Bartender', 'Barback', 'Server', 'Manager', 'Security', 'Runner'];

/**
 * A comprehensive list of default beers used for autocomplete or inventory initialization.
 * These are common brands found in many bars.
 */
export const DEFAULT_BEERS = [
  'Amstel Light', 'Bass Ale', 'Beck\'s', 'Blue Moon', 'Bud Light', 'Bud Light Lime', 'Bud Light Platinum', 'Budweiser',
  'Busch', 'Busch Light', 'Coors', 'Coors Banquet', 'Coors Light', 'Corona', 'Corona Extra', 'Corona Light', 'Corona Premier',
  'Dos Equis Amber', 'Dos Equis Lager', 'Foster\'s', 'Goose Island IPA', 'Guinness', 'Heineken', 'Heineken 0.0', 'Heineken Light',
  'Hoegaarden', 'Kona Big Wave', 'Lagunitas IPA', 'Landshark Lager', 'Michelob', 'Michelob Light', 'Michelob Ultra', 'Michelob Ultra Amber',
  'Miller Genuine Draft', 'Miller High Life', 'Miller Lite', 'Modelo Especial', 'Modelo Negra', 'Natural Light', 'Newcastle Brown Ale',
  'Pabst Blue Ribbon', 'Pacifico', 'Peroni', 'Pilsner Urquell', 'Red Stripe', 'Rolling Rock', 'Samuel Adams Boston Lager', 'Sapporo',
  'Shiner Bock', 'Shock Top', 'Sierra Nevada Pale Ale', 'Sol', 'St. Pauli Girl', 'Stella Artois', 'Tecate', 'Victoria', 'Yuengling'
];

/**
 * The default configuration of request buttons shown to Bartenders.
 * This structure supports nesting (categories) via the 'children' property.
 * Each button has an ID, Label, and optional Icon.
 */
export const DEFAULT_BUTTONS: ButtonConfig[] = [
  { id: 'break', label: 'BREAK', icon: 'coffee' }, // Request a break
  { id: 'ice', label: 'ICE', icon: 'ac_unit' }, // Request Ice
  {
    // A category for service items (glassware, napkins, etc.)
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
    // A category for garnishes (fruit, herbs)
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
  { id: 'restock_beer', label: 'BEER', icon: 'sports_bar' }, // Generic beer restock request
  {
    // A category for liquid mixers
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
    // A category for liquor/spirits (Well)
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
  { id: 'trash', label: 'TRASH / SPILL', icon: 'delete' }, // Request trash removal or cleanup
  { id: 'keg', label: 'KEG', icon: 'keg' }, // Request a keg change
  { id: 'security', label: 'SECURITY', icon: 'security' }, // Request security assistance
  { id: 'manager', label: 'MANAGER', icon: 'manage_accounts' }, // Request manager assistance
];

/**
 * Mapping of Roles to the list of Notification Types (Button IDs) they are interested in by default.
 * When a user selects a role, these preferences are pre-selected.
 */
export const ROLE_NOTIFICATION_DEFAULTS: Record<string, string[]> = {
  // Owner sees almost everything
  'Owner': ['manager', 'security', 'keg', 'trash', 'ice', 'glass', 'fruit', 'restock', 'mixers', 'restock_beer', 'break'],
  // Manager focuses on high-level operational issues
  'Manager': ['manager', 'security', 'keg', 'trash', 'break'],
  // Bartender sees standard barback tasks (if they also help fulfill)
  'Bartender': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer'],
  // Barback sees all fulfillment tasks
  'Barback': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer', 'break'],
  // Server sees nothing by default
  'Server': [],
  // Runner focuses on running stock
  'Runner': ['ice', 'glass', 'restock', 'mixers', 'restock_beer'],
  // Security focuses on safety
  'Security': ['security', 'manager', 'break']
};
