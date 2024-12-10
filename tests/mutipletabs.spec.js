const {test , expect} = require('@playwright/test')

test("Verify multiple tabs using Playwright" , async function ({browser}) {
    
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage] = await Promise.all([

        context.waitForEvent("page") ,  

        page.locator("div[class='container-child'] a:nth-child(4) svg path").click()

    ])

    await newPage.waitForTimeout(1000);

    await newPage.locator("(//input[@name='email'])[2]").fill("vaishnavi@gmail.com");

    await newPage.waitForTimeout(2000);

    await newPage.close();
    



})