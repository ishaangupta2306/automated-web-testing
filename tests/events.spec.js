const { chromium } = require('playwright');

test('Test Mouse and Keyboard events', async () => {
    const browser = await firefox.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');

    // Type into search box and press enter
    await page.type('input[name="q"]', 'Playwright keyboard events');
    await page.keyboard.press('Enter');

    // Wait for search results to load
    await page.waitForSelector('#search');

    // Click on first search result
    await page.click('#search a');

    // Wait for new page to load
    await page.waitForNavigation();

    // Scroll down to the bottom of the page
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });

    // Hover over an element and click it
    const button = await page.waitForSelector('button');
    await button.hover();
    await button.click();

    // Close browser
    await browser.close();
})();
