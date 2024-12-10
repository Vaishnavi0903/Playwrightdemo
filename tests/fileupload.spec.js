const {test , expect} = require('@playwright/test')

test("Verify file uploaded successfully" , async function ({page}) {
    
    await page.goto("http://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./uploads/mydbER.png");

    await page.locator("#file-submit").click();

    await expect( await page.locator("//h3")).toHaveText("File Uploaded!");
     
})