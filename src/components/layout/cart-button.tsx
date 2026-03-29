import { Link } from "react-router";
import { useCartStore } from "../../providers/carts/cart-store";

export default function CartButton() {
    
    const { cart } = useCartStore();
    
    const totalCount = cart.length;
    
    return (
        <Link to="/cart" className="cart-link">
            🛒 Cart

            {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
            )}

        </Link>
    );
}