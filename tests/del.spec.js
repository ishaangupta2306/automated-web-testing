const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://pppariyojana.com/');

    // Find the div elements to delete
    const divs = await page.$$('div');

    // Iterate through the div elements and delete them
    for (const div of divs) {
        // Perform the delete action on each div element
        await div.click({ button: 'right' });
        await page.keyboard.press('Delete');
    }

    await browser.close();
})();
