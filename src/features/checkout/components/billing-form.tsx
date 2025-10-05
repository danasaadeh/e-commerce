import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

const BillingForm = () => {
  return (
    <Box className="w-full max-w-lg">
      {/* Title */}
      <Typography variant="h5" className="!font-semibold !mb-8 !text-gray-900">
        Billing Details
      </Typography>

      {/* Form Fields */}
      <Box className="flex flex-col gap-6">
        <TextField
          fullWidth
          label="First Name *"
          variant="outlined"
          size="medium"
          InputProps={{
            style: {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888",
              fontSize: "14px",
            },
          }}
        />

        <TextField
          fullWidth
          label="Company Name"
          variant="outlined"
          size="medium"
          InputProps={{
            style: {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888",
              fontSize: "14px",
            },
          }}
        />

        <TextField
          fullWidth
          label="Street Address *"
          variant="outlined"
          size="medium"
          InputProps={{
            style: {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888",
              fontSize: "14px",
            },
          }}
        />

        <TextField
          fullWidth
          label="Apartment, floor, etc. (optional)"
          variant="outlined"
          size="medium"
          InputProps={{
            style: {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888",
              fontSize: "14px",
            },
          }}
        />

        <TextField
          fullWidth
          label="Town / City *"
          variant="outlined"
          size="medium"
          InputProps={{
            style: {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888",
              fontSize: "14px",
            },
          }}
        />

        <TextField
          fullWidth
          label="Phone Number *"
          variant="outlined"
          size="medium"
          InputProps={{
            style: {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888",
              fontSize: "14px",
            },
          }}
        />

        <TextField
          fullWidth
          label="Email Address *"
          variant="outlined"
          size="medium"
          type="email"
          InputProps={{
            style: {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888",
              fontSize: "14px",
            },
          }}
        />

        {/* Save Info Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              color="error"
              sx={{
                "&.Mui-checked": {
                  color: "#DB4444",
                },
              }}
            />
          }
          label={
            <Typography variant="body2" className="text-gray-700">
              Save this information for faster check-out next time
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default BillingForm;
