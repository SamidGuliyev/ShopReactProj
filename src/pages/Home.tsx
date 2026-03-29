import { useEffect, useState } from "react";
import ProductItem from "../components/product/ProductItem";
import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);
    return (
        <div style = {{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}