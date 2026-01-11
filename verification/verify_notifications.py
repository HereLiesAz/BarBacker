from playwright.sync_api import sync_playwright, expect
import time

def verify_notifications():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(permissions=['notifications'])
        page = context.new_page()
        page.add_init_script("""
            Object.defineProperty(Notification, 'permission', { get: () => 'granted' });
            window.Notification.requestPermission = async () => 'granted';
        """)

        print("Navigating...")
        page.goto("http://localhost:5173")

        # 1. Login
        try:
             page.wait_for_selector("md-outlined-button", timeout=5000)
             print("Logging in as Bartender...")
             page.get_by_text("Bartender").click()
        except:
             print("Already logged in or different state.")

        # Handle Select Bar
        time.sleep(2)
        if page.get_by_text("Select Bar").is_visible():
            print("At Select Bar. Creating Temp Bar...")

            # Ensure we are in Create mode
            create_mode_btn = page.get_by_text("Create Temp")
            if create_mode_btn.is_visible():
                create_mode_btn.click()

            # Fill Name and Hit Enter
            page.get_by_label("Bar Name").fill("My Temp Bar")
            page.get_by_label("Bar Name").press("Enter")

            # Also try clicking the button again if Enter didn't work
            time.sleep(1)
            if page.get_by_text("Select Bar").is_visible():
                 print("Enter didn't submit. Trying direct JS submit...")
                 page.evaluate("document.querySelector('form').requestSubmit()")

        # 2. Wait for App
        print("Waiting for app...")
        try:
            expect(page.locator("span.font-bold.text-lg")).to_be_visible(timeout=10000)
        except:
             page.screenshot(path="verification/state_debug.png")
             print("Not at main app. Check screenshot.")
             return

        # 3. Open Settings
        print("Opening Settings...")
        settings_btn = page.locator("md-icon-button[title='Notification Settings']")
        expect(settings_btn).to_be_visible()
        settings_btn.click()

        # 4. Verify Dialog
        print("Verifying Dialog...")
        expect(page.get_by_text("Notification Settings")).to_be_visible()

        # Take screenshot of default settings
        time.sleep(1)
        page.screenshot(path="verification/settings_dialog.png")
        print("Screenshot saved: settings_dialog.png")

        # 5. Disable ICE
        print("Disabling ICE...")
        ice_item = page.locator("md-list-item").filter(has_text="ICE")
        ice_switch = ice_item.locator("md-switch")
        ice_switch.click()

        # Save
        print("Saving...")
        page.get_by_text("Save").click()

        # 6. Verify Filtering
        print("Creating ICE request...")
        expect(page.get_by_text("Notification Settings")).not_to_be_visible()

        page.get_by_text("ICE", exact=True).click()

        time.sleep(2)
        print("Checking active requests...")

        ice_requests = page.locator("div").filter(has_text="ICE").filter(has_text="CLAIM")

        if ice_requests.count() > 0:
            print("FAILED: ICE request is visible but should be hidden.")
            page.screenshot(path="verification/fail_visible.png")
        else:
            print("SUCCESS: ICE request is hidden.")
            page.screenshot(path="verification/success_hidden.png")

        # 7. Re-enable
        print("Re-enabling...")
        settings_btn.click()
        ice_switch.click()
        page.get_by_text("Save").click()

        time.sleep(2)
        if ice_requests.count() > 0:
            print("SUCCESS: ICE request is visible again.")
        else:
            print("FAILED: ICE request not visible after re-enabling.")
            page.screenshot(path="verification/fail_hidden.png")

        browser.close()

if __name__ == "__main__":
    verify_notifications()
