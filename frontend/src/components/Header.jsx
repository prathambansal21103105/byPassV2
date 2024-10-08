import React from "react";
import Logo from "../Images/logo1.png";
import { motion } from "framer-motion";
import { Form, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userInitialState } from "../store/user";
import { initialLoginState } from "../store/login";
import { userActions } from "../store/user";
import { loginActions } from "../store/login";
import { initialRideState, ridesActions } from "../store/rides";
import { destroySession } from "../App";

const Header = () => {
  const dispatch=useDispatch();
  const login=useSelector((state)=>{
    return state.login.login;
  })
  // console.log(login);
  return (
    // <div className="head">
      <div className="p-3 bg-black-900 rounded-lg shadow-sm flex w-full h-full items-center justify-between border-b-white-400 border-b-1 shadow-white-100">
        <NavLink
          to="/"
          className="text-textColor"
          end
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={Logo}
                className="w-10 h-10 object-cover"
                alt="Logo img"
              />
              <p className="text-white-400 text-xl font-bold">byPass</p>
            </div>
          </motion.div>
        </NavLink>

        <div className="md:flex gap-5 justify-center items-center hidden">
          <NavLink
            to="/user/browse"
            className={({ isActive }) =>
              isActive ? `bg-yellow-600 rounded-full border-yellow-600` :`font-semibold text-yellow-400 border-yellow-400`
            }
            // id="nav"
            end
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex gap-1 items-center justify-center border-2 bg-black-900 rounded-full  border-yellow-600 p-2 cursor-pointer hover:bg-cardOverlay"
            >
              <i class="fi fi-rr-search text-white-400"></i>
              <div className="font-semibold text-white-400 p-0.3">
                Search for A Ride{" "}
              </div>
            </motion.div>
          </NavLink>
          <NavLink
            to="/publish"
            className={({ isActive }) =>
              isActive ? `bg-yellow-600 rounded-full border-yellow-600` :`font-semibold text-yellow-400 border-yellow-400`
            }
            // id="nav"
            end
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="flex gap-1 items-center justify-center border-2 bg-black-900 rounded-full  border-yellow-600 p-2 cursor-pointer hover:bg-cardOverlay"
            >
              <i class="fi fi-rr-search text-white-400"></i>
              <div className="font-semibold text-white-400 p-0.3">
                Publish for a ride{" "}
              </div>
            </motion.div>
          </NavLink>
        </div>
        <div>
          <motion.div className="flex gap-4 items-center justify-center border-2 bg-black-900 rounded-lg border-none p-2">
            <NavLink
              to="/user/browse"
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className={`font-semibold text-white-400`}>Browse </div>
              </motion.div>
            </NavLink>
            <NavLink
              to="/user/help"
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className={`font-semibold text-white-400`}>Help </div>
              </motion.div>
            </NavLink>
            { !login && <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className={`font-semibold text-white-400`}>Login </div>
              </motion.div>
            </NavLink>}
            {login && <NavLink
              to="/user/inbox"
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className={`font-semibold text-white-400`}>Inbox </div>
              </motion.div>
            </NavLink>}
            {login && <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              onClick={async()=>{
                // setTimeout(()=>{
                dispatch(userActions.setUser(userInitialState));
                dispatch(loginActions.setLogin(initialLoginState));
                dispatch(ridesActions.setSearch(initialRideState.search));
                await destroySession();
              // },3000);
              }}
              end
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className={`font-semibold text-white-400`}>Logout </div>
              </motion.div>
            </NavLink>}
            {!login && <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className={`font-semibold text-white-400`}>Signup </div>
              </motion.div>
            </NavLink>}
            { login && <NavLink
              to="/user/profile"
              className={({ isActive }) =>
                isActive ? `bg-yellow-600 rounded-full` : undefined
              }
              id="nav"
              end
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="rounded-full hover:bg-cardOverlay p-2 items-center justify-center cursor-pointer"
              >
                <div className={`font-semibold text-white-400`}>Profile </div>
              </motion.div>
            </NavLink>}
          </motion.div>
        </div>
      </div>
    // </div>
  );
};

export default Header;
