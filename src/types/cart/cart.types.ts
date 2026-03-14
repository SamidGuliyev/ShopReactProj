import type { ProductItem } from "../product/product.types";

export interface CartItem extends ProductItem {
    quantity: number;
}