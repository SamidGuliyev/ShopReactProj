import { createContext, use, useState } from "react";
export interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    totalCount: number;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    totalCount: 0,
});

export const useCart = () => use(CartContext);

export default function CartProvider(props: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    // useEffect(() => {
    //     const storedCart = localStorage.getItem("cart");
    //     if (storedCart) {
    //         setCart(JSON.parse(storedCart));
    //     }
    // }, [cart]);

    function addToCart(product: CartItem) {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    function removeFromCart(productId: number) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    function updateQuantity(productId: number, quantity: number) {
        
        setCart((prevCart) => {
            if (quantity < 0) {
                return prevCart.map((item) =>
                    item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
                );
            } else {
                return prevCart.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
        });
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext value={{ cart, addToCart, removeFromCart, totalCount: cart.length, updateQuantity, clearCart }}>
            {props.children}
        </CartContext>
    );

}