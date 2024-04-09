import React from "react";
import Logo from "../Images/logo1.png";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-gray-900 rounded-lg shadow-sm flex w-full h-full items-center justify-between border-b-yellow-400 border-b-1 shadow-yellow-100">
      <motion.div whileHover={{ scale: 1.2 }}>
        <NavLink to={"/"} className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} className="w-10 h-10 object-cover" alt="Logo img" />
          <p className="text-yellow-400 text-xl font-bold">byPass</p>
        </NavLink>
      </motion.div>
      <div className="md:flex gap-5 justify-center items-center hidden">
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="flex gap-1 items-center justify-center border-2 bg-gray-900 rounded-full  border-yellow-200 p-2 cursor-pointer hover:bg-cardOverlay"
        >
          <i class="fi fi-rr-search text-yellow-400"></i>
          <NavLink to="/search" className="font-semibold text-yellow-400">
            Search for A Ride{" "}
          </NavLink>
        </motion.div>
        <motion.div whileTap={{ scale: 0.8 }}>
          <NavLink
            to="/publish"
            className="flex gap-1 items-center justify-center border-2 bg-gray-900 rounded-full  border-yellow-200 p-2 cursor-pointer hover:bg-cardOverlay"
          >
            <i class="fi fi-rr-add text-yellow-400"></i>
            <div className="font-semibold text-yellow-400">Publish a Ride </div>
          </NavLink>
        </motion.div>
      </div>
      <div>
        <motion.div className="flex gap-4 items-center justify-center border-2 bg-gray-900 rounded-lg border-none p-2">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="rounded-full p-2 items-center justify-center cursor-pointer hover:bg-cardOverlay "
          >
            <NavLink to="/help" className="font-semibold text-yellow-400">
              Help{" "}
            </NavLink>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
          >
            <NavLink to="/login" className="font-semibold text-yellow-400">
              Login{" "}
            </NavLink>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="bg-yellow-400 rounded-full p-2 items-center justify-center cursor-pointer hover:bg-gray-300"
          >
            <NavLink to="/register" className="font-semibold text-gray-950">
              Signup{" "}
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
