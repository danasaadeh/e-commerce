"use client";

import type React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  };
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemove?: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const handleIncrement = () => {
    if (onUpdateQuantity) {
      onUpdateQuantity(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (onUpdateQuantity && item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  return (
    <Box
      className="border-b border-gray-200 last:border-b-0"
      sx={{ py: { xs: 2, md: 3 } }}
    >
      <Grid container alignItems="center" spacing={{ xs: 2, md: 4 }}>
        <Grid
          item
          xs={6}
          sm={5}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box className="flex items-center gap-2 md:gap-3 relative">
            <IconButton
              size="small"
              onClick={handleRemove}
              className="absolute -top-2 -left-2 !bg-red-500 !text-white hover:!bg-red-600"
              sx={{
                width: { xs: 16, md: 18 },
                height: { xs: 16, md: 18 },
                fontSize: { xs: "0.625rem", md: "0.75rem" },
              }}
            >
              <Close sx={{ fontSize: { xs: 10, md: 12 } }} />
            </IconButton>
            <Box
              className="relative flex-shrink-0"
              sx={{
                width: { xs: 40, sm: 50, md: 54 },
                height: { xs: 40, sm: 50, md: 54 },
              }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </Box>
            <Typography
              variant="body2"
              className="font-normal text-gray-900"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}
            >
              {item.name}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={0}
          sm={2}
          md={2}
          sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}
        >
          <Typography
            variant="body2"
            className="text-gray-900"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              textAlign: "center",
            }}
          >
            ${item.price}
          </Typography>
        </Grid>

        <Grid
          item
          xs={3}
          sm={3}
          md={2.5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            className="flex items-center border border-gray-300 rounded"
            sx={{
              height: { xs: 32, md: 36 },
            }}
          >
            <IconButton
              size="small"
              onClick={handleDecrement}
              disabled={item.quantity <= 1}
              className="!rounded-none hover:!bg-red-500 hover:!text-white transition-colors"
              sx={{
                px: { xs: 0.5, md: 1 },
                borderRadius: 0,
                minWidth: { xs: 24, md: 28 },
              }}
            >
              <Remove sx={{ fontSize: { xs: 12, md: 14 } }} />
            </IconButton>
            <Typography
              variant="body2"
              className="text-center font-medium"
              sx={{
                minWidth: { xs: 28, md: 36 },
                fontSize: { xs: "0.75rem", md: "0.875rem" },
              }}
            >
              {item.quantity.toString().padStart(2, "0")}
            </Typography>
            <IconButton
              size="small"
              onClick={handleIncrement}
              className="!rounded-none hover:!bg-red-500 hover:!text-white transition-colors"
              sx={{
                px: { xs: 0.5, md: 1 },
                borderRadius: 0,
                minWidth: { xs: 24, md: 28 },
              }}
            >
              <Add sx={{ fontSize: { xs: 12, md: 14 } }} />
            </IconButton>
          </Box>
        </Grid>

        <Grid
          item
          xs={3}
          sm={2}
          md={2.5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="body2"
            className="text-gray-900 font-medium"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              textAlign: "center",
            }}
          >
            ${item.price * item.quantity}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
