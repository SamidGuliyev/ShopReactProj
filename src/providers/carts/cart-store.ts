import { create } from "zustand"
import type { CartItem, CartState } from "../../types/cart/cart.types";


export const useCartStore = create<CartState>()((set) => {
    return {
        cart : [] as CartItem[],
        addToCart : (product: CartItem) => set((state : { cart: CartItem[] }) => {
            const { cart } = state;
            const existingItemIndex = cart.findIndex((item) => item.id === product.id);
            
            if (existingItemIndex >= 0) {
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].quantity += 1;
                return { cart: updatedCart };
            } else {
                return { cart: [...cart, { ...product, quantity: 1 }] };
            }
        }),
        removeFromCart : (productId: number) => set((state : { cart: CartItem[] }) => {
            const { cart } = state;
            return { cart: cart.filter((item) => item.id !== productId) };
        }),
        updateQuantity : ({ productId, quantity }: { productId: number; quantity: number }) => set((state : { cart: CartItem[] }) => {
            const { cart } = state;
            const index = cart.findIndex((item) => item.id === productId);
            if(index < 0) return { cart };
            const updatedCart = [...cart];
            updatedCart[index] = { ...updatedCart[index], quantity: Math.max(1, updatedCart[index].quantity + quantity) };

            return { cart: updatedCart };
        }),
        clearCart : () => set({ cart: [] }),
        
    }
})