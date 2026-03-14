import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../../../types/cart/cart.types";
import type { ProductItem } from "../../../../types/product/product.types";

export function addToCart(state: CartItem[], action: PayloadAction<ProductItem>) {
    const product = action.payload;

    const existingItemIndex = state.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
        state[existingItemIndex].quantity += 1;
    } else {
        state.push({ ...product, quantity: 1 });
    }
}