import { Box, Container } from "@mui/material";
import BillingForm from "./billing-form";
import OrderTotal from "./order-total";

import CheckoutHeader from "./checkout-header";

const Checkout = () => {
  const breadcrumbItems = [
    { label: "Account", href: "/account" },
    { label: "My Account", href: "/my-account" },
    { label: "Product", href: "/product" },
    { label: "View Cart", href: "/cart" },
    { label: "CheckOut", href: "/checkout" },
  ];

  return (
    <Container maxWidth="lg" className="py-8">
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
    </Container>
  );
};

export default Checkout;
