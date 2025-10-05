import type React from "react";
import { Box, Grid, Typography, MenuItem, Select } from "@mui/material";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <Box className="border-b border-gray-200 py-6 last:border-b-0">
      <Grid container alignItems="center">
        <Grid item xs={5} md={4} className="flex items-center gap-4">
          <Box className="relative w-14 h-14 flex-shrink-0">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full h-full object-contain"
            />
          </Box>
          <Typography variant="body2" className="font-normal text-gray-900">
            {item.name}
          </Typography>
        </Grid>

        <Grid item xs={2} md={2}>
          <Typography variant="body2" className="text-center text-gray-900">
            ${item.price}
          </Typography>
        </Grid>

        <Grid item xs={3} md={3} className="flex justify-center">
          <Select
            size="small"
            value={item.quantity}
            className="w-20 rounded border-gray-300"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>
                {num.toString().padStart(2, "0")}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={2} md={3}>
          <Typography variant="body2" className="text-right text-gray-900">
            ${item.price * item.quantity}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
