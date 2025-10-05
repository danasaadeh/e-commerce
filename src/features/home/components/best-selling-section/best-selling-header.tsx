"use client";

import { Box, Button, Typography } from "@mui/material";

interface BestSellingHeaderProps {
  title?: string;
  subtitle?: string;
  color?: string;
}

const BestSellingHeader: React.FC<BestSellingHeaderProps> = ({
  title = "Categories",
  subtitle = "Browse By Category",
  color = "#db4444",
}) => {
  return (
    <>
      {/* Left red label + title */}
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Box sx={{ width: 20, height: 40, bgcolor: color, borderRadius: 1 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, color }}>
          This Month
        </Typography>
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          color: "#000",
          fontSize: { xs: "1.5rem", md: "2.7rem" },
          mb: 3,
        }}
      >
        Best Selling Products
      </Typography>
      <Button
        variant="contained"
        sx={{
          px: 6,
          py: 1.5,
          fontSize: 14,
          fontWeight: 400,
          textTransform: "none",
          bgcolor: "red",
          "&:hover": { bgcolor: "#cc0000" },
        }}
      >
        View All
      </Button>
    </>
  );
};

export default BestSellingHeader;
