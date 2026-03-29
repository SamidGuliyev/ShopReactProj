import { useParams } from "react-router";
import "./product-detail.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id : number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductDetail() {


  const {productId} = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const getProduct = async () => await axios.get(`http://localhost:5000/api/product/${productId}`);
    getProduct().then((response) => {
      setProduct(response.data);
    });

    

  }, [productId]);

  if(!product) {
    return <div>Loading...</div>;
  }
  
  return (
    
    <div className="product-detail-container">
      <button className="back-btn" onClick={() => window.history.back()}>
        ← Back to Products
      </button>

      <div className="product-detail-wrapper">
        <div className="product-image-section">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info-section">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.title}</h1>
          
          <div className="detail-rating">
            <span>⭐</span>
            <span className="detail-rating-count"></span>
          </div>

          <div className="detail-price">${product.price.toFixed(2)}</div>
          
          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-actions">
            <button className="detail-add-btn">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
