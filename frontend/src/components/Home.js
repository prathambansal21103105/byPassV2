import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BgImage from "../Images/carpool.jpeg";
import logo from "../Images/logo.png";
const Home = () => {
  return (
    <motion.div
      className="flex mx-auto p-16 px-16"
      animate={{
        z: [0, 0, -10],
        y: [0, -10, 0], // Y-axis movement
        scale: [1.001, 1.001, 1.001], // Scale effect
      }}
      transition={{
        duration: 2, // Duration of the animation
        repeat: Infinity, // Repeat the animation infinitely
        ease: "easeInOut", // Easing function
      }}
    >
      {/* <p className="text-[2.5rem] font-bold  text-gray-50">
        "Pooling Rides, Sharing Smiles"{" "}
        <span className="text-gray-50 text-[3rem] md:text-[4rem] "></span>
      </p> */}
      <img
        src={BgImage}
        className="rounded-3xl shadow-sm shadow-yellow-50  h-fit w-fit md:h-[550px]"
      />
    </motion.div>
  );
};
export default Home;
