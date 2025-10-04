"use client";

import { Box } from "@mui/material";
import FlashSalesHeader from "./flash-sales-header";
import ProductsList from "../products/products-list";

interface FlashSalesProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export default function FlashSales({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: FlashSalesProps) {
  return (
    <Box className="py-12">
      <FlashSalesHeader />
      <ProductsList
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onQuickView={onQuickView}
      />
    </Box>
  );
}
