
import ProductApiRepository from "../infrastructure/repositories/ProductApiRepository";
import GetAllProductCase from "../application/usecases/GetAllProductCase";

const repository = new ProductApiRepository()

export const getAllProductCase = new GetAllProductCase(repository)

