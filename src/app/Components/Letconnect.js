// LetsConnect.jsx
"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const LetsConnect = () => {
  const whatsappLink = "https://wa.me/9819904574"; // Replace with your actual WhatsApp number

  return (
    <div className="bg-white text-yellow-800 py-16 px-6 lg:px-24 overflow-x-hidden font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold text-violet-700 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Connect
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg text-black font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a question or want to discuss how we can help you with PVC
          granules or other services? We’re just a message away. Let’s chat on
          WhatsApp!
        </motion.p>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3   bg-gradient-to-r from-violet-800 to-orange-700 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="mr-2 text-2xl" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LetsConnect;
