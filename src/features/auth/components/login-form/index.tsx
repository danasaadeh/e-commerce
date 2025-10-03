import type React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  return (
    <div className="w-full py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 -mx-6 md:-mx-0  ">
        {/* Left Side Image */}
        <div className="flex justify-center items-center bg-[#CBE4E8]  min-h-[600px] md:min-h-screen">
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
            <form className="space-y-10">
              <TextField
                fullWidth
                placeholder="Email or Phone Number"
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    fontSize: "16px",
                  },
                  "& .MuiInput-input::placeholder": {
                    color: "#00000066",
                    opacity: 1,
                  },
                }}
              />
              <TextField
                fullWidth
                placeholder="Password"
                type="password"
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    fontSize: "16px",
                  },
                  "& .MuiInput-input::placeholder": {
                    color: "#00000066",
                    opacity: 1,
                  },
                }}
              />

              {/* Login Button + Forgot Password */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="contained"
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
                  Log In
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
    </div>
  );
};

export default LoginForm;
