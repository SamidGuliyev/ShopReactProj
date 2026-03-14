import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cart-slice";
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useCart = () => useSelector((state: RootState) => state.cart);