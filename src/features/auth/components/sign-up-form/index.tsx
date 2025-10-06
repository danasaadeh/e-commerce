import React, { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { appRoutes } from "../../../../routes";
import { useSignUpMutation } from "../../services/mutations";
import { signUpFormSchemaValidation } from "./config";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchemaValidation),
    mode: "onTouched",
  });

  const { mutateAsync: signUp, isPending } = useSignUpMutation();

  // Snackbar state
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const response = await signUp({
        email: data.email,
        password: data.password,
      });

      // ✅ show success snackbar
      setSnackbar({
        open: true,
        message: "Account created successfully!",
        severity: "success",
      });

      // ⏳ wait briefly before navigating
      setTimeout(() => {
        navigate(appRoutes.home);
      }, 1500);
    } catch (error: any) {
      // ❌ show error snackbar
      setSnackbar({
        open: true,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Sign-up failed. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 -mx-6 md:-mx-0 py-16">
      {/* Left Side Image */}
      <div className="flex justify-center items-center bg-[#CBE4E8] min-h-[600px] md:min-h-screen">
        <img
          src="/src/assets/images/auth/login.jpg"
          alt="Shopping illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center px-6 py-12 min-h-[600px] md:min-h-screen">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-medium mb-6">Create an account</h2>
          <p className="text-base mb-12">Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Name */}
            <TextField
              fullWidth
              placeholder="Name"
              variant="standard"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                "& .MuiInput-root": { fontSize: "16px" },
                "& .MuiInput-input": { padding: "8px 0" },
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              placeholder="Email or Phone Number"
              variant="standard"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                "& .MuiInput-root": { fontSize: "16px" },
                "& .MuiInput-input": { padding: "8px 0" },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              placeholder="Password"
              type="password"
              variant="standard"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                "& .MuiInput-root": { fontSize: "16px" },
                "& .MuiInput-input": { padding: "8px 0" },
              }}
            />

            {/* Submit */}
            <Button
              fullWidth
              type="submit"
              disabled={isPending}
              variant="contained"
              sx={{
                backgroundColor: "#DB4444",
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                paddingY: "16px",
                borderRadius: "4px",
                marginTop: "40px !important",
                "&:hover": { backgroundColor: "#b83636" },
              }}
            >
              {isPending ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Create Account"
              )}
            </Button>

            {/* Google Signup */}
            <Button
              fullWidth
              variant="outlined"
              startIcon={
                <img
                  src="/src/assets/icons/Google.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              }
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "16px",
                paddingY: "16px",
                borderRadius: "4px",
                borderColor: "rgba(0, 0, 0, 0.23)",
                color: "#000",
                marginTop: "16px !important",
                "&:hover": {
                  borderColor: "rgba(0, 0, 0, 0.4)",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Sign up with Google
            </Button>
          </form>

          {/* Already have account */}
          <p className="text-base text-center mt-8 flex items-center justify-center gap-4">
            <span className="opacity-70">Already have an account?</span>
            <Link
              to={appRoutes.auth.login}
              className="font-medium underline decoration-1 underline-offset-4 hover:opacity-70"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Snackbar for success/error */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignupForm;
