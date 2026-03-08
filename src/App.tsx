import { useLocation } from "react-router";
import Header from "./components/layout/Header";
import MainRouter from "./providers/routes/main-router";
import CartProvider from "./providers/carts/cart-providers";
import { CookiesProvider } from "react-cookie";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <CookiesProvider>
      <CartProvider>
        {!isAdmin && <Header />}
        <MainRouter />
      </CartProvider>
    </CookiesProvider>
  );
}

export default App;
