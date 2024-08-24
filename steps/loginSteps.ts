import { Given, Then, When } from "@cucumber/cucumber";

import {chromium, Browser, Page, expect} from "@playwright/test";
import test from "node:test";
import { pageFixture } from "../src/hooks/pageFixture";

let browser: Browser;


Given('that I navigate to BBC Homepage', async function () { 
   
    await pageFixture.page.goto("https://www.bbc.co.uk/");
  });


    Given('I click on the sign in', async function () {
     await pageFixture.page.locator("//span[@class='ssrcss-qgttmg-AccountText e1gviwgp4']").click();
    });



    When('I enter a valid email as {string}', async function (email) {
      const text =  await pageFixture.page.locator("//input[@id='user-identifier-input']").type(email);
      console.log("email:" + text);
      await pageFixture.page.locator("//span[normalize-space()='Next']").click();
    });
 

    When('I enter a valid Password as {string}', async function (Password) {
    const text = await pageFixture.page.locator("#password-input").type(Password);
    console.log("Password:" + text);
     
    });


    When('I click on the Sign in user button', async function () {
      await pageFixture.page.locator("#submit-button").click();
    });



    Then('I will be successfully logged into BBC webpage', async function () {
      await pageFixture.page.locator(".ssrcss-qgttmg-AccountText.e1gviwgp4").click();
      await pageFixture.page.locator("//span[contains(text(),'Settings')]").click();
      const successfullyLogIn = pageFixture.page.locator("//span[@class='secondary-nav__item-text']//span[contains(text(),'Personal details')]");
      await expect(successfullyLogIn).toBeVisible();
      
      //screenshot
      const img = await pageFixture.page.screenshot({path: ".test-result/screenshots/", type: "png"})
      await this.attach(img, "image/png");

    });



   

