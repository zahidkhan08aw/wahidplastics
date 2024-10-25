// About.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    { name: "Shahid Khan", title: "Team Member", img: "/team.png" }, // Replace with actual images
    { name: "Tufail Ahmed", title: "Team Member", img: "/team.png" },
    { name: "Sameer Khan", title: "Team Member", img: "/team.png" },
    { name: "Imran Khan", title: "Team Member", img: "/team.png" },
  ];

  return (
    <div className="bg-gradient-to-br from-violet-950 to-orange-700 text-white py-20 px-6 lg:px-24 font-serif overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Founder Image */}
        <motion.div
          className="relative w-full lg:w-1/2 h-80 lg:h-96"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/founder.png" // Replace with the actual founder's image path
            alt="Abdul Wahid Khan"
            layout="fill"
            className="object-contain rounded-lg shadow-lg"
            loading="lazy"
          />
          <div className="absolute bottom-2 left-2 bg-white text-yellow-900 font-extrabold py-1 px-2 rounded">
            Abdul Wahid Khan
          </div>
        </motion.div>

        {/* Experience and Explanation */}
        <motion.div
          className="lg:w-1/2 lg:pl-10 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            <span
              className="text-5xl md:text-6xl text-center font-extrabold drop-shadow-lg tracking-wide mb-10 font-serif relative"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage:
                  "linear-gradient(to right, violet-800, orange-700)", // Apply gradient
              }}
            >
              <span
                className="absolute inset-0 text-transparent"
                style={{
                  WebkitTextStroke: "2px white", // White border
                }}
              >
                ABOUT
              </span>
              <span
                className="relative text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-orange-700"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ABOUT
              </span>
            </span>
            Wahid Plastics
          </h2>
          <p className="text-lg text-gray-300 font-serif ">
            At Wahid Plastics, we pride ourselves on our 20 years of experience
            in the PVC plastics industry. Our expert, Abdul Wahid Khan, has
            dedicated his career to sourcing high-quality PVC scraps and water
            tanks, ensuring that we deliver the finest granules to our clients.
            Our commitment to excellence and sustainability drives us to provide
            the best products in the market.
          </p>
          <p className="text-lg text-gray-300 mt-4 font-serif">
            We believe that our workers are our greatest asset. With a team of
            skilled professionals, we guarantee that every product we sell meets
            the highest standards of quality and efficiency.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Our Dedicated Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={member.img} // Replace with actual images
                alt={member.name}
                width={100}
                height={100}
                loading="lazy"
                className="rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-gray-300">{member.title}</p>
              <p className="text-gray-400 text-sm">
                Dedicated to PVC Scrap Granules Making
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
