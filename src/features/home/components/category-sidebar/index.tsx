// src/components/CategorySidebar.tsx

import React from "react";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const CategorySidebar: React.FC = () => {
  return (
    <Box className="w-full lg:w-64 border-r border-gray-200 pr-4">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <a
              href="#" // Replace with actual category links/router logic
              className="flex justify-between items-center py-1.5 text-sm text-black hover:text-[#db4444] transition-colors group"
            >
              <Typography variant="body2" className="text-sm">
                {category}
              </Typography>
              {/* Show arrow only for specific categories, like in the image */}
              {category.includes("Fashion") && (
                <KeyboardArrowRight
                  fontSize="small"
                  className="text-gray-500 group-hover:text-[#db4444]"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
      {/* Horizontal line separator */}
      <Box className="h-[1px] bg-gray-300 my-4 lg:hidden" />
    </Box>
  );
};

export default CategorySidebar;
