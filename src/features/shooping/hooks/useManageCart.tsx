import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearCart as clearToCart } from '../redux/shoopingSlice';
import { getAllProductCase } from "../../../core/product/dependencies/usecases";

export default function useManageCart() {
  const { cartItems } = useAppSelector(state => state.shooping);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState(0);

  const calculateTotal = async () => {
    try {
      const products = await getAllProductCase.use();

      const calculatedTotal = cartItems.reduce((sum, cartItem) => {
        const product = products.find(p => p.id === cartItem.id);
        return product ? sum + (product.price * cartItem.quantity) : sum;
      }, 0);

      setTotal(Number(calculatedTotal.toFixed(2)));
    } catch (error) {
      console.error('Error calculating cart total:', error);
      setTotal(0);
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const clearCart = () => {
    dispatch(clearToCart());
  };

  return {
    total,
    clearCart
  };
}