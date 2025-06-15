import type {Product, ProductRepository} from "../../domain/entities"

export default class ProductApiRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Product[] = await response.json();
      return Promise.resolve(data)
    } catch (error) {
      console.error('Error fetching products:', error);
      return Promise.resolve([])
    }

  }
}

