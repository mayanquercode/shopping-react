import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleCart } from "../redux/shoopingSlice";

export default function useDrawerCart() {
  const { isCartOpen } = useAppSelector(state => state.shooping);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleCart());
  };

  return {
    isCartOpen,
    toggle
  };
}
