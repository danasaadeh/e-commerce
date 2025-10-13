import { Typography, Skeleton } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // ✅ works with MUI v5 & v6
import ProductCard from "@/features/home/components/products/prouct-card";
import type { Product } from "@/features/home/types";

interface ProductListProps {
  products?: Product[];
  isLoading?: boolean;
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
}

export default function ProductList({
  products = [],
  isLoading,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: ProductListProps) {
  if (isLoading) {
    return (
      <Grid2 container spacing={3} justifyContent="center">
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid2 key={index} xs={6} sm={4} md={3}>
            <div className="flex flex-col items-center">
              <Skeleton
                variant="rectangular"
                width={250}
                height={200}
                sx={{ borderRadius: 1 }}
              />
              <Skeleton
                animation="wave"
                width="80%"
                height={24}
                sx={{ mt: 1 }}
              />
              <Skeleton animation="wave" width="60%" height={20} />
              <Skeleton animation="wave" width="40%" height={20} />
            </div>
          </Grid2>
        ))}
      </Grid2>
    );
  }

  if (!products?.length) {
    return (
      <Typography variant="body1" align="center" sx={{ py: 4 }}>
        No products found.
      </Typography>
    );
  }

  return (
    <Grid2 container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid2 key={product.id} xs={6} sm={4} md={3}>
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            onQuickView={onQuickView}
          />
        </Grid2>
      ))}
    </Grid2>
  );
}
