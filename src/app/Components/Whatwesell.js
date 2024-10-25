"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatWeSell = () => {
  const products = [
    { name: "Pure White UPVC Grinding", image: "/product1.jpg" }, // Replace with actual images
    { name: "Pure Grey UPVC Grinding", image: "/product2.jpg" },
    { name: "CPVC Grinding", image: "/product3.webp" },
    { name: "Regular White UPVC Grinding", image: "/product4.webp" },
    { name: "Regular Grey UPVC Grinding", image: "/product5.webp" },
    { name: "Black UPVC Grinding", image: "/product6.webp" },
    { name: "Foam Grinding", image: "/product7.jpg" },
    { name: "Blue Grinding", image: "/product8.webp" },
    { name: "Wall Patti Grinding", image: "/product9.png" },
    { name: "Dark Grey Grinding", image: "/product10.webp" },
  ];

  const openWhatsApp = (productName) => {
    const message = `Hi, I'm interested in the ${productName}. Can you please provide the price details?`;
    window.open(
      `https://wa.me/9819904574?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white py-16 px-8 font-poppins overflow-x-hidden">
      <h2
        className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-orange-700 drop-shadow-lg tracking-wide mb-10 font-serif"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WHAT WE SELL
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative group w-full h-80 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative  w-full h-full">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Lighting effect on hover */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-violet-700 transition-all duration-300 pointer-events-none"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px 5px #FFD700",
                }}
              />
            </div>

            {/* Product Info */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-center">
              <h3 className="text-lg text-white bg-orange-900 rounded-xl font-semibold">
                {product.name}
              </h3>

              <button
                onClick={() => openWhatsApp(product.name)}
                className="mt-4 px-6 py-2  bg-gradient-to-r from-violet-800 to-orange-700 text-white font-bold rounded-lg hover:bg-stone-500 transition"
              >
                Ask Price
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeSell;
