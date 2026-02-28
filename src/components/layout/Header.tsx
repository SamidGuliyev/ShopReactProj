import { Link } from "react-router";
import "./header.css";
import CartButton from "./cart-button";
import { useCookies } from "react-cookie";

export default function Header() {
  const [cookies] = useCookies(["credentials"]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🛍️ <span>SHOP</span>
        </Link>
        <div className="nav-actions">
          {!cookies.credentials ? (
            <Link to="/login" className="auth-btn">
              Login
            </Link>
          ) : null}
          <CartButton />
          <div className="avatar-dropdown">
            <button className="avatar-btn">
              <img
                src="https://ui-avatars.com/api/?name=User&background=random"
                alt="User"
              />
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
