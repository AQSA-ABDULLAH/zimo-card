"use client";
import React, { useState, useEffect } from "react";

function Timer() {
  const targetDate = new Date("2024-12-31T00:00:00Z"); // Set your target date here

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const formatNumber = (num) => String(num).padStart(2, "0");

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  return (
    <div className="absolute w-[90%] top-2 left-7">
      <div className="flex justify-between items-center text-[50px] font-extralight">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <p className="text-sm font-normal uppercase">Days</p>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <p className="text-sm font-normal uppercase">Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <p className="text-sm font-normal uppercase">Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <p className="text-sm font-normal uppercase">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;


