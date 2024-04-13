import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Subheader = () => {
  return (
    <div className="flex justify-center items-center mt-3 md:hidden">
      <div className="flex gap-2 justify-center items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="flex gap-1 items-center justify-center border-2 bg-black-900 rounded-full  border-yellow-200 p-2 cursor-pointer hover:bg-cardOverlay"
        >
          <i class="fi fi-rr-search text-yellow-400"></i>
          <NavLink to="/search" className="font-semibold text-yellow-400">
            Search for A Ride{" "}
          </NavLink>
        </motion.div>
        <motion.div whileTap={{ scale: 0.8 }}>
          <NavLink
            to="/publish"
            className="flex gap-1 items-center justify-center bg-black-900 rounded-full border-2 border-yellow-200 p-2 cursor-pointer hover:bg-cardOverlay"
          >
            <i class="fi fi-rr-add text-yellow-400"></i>
            <div className="font-semibold text-yellow-400">Publish a Ride </div>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Subheader;
