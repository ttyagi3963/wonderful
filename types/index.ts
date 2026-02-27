export interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // URL to image
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}