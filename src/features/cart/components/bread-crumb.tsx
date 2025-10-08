import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const Breadcrumb = () => {
  return (
    <Box sx={{ mb: { xs: 4, md: 8, lg: 20 } }}>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" className="text-gray-400" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className="text-gray-500 hover:text-gray-700"
          sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
        >
          Home
        </Link>
        <Typography
          className="text-gray-900 font-medium"
          sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
        >
          Cart
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
