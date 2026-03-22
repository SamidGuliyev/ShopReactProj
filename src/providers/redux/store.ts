import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cart-slice";
import { useSelector } from "react-redux";
import { authSlice } from "./features/auth/auth-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useCart = () => useSelector((state: RootState) => state.cart);
export const useAuth = () => useSelector((state: RootState) => state.auth);