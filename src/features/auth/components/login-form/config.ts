import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginFormSchemaValidation = yup.object({
  emailOrPhone: yup
    .string()
    .trim()
    .required("Email or phone number is required")
    .test(
      "is-email-or-phone",
      "Must be a valid email or phone number",
      (value) => {
        if (!value) return false;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      strongPasswordRegex,
      "Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character."
    )
    .max(20, "Password cannot exceed 20 characters"),
});
