import { createSlice } from "@reduxjs/toolkit";

interface InitialStateInterface {
  products: number;
  day: string; 
}

const initialState: InitialStateInterface = {
  products: 0,
  day: new Date().toLocaleDateString(),
};

export const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.products += 1;
    },
    removeFromCart: (state) => {
      state.products -= 1;
    },
    displayDateOfDay: (state) => {
      state.day = new Date().toLocaleDateString();
    },
  },
});
export const { addToCart, removeFromCart, displayDateOfDay } = Cart.actions;

export default Cart.reducer;
