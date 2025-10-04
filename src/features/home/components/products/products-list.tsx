"use client";

import ProductCard from "./prouct-card"; // same folder as product card
import { products } from "@/features/home/types/index";
interface ProductsListProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export default function ProductsList({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: ProductsListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
}
