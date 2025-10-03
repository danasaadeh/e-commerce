"use client";

import type React from "react";
import { useState } from "react";
import {
  Store,
  AttachMoney,
  ShoppingBag,
  MonetizationOn,
} from "@mui/icons-material";

const stats = [
  {
    icon: Store,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    icon: AttachMoney,
    value: "33k",
    label: "Monthly Product Sales",
  },
  {
    icon: ShoppingBag,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    icon: MonetizationOn,
    value: "25k",
    label: "Annual gross sales",
  },
];

const StatsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        const isHovered = hoveredIndex === idx;
        const shouldBeRed = isHovered;

        return (
          <div
            key={idx}
            className={`p-8 rounded-lg border flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
              shouldBeRed
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-black border-gray-200 hover:shadow-lg"
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                shouldBeRed ? "bg-white/30" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  shouldBeRed ? "bg-white" : "bg-black"
                }`}
              >
                <Icon
                  className={`text-2xl ${
                    shouldBeRed ? "text-black" : "text-white"
                  }`}
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-sm">{stat.label}</p>
          </div>
        );
      })}
    </section>
  );
};

export default StatsSection;
