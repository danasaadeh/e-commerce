"use client";

import type React from "react";
import { useState } from "react";

// Import icons as string URLs (not React components!)
import StorefrontIcon from "../../../assets/icons/about/shop.svg";
import MoneyIcon from "../../../assets/icons/about/Icon-Sale.svg";
import ShoppingBagIcon from "../../../assets/icons/about/Icon-Shoppingbag.svg";
import SalesIcon from "../../../assets/icons/about/Icon-Moneybag.svg";

const stats = [
  {
    icon: StorefrontIcon,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    icon: MoneyIcon,
    value: "33k",
    label: "Monthly Product Sales",
  },
  {
    icon: ShoppingBagIcon,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    icon: SalesIcon,
    value: "25k",
    label: "Annual gross sales",
  },
];

const StatsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12">
      {stats.map((stat, idx) => {
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={idx}
            className={`p-8 rounded-lg border flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
              isHovered
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-black border-gray-200 hover:shadow-lg"
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Outer circle */}
            <div
              className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                isHovered ? "bg-white/30" : "bg-gray-300"
              }`}
            >
              {/* Inner circle */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isHovered ? "bg-white" : "bg-black"
                }`}
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className={`w-7 h-7 transition duration-300 ${
                    isHovered ? "invert-0" : "invert"
                  }`}
                />
              </div>
            </div>

            <h3
              className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                isHovered ? "text-white" : "text-black"
              }`}
            >
              {stat.value}
            </h3>
            <p
              className={`text-sm transition-colors duration-300 ${
                isHovered ? "text-white" : "text-black"
              }`}
            >
              {stat.label}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default StatsSection;
