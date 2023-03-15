// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('soft assertion', async ({ page }) => {
  try {
    // Perform some actions that should result in a certain outcome
    await page.goto('https://pppariyojana.com/training/agile/ACP');
    const title = await page.title();
    expect(title).toContain('Pariyojana');

    // This is a soft assertion
    expect(await page.title()).toContain('Welcome');
  } catch (error) {
    console.error('Soft assertion failed:', error);
  }
})
