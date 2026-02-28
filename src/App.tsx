import Header from "./components/layout/Header";
import MainRouter from "./providers/routes/main-router";
import CartProvider from "./providers/carts/cart-providers";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <CartProvider>
        <Header />
        <MainRouter />
      </CartProvider>
    </CookiesProvider>
  );
}

export default App;
