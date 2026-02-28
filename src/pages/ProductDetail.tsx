import "./product-detail.css";

export default function ProductDetail() {
  // Static dummy data for UI display
  const product = {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 348.00,
    description: "The Sony WH-1000XM5 Wireless Noise Canceling Headphones redefine distraction-free listening. With two processors controlling 8 microphones, Auto NC Optimizer for automatically optimizing noise canceling based on your wearing conditions and environment, and a specially designed driver unit, you get industry-leading noise canceling and exceptional sound quality.",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UF1000,1000_QL80_.jpg",
    rating: { rate: 4.8, count: 1205 }
  };

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
          <span className="product-category">{product.category}</span>
          <h1 className="product-title">{product.title}</h1>
          
          <div className="product-rating">
            <span>⭐ {product.rating.rate}</span>
            <span className="rating-count">({product.rating.count} reviews)</span>
          </div>

          <div className="product-price">${product.price.toFixed(2)}</div>
          
          <p className="product-description">
            {product.description}
          </p>

          <div className="product-actions">
            <button className="add-to-cart-btn">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
