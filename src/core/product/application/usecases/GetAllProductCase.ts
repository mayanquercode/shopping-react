import type { Product, ProductRepository } from "../../domain/entities";

export default class GetAllProductCase {
  private readonly repo: ProductRepository
  constructor(repo:ProductRepository){
    this.repo = repo
  }
   async use(): Promise<Product[]>{
    return this.repo.getAll()
  }
}
