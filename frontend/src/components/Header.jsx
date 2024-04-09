import React from "react";
import Logo from "../Images/logo1.png";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-gray-900 rounded-lg shadow-sm flex w-full h-full items-center justify-between border-b-yellow-400 border-b-1 shadow-yellow-100">
      <NavLink to="/">
        <motion.div whileHover={{ scale: 1.2 }}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logo} className="w-10 h-10 object-cover" alt="Logo img" />
            <p className="text-yellow-400 text-xl font-bold">byPass</p>
          </div>
        </motion.div>
      </NavLink>

      <div className="md:flex gap-5 justify-center items-center hidden">
        <NavLink to="/search">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex gap-1 items-center justify-center border-2 bg-gray-900 rounded-full  border-yellow-200 p-2 cursor-pointer hover:bg-cardOverlay"
          >
            <i class="fi fi-rr-search text-yellow-400"></i>
            <div className="font-semibold text-yellow-400">
              Search for A Ride{" "}
            </div>
          </motion.div>
        </NavLink>
        <NavLink to="/publish">
          <motion.div whileTap={{ scale: 0.8 }}>
            <div className="flex gap-1 items-center justify-center border-2 bg-gray-900 rounded-full  border-yellow-200 p-2 cursor-pointer hover:bg-cardOverlay">
              <i class="fi fi-rr-add text-yellow-400"></i>
              <div className="font-semibold text-yellow-400">
                Publish a Ride{" "}
              </div>
            </div>
          </motion.div>
        </NavLink>
      </div>
      <div>
        <motion.div className="flex gap-4 items-center justify-center border-2 bg-gray-900 rounded-lg border-none p-2">
          <NavLink to="/help">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
            >
              <div className={`font-semibold text-yellow-400`}>Help </div>
            </motion.div>
          </NavLink>
          <NavLink to="/login">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
            >
              <div className={`font-semibold text-yellow-400`}>Login </div>
            </motion.div>
          </NavLink>
          <NavLink to="/register">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
            >
              <div className={`font-semibold text-yellow-400`}>Signup </div>
            </motion.div>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
