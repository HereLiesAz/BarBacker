import {
  AdminManager,
  NoticeManager,
  ThemeManager
} from '../modules/subscription';

// Singletons for the subscription/add-on layer.
//
// Only the three managers actually wired into the app are exported here.
// The rest of the classes in `../modules/subscription` (UserManager,
// EightySixList, POSIntegration, CalendarIntegration, PublicMenu) are
// scaffolding for unbuilt features and currently return stubbed data, so
// instantiating them as singletons just creates dead module-level state.
// Re-export them from `../modules/subscription` directly when a real
// implementation lands.
export const adminManager = new AdminManager();
export const noticeManager = new NoticeManager();
export const themeManager = new ThemeManager();
