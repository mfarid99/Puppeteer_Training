const puppeteer = require('puppeteer')
// /waitForTimeout(1000)
describe('My First Puppeteer Test', ()=>{
    it('Should Launc The Browser', async()=>{
        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
        const page = await browser.newPage();
        await page.goto('http://www.example.com/');
        await page.waitForTimeout(10000)
        await page.waitForSelector('h1');
        await browser.close();
    })
})

