const {test , expect} = require('@playwright/test')

test("Keyboard actions" , async function ({page}) {
    
     await page.goto("https://www.google.com/");

     /*await page.locator("textarea[name='q']").type("Nature images");

     await page.keyboard.press("Control+A");

     await page.keyboard.press("Control+C");

     await page.keyboard.press("Backspace");

     await page.keyboard.press("Control+V");*/

     await page.locator("textarea[name='q']").focus();

     await page.keyboard.type("Nature Images!");

     await page.keyboard.press("ArrowLeft");

     await page.keyboard.down("Shift");

     for(let i=0 ; i<7 ;i++)
     {
        await page.keyboard.press("ArrowLeft");
     }

     await page.keyboard.up("Shift");

     await page.waitForTimeout(1000);

     await page.keyboard.press("Backspace")

     await page.waitForTimeout(1000);

     await page.keyboard.press("Enter");

})