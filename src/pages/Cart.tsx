import { Link } from "react-router";
import "./cart.css";
import "./cart-empty.css";
import { useCookies } from "react-cookie";
import Modal from "../components/layout/Modal";
import { useState } from "react";
import { useCart } from "../providers/redux/store";
import { clearCart, removeFromCart, updateQuantity } from "../providers/redux/features/cart/cart-slice";
import { useDispatch } from "react-redux";


export default function CartPage() {
  const [cookies] = useCookies(["token"]);
  const [isOpen, setOpen] = useState<boolean>(false);

  const cart = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <div className="empty-cart-text">Your cart is empty</div>
          <Link to="/" className="continue-shopping-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckOutOnClick = () => {
    if (!cookies.token) {
      setOpen(true);
    }
  };

  // console.log(cart);

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} title="Authentication Required">
        <div className="auth-modal-content">
          <p className="auth-modal-text">
            Please log in to your account to complete your purchase and view your order history.
          </p>
          <div className="auth-modal-actions">
            <button 
              onClick={() => setOpen(false)} 
              className="auth-btn-secondary"
            >
              Cancel
            </button>
            <Link to="/login" className="auth-btn-primary">
              Log In
            </Link>
          </div>
        </div>
      </Modal>

      <h1 className="cart-title">Your Shopping Cart</h1>
      <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <div className="cart-content">
        <div className="cart-items">
          {/* Static Item */}
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="item-image"
              />

              <div className="item-details">
                <h3 className="item-name">Premium Product {item.title}</h3>
                <p className="item-meta">Color: {}</p>
                <div className="item-meta">In Stock</div>
              </div>

              <div className="item-actions">
                <p className="item-price">${item.price}</p>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    aria-label="Decrease quantity"
                    onClick={() => dispatch(updateQuantity({id: item.id, quantity: -1}))}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    aria-label="Increase quantity"
                    onClick={() => dispatch(updateQuantity({id: item.id, quantity: 1}))}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${}</span>
          </div>

          <div className="summary-row">
            <span>Shipping Estimate</span>
            <span>${}</span>
          </div>

          <div className="summary-row">
            <span>Tax Estimate</span>
            <span>$0.00</span>
          </div>

          <div className="summary-row total">
            <span>Order Total</span>
            <span>
              $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>

          <button onClick={handleCheckOutOnClick} className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
