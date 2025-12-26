from playwright.sync_api import sync_playwright, expect

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Test Home Page
        print("Navigating to Home...")
        page.goto("http://localhost:3000")

        # Verify title and meta tags
        expect(page).to_have_title("Epiphany Dynamics — Industry-Leading AI Solutions")

        # Verify font usage (checking if CSS variable is set, though hard to check actual font rendering in headless)
        # We can check if the meta tags are present
        print("Checking Meta Tags...")
        description = page.locator('meta[name="description"]')
        expect(description).to_have_attribute("content", "A high-contrast, premium landing page for Epiphany Dynamics, specializing in industry-leading generative and traditional AI solutions. Features interactive tabs, infinite logo carousels, and responsive design based on modern AI enterprise aesthetics.")

        og_title = page.locator('meta[property="og:title"]')
        expect(og_title).to_have_attribute("content", "Epiphany Dynamics — Industry-Leading AI Solutions")

        # Take screenshot of Home
        print("Taking Home screenshot...")
        page.screenshot(path="verification/home.png", full_page=True)

        # Navigate to Workflow Review
        print("Navigating to Workflow Review...")
        page.goto("http://localhost:3000/workflow-review")

        # Verify form elements are present (checking if our refactoring worked)
        print("Checking Form Elements...")
        expect(page.get_by_role("heading", name="Request a Workflow Review")).to_be_visible()
        expect(page.get_by_text("Which industry best describes your business?")).to_be_visible()
        expect(page.get_by_role("combobox")).to_be_visible() # SelectField
        expect(page.get_by_text("What’s the main problem you’re trying to fix right now?")).to_be_visible()
        expect(page.get_by_label("Leads aren’t followed up fast enough")).to_be_visible() # RadioGroup

        # Test validation or partial interaction
        # We won't submit to avoid actual webhook call if possible, or we can mock it.
        # But we just want to verify UI structure.

        # Take screenshot of Workflow Review
        print("Taking Workflow Review screenshot...")
        page.screenshot(path="verification/workflow_review.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_site()
