"use client"
import React, { useState, useEffect } from "react";

function Timer() {
  const targetDate = new Date("2024-12-31T00:00:00Z"); // Set your target date here

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
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

