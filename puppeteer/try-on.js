const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Login no IMVU
    await page.goto('https://www.imvu.com/login/');
    await page.type('#username', 'SEU_USUARIO_IMVU');
    await page.type('#password', 'SUA_SENHA_IMVU');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Carregar o link de try-on
    const tryOnLink = 'https://api.imvu.com/image_dressup/12432136,13831069,16070361?width=750&height=1300';
    await page.goto(tryOnLink);

    // Capturar e salvar a imagem
    await page.waitForSelector('img');
    const imageElement = await page.$('img');
    await imageElement.screenshot({ path: 'try-on-imvu.png' });
    console.log('Imagem salva como try-on-imvu.png');

  } catch (error) {
    console.error('Erro durante o processo:', error);
  } finally {
    await browser.close();
  }
})();