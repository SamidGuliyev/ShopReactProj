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

export function cleartMethod(state: CartItem[]) {
    while (state.length > 0) {
        state.pop();
    }
}

export function removeCartMethod(state: CartItem[], action: PayloadAction<number>) {
    const productId = action.payload;

    const product = state.findIndex((i) => i.id === productId);
    if (product >= 0) {
        state.splice(product, 1);
    }

}

export function updateQuantityMethod(state: CartItem[], action: PayloadAction<{ id: number, quantity: number }>) {
    const { id, quantity } = action.payload;
    const productIndex = state.findIndex((i) => i.id === id);
    if (productIndex >= 0) {

        if (quantity == -1 && state[productIndex].quantity == 1) {
            state[productIndex].quantity = 1;
        }
        else {
            state[productIndex].quantity += quantity;
        }
    }
}