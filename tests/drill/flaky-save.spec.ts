
import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';

test('Save message appears', async ({ page }) => {
    const fileUrl = pathToFileURL(
        `${__dirname}/index.html`
    ).href;

    await page.goto(fileUrl);

    await page.locator('#save').click();

    // Wait for the message using a retrying condition
    await expect(page.locator('#status')).toHaveText('Saved');
});
