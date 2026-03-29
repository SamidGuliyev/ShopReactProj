import { createSlice} from "@reduxjs/toolkit";
import type { CartItem } from "../../../../types/cart/cart.types";
import { addToCart as addToCartMethod, cleartMethod, removeCartMethod, updateQuantityMethod } from "./cart.reducers";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: addToCartMethod,
        clearCart : cleartMethod,
        removeFromCart : removeCartMethod,
        updateQuantity : updateQuantityMethod
    }
}); 

export const {addToCart, clearCart, removeFromCart, updateQuantity} = cartSlice.actions;