import axios from "axios";

test("Deve consultar um produto do catálogo", async function () {
  const productId = 1;
  const response = await axios.get(
    `http://localhost:3001/products/${productId}`
  );
  const product = response.data;
  expect(product.id).toBe(productId);
  expect(product.description).toBe("Product 1");
  expect(product.price).toBe(100);
});
