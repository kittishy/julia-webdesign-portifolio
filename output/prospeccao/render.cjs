const { chromium } = require('C:/Users/isand/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async () => {
 const browser = await chromium.launch({headless:true,channel:"chrome"});
 const page = await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
 await page.goto('file:///F:/Solara/coding/sites-ladingpage-etc/portifolio%20codi/output/prospeccao/portfolio-prospeccao.html');
 await page.evaluate(() => document.fonts.ready);
 await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth > 0));
 console.log(await page.evaluate(() => ({footerBottom:document.querySelector('footer').getBoundingClientRect().bottom, images:[...document.images].map(i=>({width:i.naturalWidth,height:i.naturalHeight}))})));
 const base='F:/Solara/coding/sites-ladingpage-etc/portifolio codi/output/prospeccao/';
 await page.screenshot({path:base+'julia-freitas-portfolio-prospeccao-v2.png'});
 await page.screenshot({path:base+'julia-freitas-portfolio-whatsapp-v2.jpg',type:'jpeg',quality:96});
 await browser.close();
})();

