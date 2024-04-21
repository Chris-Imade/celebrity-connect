import React from "react";
import BlackBg from "../../assets/bg-blackk.webp";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50 // Initial y-offset for fade-in effect
      }}
      animate={{
        opacity: 1,
        y: 0 // Move element to its original position
      }}
      transition={{
        duration: 0.5, // Animation duration
        delay: 0.3 // Delay before animation starts
      }}
      style={{
        backgroundImage: `url(${BlackBg})`,
        backgroundPosition: "center center",
        objectFit: "cover",
        // transform: "rotate(180deg)",
      }}
      className="h-[40rem] flex justify-center items-center"
    >
      <div
        style={{
        //   transform: "rotate(180deg)",
        }}
      >
        <h1 id="about" className="text-white text-center text-4xl">
          About Us
        </h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20 // Initial y-offset for fade-in effect
          }}
          whileInView={{
            opacity: 1,
            y: 0 // Move element to its original position
          }}
          transition={{
            duration: 0.5, // Animation duration
            delay: 0.5 // Delay before animation starts
          }}
          className="text-white mt-5 lg:max-w-[70rem] max-w-[20rem] text-center text-xl overflow-hidden"
        >
          Welcome to VIP Celeb Connect, where exclusivity meets accessibility.
          Our platform bridges the gap between fans and their favorite
          celebrities, offering unique opportunities for direct interaction and
          engagement. Whether you're an avid fan seeking personalized
          experiences or a celebrity looking to connect with your audience on a
          deeper level, VIP Celeb Connect is your ultimate destination. Join us
          in revolutionizing the way fans and celebrities connect, making every
          interaction a memorable experience.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutUs;