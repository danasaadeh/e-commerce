"use client";

import { Box, Button } from "@mui/material";

import ProductsList from "../products/products-list";
import { Product, products } from "../../types";
import BestSellingHeader from "./best-selling-header";

interface BestSellingProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void; // 👈 updated here
  onQuickView?: (id: string) => void;
}

export default function BestSelling({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: BestSellingProps) {
  return (
    <Box className="py-12">
      <BestSellingHeader />
      <ProductsList
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onQuickView={onQuickView}
        products={products}
      />
    </Box>
  );
}
