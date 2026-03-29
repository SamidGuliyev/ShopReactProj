import { useLocation } from "react-router";
import Header from "./components/layout/Header";
import MainRouter from "./providers/routes/main-router";
import { CookiesProvider } from "react-cookie";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <CookiesProvider>
      {!isAdmin && <Header />}
      <MainRouter />
    </CookiesProvider>
  );
}

export default App;
