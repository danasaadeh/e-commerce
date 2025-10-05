"use client";

import ProductCard from "./prouct-card";
import { Product } from "../../types";

interface ProductsListProps {
  products: Product[];
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
  wishlistMode?: boolean; // 👈 add this
}

export default function ProductsList({
  products,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlistMode = false, // 👈 default false
}: ProductsListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
          wishlistMode={wishlistMode} // 👈 pass to ProductCard
        />
      ))}
    </div>
  );
}
