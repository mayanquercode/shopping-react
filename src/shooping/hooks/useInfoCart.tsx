import { useAppSelector } from "../../redux/hooks";

export default function useInfoCart() {
  const shooping = useAppSelector(state => state.shooping)

  return {
    counter: shooping.counter
  }
}