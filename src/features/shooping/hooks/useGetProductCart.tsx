import { useEffect, useState } from "react";
import type { Product } from "../types";
import { useAppSelector } from "../../../redux/hooks";
import { getAllProductCase } from "../../../core/product/dependencies/usecases";

export default function useGetProductCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const { cartItems } = useAppSelector(state => state.shooping); // Asegúrate que el nombre del slice sea correcto

  const fetchProducts = async () => {
    try {
      const data = await getAllProductCase.use();

      // Crear un Set con los IDs de los productos en el carrito para mejor performance
      const cartProductIds = new Set(cartItems.map(item => item.id));

      // Filtrar los productos que están en el carrito
      const filteredData = data.filter(item => cartProductIds.has(item.id));

      // Mapear para incluir la cantidad de cada producto
      const productsWithQuantity = filteredData.map(product => {
        const cartItem = cartItems.find(item => item.id === product.id);
        return {
          ...product,
          quantity: cartItem ? cartItem.quantity : 0 // Nunca debería ser 0 porque ya está filtrado
        };
      });

      setProducts(productsWithQuantity);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); // Asegurar estado limpio en caso de error
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [cartItems]); // Se ejecutará cada vez que cambie cartItems

  return {
    products
  };
}