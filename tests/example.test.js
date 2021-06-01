const puppeteer = require('puppeteer')
// /waitForTimeout(1000)
// describe('My First Puppeteer Test', ()=>{
//     it('Should Launc The Browser', async()=>{
//         const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
//         const page = await browser.newPage();
//         await page.goto('http://www.example.com/');
//         await page.waitForTimeout(3000)
//         await page.waitForSelector('h1');
//         await page.reload()
//         await page.waitForTimeout(3000)
//         await page.waitForSelector('h1');
//         await browser.close();
//     })
// })

//https://dev.to/

// describe('My First Puppeteer Test', ()=>{
//     it('Should Launc The Browser', async()=>{
//         const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
//         const page = await browser.newPage();
//         await page.goto('http://www.example.com/');
//         await page.waitForSelector('h1')
//         await page.goto('https://dev.to/')
//         await page.waitForSelector('#body-styles')
//         await page.goBack();
//         await page.waitForSelector('h1')
//         await page.goForward();
//         await page.waitForSelector('#body-styles')
//         await browser.close();
//     })
// })

//https://devexpress.github.io/testcafe/example/ 

describe('My First Puppeteer Test', ()=>{
    it('Should Launc The Browser', async()=>{
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
        const page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.type('#developer-name', 'hello Moe')
        await page.waitForTimeout(5000)
        await page.click('#remote-testing')
        await page.waitForTimeout(5000)
        await page.click('#remote-testing')
        await page.waitForTimeout(5000)

        await browser.close();
    })
})