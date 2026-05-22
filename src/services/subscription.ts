import {
  AdminManager,
  UserManager,
  NoticeManager,
  POSIntegration,
  CalendarIntegration,
  PublicMenu
} from '../modules/subscription';

// Instantiate managers for usage in the application.
export const adminManager = new AdminManager();
export const userManager = new UserManager();
export const noticeManager = new NoticeManager();
export const posIntegration = new POSIntegration();
export const calendarIntegration = new CalendarIntegration();
export const publicMenu = new PublicMenu();
