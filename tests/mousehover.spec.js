const {test , expect} = require('@playwright/test');

test("Mouse Hover Testing" , async function({page}){

    await page.goto("http://127.0.0.1:5500/MouseHoverExample/index.html")

    const menu = await page.locator(".menu");
    const dropdown = await page.locator(".dropdown");

    await menu.hover();

    await expect(dropdown).toBeVisible();

    
    const options = await dropdown.locator("a");
    const optionTexts = await options.allTextContents();
    expect(optionTexts).toEqual(["Option 1", "Option 2", "Option 3"]);

    
    await options.nth(0).click();
    await expect(page).toHaveURL(/page1.html/);
    await expect(page.locator("h1")).toHaveText("Welcome to Option 1 Page!");

    
})