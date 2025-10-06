"use client";

import type React from "react";

import { Box, Button, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
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
    <Box className="space-y-5">
      {/* Colors */}
      <Box>
        <Typography variant="body1" className="font-medium text-gray-900 mb-3">
          Colours:
        </Typography>
        <Box className="flex items-center gap-2">
          {colors.map((color, index) => (
            <Box
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all hover:scale-110 ${
                selectedColor === color
                  ? "border-gray-800 ring-2 ring-offset-2 ring-gray-800"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Typography variant="body1" className="font-medium text-gray-900 mb-3">
          Size:
        </Typography>
        <Box className="flex gap-3">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "contained" : "outlined"}
              color={selectedSize === size ? "error" : "inherit"}
              size="medium"
              onClick={() => setSelectedSize(size)}
              className={`min-w-[50px] h-[40px] font-medium ${
                selectedSize === size
                  ? "!bg-red-500 !text-white hover:!bg-red-600"
                  : "!border-gray-300 !text-gray-700 hover:!border-gray-400"
              }`}
            >
              {size}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Quantity + Buy Buttons */}
      <Box className="flex items-center gap-4 flex-wrap">
        {/* Quantity Selector */}
        <Box className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
          <IconButton
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            className="!rounded-none hover:!bg-gray-100"
            size="small"
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography className="px-6 py-1 font-medium min-w-[50px] text-center border-x-2 border-gray-300">
            {quantity}
          </Typography>
          <IconButton
            onClick={() => setQuantity(quantity + 1)}
            className="!rounded-none hover:!bg-gray-100"
            size="small"
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Buy Now Button */}
        <Button
          variant="contained"
          color="error"
          size="large"
          className="!capitalize !px-10 !py-2.5 !bg-red-500 hover:!bg-red-600 !font-medium !rounded-md"
        >
          Buy Now
        </Button>

        {/* Wishlist Icon */}
        <IconButton className="!border-2 !border-gray-300 !rounded-md hover:!border-red-500 hover:!bg-red-50">
          <FavoriteBorderIcon className="text-gray-700 hover:text-red-500" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductActions;
