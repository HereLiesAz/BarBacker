from playwright.sync_api import sync_playwright, expect
import time

def verify_bar_search():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(permissions=['notifications'])
        page = context.new_page()

        # Bypass permission check
        page.add_init_script("""
            Object.defineProperty(Notification, 'permission', {
                get: function() { return 'granted'; }
            });
            window.Notification.requestPermission = async function() { return 'granted'; };
        """)

        print("Navigating...")
        page.goto("http://localhost:5173")

        # Step 1: Login
        if page.get_by_text("Clock In").is_visible() or page.get_by_text("Developer Login").is_visible():
            print("Logging in...")
            try:
                page.wait_for_selector("md-outlined-button", state="visible", timeout=10000)
                # Use "Bartender" instead of Owner to avoid any potential "Owner" specialness confusion,
                # though TestLogin behaves the same for all.
                page.get_by_text("Bartender").click()
            except Exception as e:
                print(f"Error logging in: {e}")
                page.screenshot(path="verification/error_login.png")
                return

        # Step 2: Check State
        print("Checking state...")
        time.sleep(2)

        # If we are at Main App (Test Bar), go off clock
        if page.get_by_text("Test Bar").is_visible():
            print("At Main App. Going off clock...")
            page.locator("md-icon-button[title='Go Off Clock']").click()
            page.get_by_text("Leave").click()

        # Now verify we are at "Select Bar"
        print("Waiting for Select Bar...")
        try:
            expect(page.get_by_text("Select Bar")).to_be_visible(timeout=10000)
        except:
             print("Could not reach Select Bar screen. Current state:")
             page.screenshot(path="verification/error_state.png")
             return

        # Step 3: Verify Search
        print("At Select Bar. Setting up network intercept...")

        def handle_route(route):
            time.sleep(0.5)
            try: route.continue_()
            except: pass

        page.route("**/nominatim.openstreetmap.org/**", handle_route)

        print("Typing search...")
        search_input = page.get_by_label("Search OpenStreetMap")
        search_input.fill("Pubs")

        print("Waiting for spinner...")
        try:
            expect(page.locator("md-circular-progress")).to_be_visible(timeout=5000)
            print("Spinner found!")
        except:
            print("Spinner missed.")

        page.screenshot(path="verification/loading_state.png")
        print("Screenshot saved.")
        browser.close()

if __name__ == "__main__":
    verify_bar_search()
