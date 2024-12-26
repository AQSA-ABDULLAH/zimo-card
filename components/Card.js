"use client"; // Add this directive to make Card a client component

import dynamic from "next/dynamic";
import React, { useState } from "react";

const Timer = dynamic(() => import("./Timer"), { ssr: false });

const images = [
  "/assets/Rectangle.png", // Check if this image exists in the public/assets folder
  "/assets/Rectangle193.png", // Add more image URLs here
  "/assets/Rectangle.png", // Check if this image exists as well
];

const Card = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      console.log("Next image index:", nextIndex); // Debugging log
      return nextIndex;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const prevIndexUpdated = (prevIndex - 1 + images.length) % images.length;
      console.log("Previous image index:", prevIndexUpdated); // Debugging log
      return prevIndexUpdated;
    });
  };

  return (
    <div className="text-white bg-white w-full max-w-lg">
      <div className="relative rounded-t-2xl overflow-hidden shadow-lg">
        {/* Background Image Carousel */}
        <div
          className="h-[500px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`, // Check if this is applying correctly
            backgroundColor: "#ccc", // Default background color for debugging
            boxShadow:
              "inset 0px 55px 80px -35px rgba(0, 0, 0, 4), inset 0px -55px 80px -38px rgba(0, 0, 0, 4)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            className="rounded-full text-white"
            onClick={prevImage}
          >
             <img src="/assets/Path2.png" alt="previous-button" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            className="rounded-full text-white"
            onClick={nextImage}
          >
             <img src="/assets/Path1.png" alt="previous-button" />
          </button>
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
      <div className="flex justify-between p-4 bg-gray-900 rounded-b-2xl mt-2">
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
