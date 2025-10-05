"use client";

import { Box, Typography } from "@mui/material";

interface CategoryCardProps {
  icon: string; // now it’s an image path
  label: string;
  selected?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  label,
  selected = false,
}) => {
  return (
    <Box
      className={`flex flex-col items-center justify-center border rounded-md p-6 cursor-pointer transition-all duration-300
        ${
          selected
            ? "bg-[#db4444] text-white border-[#db4444]"
            : "bg-white hover:bg-[#db4444] hover:text-white border-gray-300"
        }`}
      sx={{
        width: { xs: "100px", md: "150px" },
        height: { xs: "100px", md: "150px" },
        "&:hover img": {
          filter: "brightness(0) invert(1)",
        },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={label}
        sx={{
          width: 40,
          mb: 1,
          transition: "all 0.3s ease",
        }}
      />
      <Typography variant="body2" className="font-medium text-center">
        {label}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
