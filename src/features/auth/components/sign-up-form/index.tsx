import type React from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../../routes";

const SignupForm: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 -mx-6 md:-mx-0 py-16 ">
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

          {/* Form */}
          <form className="space-y-10">
            <TextField
              fullWidth
              placeholder="Name"
              variant="standard"
              sx={{
                "& .MuiInput-root": {
                  fontSize: "16px",
                },
                "& .MuiInput-input": {
                  padding: "8px 0",
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Email or Phone Number"
              variant="standard"
              sx={{
                "& .MuiInput-root": {
                  fontSize: "16px",
                },
                "& .MuiInput-input": {
                  padding: "8px 0",
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
                "& .MuiInput-input": {
                  padding: "8px 0",
                },
              }}
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
                fontSize: "16px",
                paddingY: "16px",
                borderRadius: "4px",
                marginTop: "40px !important",
                "&:hover": { backgroundColor: "#b83636" },
              }}
            >
              Create Account
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={
                <img
                  src="src/assets/icons/Google.svg"
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
            <span className="opacity-70">Already have account?</span>
            <Link
              to={appRoutes.auth.login}
              className="font-medium underline decoration-1 underline-offset-4 hover:opacity-70"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
