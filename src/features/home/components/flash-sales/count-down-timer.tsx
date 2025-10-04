"use client";

import Countdown from "react-countdown";
import { Typography } from "@mui/material";

interface CountdownTimerProps {
  targetDate: number; // timestamp (e.g. Date.now() + 1000 * 60 * 60 * 24)
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <div className="ml-12 flex space-x-6">
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          {/* label goes on top now */}
          <Typography
            variant="caption"
            className="text-xs text-gray-500 uppercase tracking-wide mb-1"
          >
            {item.label}
          </Typography>

          <Typography
            variant="h5"
            className="font-bold text-gray-900"
            sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
          >
            {String(item.value).padStart(2, "0")}
          </Typography>
        </div>
      ))}
    </div>
  );

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
