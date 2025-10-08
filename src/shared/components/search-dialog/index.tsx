"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
  useMediaQuery,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useDebounce } from "@/shared/hooks/debounce";
import { useSearchProducts } from "@/features/home/services/queries";
import ProductCard from "@/features/home/components/products/prouct-card";
import { useWishlistStore } from "@/features/wish-list/store";
import { useCartStore } from "@/features/cart/store";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { data: products, isLoading } = useSearchProducts(debouncedQuery);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const suggestions = ["Shoes", "Electronics", "T-Shirts", "Bags", "Laptops"];

  // ✅ Access global stores
  const { toggleWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  // ✅ Handlers
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const handleToggleWishlist = (product: any) => {
    toggleWishlist(product);
  };

  const handleQuickView = (id: string) => {
    onClose(); // ✅ close dialog first
    window.location.href = `/product/${id}`;
  };

  // ✅ Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") onClose();
      }}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
    >
      <DialogContent
        sx={{
          p: isMobile ? 2 : 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* 🔍 Search Header */}
        <div className="flex justify-between items-center mb-2">
          <TextField
            fullWidth
            placeholder="Search by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                backgroundColor: "#fafafa",
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: "#DB4444",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#DB4444",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiOutlineSearch color="#999" />
                </InputAdornment>
              ),
              endAdornment: query && (
                <IconButton
                  onClick={() => setQuery("")}
                  sx={{ color: "#DB4444" }}
                >
                  <AiOutlineClose />
                </IconButton>
              ),
            }}
          />
          <IconButton onClick={onClose} sx={{ color: "#DB4444", ml: 1 }}>
            <AiOutlineClose />
          </IconButton>
        </div>

        {/* 💡 Suggestions */}
        {!debouncedQuery && (
          <div>
            <p className="text-sm text-gray-500 mb-1">Popular Searches</p>
            <List dense disablePadding>
              {suggestions.map((s, index) => (
                <React.Fragment key={s}>
                  <ListItemButton
                    onClick={() => setQuery(s)}
                    sx={{
                      borderRadius: "12px",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                  >
                    <ListItemText primary={s} />
                  </ListItemButton>
                  {index < suggestions.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </div>
        )}

        {/* 🧩 Search Results */}
        {debouncedQuery && (
          <div className="mt-4">
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <CircularProgress sx={{ color: "#DB4444" }} />
              </div>
            ) : products && products.length > 0 ? (
              <Grid container spacing={2}>
                {products.map((p) => (
                  <Grid item xs={12} sm={6} md={4} key={p.id}>
                    <ProductCard
                      id={p.id}
                      name={p.name}
                      price={p.price}
                      originalPrice={p.originalPrice}
                      image={p.image}
                      rating={p.rating}
                      reviewCount={p.reviewCount}
                      badge={p.badge}
                      colors={p.colors}
                      onAddToCart={() => handleAddToCart(p)}
                      onToggleWishlist={() => handleToggleWishlist(p)}
                      onQuickView={() => handleQuickView(p.id)}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <p className="text-gray-500 text-center mt-6">
                No products found for “{query}”
              </p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
