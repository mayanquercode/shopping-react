import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { incrementCart, decrementCart, addProductToCart, removeProductToCart } from "../redux/shoopingSlice"



export default function useManageCartHome() {

  const { cartItems } = useAppSelector(state => state.shooping)
  const dispatch = useAppDispatch()

  const increment = (productId: number) => {
    dispatch(incrementCart())
    dispatch(addProductToCart(productId))
  }

  const decrement = (productId: number) => {
    dispatch(decrementCart())
    dispatch(removeProductToCart(productId))
  }

  const isInCart = (productId: number) => {
    const findItem = cartItems.find(item => item.id === productId)

    if (!findItem) {
      return false;
    }
    return true;
  };

  return {
    increment,
    decrement,
    isInCart
  }

}