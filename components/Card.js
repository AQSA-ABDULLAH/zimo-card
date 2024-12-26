"use client"; // Add this directive to make Card a client component

import dynamic from "next/dynamic";
import React from "react";

const Timer = dynamic(() => import("./Timer"), { ssr: false });

const Card = () => {
  return (
    <div className=" text-white bg-white w-full max-w-lg">
      <div className="relative rounded-t-2xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <div
          className="h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/Rectangle 193.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        {/* Countdown and Price */}
        <Timer />
        {/* Share And Like */}
        <div className="absolute top-28 right-8">
          <button className="mr-3">
            <img src="/assets/Path 7830.png" alt="" />
          </button>
          <button className="text-red-500 text-[28px]">❤️</button>
        </div>
        {/* Details Section */}
        <div className="absolute w-[90%] bottom-2 right-7">
          <div className="flex justify-between text-[14px]">
            <p>Shelton Street</p>
            <p>Covent Garden</p>
            <p>London</p>
            <p>WC2H</p>
            <p>United Kingdom</p>
          </div>
          <p className="text-end text-sm mt-2">#ZM7861234567</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between p-4  bg-gray-900 rounded-b-2xl">
        <p className="text-lg font-semibold ">£25.00 GBP</p>
        <div>
          <button className="font-semibold tracking-widest shadow hover:bg-yellow-400">
            BUY ENTRY NOW
          </button>
          <p className="text-end text-[9px] tracking-wider">#ZM7861234567</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
