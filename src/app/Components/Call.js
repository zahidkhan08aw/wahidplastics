"use client";
import { FiPhoneCall } from "react-icons/fi"; // Import phone call icon

const CallButton = () => {
  const handleCallClick = () => {
    // Replace with your desired phone number
    window.open("tel:+919819904574");
  };

  return (
    <div
      className="fixed bottom-20 right-2 flex items-center justify-center bg-gradient-to-r from-orange-600 to-violet-700 text-white p-4 rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform duration-300"
      style={{ zIndex: 1000 }} // Ensure it's above other content
      onClick={handleCallClick}
    >
      <FiPhoneCall className="text-white w-8 h-8 md:w-10 md:h-10" />{" "}
      {/* Icon size */}
    </div>
  );
};

export default CallButton;
