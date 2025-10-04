"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import {
  FavoriteBorder,
  Favorite,
  VisibilityOutlined,
} from "@mui/icons-material";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: {
    text: string;
    type: "sale" | "new";
  };
  colors?: string[];
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  badge,
  colors,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors?.[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(id);
  };

  const handleQuickView = () => {
    onQuickView?.(id);
  };

  const handleAddToCart = () => {
    onAddToCart?.(id);
  };

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: 300,
        height: 350,
        borderRadius: 2,
        boxShadow: "none",
        border: "none",
        "&:hover .hoverOverlay": { opacity: 1, bottom: 0 },
      }}
    >
      {badge && (
        <Chip
          label={badge.type === "sale" ? `-${discountPercentage}%` : badge.text}
          color={badge.type === "sale" ? "error" : "success"}
          size="small"
          className="absolute top-3 left-3 z-10 font-medium"
          sx={{ fontSize: 14 }}
        />
      )}

      <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
        <IconButton
          size="small"
          onClick={handleWishlistClick}
          sx={{
            bgcolor: "white",
            width: 42,
            height: 42,
            "&:hover": {
              bgcolor: "#ef4444",
              color: "white",
            },
            color: isWishlisted ? "#ef4444" : "black",
          }}
        >
          {isWishlisted ? (
            <Favorite fontSize="medium" />
          ) : (
            <FavoriteBorder fontSize="medium" />
          )}
        </IconButton>
        <IconButton
          size="small"
          onClick={handleQuickView}
          sx={{
            bgcolor: "white",
            width: 42,
            height: 42,
            "&:hover": {
              bgcolor: "#ef4444",
              color: "white",
            },
          }}
        >
          <VisibilityOutlined fontSize="medium" />
        </IconButton>
      </div>

      <div
        className="relative bg-gray-50 flex items-center justify-center"
        style={{ height: 220 }}
      >
        <CardMedia
          component="img"
          image={image || "/placeholder.svg"}
          alt={name}
          sx={{
            height: 180,
            objectFit: "contain",
            mx: "auto",
          }}
        />

        <div
          className="hoverOverlay"
          style={{
            position: "absolute",
            bottom: isHovered ? "0" : "-100%",
            left: 0,
            width: "100%",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            transition: "all 0.3s ease",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <Button
            fullWidth
            onClick={handleAddToCart}
            sx={{
              bgcolor: "black",
              color: "white",
              fontSize: 16,
              fontWeight: 500,
              height: 44,
              borderRadius: 0,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#222",
              },
            }}
          >
            Add To Cart
          </Button>
        </div>
      </div>

      <CardContent sx={{ p: 2, textAlign: "left" }}>
        <Typography
          variant="body2"
          className="font-semibold mb-2 line-clamp-1"
          sx={{ fontSize: 16 }}
        >
          {name}
        </Typography>

        <div className="flex items-center gap-2 mb-2">
          <Typography
            variant="subtitle1"
            className="text-red-500 font-semibold"
            sx={{ fontSize: 16 }}
          >
            ${price}
          </Typography>
          {originalPrice && (
            <Typography
              variant="body2"
              className="line-through text-gray-400"
              sx={{ fontSize: 14 }}
            >
              ${originalPrice}
            </Typography>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <Typography
            variant="caption"
            className="text-gray-500"
            sx={{ fontSize: 14 }}
          >
            ({reviewCount})
          </Typography>
        </div>

        {colors && colors.length > 0 && (
          <div className="flex items-center gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === color
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
