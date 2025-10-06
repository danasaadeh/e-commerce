import {
  Box,
  OutlinedInput,
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
        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            First Name*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#BDBDBD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#DB4444",
              },
              "& input": {
                padding: "12px 14px",
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Company Name
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#BDBDBD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#DB4444",
              },
              "& input": {
                padding: "12px 14px",
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Street Address*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#BDBDBD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#DB4444",
              },
              "& input": {
                padding: "12px 14px",
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Apartment, floor, etc. (optional)
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#BDBDBD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#DB4444",
              },
              "& input": {
                padding: "12px 14px",
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Town/City*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#BDBDBD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#DB4444",
              },
              "& input": {
                padding: "12px 14px",
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Phone Number*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#BDBDBD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#DB4444",
              },
              "& input": {
                padding: "12px 14px",
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" className="!text-gray-600 !mb-2">
            Email Address*
          </Typography>
          <OutlinedInput
            fullWidth
            placeholder=""
            type="email"
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#BDBDBD",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#DB4444",
              },
              "& input": {
                padding: "12px 14px",
              },
            }}
          />
        </Box>

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
