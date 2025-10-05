import React from "react";
import { Box, Typography } from "@mui/material";

const NewArrivalHeader: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Featured label */}
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Box
          sx={{
            width: 20,
            height: 40,
            bgcolor: "red",
            borderRadius: 1,
          }}
        />
        <Typography variant="h5" sx={{ fontWeight: 700, color: "green" }}>
          Featured
        </Typography>
      </Box>

      {/* Section Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: { xs: 20, md: 24 },
          color: "black",
        }}
      >
        New Arrival
      </Typography>
    </Box>
  );
};

export default NewArrivalHeader;
