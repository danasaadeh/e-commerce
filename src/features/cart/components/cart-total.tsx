import type React from "react";
import { Box, Typography, Button } from "@mui/material";

interface CartTotalProps {
  subtotal: number;
  shipping: string;
  total: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ subtotal, shipping, total }) => {
  return (
    <Box className="border-2 border-gray-900 rounded-md p-8 bg-white">
      <Typography variant="h6" className="font-medium mb-6 text-gray-900">
        Cart Total
      </Typography>

      <Box className="space-y-4">
        <Box className="flex justify-between items-center pb-4 border-b border-gray-200">
          <Typography variant="body2" className="text-gray-900">
            Subtotal:
          </Typography>
          <Typography variant="body2" className="text-gray-900">
            ${subtotal}
          </Typography>
        </Box>

        <Box className="flex justify-between items-center pb-4 border-b border-gray-200">
          <Typography variant="body2" className="text-gray-900">
            Shipping:
          </Typography>
          <Typography variant="body2" className="text-gray-900">
            {shipping}
          </Typography>
        </Box>

        <Box className="flex justify-between items-center pt-2">
          <Typography variant="body2" className="text-gray-900">
            Total:
          </Typography>
          <Typography variant="body2" className="font-medium text-gray-900">
            ${total}
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        color="error"
        fullWidth
        className="!capitalize !mt-6 !py-3 !text-base !font-medium"
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default CartTotal;
