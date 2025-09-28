import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.waitForLoadState("networkidle");
});

test("Button primary", async ({ page }) => {
  await page.goto("/iframe.html?id=components-button--primary");
  await expect(page).toHaveScreenshot("button-primary.png");
});

test("Button secondary", async ({ page }) => {
  await page.goto("/iframe.html?id=components-button--secondary");
  await expect(page).toHaveScreenshot("button-secondary.png");
});

test("Button info", async ({ page }) => {
  await page.goto("/iframe.html?id=components-button--info");
  await expect(page).toHaveScreenshot("button-info.png");
});

test("Button warning", async ({ page }) => {
  await page.goto("/iframe.html?id=components-button--warning");
  await expect(page).toHaveScreenshot("button-warning.png");
});

test("Button danger", async ({ page }) => {
  await page.goto("/iframe.html?id=components-button--danger");
  await expect(page).toHaveScreenshot("button-danger.png");
});
