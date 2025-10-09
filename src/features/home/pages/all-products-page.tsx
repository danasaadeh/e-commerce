import React from "react";
import { Box, CircularProgress } from "@mui/material";
import ProductsContainer from "@/shared/layout/products-container";
import ProductList from "../components/products/products-list";
import { useAllProducts } from "../services/queries";

const AllProductsPage = () => {
  const { data: products, isLoading } = useAllProducts();

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <CircularProgress sx={{ color: "#DB4444" }} size={60} thickness={5} />
      </Box>
    );

  return (
    <ProductsContainer>
      <ProductList products={products ?? []} />
    </ProductsContainer>
  );
};

export default AllProductsPage;
