import type { Product } from "../../pages/Home";
import { useCart } from "../../providers/carts/cart-providers";
import "./product-item.css";

export default function ProductItem(props: {product: Product}) {

  const product = props.product;
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={product.thumbnail} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart({
            id: product.id,
            quantity: 1,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
          })}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}