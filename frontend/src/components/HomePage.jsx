import React from "react";
import { motion, useAnimation } from "framer-motion";
const HomePage = () => {
  const controls = useAnimation();
  return (
    <motion.div
      animate={controls}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          // x: [-8, 0, 0],
          y: [0, -8, 0],
          // x: [8, 0, 0], // Y-axis movement
          scale: [1.001, 1.001, 1.001], // Scale effect
          transition: {
            duration: 4, // Duration of the animation
            repeat: Infinity, // Repeat the animation infinitely
            ease: "easeInOut", // Easing function
          },
        })
      }
      className="text-yellow-300 items-center p-12 flex flex-col"
    >
      {" "}
      <p className="text-[2.5rem] font-bold mx-auto">
        "Pooling Rides
        <span className=" text-yellow-400 text-[2.5rem] md:text-[3rem] ">
          , Sharing Smiles"
        </span>{" "}
      </p>
      <div className="p-7 px-14 justify-center text-gray-50 mt-20">
        <p className="text-xl">
          Welcome to ByPass, where we believe in pooling rides to share more
          than just transportation - we share smiles, stories, and sustainable
          solutions.
        </p>
        <p className="text-xl">
          {" "}
          Say goodbye to solo commutes and hello to a community-driven approach
          to travel.
        </p>
        <p className="text-2xl">
          Join us today and be part of the movement to make every ride count
        </p>
      </div>
      <div className="grid grid-cols-2 ml-0 gap-56">
        <div></div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-yellow-400 rounded-lg p-3 text-gray-900 font-bold shadow-yellow-200 hover:shadow-sm hover:drop-shadow-md hover:shadow-yellow-400"
        >
          Get Started
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
