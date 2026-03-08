import { Link } from "react-router";
import "./header.css";
import CartButton from "./cart-button";
import { useCookies } from "react-cookie";

export default function Header() {
  const [cookies, _, removeCookie] = useCookies(["credentials"]);

  const logOut = () => {
    removeCookie("credentials");
    window.location.reload();
  };

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
          {cookies.credentials ? (
          <div className="avatar-dropdown">
            <button className="avatar-btn">
              <img
                src="https://ui-avatars.com/api/?name=User&background=random"
                alt="User"
              />
            </button>
            <div className="dropdown-menu">
              <button onClick={logOut} className="dropdown-item logout-btn">Logout</button>
            </div>
          </div>
        ) : null}
        </div>
      </div>
    </header>
  );
}
