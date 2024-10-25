"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhatWeBuy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { name: "Recycled Plastics", image: "/slide8.webp" }, // Replace with actual images
    { name: "Plastic Scraps", image: "/slide9.webp" },
    { name: "PVC Waste", image: "/slide3.jpeg" },
    { name: "Old Plastic Containers", image: "/slide4.jpg" },
    { name: "Industrial Plastic Waste", image: "/slide5.jpeg" },
    { name: "Plastic Films", image: "/slide6.webp" },
    { name: "HDPE Bottles", image: "/slide7.avif" },
    { name: "Plastic Packaging", image: "/slide10.webp" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="bg-white py-16 px-8 font-poppins overflow-x-hidden">
      <h2
        className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-orange-700 drop-shadow-lg tracking-wide mb-10 font-serif"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WHAT WE BUY
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="min-w-full h-96 relative flex justify-center items-end bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-4">
                <h3 className="text-xl text-white font-semibold">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? products.length - 1 : prevIndex - 1
              )
            }
            className="bg-gradient-to-r from-violet-800 to-orange-700 text-white p-2 rounded-full hover:bg-yellow-500 transition"
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
              )
            }
            className="bg-gradient-to-r from-violet-800 to-orange-700 text-white p-2 rounded-full hover:bg-yellow-500 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuy;
