import { createSlice} from "@reduxjs/toolkit";
import type { CartItem } from "../../../../types/cart/cart.types";
import { addToCart as addToCartMethod } from "./cart.reducers";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: addToCartMethod,
    }
}); 

export const {addToCart} = cartSlice.actions;