import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  Tooltip,
  Grid,
  InputAdornment,
  CircularProgress,
  useMediaQuery,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { useDebounce } from "@/shared/hooks/debounce";
import { useSearchProducts } from "@/features/home/services/queries";

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
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          {/* Search Input */}
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
                  borderColor: "#DB4444", // 🔴 Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#DB4444", // 🔴 Focus border color
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
          <IconButton onClick={onClose} sx={{ color: "#DB4444" }}>
            <AiOutlineClose />
          </IconButton>
        </div>

        {/* 🔍 Suggestions */}
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

        {/* Results */}
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
                    <div
                      className="border rounded-2xl shadow-sm p-3 flex flex-col justify-between hover:shadow-md transition-all bg-white h-full"
                      style={{
                        minHeight: "320px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full object-cover rounded-lg mb-3"
                        style={{
                          aspectRatio: "1.2 / 1",
                          height: "160px",
                        }}
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-semibold line-clamp-1">
                            {p.name}
                          </h3>
                          <p className="text-[#DB4444] font-bold">${p.price}</p>
                        </div>
                        <div className="flex justify-between items-center mt-2 text-gray-600">
                          <Tooltip title="Add to Wishlist">
                            <IconButton size="small">
                              <AiOutlineHeart />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="View Product">
                            <IconButton size="small">
                              <IoEyeOutline />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Add to Cart">
                            <IconButton size="small">
                              <AiOutlineShoppingCart />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
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
