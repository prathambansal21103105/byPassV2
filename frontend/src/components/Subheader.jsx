import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Subheader = () => {
  return (
    <div className="flex justify-center items-center mt-3 md:hidden">
      <div className="flex gap-2 justify-center items-center">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? `bg-yellow-600 rounded-full border-yellow-600`
              : `font-semibold text-yellow-400 border-yellow-400`
          }
          // id="nav"
          end
        >
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex gap-1 items-center justify-center border-2 bg-black-900 rounded-full  border-yellow-600 p-2 cursor-pointer hover:bg-cardOverlay"
          >
            <i class="fi fi-rr-search text-white-400"></i>
            <div className="font-semibold text-white-400">
              Search for A Ride{" "}
            </div>
          </motion.div>
        </NavLink>
        <NavLink
          to="/publish"
          className={({ isActive }) =>
            isActive
              ? `bg-yellow-600 rounded-full border-yellow-600`
              : `font-semibold text-yellow-400 border-yellow-400`
          }
          // id="nav"
          end
        >
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex gap-1 items-center justify-center border-2 bg-black-900 rounded-full  border-yellow-600 p-2 cursor-pointer hover:bg-cardOverlay"
          >
            <i class="fi fi-rr-search text-white-400"></i>
            <div className="font-semibold text-white-400">
              Publish for a ride{" "}
            </div>
          </motion.div>
        </NavLink>
      </div>
    </div>
  );
};

export default Subheader;
