import React from "react";
import { LocalShipping, SupportAgent, Replay } from "@mui/icons-material";

const features = [
  {
    icon: <LocalShipping fontSize="large" />,
    title: "Free and Fast Delivery",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <SupportAgent fontSize="large" />,
    title: "24/7 Customer Service",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: <Replay fontSize="large" />,
    title: "Money Back Guarantee",
    desc: "We return money within 30 days",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-gray-100"
        >
          <div className="text-red-500 mb-3">{f.icon}</div>
          <h4 className="font-semibold">{f.title}</h4>
          <p className="text-gray-600 text-sm">{f.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
