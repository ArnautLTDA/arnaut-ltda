import { test, expect } from "@playwright/test";

test.describe("Visual Regression and Screenshot Capture", () => {
  test("capture full page screenshots", async ({ page }, testInfo) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const projectName = testInfo.project.name
      .toLowerCase()
      .replace(/\s+/g, "-");
    await page.screenshot({
      path: `screenshots/${projectName}-full.png`,
      fullPage: true,
    });

    // Capture specific sections
    const stack = page.locator("#stack");
    await expect(stack).toBeVisible();
    await stack.screenshot({
      path: `screenshots/${projectName}-stack.png`,
    });

    const faq = page.locator("#faq");
    await expect(faq).toBeVisible();
    await faq.screenshot({
      path: `screenshots/${projectName}-faq.png`,
    });

    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
    await contact.screenshot({
      path: `screenshots/${projectName}-contact.png`,
    });
  });
});
