const {test , expect} = require('@playwright/test')

test("Verify Login" , async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    await page.locator("input[placeholder='Password']").type("shagkufhcbd")

    await page.locator("button[type='submit']").click()

    const errorMsg = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()

    console.log("Error is : " + errorMsg)

    expect(errorMsg.includes("Invalid")).toBeTruthy()

    expect(errorMsg === "Invalid credentials").toBeTruthy()

    
})