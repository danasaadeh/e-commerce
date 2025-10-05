import { Box, Typography, TextField, Button } from "@mui/material";
import ProductItem from "./product-item";
import PaymentMethod from "./paymnet-method";

const OrderTotal = () => {
  const products = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      image: "src/assets/images/home/play_station_holder.png",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 1100,
      image: "src/assets/images/home/tv.png",
    },
  ];

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <Box className="w-full">
      {/* Product Items */}
      <Box className="divide-y divide-gray-200">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </Box>

      {/* Totals */}
      <Box className="py-6 space-y-4 border-b border-gray-200">
        <Box className="flex justify-between items-center">
          <Typography variant="body2" className="text-gray-700">
            Subtotal:
          </Typography>
          <Typography variant="body2" className="font-medium">
            ${subtotal}
          </Typography>
        </Box>

        <Box className="flex justify-between items-center">
          <Typography variant="body2" className="text-gray-700">
            Shipping:
          </Typography>
          <Typography variant="body2" className="font-medium">
            {shipping === 0 ? "Free" : `$${shipping}`}
          </Typography>
        </Box>

        <Box className="flex justify-between items-center pt-2">
          <Typography variant="body2" className="text-gray-700">
            Total:
          </Typography>
          <Typography variant="body2" className="font-semibold text-lg">
            ${total}
          </Typography>
        </Box>
      </Box>

      {/* Payment Method */}
      <PaymentMethod />

      {/* Coupon Code */}
      <Box className="flex gap-4 py-6">
        <TextField
          fullWidth
          placeholder="Coupon Code"
          variant="outlined"
          size="small"
          className="bg-white"
        />
        <Button
          variant="contained"
          color="error"
          className="!capitalize !px-8 whitespace-nowrap"
        >
          Apply Coupon
        </Button>
      </Box>

      {/* Place Order Button */}
      <Button
        variant="contained"
        color="error"
        fullWidth
        className="!capitalize !py-3"
      >
        Place Order
      </Button>
    </Box>
  );
};

export default OrderTotal;
