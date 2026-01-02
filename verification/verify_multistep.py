from playwright.sync_api import sync_playwright

def verify_multistep_turnstile():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:4173/workflow-review")

            # Step 1: Verify Turnstile is NOT present
            page.wait_for_selector('h1', timeout=10000)

            content_step1 = page.content()
            if "challenges.cloudflare.com" in content_step1:
                 print("FAIL: Turnstile found in Step 1 (should be Step 2 only).")
            else:
                 print("PASS: Turnstile NOT found in Step 1.")

            # Fill Industry
            page.select_option('select[name="industry"]', index=1)

            # Fill Main Problem (Radio) - force click label or use JS if overlay
            # Use evaluate to click the input directly or finding the label
            # The error said "intercepts pointer events", likely custom UI styling.
            # Let's target the label containing the text.
            page.click('span:text("Leads aren’t followed up fast enough")')

            # Fill Monthly Leads (Radio)
            page.click('span:text("Fewer than 10")')

            # Fill Breakdown (Textarea)
            page.fill('textarea[name="breakdown_cost"]', "Testing bottleneck")

            # Click Continue
            page.click('button:has-text("Continue")')

            # Wait for Step 2
            page.wait_for_selector('input[name="email"]', timeout=5000)
            print("Navigated to Step 2.")

            # Check for Turnstile in Step 2
            page.wait_for_timeout(2000)
            content_step2 = page.content()
            if "challenges.cloudflare.com" in content_step2:
                 print("PASS: Turnstile found in Step 2.")
            else:
                 print("FAIL: Turnstile NOT found in Step 2.")

            page.screenshot(path="verification/step2_verification.png")
            print("Screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error_state.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_multistep_turnstile()
