// Import the 'ButtonConfig' interface to type the default button structures.
import { ButtonConfig } from './types';

// Job titles a joining user can self-select. This is deliberately
// NOT the privilege list — 'Owner' is auto-assigned to whoever
// creates the bar and 'Manager' can only be granted by promotion, so
// neither is self-selectable here. Selecting a title sets `jobTitle`
// (display + notification defaults); the security-relevant `role`
// field is computed separately (see App.tsx confirmRole).
export const JOB_TITLES = ['Bartender', 'Barback', 'Server', 'Security', 'Runner'];

// Define a default list of common beer brands to populate suggestions.
export const DEFAULT_BEERS = [
  'Amstel Light', 'Bass Ale', 'Beck\'s', 'Blue Moon', 'Bud Light', 'Bud Light Lime', 'Bud Light Platinum', 'Budweiser',
  'Busch', 'Busch Light', 'Coors', 'Coors Banquet', 'Coors Light', 'Corona', 'Corona Extra', 'Corona Light', 'Corona Premier',
  'Dos Equis Amber', 'Dos Equis Lager', 'Foster\'s', 'Goose Island IPA', 'Guinness', 'Heineken', 'Heineken 0.0', 'Heineken Light',
  'Hoegaarden', 'Kona Big Wave', 'Lagunitas IPA', 'Landshark Lager', 'Michelob', 'Michelob Light', 'Michelob Ultra', 'Michelob Ultra Amber',
  'Miller Genuine Draft', 'Miller High Life', 'Miller Lite', 'Modelo Especial', 'Modelo Negra', 'Natural Light', 'Newcastle Brown Ale',
  'Pabst Blue Ribbon', 'Pacifico', 'Peroni', 'Pilsner Urquell', 'Red Stripe', 'Rolling Rock', 'Samuel Adams Boston Lager', 'Sapporo',
  'Shiner Bock', 'Shock Top', 'Sierra Nevada Pale Ale', 'Sol', 'St. Pauli Girl', 'Stella Artois', 'Tecate', 'Victoria', 'Yuengling'
];

// Common spirits/liquor brand names — used the same way as
// DEFAULT_BEERS (brand suggestions), and also as the candidate pool
// bottleRecognition.ts fuzzy-matches OCR'd label text against for the
// bottle scanner.
export const DEFAULT_SPIRITS = [
  'Absolut', 'Bacardi', 'Bacardi Superior', 'Baileys Irish Cream', 'Bombay Sapphire', 'Bulleit Bourbon', 'Bulleit Rye',
  'Buffalo Trace', 'Campari', 'Captain Morgan', 'Casamigos Blanco', 'Casamigos Reposado', 'Chivas Regal', 'Ciroc',
  'Cointreau', 'Crown Royal', 'Don Julio Blanco', 'Don Julio Reposado', 'Dewar\'s', 'Fireball', 'Glenfiddich', 'Glenlivet',
  'Goslings Black Seal', 'Grand Marnier', 'Grey Goose', 'Hendrick\'s Gin', 'Hennessy VS', 'Jack Daniel\'s', 'Jägermeister',
  'Jameson', 'Jim Beam', 'Johnnie Walker Black', 'Johnnie Walker Red', 'Jose Cuervo', 'Kahlúa', 'Ketel One',
  'Knob Creek', 'Macallan 12', 'Maker\'s Mark', 'Malibu', 'Patrón Silver', 'Patrón Reposado', 'Ricard', 'Sailor Jerry',
  'Skyy Vodka', 'Smirnoff', 'Southern Comfort', 'Suntory Toki', 'Svedka', 'Tanqueray', 'Tito\'s Handmade Vodka',
  'Woodford Reserve',
];

// Define the default button configuration for a new bar.
// This structure creates the initial grid of request buttons.
export const DEFAULT_BUTTONS: ButtonConfig[] = [
  { id: 'break', label: 'BREAK', icon: 'coffee' },
  { id: 'ice', label: 'ICE', icon: 'ac_unit' },
  {
    id: 'glass', label: 'SERVICE ITEMS', icon: 'wine_bar',
    // Nested children define the sub-menu items.
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

// Define the default notification subscriptions for each role.
// This maps a Role Name to an array of Button IDs that they should be alerted for by default.
export const ROLE_NOTIFICATION_DEFAULTS: Record<string, string[]> = {
  // Owners get everything important + managerial alerts.
  'Owner': ['manager', 'security', 'keg', 'trash', 'ice', 'glass', 'fruit', 'restock', 'mixers', 'restock_beer', 'break'],
  // Managers focus on operations and safety.
  'Manager': ['manager', 'security', 'keg', 'trash', 'break'],
  // Bartenders care about stocking and safety.
  'Bartender': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer'],
  // Barbacks are the primary workhorses for stocking and cleaning.
  'Barback': ['ice', 'glass', 'fruit', 'restock', 'keg', 'trash', 'mixers', 'restock_beer', 'break'],
  // Servers generally don't need alerts in this system (they might be sending them).
  'Server': [],
  // Runners focus on moving product.
  'Runner': ['ice', 'glass', 'restock', 'mixers', 'restock_beer'],
  // Security deals with safety.
  'Security': ['security', 'manager', 'break']
};

// POS provider picker honesty (Phase 3 — see
// docs/plans/2026-05-21-feature-set-purr-design.md). Only 'available'
// providers are selectable in POSSettings; the rest render disabled
// with a "Coming soon" label. Flipping a provider to real support is
// a one-line change here once its Cloud Function adapter is built —
// see functions/src/pos/stubs.ts for the scaffolding those adapters
// already conform to.
export const POS_PROVIDERS: { id: string; label: string }[] = [
  { id: 'square', label: 'Square' },
  { id: 'toast', label: 'Toast' },
  { id: 'clover', label: 'Clover' },
  { id: 'lightspeed', label: 'Lightspeed' },
  { id: 'spoton', label: 'SpotOn' },
  { id: 'touchbistro', label: 'TouchBistro' },
  { id: 'revel', label: 'Revel' },
  { id: 'lavu', label: 'Lavu' },
  { id: 'talech', label: 'Talech' },
  { id: 'aloha', label: 'Aloha' },
];

export const POS_PROVIDER_STATUS: Record<string, 'available' | 'coming_soon'> = {
  square: 'available',
  toast: 'available',
  clover: 'coming_soon',
  lightspeed: 'coming_soon',
  spoton: 'coming_soon',
  touchbistro: 'coming_soon',
  revel: 'coming_soon',
  lavu: 'coming_soon',
  talech: 'coming_soon',
  aloha: 'coming_soon',
};

