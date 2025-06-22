import HttpClient from "./HttpClient";

export default interface CatalogGateway {
  getProduct(productId: number): Promise<ProductDto>;
}

export type ProductDto = {
  productId: number;
  description: string;
  price: number;
};

export class CatalogGatewayHttp implements CatalogGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getProduct(productId: number): Promise<ProductDto> {
    const response = await this.httpClient.get(
      `http://localhost:3001/products/${productId}`
    );
    return response;
  }
}
