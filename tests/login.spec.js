const {test , expect} = require('@playwright/test');

test.use({viewport:{width:700,height:500}})

test("Valid Login" , async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    
    await page.getByPlaceholder("Username").type("Admin",{delay:200})
    
    await page.screenshot({path:'screenshot.png' , fullPage: true});

    await page.locator("input[placeholder='Password']").type("admin12345",{delay:100})
    
    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/)

})



/**
 * 
 * retries : 2
 * 
 * execution -- retry -- retry
 * 
 * 1) test - success  --- do not retry
 * 2) test - failed  --- retry -1 --success  - do not retry
 * 3)                                        - retry-2
 * 4)                                                       -- failed
 * */