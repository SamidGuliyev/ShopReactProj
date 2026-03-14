import { Link } from "react-router";
import { useCart } from "../../providers/redux/store";

export default function CartButton() {
    const cart = useCart();
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