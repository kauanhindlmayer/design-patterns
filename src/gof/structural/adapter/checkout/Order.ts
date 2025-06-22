import { ProductDto } from "./CatalogGateway";
import Item from "./Item";

export default class Order {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addProduct(product: ProductDto, quantity: number) {
    this.items.push(new Item(product.productId, product.price, quantity));
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.getTotal();
    }
    return total;
  }
}
