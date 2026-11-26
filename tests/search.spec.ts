import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('search returns products matching pliers', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.open();
  await searchPage.searchForProduct('pliers');

  await expect(searchPage.productNames).toHaveCount(4);

  const count = await searchPage.productNames.count();

  for (let i = 0; i < count; i++) {
    await expect(searchPage.productNames.nth(i)).toContainText(/pliers/i);
  }
});