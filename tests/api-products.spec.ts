import { test, expect } from '@playwright/test';

test('GET products returns a successful response', async ({ request }) => {
  const response = await request.get(
    'https://api.practicesoftwaretesting.com/products'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.data.length).toBeGreaterThan(0);
  expect(responseBody.data[0].name).toBe('Combination Pliers');
});