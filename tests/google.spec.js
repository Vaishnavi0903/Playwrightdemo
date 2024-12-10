const {test , expect} = require('@playwright/test')

test("Verify application" , async function ({page}) {
    
      await page.goto("https://google.com")

      const url = await page.url()

      console.log("URL is : " + url)

      const title = await page.title();

      console.log("Title is : "+title);

      await expect(page).toHaveTitle("Google");

})