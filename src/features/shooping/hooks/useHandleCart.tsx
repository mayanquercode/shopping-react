import { useAppDispatch } from "../../../redux/hooks";
import { incrementCart, decrementCart, addIdProduct, removeIdProduct, clearCart } from "../redux/shoopingSlice"

export default function useHandleCart() {
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

  return {
    increment: handleIncrementCart,
    decrement: handleDecrementCart,
    clearAll: handleClearAllCart
  }

}
