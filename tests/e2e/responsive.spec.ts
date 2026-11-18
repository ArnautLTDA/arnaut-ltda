import { test, expect } from "@playwright/test";

test.describe("Arnaut LTDA Institutional Website E2E & Responsiveness", () => {
  test("should render homepage with no horizontal scroll on all viewports", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Check no horizontal scroll overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth
      );
    });
    expect(hasHorizontalOverflow).toBe(false);

    // Verify main title is visible
    const heroTitle = page.locator("#hero-h");
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText(
      "Tenha sua própria agência de software. Sem saber programar.",
    );
  });

  test("should verify plans/pricing section is replaced by early access waitlist", async ({
    page,
  }) => {
    await page.goto("/");

    // 1. No #pricing section
    const pricingSection = page.locator("#pricing");
    await expect(pricingSection).toHaveCount(0);

    // 2. No Planos in nav
    const navPlanos = page.locator('nav.nav__links a:has-text("Planos")');
    await expect(navPlanos).toHaveCount(0);

    // 3. Waitlist CTA present in nav
    const navWaitlist = page.locator('a:has-text("Entrar na lista de espera")');
    await expect(navWaitlist.first()).toBeVisible();
  });

  test("should have all primary sections properly rendered and visible", async ({
    page,
  }) => {
    await page.goto("/");

    // Hero
    await expect(page.locator("#hero-h")).toBeVisible();

    // The Agency
    await expect(page.locator("#agency")).toBeVisible();
    await expect(page.locator("#agency-h")).toContainText("The Agency");

    // Pillars
    await expect(page.locator("#pillars")).toBeVisible();
    await expect(page.locator("#pillars-h")).toContainText("Quatro pilares");

    // Lifecycle
    await expect(page.locator("#lifecycle")).toBeVisible();
    await expect(page.locator("#lifecycle-h")).toContainText(
      "De zero a sua agência de software",
    );

    // Metrics
    await expect(page.locator("#metrics")).toBeVisible();
    await expect(page.locator("#metrics-h")).toContainText(
      "A oportunidade. A tecnologia. Os números.",
    );

    // Tech Stack
    await expect(page.locator("#stack")).toBeVisible();
    await expect(page.locator("#stack-h")).toContainText(
      "Módulos integrados do The Agency",
    );

    // FAQ
    await expect(page.locator("#faq")).toBeVisible();
    await expect(page.locator("#faq-h")).toContainText("Perguntas frequentes");

    // Contact (Waitlist)
    await expect(page.locator("#contact")).toBeVisible();
    await expect(page.locator("#contact-h")).toContainText(
      "Acesso Antecipado & Vantagens de Fundador",
    );
  });

  test("should verify TechStack diagram is self-contained with no overflowing icons", async ({
    page,
  }) => {
    await page.goto("/");

    const stackPanel = page.locator("#stack .panel");
    await expect(stackPanel).toBeVisible();

    const panelBox = await stackPanel.boundingBox();
    expect(panelBox).not.toBeNull();

    // Verify no giant images exist inside stack
    const largeImagesCount = await page.evaluate(() => {
      const images = document.querySelectorAll("#stack img, #stack image");
      let count = 0;
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.width > 200 || rect.height > 200) {
          count++;
        }
      });
      return count;
    });

    expect(largeImagesCount).toBe(0);
  });

  test("should validate and submit waitlist registration", async ({ page }) => {
    await page.goto("/");

    const form = page.locator("#contact form");
    await expect(form).toBeVisible();

    // 1. Submit empty to verify validation errors
    await form.locator('button[type="submit"]').click();

    // Error messages should be visible
    await expect(page.locator("#f-name-err")).toBeVisible();
    await expect(page.locator("#f-email-err")).toBeVisible();

    // 2. Fill form with valid waitlist data
    await page.fill("#f-name", "Marina Fonseca");
    await page.fill("#f-email", "marina.fonseca@empresa.com.br");
    await page.selectOption("#f-experience", "basica");
    await page.fill(
      "#f-interest",
      "Quero abrir uma agência de tecnologia focada em clínicas odontológicas",
    );

    // 3. Submit valid form
    await form.locator('button[type="submit"]').click();

    // 4. Verify success state appears
    const successCard = page.locator('[role="status"]');
    await expect(successCard).toBeVisible({ timeout: 10000 });
    await expect(successCard).toContainText(
      "Inscrição confirmada na lista de espera",
    );
  });

  test("should render legal subpages properly", async ({ page }) => {
    // Privacy
    await page.goto("/privacy");
    await expect(page.locator("h1")).toContainText("Política de Privacidade");
    await expect(page.locator("body")).toContainText("contato@arnaut.dev.br");

    // Terms
    await page.goto("/terms");
    await expect(page.locator("h1")).toContainText("Termos de Serviço");

    // Credits
    await page.goto("/credits");
    await expect(page.locator("h1")).toContainText("Créditos e Atribuições");
  });
});
