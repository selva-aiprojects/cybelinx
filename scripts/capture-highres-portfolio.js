const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const apps = [
  {
    id: 'cybehrm',
    url: 'https://synthalyst.cybelinx.com/',
    outFile: 'public/assets/products/cybehrm.png',
  },
  {
    id: 'cybehms',
    url: 'https://hostsphere.cybelinx.com/',
    outFile: 'public/assets/products/cybehms.png',
  },
  {
    id: 'cybehealth',
    url: 'https://jioplix.com/',
    outFile: 'public/assets/products/cybehealth.png',
  },
  {
    id: 'cybecommerce',
    url: 'https://storeai.cybelinx.com/',
    outFile: 'public/assets/products/cybecommerce.png',
  },
  {
    id: 'cybepharma',
    url: 'https://mediflow.cybelinx.com/',
    outFile: 'public/assets/products/cybepharma.png',
  },
  {
    id: 'cybefintech',
    url: 'https://smartbooks.cybelinx.com/',
    outFile: 'public/assets/products/cybefintech.png',
  },
  {
    id: 'cybeerp',
    url: 'https://nexora.cybelinx.com/',
    outFile: 'public/assets/products/cybeerp.png',
  },
  {
    id: 'cyberealestate',
    url: 'https://estateflow.cybelinx.com/',
    outFile: 'public/assets/products/cyberealestate.png',
  }
];

async function captureAll() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
      '--window-size=2560,1440',
      '--force-device-scale-factor=2'
    ],
    defaultViewport: {
      width: 2560,
      height: 1440,
      deviceScaleFactor: 2, // Gives 5120 x 2880 (5K / Ultra High-DPI razor sharp clarity)
    }
  });

  for (const app of apps) {
    console.log(`\nNavigating to ${app.id} (${app.url})...`);
    const page = await browser.newPage();
    try {
      await page.setViewport({
        width: 2560,
        height: 1440,
        deviceScaleFactor: 2,
      });

      await page.goto(app.url, {
        waitUntil: 'networkidle2',
        timeout: 30000,
      });

      // Wait 3 seconds for client-side hydration, fonts, animations & images to settle
      await new Promise((r) => setTimeout(r, 3000));

      const outPath = path.resolve(__dirname, '..', app.outFile);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      // Clip standard 16:9 dashboard hero viewport
      await page.screenshot({
        path: outPath,
        clip: {
          x: 0,
          y: 0,
          width: 2560,
          height: 1440,
        },
      });

      const stat = fs.statSync(outPath);
      console.log(`✓ Captured ${app.id} -> ${app.outFile} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error capturing ${app.id}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nAll portfolio captures completed successfully!');
}

captureAll().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
