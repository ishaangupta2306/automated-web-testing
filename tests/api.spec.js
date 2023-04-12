const { test, expect } = require('@playwright/test');
const fetch = require('node-fetch');
const { PlaywrightTestConfig } = require('@playwright/test');

test('API endpoint test', async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();

    expect(response.status()).toBe(200);
    expect(data).toHaveProperty('fact');
    expect(data).toHaveProperty('length');
});


const config = PlaywrightTestConfig.create({
    retries: 3,
});

config.test.fail('Intentional failure', async ({ page }) => {
    await page.goto('https://pppariyojana.com/');
    await page.waitForSelector('#ppp-element', { state: 'attached' });
});
