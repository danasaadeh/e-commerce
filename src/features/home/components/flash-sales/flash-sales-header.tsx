"use client";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CountdownTimer from "./count-down-timer";

export default function FlashSalesHeader() {
  const targetDate = Date.now() + 1000 * 60 * 60 * 24; // 24 hours from now

  return (
    <div className="flex items-end mb-8 flex-wrap gap-y-4">
      {/* Left Label */}
      <Box className="h-10 w-5 bg-[#db4444] rounded mr-3 flex-shrink-0" />
      <Typography
        variant="body1"
        className="text-[#db4444] font-semibold text-sm mr-6"
      >
        Today's
      </Typography>
      <Typography variant="h4" className="text-3xl font-bold whitespace-nowrap">
        Flash Sales
      </Typography>

      {/* Countdown Timer */}
      <CountdownTimer targetDate={targetDate} />

      {/* Navigation Arrows */}
      <div className="ml-auto flex space-x-3">
        <button className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
          <KeyboardArrowLeft fontSize="small" />
        </button>
        <button className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
          <KeyboardArrowRight fontSize="small" />
        </button>
      </div>
    </div>
  );
}
