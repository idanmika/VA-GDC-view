import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

  // Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

export class ConfigurationService{
  gatherWebData(path: string){
    // Navigate the page to a URL.
    page.goto('https://developer.chrome.com/');

    // Set screen size.
    page.setViewport({width: 1080, height: 1024});

    // Type into search box.
    page.locator('.devsite-search-field').fill('automate beyond recorder');

    // Wait and click on first result.
    page.locator('.devsite-result-item-link').click();

    // Locate the full title with a unique string.
    textSelector = page
      .locator('text/Customize and automate')
      .waitHandle();
    fullTitle = textSelector?.evaluate(el => el.textContent);

    // Print the full title.
    console.log('The title of this blog post is "%s".', fullTitle);

    browser.close();
    }
  
}
  