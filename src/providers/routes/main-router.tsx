import { Route,  Routes } from "react-router";
import HomePage from "../../pages/Home";
import CartPage from "../../pages/Cart";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";


export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
}