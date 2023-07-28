
const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();
    console.log({ srcTxt });
    console.log({ rawTxt });

    browser.close();
}

scrapeProduct('https://www.amazon.com/Lenovo-Ideapad-Touchscreen-i3-1005G1-Processor/dp/B08B6F1NNR/ref=sr_1_1?th=1');
