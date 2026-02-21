import { Route,  Routes } from "react-router";
import HomePage from "../../pages/Home";
import CartPage from "../../pages/Cart";


export default function MainRouter() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    );
}