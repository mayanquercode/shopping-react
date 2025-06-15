import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { incrementCart, decrementCart, addIdProduct, removeIdProduct, clearCart } from "../redux/shoopingSlice"

export default function useHandleCart() {
  const { idProducts } = useAppSelector(state => state.shooping)
  const dispatch = useAppDispatch()

  const handleIncrementCart = (id: number) => {
    dispatch(incrementCart())
    dispatch(addIdProduct(id))
  }

  const handleDecrementCart = (id: number) => {
    dispatch(decrementCart())
    dispatch(removeIdProduct(id))
  }

  const handleClearAllCart = () => {
    dispatch(clearCart())
  }

  const handleIsInCart = (productId: number) => {
    return idProducts.includes(productId);
  };

  return {
    increment: handleIncrementCart,
    decrement: handleDecrementCart,
    clearAll: handleClearAllCart,
    isInCart: handleIsInCart,
  }

}
