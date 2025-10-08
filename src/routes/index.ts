import { products } from "@/features/home/types";

export const appRoutes = {
  home: "/",
  contact: "/contact",
  about: "/about",
  wishList: "/wishList",
  cart: "/cart",
  checkout: "/checkout",
  product_details: "product/:id",

  // products: {
  //   list: "/products",
  //   form: "/products/form",
  // },
  auth: {
    login: "/login",
    signUp: "/sign-up",
  },
};
