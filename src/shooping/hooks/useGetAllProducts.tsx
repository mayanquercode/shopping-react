import { useEffect, useState } from "react";
import type { Product } from "../types";

export default function useGetAllProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Product[] = await response.json();
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