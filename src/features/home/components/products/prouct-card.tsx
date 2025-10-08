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
  Alert,
  Snackbar,
} from "@mui/material";
import {
  FavoriteBorder,
  Favorite,
  VisibilityOutlined,
  ShoppingCartOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import { Product } from "../../types";
import { useWishlistStore } from "@/features/wish-list/store";
import { useNavigate } from "react-router-dom"; // ✅ add this import
import { useCartStore } from "@/features/cart/store";

interface ProductCardProps extends Product {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
  wishlistMode?: boolean;
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
  wishlistMode = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors?.[0]);
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isEyeHovered, setIsEyeHovered] = useState(false);

  const { wishlist } = useWishlistStore(); // ✅ access global wishlist
  const isWishlisted = wishlist.some((item) => item.id === id); // ✅ derive state globally

  const navigate = useNavigate(); // ✅ add this line

  const productData: Product = {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    badge,
    colors,
  };

  const handleWishlistClick = () => {
    onToggleWishlist?.(productData);
  };

  const handleDeleteFromWishlist = () => {
    onToggleWishlist?.(productData);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // inside component
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      quantity: 1,
    });
    setSnackbarOpen(true); // ✅ show snackbar
  };
  const handleQuickView = () => {
    navigate(`/product/${id}`); // ✅ navigate to details page
  };

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <>
      <Card
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          maxWidth: 270,
          height: 350,
          borderRadius: 1,
          boxShadow: "none",
          border: "none",
          margin: "0 auto",
        }}
      >
        {/* 🏷️ Badge */}
        {badge && (
          <Chip
            label={
              badge.type === "sale" ? `-${discountPercentage}%` : badge.text
            }
            color={badge.type === "sale" ? "error" : "success"}
            size="small"
            className="absolute top-3 left-3 z-10 font-medium"
            sx={{ fontSize: 12 }}
          />
        )}

        {/* ❤️ / 🗑 / 👁 Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          {wishlistMode ? (
            <IconButton
              size="small"
              onClick={handleDeleteFromWishlist}
              sx={{
                bgcolor: "white",
                width: 34,
                height: 34,
                "&:hover": { bgcolor: "white" },
                color: "#ef4444",
              }}
            >
              <DeleteOutline fontSize="small" />
            </IconButton>
          ) : (
            <>
              <IconButton
                size="small"
                onClick={handleWishlistClick}
                onMouseEnter={() => setIsHeartHovered(true)}
                onMouseLeave={() => setIsHeartHovered(false)}
                sx={{
                  bgcolor: "white",
                  width: 34,
                  height: 34,
                  "&:hover": { bgcolor: "white" },
                  color: isWishlisted || isHeartHovered ? "#ef4444" : "black",
                  transition: "color 0.2s ease",
                }}
              >
                {isWishlisted ? (
                  <Favorite fontSize="small" />
                ) : (
                  <FavoriteBorder fontSize="small" />
                )}
              </IconButton>

              <IconButton
                size="small"
                onClick={handleQuickView}
                onMouseEnter={() => setIsEyeHovered(true)}
                onMouseLeave={() => setIsEyeHovered(false)}
                sx={{
                  bgcolor: "white",
                  width: 34,
                  height: 34,
                  "&:hover": { bgcolor: "white" },
                  color: isEyeHovered ? "#ef4444" : "black",
                  transition: "color 0.2s ease",
                }}
              >
                <VisibilityOutlined fontSize="small" />
              </IconButton>
            </>
          )}
        </div>

        {/* 🖼️ Product Image + Add to Cart hover */}
        <div
          className="relative bg-gray-50 flex items-center justify-center overflow-hidden"
          style={{ height: 200 }}
        >
          <CardMedia
            component="img"
            image={image || "/placeholder.svg"}
            alt={name}
            sx={{
              height: 160,
              objectFit: "contain",
              mx: "auto",
            }}
          />

          <Button
            fullWidth
            onClick={handleAddToCart}
            startIcon={<ShoppingCartOutlined />}
            sx={{
              position: "absolute",
              bottom: isHovered ? 0 : "-100%",
              left: 0,
              width: "100%",
              bgcolor: "black",
              color: "white",
              fontSize: 16,
              fontWeight: 500,
              height: 41,
              borderRadius: 0,
              textTransform: "none",
              transition: "bottom 0.3s ease",
              "&:hover": { bgcolor: "#222" },
            }}
          >
            Add To Cart
          </Button>
        </div>

        {/* 📝 Product Details */}
        <CardContent sx={{ p: 2, pb: 2, textAlign: "left" }}>
          <Typography
            variant="body2"
            className="font-medium mb-2 line-clamp-1"
            sx={{ fontSize: 16 }}
          >
            {name}
          </Typography>

          <div className="flex items-center gap-3 mb-2">
            <Typography
              variant="subtitle1"
              className="text-red-500 font-medium"
              sx={{ fontSize: 16 }}
            >
              ${price}
            </Typography>
            {originalPrice && (
              <Typography
                variant="body2"
                className="line-through text-gray-400"
                sx={{ fontSize: 16, opacity: 0.5 }}
              >
                ${originalPrice}
              </Typography>
            )}
          </div>

          {/* ⭐ Ratings */}
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
              sx={{ fontSize: 14, fontWeight: 600 }}
            >
              ({reviewCount})
            </Typography>
          </div>

          {/* 🎨 Color Options */}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {name} added to cart!
        </Alert>
      </Snackbar>
    </>
  );
}
