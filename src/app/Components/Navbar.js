"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle closing the mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-50 shadow-lg fixed w-full z-20 navbar">
      <div className="container mx-auto px-4 py-2 flex justify-between lg:justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Wahid Plastics Home"
        >
          <img
            src="/lg1.png" // Add your logo file path
            alt="Wahid Plastics - Leading in Plastic Solutions"
            width={80}
            height={80}
            loading="lazy"
            className="cursor-pointer transition-transform transform hover:scale-105"
          />
        </Link>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-orange-900 text-xl ">
          <li>
            <Link
              href="/"
              className="hover:text-violet-900  transition duration-300"
              aria-label="Home - Wahid Plastics"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Whatwesell"
              className="hover:text-violet-900  transition duration-300"
              aria-label="Services - Wahid Plastics"
            >
              What we Sell
            </Link>
          </li>
          <li>
            <Link
              href="/Whatwebuy"
              className="hover:text-violet-900  transition duration-300"
              aria-label="Strategy - Wahid Plastics"
            >
              What We Buy
            </Link>
          </li>
          <li>
            <Link
              href="/Whyus"
              className="hover:text-violet-900  transition duration-300"
              aria-label="Why Choose Us - Wahid Plastics"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="hover:text-violet-900  transition duration-300"
              aria-label="About Us - Wahid Plastics"
            >
              About
            </Link>
          </li>
        </ul>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9819904574"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-2   text-white rounded-lg transition-transform transform hover:scale-105 font-extrabold"
          aria-label="Connect with Wahid Plastics on WhatsApp"
        >
          <img
            src="whatsppicon.png"
            alt="Connect on WhatsApp"
            className="h-10 w-12 inline"
            loading="lazy"
          />
        </a>

        {/* Hamburger Icon for Mobile */}
        <div
          onClick={handleToggleMenu}
          className={`md:hidden flex flex-col items-center justify-center space-y-1 cursor-pointer hamburger ${
            isOpen ? "active" : ""
          }`}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-6 h-0.5 bg-orange-800 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-orange-800 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-orange-800 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-violet-900 shadow-lg md:hidden transition-all duration-300">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white">
            <li>
              <Link
                href="/"
                className="hover:text-violet-900  transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Home - Wahid Plastics"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Whatwesell"
                className="hover:text-violet-900  transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Services - Wahid Plastics"
              >
                WHAT WE SELL
              </Link>
            </li>
            <li>
              <Link
                href="/Whatwebuy"
                className="hover:text-violet-900  transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Strategy - Wahid Plastics"
              >
                WHAT WE BUY
              </Link>
            </li>
            <li>
              <Link
                href="/Whyus"
                className="hover:text-violet-900  transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="Why Choose Us - Wahid Plastics"
              >
                WHY US
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="hover:text-violet-900  transition duration-300"
                onClick={() => setIsOpen(false)}
                aria-label="About Us - Wahid Plastics"
              >
                ABOUT
              </Link>
            </li>

            <li>
              <a
                href="https://wa.me/9819904574"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-105"
                onClick={() => setIsOpen(false)}
                aria-label="Connect with Wahid Plastics on WhatsApp"
              >
                <img
                  src="/whatsppicon.png"
                  alt="WhatsApp Icon"
                  className="h-10 w-12"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
