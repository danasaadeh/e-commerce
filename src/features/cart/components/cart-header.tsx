import { Box, Typography, Grid } from "@mui/material";

const CartHeader = () => {
  return (
    <Box
      className="bg-white shadow-sm rounded-md"
      sx={{
        py: { xs: 2, md: 3 },
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
      }}
    >
      <Grid container alignItems="center" spacing={{ xs: 2, md: 4 }}>
        <Grid
          item
          xs={6}
          sm={5}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="body1"
            className="font-medium"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              textAlign: "center",
            }}
          >
            Product
          </Typography>
        </Grid>
        <Grid
          item
          xs={0}
          sm={2}
          md={2}
          sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}
        >
          <Typography
            variant="body1"
            className="font-medium"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              textAlign: "center",
            }}
          >
            Price
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={2.5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="body1"
            className="font-medium"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              textAlign: "center",
            }}
          >
            Quantity
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sm={2}
          md={2.5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="body1"
            className="font-medium"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              textAlign: "center",
            }}
          >
            Subtotal
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartHeader;
