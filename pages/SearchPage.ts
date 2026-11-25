import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByPlaceholder('Search');
    this.productNames = page.locator('[data-test="product-name"]');
  }

  async open() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async searchForProduct(product: string) {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');
  }
}