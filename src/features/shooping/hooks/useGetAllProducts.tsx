import { useEffect, useState } from "react";
import type { Product } from "../types";
import { getAllProductCase } from "../../../core/product/dependencies/usecases"

export default function useGetAllProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const data = await getAllProductCase.use()
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);

  return {
    products
  }

}
