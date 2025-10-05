"use client";

import { Box, Button } from "@mui/material";

import ProductsList from "@/features/home/components/products/products-list";
import CategoryHeader from "@/features/home/components/category-section/category-header";
import { products } from "@/features/home/types";

export default function JustForYouSection() {
  return (
    <Box>
      {/* Header with "See All" button */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <CategoryHeader title="Just For You" />
        <Button
          variant="outlined"
          sx={{
            borderColor: "#000",
            color: "#000",
            textTransform: "none",
            borderRadius: "4px",
            px: 3,
            py: 1,
            fontWeight: 500,
            "&:hover": { borderColor: "#000", bgcolor: "#f5f5f5" },
          }}
        >
          See All
        </Button>
      </Box>

      <ProductsList products={products} />
    </Box>
  );
}
