import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const Breadcrumb = () => {
  return (
    <Box className="mb-20">
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" className="text-gray-400" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          Home
        </Link>
        <Typography className="text-gray-900 text-sm font-medium">
          Cart
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
