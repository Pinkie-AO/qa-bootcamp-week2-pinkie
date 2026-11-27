import { test, expect } from '@playwright/test';

test('C4 Add to a cart', async ({ request }) => {
    let cartId: string | undefined;

    try {
        // Get a valid product ID
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

        // Add the product to the cart
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

        // Retrieve the cart and verify the product
        const cartResponse = await request.get(
            `https://api.practicesoftwaretesting.com/carts/${cartId}`
        );

        expect(cartResponse.status()).toBe(200);

        const cartDetails = await cartResponse.json();
        expect(cartDetails.cart_items.length).toBeGreaterThan(0);
        expect(cartDetails.cart_items[0].product_id).toBe(productId);

    } finally {
        // Clean up: delete the cart
        if (cartId) {
            const deleteResponse = await request.delete(
                `https://api.practicesoftwaretesting.com/carts/${cartId}`
            );

            expect(deleteResponse.status()).toBe(204);
        }
    }
});
