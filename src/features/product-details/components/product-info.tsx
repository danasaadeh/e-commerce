import { Box, Typography, Rating, Chip } from "@mui/material";
import ProductActions from "./product-actions";

interface Product {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  colors: string[];
  sizes: string[];
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <Box className="space-y-4">
      <Typography variant="h5" className="font-semibold text-gray-800">
        {product.name}
      </Typography>

      <Box className="flex items-center gap-2">
        <Rating value={product.rating} precision={0.5} readOnly size="small" />
        <Typography variant="body2" className="text-gray-500">
          ({product.reviews} Reviews)
        </Typography>
        <Chip
          label={product.inStock ? "In Stock" : "Out of Stock"}
          color={product.inStock ? "success" : "default"}
          size="small"
        />
      </Box>

      <Typography variant="h6" className="text-gray-800 font-semibold">
        ${product.price.toFixed(2)}
      </Typography>

      <Typography variant="body2" className="text-gray-600 leading-relaxed">
        {product.description}
      </Typography>

      <hr />

      <ProductActions colors={product.colors} sizes={product.sizes} />
    </Box>
  );
};

export default ProductInfo;
