import React from "react";
import Logo from "../Images/byPass.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-black rounded-lg shadow-sm">
      <div className="flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            whileHover={{ scale: 1.4 }}
            src={Logo}
            className="w-10 h-10 object-cover"
            alt="Logo img"
          />
          <p className="text-black-800 text-xl font-bold">byPass</p>
        </Link>
        <div className="flex gap-2 justify-center items-center">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex gap-1 items-center justify-center border-2 bg-black rounded-lg border-none p-2 hover:bg-black"
          >
            <i class="fi fi-rr-search text-white"></i>
            <div className="font-semibold text-white">Search for A Ride </div>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex gap-1 items-center justify-center border-2 bg-black rounded-lg border-none p-2 hover:bg-black"
          >
            <i class="fi fi-rr-add text-white"></i>
            <div className="font-semibold text-white">Publish a Ride </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex gap-1 items-center justify-center border-2 bg-black rounded-lg border-none p-2 hover:bg-black"
          >
            <div className="font-semibold text-white">Login/SignUp </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
