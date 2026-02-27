import type { CartItem, Product } from "@/types";

export type CartAction = { type: "ADD_TO_CART"; product: Product };

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  totalItems: number;
  subtotal: number;
  discountRate: number;
  discount: number;
  total: number;
}
