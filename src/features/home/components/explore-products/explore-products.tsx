"use client";

import { Box, Button } from "@mui/material";
import ExploreHeader from "./explore-products-header";
import ProductsList from "../products/products-list";
import { Product, products } from "../../types";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface ExploreProductsProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void; // 👈 updated here
  onQuickView?: (id: string) => void;
}

export default function ExploreProducts({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: ExploreProductsProps) {
  return (
    <Box className="py-12">
      <ExploreHeader />
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <div className="flex space-x-3">
          <button className="cat-prev h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowLeft fontSize="small" />
          </button>
          <button className="cat-next h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowRight fontSize="small" />
          </button>
        </div>
      </Box>
      <ProductsList
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onQuickView={onQuickView}
        products={products}
      />
      {/* View All Button */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          sx={{
            px: 6,
            py: 1.5,
            mt: 2,
            fontSize: 15,
            textTransform: "none",
            borderRadius: 1,
            bgcolor: "#cc0000",
            "&:hover": { bgcolor: "#cc0000" },
          }}
        >
          View All Products
        </Button>
      </Box>
    </Box>
  );
}
