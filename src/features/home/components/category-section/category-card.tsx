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
      className={`flex flex-col items-center justify-center border rounded-md p-4 cursor-pointer transition-all duration-300
        ${
          selected
            ? "bg-[#db4444] text-white border-[#db4444]"
            : "bg-white hover:bg-[#db4444] hover:text-white border-gray-300"
        }`}
      sx={{
        width: { xs: 110, md: 150 },
        height: { xs: 110, md: 150 },
        textAlign: "center",
        overflow: "hidden",
        "&:hover img": {
          filter: "brightness(0) invert(1)",
        },
      }}
    >
      {/* 🖼 Icon */}
      <Box
        component="img"
        src={icon}
        alt={label}
        sx={{
          width: 40,
          height: 40,
          mb: 1,
          flexShrink: 0,
          transition: "all 0.3s ease",
        }}
      />

      {/* 🏷 Label */}
      <Typography
        variant="body2"
        className="font-medium"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 2, // show up to 2 lines max
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.2,
          wordBreak: "break-word", // wrap long words
          textAlign: "center",
          fontSize: { xs: "0.75rem", md: "0.875rem" },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
