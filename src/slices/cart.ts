import { createSlice } from "@reduxjs/toolkit";

interface InitialStateInterface {
  products: number;
}
const initialState: InitialStateInterface = {
  products: 0,
};
export const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.products += 1;
    },
    removeFrimCart: (state) => {
      state.products -= 1;
    },
  },
});

export const { addToCart, removeFrimCart } = Cart.actions;

export default Cart.reducer;
