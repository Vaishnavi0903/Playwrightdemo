const {test , expect} = require('@playwright/test')

test("Verify application" , async function ({page}) {
    
      await page.goto("https://google.com")

      await page.locator("textarea[name='q']").type("Nature Images")

      await page.waitForSelector("//li[@role='presentation']")

    //   await page.keyboard.press("ArrowDown")

    //   await page.keyboard.press("ArrowDown")

    //   await page.keyboard.press("Enter")

    const elements = await page.$$("//li[@role='presentation']")

    for(let i=0 ; i<elements.length ; i++)
    {
        const text = await elements[i].textContent();

        if(text.includes("4k"))
        {
            await elements[i].click();
            break;
        }
    }

})