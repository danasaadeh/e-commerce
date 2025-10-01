import React from "react";
import { TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../../routes";

const SignupForm: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side Image */}
      <div className="flex justify-center">
        <img
          src="src/assets/images/login.jpg" // replace with your actual image
          alt="Sign up illustration"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

        {/* Form */}
        <form className="space-y-4">
          <TextField
            fullWidth
            label="Name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
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

          {/* Create Account Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#DB4444",
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
              paddingY: "10px",
              borderRadius: "4px",
              "&:hover": { backgroundColor: "#b83636" },
            }}
          >
            Create Account
          </Button>

          {/* Sign up with Google */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              paddingY: "10px",
              borderRadius: "4px",
              borderColor: "#ddd",
              color: "#333",
            }}
          >
            Sign up with Google
          </Button>
        </form>

        {/* Already have account */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link
            to={appRoutes.auth.login}
            className="text-black font-medium hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
