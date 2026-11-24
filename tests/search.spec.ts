
import { test, expect } from '@playwright/test';

test('search returns products matching pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const searchBox = page.getByPlaceholder('Search');

  await searchBox.fill('pliers');
  await searchBox.press('Enter');

  const productNames = page.locator('[data-test="product-name"]');

  await expect(productNames).toHaveCount(4);

  const count = await productNames.count();

  for (let i = 0; i < count; i++) {
    await expect(productNames.nth(i)).toContainText(/pliers/i);
  }
});


