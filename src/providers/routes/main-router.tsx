import { Route, Routes } from "react-router";
import HomePage from "../../pages/Home";
import CartPage from "../../pages/Cart";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";
import ProductDetail from "../../pages/ProductDetail";
import AddProductForm from "../../pages/admin/AddProductForm";
import AdminPanel from "../../pages/admin/AdminPanel";


export default function MainRouter() {
  return (
    // <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/admin/add-product" element={<AddProductForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    // </AuthProvider>
  );
}
