from playwright.sync_api import sync_playwright, expect

def verify_workflow_steps():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the Workflow Review page
        # Note: Localhost port might vary, usually 5173 for Vite
        page.goto("http://localhost:3000/workflow-review")

        # Verify Step 1 is visible
        print("Verifying Step 1...")
        page.wait_for_selector('text="Which industry best describes your business?"', state='visible')
        page.screenshot(path="verification/step1.png")
        print("Step 1 screenshot saved.")

        # Fill Step 1
        page.select_option('select[name="industry"]', 'Marketing Agency')

        # Force click radios because they might be styled/hidden
        page.click('input[name="main_problem"][value="Too much manual admin work"]', force=True)
        page.click('input[name="monthly_leads"][value="30–75"]', force=True)

        page.fill('textarea[name="breakdown_cost"]', 'Manual data entry is killing us.')

        # Click Continue
        print("Clicking Continue...")
        page.click('text="Continue"')

        # Verify Step 2 is visible
        print("Verifying Step 2...")
        page.wait_for_selector('text="Email (so we can send your booking details)"', state='visible')

        # Verify Email field is present to confirm we are on Step 2
        page.wait_for_selector('input[name="email"]', state='visible')

        # Take screenshot of Step 2 (Turnstile might not render iframe in headless or without real network/keys validation in this env)
        # But we can check if the submit button is disabled (which it should be until Turnstile verifies)

        # Check Submit button is disabled
        submit_btn = page.locator('button[type="submit"]')
        expect(submit_btn).to_be_disabled()
        print("Submit button is disabled as expected (waiting for Turnstile).")

        page.screenshot(path="verification/step2.png")
        print("Step 2 screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_workflow_steps()
