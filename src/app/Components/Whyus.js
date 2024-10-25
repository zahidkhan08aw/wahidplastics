"use client";
import { motion } from "framer-motion";
import { FaHandshake, FaCheckCircle, FaUserTie, FaAward } from "react-icons/fa";

const WhyUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-white text-orange-800 py-16 px-8 font-poppins font-extrabold overflow-x-hidden">
      <h2
        className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-orange-700 drop-shadow-lg tracking-wide mb-10 font-serif"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WHY US?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1: Trust */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg border border-violet-200 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          custom={0}
        >
          <FaHandshake className="text-5xl text-orange-700 mb-4 mx-auto" />
          <h3 className="text-2xl text-center text-orange-900 font-bold mb-2">
            Trust
          </h3>
          <p className="text-center text-gray-600">
            We build lasting relationships based on trust and transparency,
            ensuring that you receive the best service.
          </p>
        </motion.div>

        {/* Card 2: Quality Material */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg border border-violet-200 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          custom={1}
        >
          <FaCheckCircle className="text-5xl text-orange-700 mb-4 mx-auto" />
          <h3 className="text-2xl text-center text-orange-900 font-bold mb-2">
            Quality Material
          </h3>
          <p className="text-center text-gray-600">
            We provide only high-quality, industry-standard materials for all
            your PVC needs.
          </p>
        </motion.div>

        {/* Card 3: Personal Connection */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg border border-violet-200 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          custom={2}
        >
          <FaUserTie className="text-5xl text-orange-700 mb-4 mx-auto" />
          <h3 className="text-2xl text-center text-orange-900 font-bold mb-2">
            Personal Connection
          </h3>
          <p className="text-center text-gray-600">
            We provide personalized solutions, understanding your unique
            requirements.
          </p>
        </motion.div>

        {/* Card 4: 20 Years of Experience */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg border border-violet-200 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          custom={3}
        >
          <FaAward className="text-5xl text-orange-700 mb-4 mx-auto" />
          <h3 className="text-2xl text-center text-orange-900 font-bold mb-2">
            20 Years of Experience
          </h3>
          <p className="text-center text-gray-600">
            With over 20 years in the PVC industry, we bring unparalleled
            expertise to every project.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
