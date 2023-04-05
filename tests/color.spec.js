const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        colorScheme: 'dark' // Emulate dark mode
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
