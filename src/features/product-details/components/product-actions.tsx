import { Box, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

interface ProductActionsProps {
  colors: string[];
  sizes: string[];
}

const ProductActions: React.FC<ProductActionsProps> = ({ colors, sizes }) => {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <Box className="space-y-4">
      {/* Colors */}
      <Box>
        <p className="text-sm font-medium text-gray-700 mb-1">Colours:</p>
        <Box className="flex items-center gap-3">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                selectedColor === color ? "border-red-500" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <p className="text-sm font-medium text-gray-700 mb-1">Size:</p>
        <Box className="flex gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "contained" : "outlined"}
              color={selectedSize === size ? "error" : "inherit"}
              size="small"
              onClick={() => setSelectedSize(size)}
              className="min-w-[40px]"
            >
              {size}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Quantity + Buy Buttons */}
      <Box className="flex items-center gap-3">
        <Box className="flex items-center border border-gray-300 rounded-md">
          <Button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <span className="px-3">{quantity}</span>
          <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
        </Box>

        <Button variant="contained" color="error" className="!capitalize px-6">
          Buy Now
        </Button>

        <IconButton>
          <FavoriteBorderIcon className="text-gray-700 hover:text-red-500" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductActions;
