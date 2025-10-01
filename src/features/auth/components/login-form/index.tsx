import React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../../routes";

const LoginForm: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side Image */}
      <div className="flex justify-center">
        <img
          src="src/assets/images/login.jpg" // reuse same image as signup
          alt="Login illustration"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Login to Exclusive</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

        {/* Form */}
        <form className="space-y-4">
          <TextField
            fullWidth
            label="Email or Phone Number"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />

          {/* Login Button + Forgot Password */}
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DB4444",
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                paddingX: "30px",
                paddingY: "10px",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#b83636" },
              }}
            >
              Log In
            </Button>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-[#DB4444] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        {/* No account yet */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to={appRoutes.auth.signUp}
            className="text-black font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
