const { test } = require('@playwright/test');

test.skip('Skipped test', async ({ page }) => {
    // This test will be skipped
    await page.goto('https://pppariyojana.com/trainings/ACP');
});

test.fixme('Fix me test', async ({ page }) => {
    await page.goto('https://pppariyojana.com/training/agile/ACP');
    const title = await page.title()
    expect(title).toContain('Pariyojana');
});

test.fail('Failing test', async ({ page }) => {
    await page.goto('https://pppariyojana.com/training/agile/PAC');
    const title = await page.title();
    expect(title).toContain('Pariyojana');
});

test.slow('Slow test', async ({ page }) => {
    // This test will be marked as slow if it takes more than 2 seconds to complete
    // Monitor download file
    await page.goto('https://pppariyojana.com/trainings/ACP', { timeout: 2000 });
    expect(await page.title()).toContain('Welcome');
});

test.only('Only test', async ({ page }) => {
    // This test will be the only one to run
    await page.goto('https://pppariyojana.com/training/agile/ACP');
    const title = await page.title();
    expect(title).toContain('Pariyojana');
});