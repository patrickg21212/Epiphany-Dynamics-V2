from playwright.sync_api import sync_playwright

def verify_turnstile():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the Workflow Review page
            page.goto("http://localhost:4173/workflow-review")

            # Wait for the form to load - wait for any h1
            page.wait_for_selector('h1', timeout=10000)

            # Scroll to bottom to ensure Turnstile is in view (sometimes lazy loaded)
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

            # Take a screenshot even if Turnstile fails to load to see what's there
            page.screenshot(path="verification/turnstile_verification.png")
            print("Screenshot taken.")

            # Check for turnstile container
            # React turnstile often wraps in a div, let's look for the turnstile class if any, or iframe
            # The library likely renders an iframe.

            # Let's inspect the page content in the log if iframe fails
            content = page.content()
            if "challenges.cloudflare.com" in content:
                 print("Turnstile script/iframe detected in page content.")
            else:
                 print("Turnstile script/iframe NOT detected in page content.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error_state.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_turnstile()
