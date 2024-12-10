const {test , expect} = require('@playwright/test')

test("Select values from dropdown" , async ({page}) => {
    
    await page.goto("https://www.facebook.com/r.php")

    // Select a particular option with the help of visible text : label
    await page.locator("#month").selectOption({label : "Mar"})

    await page.waitForTimeout(2000)

    // Select a particular option with the help of value
    await page.locator("#month").selectOption({value : "6"})

    await page.waitForTimeout(2000)

    // Select a particular option with the help of index
    await page.locator("#month").selectOption({index : 1})

    await page.waitForTimeout(2000)

    // Returns me all the available values/options (visible text)
    // const value = await page.locator("#month").textContent()

    // console.log(value+" ")

    // await expect(value.includes("Feb")).toBeTruthy()

    // Using for loop
    let month = await page.$("#month")

    let arr = await month.$$("option")

    let flag = false

    for(let i=0 ; i<arr.length ; i++){
        let element = arr[i]
        let value = await element.textContent()

        if(value.includes("Mar"))
        {
            flag = true
            break;
        }
        console.log("Value is : " + value)
    }
    
    await expect(flag).toBeTruthy()

    // await page.locator("#month").selectOption(['Feb' , 'Mar' , 'May'])      



})