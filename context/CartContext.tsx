"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  ReactNode,
} from "react";
import type { CartItem, Product } from "@/types";
import type { CartAction, CartContextType } from "./CartContext.types";

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.find((item) => item.id === action.product.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    default:
      return state;
  }
}

/**
 * @param param - children: ReactNode
 * @returns {JSX.Element} The CartProvider component that wraps its children with CartContext.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const addToCart = useCallback(
    (product: Product) => dispatch({ type: "ADD_TO_CART", product }),
    [],
  );

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const discountRate = useMemo(() => {
    if (totalItems >= 6) return 0.25;
    if (totalItems >= 3) return 0.1;
    return 0;
  }, [totalItems]);

  const discount = useMemo(
    () => subtotal * discountRate,
    [subtotal, discountRate],
  );

  const total = useMemo(() => subtotal - discount, [subtotal, discount]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        totalItems,
        subtotal,
        discountRate,
        discount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
