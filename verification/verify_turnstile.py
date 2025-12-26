from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Workflow Review page
        page.goto("http://localhost:3000/workflow-review")

        # Check if Turnstile container is present (using iframe selector often used by Turnstile)
        # Note: Turnstile might not fully render in headless mode without interaction or keys,
        # but we can check if the container div we added is there.
        # We can look for the text "Please verify you are human." if we try to submit without it,
        # or just check the presence of the Turnstile widget.

        # Try to submit without filling anything to check validation
        page.get_by_role("button", name="Continue").click()

        # Check for error message if fields are empty
        # But specifically check if Turnstile is present in the DOM

        page.screenshot(path="verification/turnstile_check.png")

        print("Screenshot taken")
        browser.close()

if __name__ == "__main__":
    verify_frontend()
