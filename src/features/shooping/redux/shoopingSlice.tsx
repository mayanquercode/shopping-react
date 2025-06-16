import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  quantity: number
}

interface ShoopingState {
  counter: number
  isCartOpen: boolean
  cartItems: CartItem[]
}

const initialState: ShoopingState = {
  counter: 0,
  isCartOpen: false,
  cartItems: []
}

export const shoopingSlice = createSlice({
  name: 'shooping',
  initialState,
  reducers: {
    // Añadir producto al carrito (incrementa cantidad si ya existe)
    addProductToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ id, quantity: 1 });
      }
      state.counter += 1;
    },
    // Disminuir cantidad (hasta 1, sin eliminar)
    removeProductToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.counter -= 1;
      }
    },
    // Eliminar completamente un producto del carrito
    removeProductCompletely: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        state.counter -= existingItem.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },
    incrementCart: (state) => {
      state.counter += 1
    },
    decrementCart: (state) => {
      state.counter -= 1
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.counter = 0
      state.isCartOpen = !state.isCartOpen // mover en fucturas funcionalidades
    }
  },
})


export const {
  clearCart,
  incrementCart,
  decrementCart,
  toggleCart,
  addProductToCart,
  removeProductCompletely,
  removeProductToCart
} = shoopingSlice.actions

export default shoopingSlice.reducer