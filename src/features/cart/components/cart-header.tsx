import { Box, Typography, Grid } from "@mui/material";

const CartHeader = () => {
  return (
    <Box className="bg-white shadow-sm rounded-md py-6 px-10">
      <Grid container alignItems="center">
        <Grid item xs={5} md={4}>
          <Typography variant="body1" className="font-medium">
            Product
          </Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography variant="body1" className="font-medium text-center">
            Price
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography variant="body1" className="font-medium text-center">
            Quantity
          </Typography>
        </Grid>
        <Grid item xs={2} md={3}>
          <Typography variant="body1" className="font-medium text-right">
            Subtotal
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartHeader;
