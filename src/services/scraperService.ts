import puppeteer from "puppeteer";

async function scrapeAmazonBestSellers() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.mithoficial.com.br/homens/compre-por-linha/mith-army/"
  );

  const products = await page.evaluate(() => {
    const productList = Array.from(
      document.querySelectorAll(".product")
    ) as HTMLElement[];
    return productList.slice(0, 3).map((product) => {
      const name = product.querySelector(".product-name")!.textContent;
      const price = product.querySelector(".product-price")!.textContent;
      const link = (product.querySelector(".product-link") as HTMLAnchorElement)
        .href;
      return { name, price, link };
    });
  });
  // console.log(products)

  await browser.close();
  return products;
}

export { scrapeAmazonBestSellers };
