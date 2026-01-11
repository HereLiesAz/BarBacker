from playwright.sync_api import Page, expect, sync_playwright
import time

def test_role_selector(page: Page):
    page.goto("http://localhost:5173")

    # Wait for app load
    page.wait_for_selector("md-filled-text-field[name='email']")

    # Register a new user
    page.get_by_role("button", name="Register").click()

    email = f"testuser_{int(time.time())}@example.com"

    # Fill email
    email_field = page.locator("md-filled-text-field[name='email']")
    email_field.click()
    page.keyboard.type(email)

    # Fill password
    password_field = page.locator("md-filled-text-field[name='password']")
    password_field.click()
    page.keyboard.type("password123")

    # Submit
    page.get_by_role("button", name="Create Account").click()

    # Wait for "Select Bar" text to confirm login
    expect(page.get_by_text("Select Bar")).to_be_visible(timeout=15000)

    # Inject barId to skip bar selection
    page.evaluate("localStorage.setItem('barId', 'test_bar_verify')")
    page.reload()

    # Wait for RoleSelector "Identification"
    expect(page.get_by_text("Identification")).to_be_visible(timeout=10000)

    # --- Test the Fix ---

    # 1. Type Display Name
    name_field = page.locator("md-filled-text-field[label*='Display Name']")
    name_field.click()
    page.keyboard.type("Fixer")

    # 2. Select Role
    page.get_by_text("Bartender").click()

    # 3. Click "Clock In" button.
    # We use force=True because we intentionally have a wrapper div intercepting the click
    # (or rather, the button has pointer-events: none, so the click goes to the div).
    # Playwright sees this as "interception" and blocks standard click unless forced.
    clock_in_btn = page.get_by_text("Clock In")
    clock_in_btn.click(force=True)

    # 4. Verify Success
    # Should move to main app view.
    expect(page.get_by_text("Identification")).not_to_be_visible(timeout=5000)

    # Take success screenshot
    time.sleep(1) # wait for render
    page.screenshot(path="verification/role_selector_success.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_role_selector(page)
        except Exception as e:
            print(f"Test failed: {e}")
            page.screenshot(path="verification/failure_retry_2.png")
            raise
        finally:
            browser.close()
