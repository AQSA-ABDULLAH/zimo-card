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
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={prevImage}>
            <img src="/assets/Path2.png" alt="previous-button" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
          <button className="rounded-full text-white" onClick={nextImage}>
            <img src="/assets/Path1.png" alt="next-button" />
          </button>
        </div>

        {/* Countdown Timer */}
        <Timer />

        {/* Share And Like */}
        <div className="absolute top-28 right-6">
          <button className="mr-3">
            <img src="/assets/Path 7830.png" alt="share-icon" />
          </button>
          <button className="text-red-500 text-[28px]">❤️</button>
        </div>

        {/* Circular Progress Bar and Price */}
        <div className="absolute bottom-20 flex justify-between w-[100%] px-6">
          <SquareProgressBar percentage={23} />
          <div className="flex flex-col">
            <div className="flex justify-between text-white">
              <p className="text-[14px]">£5,000,000 GBP</p>
              <div>
                <p className="text-[16px] font-semibold tracking-wider px-1">Sotheby's</p>
                <p className="text-[6px] px-1 tracking-widest">INTERNATIONAL REALTY</p>
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
        <div className="absolute w-[100%] px-6 bottom-2">
          <div className="flex justify-between font-lato text-[11px] uppercase">
            <p>Shelton Street</p>
            <p>Covent Garden</p>
            <p>London</p>
            <p>WC2H</p>
            <p>United Kingdom</p>
          </div>
          <p className="text-end text-[8px] tracking-wide mt-1">#ZM7861234567</p>
        </div>
      </div>

      {/* Buy Entry Section */}
      <div className="flex justify-between h-[54px] items-center px-6 bg-gray-900 tracking-widest rounded-b-2xl mt-2 font-lato text-[16px]">
        <p>£25.00 GBP</p>
        <div> 
          <button>
            BUY ENTRY NOW
          </button>
          <p className="text-end text-[7px]">#ZM7861234567</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
