const { test } = require('@playwright/test');
const { chromium } = require('playwright');

test('Emulate color scheme for google.com', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        colorScheme: 'dark'
    });
    const page = await context.newPage();

    await page.goto('https://www.google.com/');

    // Check if the search box respects the emulated color scheme
    const searchBox = await page.$('input[type="text"]');
    const backgroundColor = await searchBox.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });

    console.log(`Background color: ${backgroundColor}`);

    await browser.close();
})();

// Override your emulation using test.use 
test.use('Overriding browser configuration', async () => {

});