import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('C1 Search by name', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.open();
    await searchPage.searchForProduct('pliers');

    await expect(searchPage.productNames).toHaveCount(4);

    const visibleProducts = page.locator('[data-test="product-name"]:visible');
    const productNames = await searchPage.productNames.allTextContents();

    expect(productNames.length).toBeGreaterThan(0);

    for (const name of productNames) {
        expect(name).toMatch(/pliers/i);
    }
});