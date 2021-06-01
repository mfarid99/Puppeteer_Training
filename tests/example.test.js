const puppeteer = require('puppeteer')
const expect = require('chai').expect
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

// describe('My First Puppeteer Test', ()=>{
//     it('Should Launc The Browser', async()=>{
//         const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
//         const page = await browser.newPage();
//         await page.goto('https://devexpress.github.io/testcafe/example/');
//         await page.type('#developer-name', 'hello Moe')
//         await page.waitForTimeout(5000)
//         await page.click('#remote-testing', {clickCount: 3})
//         await page.waitForTimeout(5000)
//         await page.click('#remote-testing')
//         await page.waitForTimeout(5000)

//         await browser.close();
//     })
// })

// describe('My First Puppeteer Test', ()=>{
//     it('Should Launc The Browser', async()=>{
//         const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
//         const page = await browser.newPage();
//         await page.goto('https://devexpress.github.io/testcafe/example/');
//         await page.type('#developer-name', 'hello Moe')
//         await page.waitForTimeout(3000)
//         await page.click('#tried-test-cafe')
//         await page.waitForTimeout(3000)
//         await page.select('#preferred-interface', 'JavaScript API')
//         await page.waitForTimeout(3000)
//         await page.type('#comments', 'I wanna have some fun')
//         await page.waitForTimeout(3000)
//         await page.click('#submit-button')
//         await page.waitForTimeout(3000)
//         await page.waitForSelector('.result-content')

//         await browser.close();
//     })
// })


// describe('My First Puppeteer Test', ()=>{
//     it('Should Launc The Browser', async()=>{
//         const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
//         const page = await browser.newPage();
//         await page.goto('http://example.com/');
//         const title = await page.title();
//         const url = await page.url();
//         console.log(title)
//         console.log(url)        

//         // await browser.close();
//     })
// })


// describe('My First Puppeteer Test', ()=>{
//     it( 'Should Launch The Browser', async()=>{
//        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
//         const page = await browser.newPage();
//         await page.goto('http://example.com/');
//         const text = await page.$eval('h1', element => element.textContent)      
//         console.log(text)
//         const parag = await page.$eval('p', word=>word.textContent)
//         console.log(parag)
//         // await browser.close();
//     })
// })

// describe('My First Puppeteer Test', ()=>{
//     it( 'Should Launch The Browser', async()=>{
//        const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
//         const page = await browser.newPage();
//         await page.goto('http://example.com/');
//         const count = await page.$$eval('p', nut=>nut.length)
//         console.log(count)
//         // await browser.close();
//     })
// })


describe('My First Puppeteer Test', ()=>{
    it( 'Should Launch The Browser', async()=>{
       const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false });
        const page = await browser.newPage();
        await page.goto('http://example.com/');
        const title = await page.title();
        const url = await page.url();
        const text = await page.$eval('h1', element=>element.textContent)
        const count = await page.$$eval('p', nut=>nut.length)

        expect(title).to.be.a('string', 'Example Domain');
        expect(url).to.include('example');
        expect(text).to.be.a('string', 'Example Domain')
        expect(count).to.equal(2)
        
  
        await browser.close();
    })
})