import { configureStore } from "@reduxjs/toolkit";
import cart from "../slices/cart";
import { api } from "./api";

export const Store = configureStore({
  reducer: {
    cart,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = ReturnType<typeof Store.dispatch>;
