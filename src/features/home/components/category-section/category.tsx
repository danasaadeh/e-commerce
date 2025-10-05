"use client";

import React from "react";
import { Box, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// 🖼️ Category Images
import CategoryCamera from "@/assets/icons/categories/Category-Camera .svg";
import CategoryCellPhone from "@/assets/icons/categories/Category-CellPhone.svg";
import CategoryComputer from "@/assets/icons/categories/Category-Computer.svg";
import CategoryGamepad from "@/assets/icons/categories/Category-Gamepad.svg";
import CategoryWatch from "@/assets/icons/categories/Category-SmartWatch.svg";
import CategoryHeadphone from "@/assets/icons/categories/Category-Headphone.svg";
import CategoryCard from "./category-card";
import CategoryHeader from "./category-header";

const categories = [
  { name: "Phones", icon: CategoryCellPhone },
  { name: "Computers", icon: CategoryComputer },
  { name: "Smartwatch", icon: CategoryWatch },
  { name: "Camera", icon: CategoryCamera },
  { name: "Headphones", icon: CategoryHeadphone },
  { name: "Gaming", icon: CategoryGamepad },
];

const CategoriesSection: React.FC = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 8, px: isMobile ? 2 : 8 }}>
      {/* 🔴 Section Header */}
      <CategoryHeader
        color="#DB4444"
        title="Categories"
        subtitle="Browse By Category"
      />

      {/* 🏹 Navigation Buttons */}
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <div className="flex space-x-3">
          <button className="cat-prev h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowLeft fontSize="small" />
          </button>
          <button className="cat-next h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowRight fontSize="small" />
          </button>
        </div>
      </Box>

      {/* 🌀 Swiper Carousel */}
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        navigation={{ nextEl: ".cat-next", prevEl: ".cat-prev" }}
        modules={[Navigation]}
        breakpoints={{
          1200: { slidesPerView: 6 },
          900: { slidesPerView: 4.2 },
          600: { slidesPerView: 3.2 },
          0: { slidesPerView: 1.5 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.name}>
            <CategoryCard
              icon={cat.icon}
              label={cat.name}
              // selected={cat.name === "Camera"} // optional default selected
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CategoriesSection;
