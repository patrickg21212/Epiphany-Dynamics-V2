from playwright.sync_api import sync_playwright

def verify_workflow_review():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.on("console", lambda msg: print(f"Console: {msg.text}"))

        try:
            # Navigate to Workflow Review page
            page.goto("http://localhost:4173/workflow-review")

            # Verify page loaded
            page.wait_for_selector('h1:has-text("Request a Workflow Review")', timeout=5000)

            # Fill some form data to test persistence
            print("Filling form...")
            page.select_option('select[name="industry"]', 'Marketing Agency')
            page.fill('input[name="email"]', 'test@example.com')

            # Wait a bit for state to save to localStorage
            page.wait_for_timeout(1000)

            # Reload page
            print("Reloading page...")
            page.reload()

            # Verify persistence
            page.wait_for_selector('select[name="industry"]', timeout=5000)

            # Check if values persisted
            industry = page.input_value('select[name="industry"]')
            email = page.input_value('input[name="email"]')

            print(f"Persisted Industry: {industry}")
            print(f"Persisted Email: {email}")

            if industry == 'Marketing Agency' and email == 'test@example.com':
                print("PERSISTENCE SUCCESS")
            else:
                print("PERSISTENCE FAILED")

            # Check Turnstile
            print("Checking Turnstile...")
            # Just take a screenshot to verify visually
            page.wait_for_timeout(2000) # Give it time to render

        except Exception as e:
            print(f"Error: {e}")
        finally:
            page.screenshot(path="verification/workflow_review.png", full_page=True)
            browser.close()

if __name__ == "__main__":
    verify_workflow_review()
