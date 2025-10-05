import { Box, Button, TextField } from "@mui/material";

const CouponCard = () => {
  return (
    <Box className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <TextField
        fullWidth
        placeholder="Coupon Code"
        variant="outlined"
        size="medium"
        className="flex-1"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
          },
        }}
      />
      <Button
        variant="contained"
        color="error"
        className="!capitalize !px-12 !py-3 !text-base !font-medium whitespace-nowrap"
        sx={{
          minWidth: "fit-content",
        }}
      >
        Apply Coupon
      </Button>
    </Box>
  );
};

export default CouponCard;
