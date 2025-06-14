import { useEffect, useState } from "react";
import type { Product } from "../types";
import { useAppSelector } from "../../redux/hooks";

export default function useGetProductCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const { idProducts } = useAppSelector(state => state.shooping)

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Product[] = await response.json();
      const filterData = data.filter(item => idProducts.includes(item.id));
      setProducts(filterData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [idProducts]);

  return {
    products
  }
}