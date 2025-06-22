import Product from "./Product";

export default interface ProductRepository {
  getById(productId: number): Promise<Product>;
}

export class ProductRepositoryMemory implements ProductRepository {
  products = [
    new Product(1, "Product 1", 100),
    new Product(2, "Product 2", 200),
    new Product(3, "Product 3", 300),
  ];

  async getById(productId: number): Promise<Product> {
    const product = this.products.find(
      (product: any) => product.productId === productId
    );
    if (!product) throw new Error("Product not found");
    return product;
  }
}
