"use client";

import { Box, Container, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import BillingForm from "./billing-form";
import OrderTotal from "./order-total";
import CheckoutHeader from "./checkout-header";
import { billingSchema } from "../config";
import { InferType } from "yup";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../cart/store/index"; // adjust path as needed

type BillingFormData = InferType<typeof billingSchema>;

const Checkout = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const clearCart = useCartStore((state) => state.clearCart);

  const methods = useForm<BillingFormData>({
    resolver: yupResolver(billingSchema) as any,
    mode: "onTouched",
  });

  const onSubmit = (data: BillingFormData) => {
    console.log("✅ Checkout data:", data);

    // ✅ Clear the cart after placing the order
    clearCart();

    setSnackbarSeverity("success");
    setSnackbarMsg("Checkout successful!");
    setSnackbarOpen(true);

    // Navigate home after success
    navigate("/");
  };

  const onError = () => {
    setSnackbarSeverity("error");
    setSnackbarMsg(
      "Please fill in all required billing fields before checkout."
    );
    setSnackbarOpen(true);
  };

  const breadcrumbItems = [
    { label: "Account", href: "/account" },
    { label: "My Account", href: "/my-account" },
    { label: "Product", href: "/product" },
    { label: "View Cart", href: "/cart" },
    { label: "CheckOut", href: "/checkout" },
  ];

  return (
    <FormProvider {...methods}>
      <Container
        maxWidth="lg"
        className="py-8"
        component="form"
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        {/* Breadcrumb */}
        <Box className="mb-12">
          <CheckoutHeader />
        </Box>

        {/* Main Content */}
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Billing Form */}
          <Box>
            <BillingForm />
          </Box>

          {/* Order Summary */}
          <Box>
            <OrderTotal />
          </Box>
        </Box>

        {/* Snackbar for success/error messages */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2500}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={snackbarSeverity}
            onClose={() => setSnackbarOpen(false)}
            sx={{ width: "100%" }}
          >
            {snackbarMsg}
          </Alert>
        </Snackbar>
      </Container>
    </FormProvider>
  );
};

export default Checkout;
