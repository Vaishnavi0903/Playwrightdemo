const {test , expect} = require('@playwright/test')
const testdata = JSON.parse(JSON.stringify(require("../uploads/testdata.json")))


test.describe("Data Driven Login test" , function(){

    for (const data of testdata)
    {
        test.describe(`Login with user ${data.id}` , function()
        {


            test("Verify test data" , async function ({page}) {
    
                await page.goto("https://freelance-learn-automation.vercel.app/login")
          
                await page.locator("#email1").fill(data.username)
          
                await page.locator("#password1").fill(data.password)

          
            })

        })
    }

})

