import * as yup from "yup";

const nameRegex = /^[A-Za-z\s]{3,20}$/; // letters & spaces only
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signUpFormSchemaValidation = yup.object({
  name: yup
    .string()
    .trim()
    .required("Full name is required")
    .matches(
      nameRegex,
      "Name must contain only letters and be between 3–20 characters"
    ),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(emailRegex, "Please enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      strongPasswordRegex,
      "Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character."
    )
    .max(20, "Password cannot exceed 20 characters"),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
