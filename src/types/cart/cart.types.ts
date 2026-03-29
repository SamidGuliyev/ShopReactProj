import type { ProductItem } from "../product/product.types";

export interface CartItem extends ProductItem {
    quantity: number;
}

export interface CartState {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: ({productId, quantity}: { productId: number; quantity: number }) => void;
    clearCart: () => void;
    
}