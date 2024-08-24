import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { Browser, Page, chromium, firefox, webkit } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page
let browser: Browser

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    pageFixture.page = page;

});



AfterAll(async function () {
    await pageFixture.page.close();
    await browser.close();
})

// Change headless :"false" to see browser
//                 : "true" to hide browser