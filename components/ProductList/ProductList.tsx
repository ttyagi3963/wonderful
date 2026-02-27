"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Spinner } from "@/components/Spinner/Spinner";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p className="text-lg font-medium">Failed to load products</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
