import { Link } from "react-router";
import { useCart } from "../../providers/carts/cart-providers";

export default function CartButton() {
    const { totalCount } = useCart();
    return (
        <Link to="/cart" className="cart-link">
            🛒 Cart

            {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
            )}

        </Link>
    );
}