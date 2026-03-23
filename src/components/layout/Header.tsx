import { Link } from "react-router";
import "./header.css";
import CartButton from "./cart-button";
import { useAuth } from "../../providers/auth/auth-store";

export default function Header() {
  const { logout, isAuthenticated } = useAuth();
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🛍️ <span>SHOP</span>
        </Link>
        <div className="nav-actions">
          {!isAuthenticated ? (
            <Link to="/login" className="auth-btn">
              Login
            </Link>
          ) : null}
          <CartButton />
          {isAuthenticated ? (
            <div className="avatar-dropdown">
              <button className="avatar-btn">
                <img
                  src="https://ui-avatars.com/api/?name=User&background=random"
                  alt="User"
                />
              </button>
              <div className="dropdown-menu">
                <button onClick={logout} className="dropdown-item logout-btn">Logout</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
