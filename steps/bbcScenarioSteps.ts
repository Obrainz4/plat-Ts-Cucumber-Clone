import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../src/hooks/pageFixture";
import { chromium, Browser, Page, expect } from "@playwright/test";


let browser: Browser;
let page: Page;

Given('that the user navigate to BBC Homepage', async function () {
  await pageFixture.page.goto("https://www.bbc.co.uk/");
  });

  Then('the page title should be BBC - Home', async function (){
    const bbcPageLogo = pageFixture.page.locator("//span[@class='ssrcss-p60wjg-LogoIconWrapper e1gviwgp11']//*[name()='svg']");
    await expect(bbcPageLogo).toBeVisible();
  });

  
  Then('the header should contain BBC logo', async function (){
    const bbcPageHome = pageFixture.page.locator("//span[normalize-space()='Home']");
    await expect(bbcPageHome).toBeVisible();

    // Screenshot
    const myImg = await pageFixture.page.screenshot({path: ".test-result/screenshots/", type: "jpeg"})
    await this.attach(myImg, "image/jpeg")
  });



  Then('the user should see the navigation menu with options like News, Sport, Weather, etc.', async function () {
    const NewsMenu = pageFixture.page.locator("//span[@class='ssrcss-17qu87s-NavItemHoverState e1gviwgp20']");
    await expect(NewsMenu).toBeVisible();

    const SportsMenu = pageFixture.page.locator("//span[@class='ssrcss-1cdanog-NavItemHoverState e1gviwgp20']");
    await expect(SportsMenu).toBeVisible();

    const WeatherMenu = pageFixture.page.locator("//span[@class='ssrcss-16gl7w5-NavItemHoverState e1gviwgp20']");
    await expect(WeatherMenu).toBeVisible();
  });



  Then('there should be a search bar on the homepage', async function () {
    const SearchBar = pageFixture.page.locator(".ssrcss-1tt7th2-SearchText.e1gviwgp16");
    await expect (SearchBar).toBeVisible()
  });



  Then('the user should see a footer with links to important sections', async function () {
    const FooterLinks = pageFixture.page.locator("//a[normalize-space()='Terms of Use']");
    await expect (FooterLinks).toBeVisible()

     // Screenshot
     const myImg2 = await pageFixture.page.screenshot({path: ".test-result/screenshots/", type: "png"})
     await this.attach(myImg2, "image/png")
  });



  When('the user enters word in search bar as {string}', async function (searchWord) {
   await pageFixture.page.locator("//span[@class='ssrcss-1tt7th2-SearchText e1gviwgp16']").click();
    const text = await pageFixture.page.locator("//input[@id='searchInput']").type(searchWord);
    console.log("searchWord:" + text);
  });



  When('clicks on the search button', async function () {
    await pageFixture.page.locator("//button[@id='searchButton']").click();
  });



  Then('the search results page should be displayed', async function () {
    const techSearch = await pageFixture.page.screenshot({path: ".test-result/screenshots/", type: "png"})
    await this.attach(techSearch, "image/png")
  });



  Then('the results should include relevant articles related to technology', async function  () {
    
  });
// 


  When('the user clicks on the {string} link in the navigation menu', async function (string) {
    
  });



  Then('the user should be redirected to the News section', async function () {
    
  });



  Then('the page title should display as {string}', (s: string) => {
  
  });



  Then('the user should see the latest news articles', async function () {
    
  });



  When('the user clicks on the News link in the navigation menu', async () => {
    
  });



  Then('the user should be redirected to the Weather section', async function () {
    
  });



  Then('the page title should be {string}', async function (string) {
    
  });



  Then('the user should see the current weather information for the selected location', async function () {
    
  });



  When('the user clicks on a video thumbnail', async function () {
    
  });



  Then('the video player should be displayed', async function () {
    
  });



  Then('the user should be able to play the video', async function () {
    
  });



  Then('the video should start playing successfully', async function () {
    
  });



  When('the user checks the accessibility features', async function () {
    
  });



  Then('the webpage should comply with WCAG standards', async function () {
    
  });



  Then('all images should have appropriate alt text', async function () {
    
  });



  Then('the site should be navigable using a screen reader', async function () {
    

  });










