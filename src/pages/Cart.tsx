import { Link } from "react-router";
import { useCart } from "../providers/carts/cart-providers";
import "./cart.css";
import "./cart-empty.css";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
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
    return (
        
        <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <button className="clear-cart-btn" onClick={() => clearCart()}>Clear Cart</button>

      <div className="cart-content">
        <div className="cart-items">
          {/* Static Item */}
          {cart.map((item) => (
            <div className="cart-item">
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
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(item.id, 1)}
                    
                  >
                    +
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="remove-btn" >Remove</button>
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
            <span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    );
}