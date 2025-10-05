import { lazy } from "react";

const CheckoutPage = lazy(() => import("../pages/index"));

export const checkoutRoutes = [
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
];
