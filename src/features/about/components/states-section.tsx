import React from "react";
import { Box, Typography } from "@mui/material";

const stats = [
  { value: "10.5k", label: "Sellers active on our site" },
  { value: "33k", label: "Monthly Product Sales", highlight: true },
  { value: "45.5k", label: "Customers active on our site" },
  { value: "25k", label: "Annual gross sales" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12">
      {stats.map((stat, idx) => (
        <Box
          key={idx}
          className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center ${
            stat.highlight ? "bg-red-500 text-white" : "bg-gray-100"
          }`}
        >
          <Typography variant="h4" className="font-bold">
            {stat.value}
          </Typography>
          <Typography variant="body2">{stat.label}</Typography>
        </Box>
      ))}
    </section>
  );
};

export default StatsSection;
