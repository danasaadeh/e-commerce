"use client";

import { Box, Button } from "@mui/material";

import { Product, products } from "../../../home/types/index";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import RelatedItemsHeader from "./related-items-header";
import ProductsList from "@/features/home/components/products/products-list";

interface RelatedItemsProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void; // 👈 updated here
  onQuickView?: (id: string) => void;
}

export default function RelatedItems({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: RelatedItemsProps) {
  return (
    <Box className="py-12">
      <RelatedItemsHeader />
      <Box display="flex" justifyContent="flex-end" mb={3}></Box>
      <ProductsList
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onQuickView={onQuickView}
        products={products}
      />
    </Box>
  );
}
