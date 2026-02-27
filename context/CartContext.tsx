'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { CartItem, Product } from '@/types';
import type { CartContextType } from './CartContext.types';

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * @param param - children: ReactNode
 * @returns {JSX.Element} The CartProvider component that wraps its children with CartContext.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<any>();

  const addToCart = (product: Product) => {
    console.log('Add to cart clicked:', product.name);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
