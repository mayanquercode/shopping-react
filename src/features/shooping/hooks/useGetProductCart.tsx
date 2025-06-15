import { useEffect, useState } from "react";
import type { Product } from "../types";
import { useAppSelector } from "../../../redux/hooks";
import { getAllProductCase } from "../../../core/product/dependencies/usecases"

export default function useGetProductCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const { idProducts } = useAppSelector(state => state.shooping)

  const fetchProducts = async () => {
    try {
      const data = await getAllProductCase.use()
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
