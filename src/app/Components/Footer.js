// Footer.jsx
"use client";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-orange-700 py-10 px-6 lg:px-24 relative font-serif font-bold overflow-x-hidden">
      {/* Shadow Line at the Top */}
      <div className="absolute top-0 left-0 w-full h-2 shadow-[0_-4px_8px_0_rgba(148,0,211,0.6)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:space-x-4 justify-between items-center space-y-8 md:space-y-0">
        {/* Left Side: Company Info */}
        <motion.div
          className="space-y-4 text-center md:text-left p-4 border border-violet-500 rounded-lg shadow-lg shadow-violet-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          {/* Replace the heading with logo */}
          <img
            src="/lg1.png"
            alt="Wahid Plastics Logo"
            loading="lazy"
            width={150}
            height={150}
          />

          <p className="text-orange-800 text-sm">
            Leaders in PVC scrap recycling, offering high-quality granules. With
            over 20 years of expertise in the PVC plastics industry.
          </p>
          <p className="text-orange-800 text-sm">
            Address: Gala No.4, phadkepada, Khardi Goan, Mumbra Diva,
            Phadkepada, Shilphata, Thane, Maharashtra 400612, India
          </p>
          <p className="text-orange-800 text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-violet-500">
              +91 (9819) 904-574
            </a>
          </p>
        </motion.div>

        {/* Right Side: Social Media Links */}
        <motion.div
          className="flex space-x-6 p-4 border border-violet-500 rounded-lg shadow-lg shadow-violet-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebook className="text-2xl text-blue-500   hover:text-violet-500 transition duration-300 shadow-md shadow-violet-500/20" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram className="text-2xl text-pink-500  hover:text-violet-500 transition duration-300 shadow-md shadow-violet-500/20" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedin className="text-2xl text-blue-600  hover:text-violet-500 transition duration-300 shadow-md shadow-violet-500/20" />
          </Link>
          <Link href="https://wa.me/1234567890" target="_blank">
            <FaWhatsapp className="text-2xl text-green-500  hover:text-violet-500 transition duration-300 shadow-md shadow-violet-500/20" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-violet-500 mt-8 pt-4">
        <motion.div
          className="text-center text-orange-700 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Wahid Plastics. All rights reserved.
          Made By <span className="text-violet-700">WebXArtist.com</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
