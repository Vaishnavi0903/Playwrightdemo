const {test , expect} = require('@playwright/test')

test("Verify alerts" , async function ({page}) {
    
      await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

      page.on("dialog" , async(dialogWindow) => {

        expect(dialogWindow.type()).toContain("alert")

        expect(dialogWindow.message()).toContain("I am a JS Alert")

        await dialogWindow.accept()

      })

      await page.locator("button[onclick='jsAlert()']").click()

     
    //   alerts  :  OK
    //   confirm :  OK/Cancel
    //   prompt  :  Input -- Ok / Cancel

})




test("Verify confirm" , async function ({page}) {
    
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog" , async(dialogWindow) => {

      expect(dialogWindow.type()).toContain("confirm")

      expect(dialogWindow.message()).toContain("I am a JS Confirm")

      await dialogWindow.dismiss()

    })

    await page.locator("button[onclick='jsConfirm()']").click()

})

test.only("Verify prompt" , async function ({page}) {
    
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog" , async(dialogWindow) => {

    //   expect(dialogWindow.type()).toContain("prompt")

    //   expect(dialogWindow.message()).toContain("I am a JS prompt")

    //   await dialogWindow.accept("Vaishnavi")
    //   //await dialogWindow.dismiss()

    if (dialogWindow.message().includes("Enter username")) {
      expect(dialogWindow.type()).toContain("prompt");
      expect(dialogWindow.message()).toContain("Enter username");
      await dialogWindow.accept("Vaishnavi"); 
    } 

    if (dialogWindow.message().includes("Enter password")) {
    expect(dialogWindow.type()).toContain("prompt");
    expect(dialogWindow.message()).toContain("Enter password");
    await dialogWindow.accept("Sontakke"); 
    }
      
})
    
    await page.locator("button[onclick='jsPrompt()']").click()
    
    await page.waitForTimeout(2000)
})