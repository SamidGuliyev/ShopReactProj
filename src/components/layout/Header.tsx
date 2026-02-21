import { Link } from "react-router";
import "./header.css";
import CartButton from "./cart-button";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <Link to="/" className="logo">
          🛍️ <span>SHOP</span>
        </Link>
        <div className="nav-actions">
         <CartButton />
        </div>
      </div>
    </header>
  );
}