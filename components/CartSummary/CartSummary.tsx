"use client";

import { useCart } from "@/context/CartContext";

export const CartSummary = () => {
  const { totalItems, subtotal, discountRate, discount, total } = useCart();

  return (
    <div className="bg-white p-4 border rounded shadow-sm text-sm">
      <p className="font-semibold text-base">
        Cart: {totalItems} {totalItems === 1 ? "item" : "items"}
      </p>
      <div className="mt-2 space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {discountRate > 0 && (
          <div className="flex justify-between text-green-700">
            <span>Discount ({Math.round(discountRate * 100)}%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between font-bold border-t pt-1">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
