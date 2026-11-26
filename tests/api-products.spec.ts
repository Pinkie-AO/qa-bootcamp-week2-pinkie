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

test('create cart and add a product successfully', async ({ request }) => {
  let cartId: string | undefined;

    try {
    const productsResponse = await request.get(
      'https://api.practicesoftwaretesting.com/products'
    );

    expect(productsResponse.status()).toBe(200);

    const productsBody = await productsResponse.json();
    const productId = productsBody.data[0].id;

    expect(productId).toBeTruthy();

    // Create a new cart
    const createCartResponse = await request.post(
      'https://api.practicesoftwaretesting.com/carts'
    );

    expect(createCartResponse.status()).toBe(201);

    const cartBody = await createCartResponse.json();

    expect(cartBody.id).toBeTruthy();
    cartId = cartBody.id;

    // Add a product to the cart
    const addProductResponse = await request.post(
      `https://api.practicesoftwaretesting.com/carts/${cartId}`,
      {
        data: {
          product_id: productId,
          quantity: 1
        }
      }
    );

    expect(addProductResponse.status()).toBe(200);

    const addProductBody = await addProductResponse.json();

    expect(addProductBody.result).toBe('item added or updated');

  } finally {
    // Delete the cart even if an assertion fails
    if (cartId) {
      const deleteResponse = await request.delete(
        `https://api.practicesoftwaretesting.com/carts/${cartId}`
      );

      expect(deleteResponse.status()).toBe(204);
    }
  }
});

test('GET nonexistent cart returns 404', async ({ request }) => {
  const response = await request.get(
    'https://api.practicesoftwaretesting.com/carts/00000000000000000000000000'
  );

  expect(response.status()).toBe(404);

  const responseBody = await response.json();

  expect(responseBody.message).toBe('Requested item not found');
});