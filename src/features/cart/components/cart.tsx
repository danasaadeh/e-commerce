"use client";

import { Box, Container, Grid, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CartHeader from "./cart-header";
import CartItem from "./cart-item";
import CartTotal from "./cart-total";
import CouponCard from "./coupon-card";
import Breadcrumb from "./bread-crumb";
import { useCartStore } from "../store";
import { useIsLoggedIn } from "@/features/auth/hooks/is-logged-in";
import { appRoutes } from "@/routes";

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCartStore();
  const { isLoggedIn } = useIsLoggedIn(); // ✅ add this line

  const subtotal = getTotalPrice();

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleRemoveItem = (id: number) => removeFromCart(String(id));
  const handleUpdateQuantity = (id: number, quantity: number) =>
    updateQuantity(String(id), quantity);

  const handleUpdateCart = () => {
    setSnackbarOpen(true);
  };

  const handleReturnToShop = () => {
    clearCart();
    navigate(appRoutes.home);
  };

  // ✅ Updated checkout logic
  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: "/checkout" } }); // optional: store redirect
    }
  };

  const handleApplyCoupon = (code: string) => {
    console.log("Apply coupon:", code);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 10, lg: 20 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Breadcrumb />
      <CartHeader />

      <Box
        className="bg-white shadow-sm rounded-md mt-10"
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          mt: { xs: 2, md: 4, lg: 10 },
        }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={{
                ...item,
                id: Number(item.id),
              }}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
          ))
        ) : (
          <Box className="text-center text-gray-500 py-10">
            Your cart is empty.
          </Box>
        )}

        <Box
          className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4"
          sx={{
            py: { xs: 3, md: 4, lg: 6 },
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleReturnToShop}
            className="!capitalize !border-gray-300 !text-gray-900"
            sx={{
              px: { xs: 3, md: 5, lg: 6 },
              py: { xs: 1, md: 1.5, lg: 2 },
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            Return To Shop
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleUpdateCart}
            disabled={items.length === 0} // 🔒 disable if empty
            className="!capitalize !border-gray-300 !text-gray-900"
            sx={{
              px: { xs: 3, md: 5, lg: 6 },
              py: { xs: 1, md: 1.5, lg: 2 },
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            Update Cart
          </Button>
        </Box>
      </Box>

      {items.length > 0 && (
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ mt: { xs: 2, md: 4, lg: 6 } }}
        >
          <Grid item xs={12} md={6} lg={5}>
            <CouponCard onApplyCoupon={handleApplyCoupon} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ width: "100%", maxWidth: 450 }}>
              <CartTotal
                subtotal={subtotal}
                shipping="Free"
                total={subtotal}
                onCheckout={handleCheckout}
              />
            </Box>
          </Grid>
        </Grid>
      )}

      {/* ✅ Snackbar for “Cart updated” feedback */}
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
          Cart updated successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Cart;
