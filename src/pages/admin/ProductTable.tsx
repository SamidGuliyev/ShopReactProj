import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../Home";
import './admin.css';

export default function ProductTable() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=10")
            .then((response) => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>Loading products...</div>;
    }

    return (
        <div className="products-table-container">
            <table className="products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <img 
                                    src={product.thumbnail} 
                                    alt={product.title} 
                                    className="product-thumb" 
                                />
                            </td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            {/* Assuming category exists on product object based on dummyjson structure, 
                                though Home.tsx interface didn't explicitly list it, dummyjson usually returns it.
                                Let's add it to the interface locally if needed, or cast it.
                            */}
                            <td>{(product as any).category || '-'}</td>
                            <td>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button className="action-btn edit" title="Edit">
                                        ✏️
                                    </button>
                                    <button className="action-btn delete" title="Delete">
                                        🗑️
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}