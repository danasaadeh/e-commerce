import { Box, Container, Grid, Button } from "@mui/material";

import CartHeader from "./cart-header";
import CartItem from "./cart-item";
import CartTotal from "./cart-total";
import CouponCard from "./coupon-card";
import Breadcrumb from "./bread-crumb";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "src/assets/images/home/play_station_holder.png",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "src/assets/images/home/play_station_holder.png",
    },
  ];

  return (
    <Container maxWidth="lg" className="py-20">
      <Breadcrumb />

      <CartHeader />

      <Box className="bg-white shadow-sm rounded-md px-10 mt-10">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <Box className="flex justify-between items-center py-6">
          <Button
            variant="outlined"
            color="inherit"
            className="!capitalize !px-12 !py-3 !text-base !border-gray-300 !text-gray-900"
          >
            Return To Shop
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            className="!capitalize !px-12 !py-3 !text-base !border-gray-300 !text-gray-900"
          >
            Update Cart
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} className="mt-6">
        <Grid item xs={12} md={6} className="flex items-start">
          <CouponCard />
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-end">
          <Box className="w-full md:max-w-md">
            <CartTotal subtotal={1750} shipping="Free" total={1750} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
