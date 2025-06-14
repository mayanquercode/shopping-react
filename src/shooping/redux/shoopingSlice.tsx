import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ShoopingState {
  counter: number
  isCartOpen: boolean
  idProducts: number[]
}

const initialState: ShoopingState = {
  counter: 0,
  isCartOpen: false,
  idProducts: []
}

export const shoopingSlice = createSlice({
  name: 'shooping',
  initialState,
  reducers: {
    incrementCart: (state) => {
      state.counter += 1
    },
    decrementCart: (state) => {
      state.counter -= 1
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    addIdProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (!state.idProducts.includes(id)) {
        state.idProducts.push(id);
      }
    },
    removeIdProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.idProducts = state.idProducts.filter(productId => productId !== id);
    },
    clearCart: (state) => {
      state.idProducts = [];
      state.counter = 0
      state.isCartOpen = !state.isCartOpen // mover en fucturas funcionalidades
    }
  },
})


export const { addIdProduct, clearCart, incrementCart, decrementCart, toggleCart, removeIdProduct } = shoopingSlice.actions

export default shoopingSlice.reducer