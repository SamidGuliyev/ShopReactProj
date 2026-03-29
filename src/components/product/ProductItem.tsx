import { Link } from "react-router";
import type { Product } from "../../pages/Home";
import "./product-item.css";

import { useCartStore } from "../../providers/carts/cart-store";

export default function ProductItem(props: { product: Product }) {
  const product = props.product;

  const { addToCart } = useCartStore();

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={product.thumbnail} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title"><Link to={`/products/${product.id}`}>{product.title}</Link></h3>
        <p className="product-price">${product.price}</p>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: 1
          })}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}