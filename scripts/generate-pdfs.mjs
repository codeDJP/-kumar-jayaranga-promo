
import puppeteer from 'puppeteer';

const appUrl = 'http://localhost:3000';
const pages = [
  { name: 'price-list', path: '/print/price-list' },
  { name: 'terms-and-conditions', path: '/print/terms' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  for (const pageInfo of pages) {
    await page.goto(`${appUrl}${pageInfo.path}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: `public/docs/${pageInfo.name}.pdf`,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });
  }

  await browser.close();
})();
