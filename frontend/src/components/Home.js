import React from "react";
import { motion, useAnimation } from "framer-motion";
import BgImage from "../Images/carpool.jpeg";

const Home = () => {
  const controls = useAnimation();

  return (
    <div className="flex mx-auto p-16 px-16">
      <motion.img
        src={BgImage}
        className="rounded-3xl shadow-sm shadow-yellow-50 h-fit w-fit md:h-[550px]"
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            z: [0, 0, -10],
            y: [0, -14, 0], // Y-axis movement
            scale: [1.001, 1.001, 1.001], // Scale effect
            transition: {
              duration: 4, // Duration of the animation
              repeat: Infinity, // Repeat the animation infinitely
              ease: "easeInOut", // Easing function
            },
          })
        }
      />
    </div>
  );
};

export default Home;
