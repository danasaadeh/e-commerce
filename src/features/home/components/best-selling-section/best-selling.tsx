"use client";

import { Box, Button } from "@mui/material";
import ProductsList from "../products/products-list";
import { Product } from "../../types";
import BestSellingHeader from "./best-selling-header";
import { useAllProducts } from "../../services/queries"; // 👈 use same hook as FlashSales

interface BestSellingProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
}

export default function BestSelling({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: BestSellingProps) {
  // ✅ Fetch data from API
  const { data: products, isLoading, isError } = useAllProducts();

  // ✅ Select subset — top 8 best-selling (just an example)
  const bestSellingProducts = products?.slice(6, 14) || [];

  return (
    <Box className="py-12">
      <BestSellingHeader />

      {/* ✅ Product list handles skeletons automatically */}
      <ProductsList
        isLoading={isLoading}
        products={isError ? [] : bestSellingProducts}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onQuickView={onQuickView}
      />
    </Box>
  );
}
