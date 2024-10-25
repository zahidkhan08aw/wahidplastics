"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 4); // Cycle through 4 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sliderImages = [
    "/hero1.png", // Replace with your actual images
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
  ];

  return (
    <div className="relative bg-gradient-to-br from-violet-950 to-orange-700 pt-20 lg:pt-24 pb-12 lg:pb-16 px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col-reverse md:flex-row justify-between items-center font-poppins tracking-wider font-extrabold overflow-hidden">
      {/* Left Side: Hero Content */}
      <motion.div
        className="md:w-1/2 space-y-6 relative z-10 text-center lg:text-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        {/* Yellow & Blue Text */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight text-outline-whit font-serif">
          Revolutionizing Plastics with
          <br />
          <span className="text-red-950 font-extrabold tracking-wide text-outline-white">
            Wahid Plastics!
          </span>
        </h1>

        <p className="text-2xl text-white font-poppins">
          Sustainable solutions for recycled plastic products.
        </p>

        <Link href="/Whatwesell">
          <motion.button
            className="px-6 py-3 mt-2 bg-slate-50 text-orange-800 font-extrabold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Side: Image Slider */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 relative h-[18rem] lg:h-[28rem] flex justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.0, ease: "easeInOut" }}
      >
        <div className="relative w-96 h-full mx-auto">
          {sliderImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`absolute  w-full h-full transition-transform duration-1000 transform-gpu rounded-lg overflow-hidden ${
                currentImage === index
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-full scale-90"
              }`}
              style={{ transitionTimingFunction: "ease-in-out" }}
            >
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stylish Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Add background shapes but avoid overlapping the content */}
        <div className="absolute top-24 left-14 w-10 bg-slate-100 h-10 border rounded-full"></div>
        <div className="absolute bottom-24 right-14 w-10 h-10 border rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
