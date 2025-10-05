import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ProductBreadcrumb = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="/"
      className="text-sm text-gray-500"
    >
      <MuiLink
        component={RouterLink}
        to="/account"
        underline="hover"
        color="inherit"
      >
        Account
      </MuiLink>
      <MuiLink
        component={RouterLink}
        to="/gaming"
        underline="hover"
        color="inherit"
      >
        Gaming
      </MuiLink>
      <Typography color="textPrimary" className="font-medium text-gray-800">
        Havic HV G-92 Gamepad
      </Typography>
    </Breadcrumbs>
  );
};

export default ProductBreadcrumb;
