import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const projects = [
  {
    name: "XandeTEC Soluções",
    url: "https://xandetec-solucoes.vercel.app/",
    file: "public/projects/screenshots/xandetec.png",
  },
  {
    name: "C&N Mármores e Granitos",
    url: "https://cn-marmores.vercel.app/",
    file: "public/projects/screenshots/cn-marmores.png",
  },
  {
    name: "Academia Gustavo Pià",
    url: "https://academia-gustavo-pia.vercel.app/",
    file: "public/projects/screenshots/gustavo-pia.png",
  },
  {
    name: "Basic Coffee",
    url: "https://basic-coffee-shop.vercel.app/br/",
    file: "public/projects/screenshots/basic-coffee.png",
  },
  {
    name: "S2 Seguros Saúde",
    url: "https://s2-seguros-saude.vercel.app/",
    file: "public/projects/screenshots/s2-saude.png",
  },
  {
    name: "Raquel Santiago",
    url: "https://raquel-carrd.vercel.app/",
    file: "public/projects/screenshots/raquel.png",
  },
];

await mkdir("public/projects/screenshots", { recursive: true });

const browser = await chromium.launch({ headless: true });

try {
  for (const project of projects) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      colorScheme: "light",
      locale: "pt-BR",
    });

    const page = await context.newPage();

    console.log(`Capturing ${project.name}: ${project.url}`);

    await page.goto(project.url, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });

    await page.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => {});
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1800);

    await page.screenshot({
      path: project.file,
      type: "png",
      fullPage: false,
      animations: "disabled",
    });

    await context.close();
  }
} finally {
  await browser.close();
}
