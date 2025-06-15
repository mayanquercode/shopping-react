// manejar las tarjetas del carrito
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { removeProductToCart, removeProductCompletely, addProductToCart } from "../redux/shoopingSlice"

export default function useManageCartCards() {

  const { cartItems } = useAppSelector(state => state.shooping)

  const dispatch = useAppDispatch()

  const addOneToCart = (productId: number) => {
    dispatch(addProductToCart(productId));
  };

  const removeOneFromCart = (productId: number) => {
    dispatch(removeProductToCart(productId));
  };

  const removeToCart = (productId: number) => {
    dispatch(removeProductCompletely(productId));
  };

  return {
    cartItems,
    addOneToCart,
    removeOneFromCart,
    removeToCart
  }

}