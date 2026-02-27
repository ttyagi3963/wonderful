import type { CartItem, Product } from '@/types';

export interface CartContextType {
  items: any;
  addToCart: (product: Product) => void;
}
