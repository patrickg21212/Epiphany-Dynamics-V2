from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Home Page (SEO & Images)
        page.goto("http://localhost:4173/")
        page.wait_for_load_state("networkidle")

        # Check Title
        title = page.title()
        print(f"Home Page Title: {title}")
        if "Epiphany Dynamics" not in title:
            print("ERROR: Title incorrect")

        # Check Meta Description (Use first or specific logic since Helmet might duplicate if not managed perfectly, though Helmet usually handles this.
        # Actually, duplicate meta description means Helmet added one, but the original static one in index.html might still be there if not removed or if Helmet doesn't overwrite it in the same way.
        # But we expect the one from Helmet to be present.)

        # We'll just print the count and the content of the last one (usually the active one if helmet appended)
        count = page.locator('meta[name="description"]').count()
        print(f"Meta Description Count: {count}")
        if count > 0:
             meta_desc = page.locator('meta[name="description"]').nth(count - 1).get_attribute("content")
             print(f"Meta Description: {meta_desc}")

        # Screenshot Home
        page.screenshot(path="verification/home.png")

        # 2. Verify Workflow Review Page (Lazy Loading & GA4 Mock)
        page.goto("http://localhost:4173/workflow-review")
        page.wait_for_load_state("networkidle")

        # Check Title
        title = page.title()
        print(f"Workflow Review Page Title: {title}")

        # Verify Form is visible (Lazy loaded)
        page.wait_for_selector("form")

        # Fill Form
        page.select_option('select[name="industry"]', 'Marketing Agency')
        # Use force=True because the actual radio input is often hidden (sr-only) and replaced by a styled div/label
        page.click('input[name="main_problem"][value="Too much manual admin work"]', force=True)
        page.click('input[name="monthly_leads"][value="10–30"]', force=True)
        page.fill('textarea[name="breakdown_cost"]', 'Testing bottleneck')
        page.fill('input[name="email"]', 'test@example.com')

        # Screenshot Workflow Review Form
        page.screenshot(path="verification/workflow_review_form.png")

        # Submit Form (Mocking network request not easily possible here without intercept,
        # but we can check if button clicks and state changes if we had a real backend or mock)
        # For now, just verifying the page loads and form is interactive is good enough for frontend check.

        browser.close()

if __name__ == "__main__":
    verify_frontend()
