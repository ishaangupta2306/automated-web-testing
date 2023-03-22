// @ts-check
const { test, expect } = require('@playwright/test');
// Run full test file: npx playwright test ./tests/ppptest.spec.js
// Run a specific test: npx playwright test -g "test description"
// Run entire directory tests: npx playwright test tests/todo-page/ tests/landing-page/
test('PPP', async ({ page }) => {
    // try {
    // Perform some actions that should result in a certain outcome
    await page.goto('https://pppariyojana.com/training/agile/ACP');
    const title = await page.title();
    expect(title).toContain('Pariyojana');

    // This is a soft assertion
    expect(await page.title()).toContain('Welcome');
    // } catch (error) {
    //     console.error('Soft assertion failed:', error);
    // }
})


test('test only', async ({ page }) => {
    await page.goto('https://pppariyojana.com/training/agile/ACP');
    const title = await page.title();
    expect(title).toContain('Pariyojana');
});
