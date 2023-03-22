const { test, expect } = require('@playwright/test');
const { chromium, devices } = require('@playwright/test');
// const { firefox } = require('playwright');

// Run tests in this file with portrait-like viewport.
test.use({
    viewport: { width: 600, height: 900 },
});

test('Test on iPhone 6 emulator', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        ...devices['iPhone 6'],
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


// test('Change location on iPhone 6 emulator', async () => {
//     const browser = await firefox.launch();
//     const context = await browser.newContext({
//         viewport: { width: 375, height: 667 }, // set viewport to iPhone 6 dimensions
//         geolocation: { latitude: 45.5017, longitude: -73.5673 }, // set geolocation to Montreal, Canada
//         locale: 'en-CA', // set locale to Canadian English
//         permissions: ['geolocation'] // enable geolocation permissions
//     });
//     const page = await context.newPage();

//     // Open Google Maps and wait for the page to load
//     await page.goto('https://www.google.com/maps/');
//     await page.waitForLoadState('networkidle');

//     // Get the browser's current geolocation
//     const location = await page.evaluate(() => {
//         return {
//             latitude: window.navigator.geolocation.getCurrentPosition().coords.latitude,
//             longitude: window.navigator.geolocation.getCurrentPosition().coords.longitude
//         };
//     });

//     // Check if the geolocation matches the one we set earlier
//     if (location.latitude === 45.5017 && location.longitude === -73.5673) {
//         console.log('Geolocation successfully set to Montreal, Canada.');
//     } else {
//         console.log('Geolocation was not set correctly.');
//     }

//     // Test Google Maps location features (e.g. search for a location, get directions, etc.)

//     await browser.close();
// });
