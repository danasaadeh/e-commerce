import * as yup from "yup";

export const billingSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Must be at least 2 characters"),
  companyName: yup.string().nullable(),
  streetAddress: yup.string().required("Street address is required"),
  apartment: yup.string().nullable(),
  city: yup.string().required("Town/City is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10,15}$/, "Phone number is invalid"),
  email: yup
    .string()
    .required("Email address is required")
    .email("Invalid email format"),
  saveInfo: yup.boolean(),
});

export const couponSchema = yup.object({
  couponCode: yup
    .string()
    .required("Please enter a coupon code")
    .min(3, "Code must be at least 3 characters"),
});
