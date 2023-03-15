const { test, expect } = require('@playwright/test');
const { chromium, devices } = require('@playwright/test');

// Run tests in this file with portrait-like viewport.
test.use({
    viewport: { width: 600, height: 900 },
});

test('Test on iPhone 12 emulator', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        ...devices['iPhone 12'],
        locale: 'en-US',
        geolocation: { longitude: 12.492507, latitude: 41.890202 },
        permissions: ['geolocation', 'camera', 'microphone'],
    });
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    await page.type('input[name="q"]', 'P P Pariyojana');
    await page.keyboard.press('Enter');
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Google');
    await browser.close();
});