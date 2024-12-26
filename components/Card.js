"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import SquareProgressBar from "./ProgressBar";

const Timer = dynamic(() => import("./Timer"), { ssr: false });

const images = [
  "/assets/Rectangle.png",
  "/assets/Rectangle193.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle193.png",
  "/assets/Rectangle.png",
  "/assets/Rectangle.png",
];

const Card = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="text-white bg-white w-full max-w-lg">
      <div className="relative rounded-t-2xl overflow-hidden shadow-lg">
        {/* Background Image Carousel */}
        <div
          className="h-[500px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundColor: "#ccc",
            boxShadow:
              "inset 0px 90px 80px -38px rgba(0, 0, 0, 0.8), inset 0px -90px 60px -35px rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={prevImage}>
            <img src="/assets/Path2.png" alt="previous-button" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={nextImage}>
            <img src="/assets/Path1.png" alt="next-button" />
          </button>
        </div>

        {/* Countdown Timer */}
        <Timer />

        {/* Share And Like */}
        <div className="absolute top-28 right-8">
          <button className="mr-3">
            <img src="/assets/Path 7830.png" alt="share-icon" />
          </button>
          <button className="text-red-500 text-[28px]">❤️</button>
        </div>

        {/* Circular Progress Bar and Price */}
        {/* Circular Progress Bar and Price */}
        <div className="absolute bottom-20 left-6 flex justify-between w-[90%]">
          <SquareProgressBar percentage={23} />
          <div className="flex flex-col">
            <div className="flex justify-between text-white">
              <p className="text-[18px]">£5,000,000 GBP</p>
              <div>
                <p className="text-[16px] font-semibold">Sotheby's</p>
                <p className="text-[7px]">INTERNATIONAL REALTY</p>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentImageIndex(index)} // Navigate to the corresponding image
                  className={`cursor-pointer mx-1 h-0.5 w-8 ${
                    index === currentImageIndex
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Address and Details Section */}
        <div className="absolute w-[90%] bottom-2 right-4">
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

      {/* Buy Entry Section */}
      <div className="flex justify-between p-4 bg-gray-900 rounded-b-2xl mt-2">
        <p className="text-lg font-semibold">£25.00 GBP</p>
        <div>
          <button className="font-semibold tracking-widest rounded-lg">
            BUY ENTRY NOW
          </button>
          <p className="text-end text-[9px] tracking-wider">#ZM7861234567</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
