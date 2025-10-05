import { Box, Typography, Link } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

const ProductDeliveryInfo = () => {
  return (
    <Box className="mt-8 space-y-4">
      <Box className="flex items-start gap-3">
        <LocalShippingOutlinedIcon color="error" />
        <Box>
          <Typography variant="body1" className="font-medium">
            Free Delivery
          </Typography>
          <Link href="#" underline="hover" color="error">
            Enter your postal code for Delivery Availability
          </Link>
        </Box>
      </Box>

      <Box className="flex items-start gap-3">
        <AutorenewOutlinedIcon color="error" />
        <Box>
          <Typography variant="body1" className="font-medium">
            Return Delivery
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Free 30 Days Delivery Returns. Details
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDeliveryInfo;
