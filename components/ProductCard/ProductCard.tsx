"use client";

import NextImage from "next/image";
import { ProductCardProps } from "./ProductCard.types";
import { useCart } from "@/context/CartContext";

/**
 * Client component — needs interactivity for the "Add to Cart" button.
 * @param props.product - The product details to display.
 * @returns {JSX.Element} The rendered product card.
 */
export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
      <div className="relative w-full aspect-[2/3] bg-gray-200">
        <NextImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-bold text-lg text-gray-800">{product.name}</h2>
        <p className="text-gray-500 text-sm mt-1 mb-4 flex-1">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="font-semibold text-green-700">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
