import React, { useState } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLoginMutation } from "../../services/mutations"; // 👈 your React Query login mutation
import { loginFormSchemaValidation } from "./config"; // 👈 Yup schema for validation
import { appRoutes } from "@/routes";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchemaValidation),
    mode: "onTouched",
  });

  const { mutateAsync: login, isPending } = useLoginMutation();

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

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      });

      // ✅ Show success snackbar
      setSnackbar({
        open: true,
        message: "Login successful! Redirecting...",
        severity: "success",
      });

      // ⏳ Redirect to /home after delay
      setTimeout(() => {
        navigate(appRoutes.home);
      }, 1500);
    } catch (error: any) {
      // ❌ Show error snackbar
      setSnackbar({
        open: true,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Login failed. Please check your credentials.",
        severity: "error",
      });
    }
  };

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 -mx-6 md:-mx-0">
        {/* Left Side Image */}
        <div className="flex justify-center items-center bg-[#CBE4E8] min-h-[600px] md:min-h-screen">
          <img
            src="/src/assets/images/auth/login.jpg"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex items-center justify-center px-6 py-12 min-h-[600px] md:min-h-screen">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-medium mb-6">Log in to Exclusive</h2>
            <p className="text-base mb-12">Enter your details below</p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
                  "& .MuiInput-input::placeholder": {
                    color: "#00000066",
                    opacity: 1,
                  },
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
                  "& .MuiInput-input::placeholder": {
                    color: "#00000066",
                    opacity: 1,
                  },
                }}
              />

              {/* Login Button + Forgot Password */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isPending}
                  sx={{
                    backgroundColor: "#DB4444",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 500,
                    paddingX: "48px",
                    paddingY: "16px",
                    borderRadius: "4px",
                    fontSize: "16px",
                    "&:hover": { backgroundColor: "#b83636" },
                  }}
                >
                  {isPending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Log In"
                  )}
                </Button>

                <Link
                  to="/forgot-password"
                  className="text-base text-[#DB4444] hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Snackbar */}
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

export default LoginForm;
