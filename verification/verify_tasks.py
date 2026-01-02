from playwright.sync_api import sync_playwright, expect

def verify_site_structure(page):
    # Go to home
    page.goto("http://localhost:3000/")

    # Check title (SEO)
    expect(page).to_have_title("Epiphany Dynamics | Work, Reimagined")

    # Check if lazy loaded images exist in DOM (might not be loaded yet)
    # Just checking if the page rendered is good enough for structure
    # Check for the logo in navbar
    expect(page.locator("nav img")).to_be_visible()

    # Navigate to Workflow Review
    page.goto("http://localhost:3000/workflow-review")

    # Check title (SEO)
    expect(page).to_have_title("Request a Workflow Review | Epiphany Dynamics")

    # Take a screenshot of the form
    page.screenshot(path="verification/workflow_review.png")

    # Check if lazy loaded form elements are present (SelectField, RadioGroup, etc.)
    # We can check for labels
    expect(page.get_by_text("Which industry best describes your business?")).to_be_visible()
    expect(page.get_by_text("What’s the main problem you’re trying to fix right now?")).to_be_visible()
    expect(page.get_by_text("About how many new leads do you get per month?")).to_be_visible()

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_site_structure(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
