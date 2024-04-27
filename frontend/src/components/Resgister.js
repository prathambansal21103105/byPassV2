import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const Register = () => {
  const controls = useAnimation();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const toast = useToast();
  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/register";
      const data = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        MobileNo: mobileNumber,
      };
      await axios.post(url, data).then((res) => {
        console.log(res);
        setMsg(res.data.message);
        if (res.status === 201) {
          setError("");
        }
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
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
      className="text-yellow-300 items-center p-12 flex flex-col gap-20"
    >
      {" "}
      <p className="text-[2.5rem] font-bold mx-auto mt-12">Register</p>
      <div>
        <form className="mr-4 ml-4" onSubmit={handleSubmit}>
          <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-full h-full flex flex-col md:flex-row">
              <label
                htmlFor="firstname"
                className="text-lg text-yellow-400 mr-5"
              >
                First Name:
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full h-full text-lg bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-yellow-400"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-full h-full flex flex-col md:flex-row">
              <label
                htmlFor="lastname"
                className="text-lg text-yellow-400 mr-5"
              >
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full h-full text-lg bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-yellow-400"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-full h-full flex flex-col md:flex-row">
              <label
                htmlFor="mobilenumber"
                className="text-md flex text-yellow-400 mr-5"
              >
                Mobile No.:
              </label>
              <input
                type="text"
                placeholder="Enter Mobile No. "
                className="w-full h-full text-lg bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-yellow-400"
                onChange={(e) => setmobileNumber(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-full h-full flex flex-col md:flex-row">
              <label htmlFor="email" className="text-lg text-yellow-400 mr-5">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full h-full text-lg bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-yellow-400"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="w-full py-2  flex items-center gap-2 rounded-md ">
            <div className="w-full h-full flex flex-col md:flex-row">
              <label
                htmlFor="password"
                className="text-lg text-yellow-400 mr-5"
              >
                Password:
              </label>
              <input
                type="password"
                placeholder="********"
                className="border-b-2 border-yellow-400  text-lg bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex item-center w-full">
            <button className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-yellow-400 px-12 py-2 text-white rounded-md hover:shadow-md duration-500 transition-all ease-in-out hover:bg-yellow-600 font-semibold mt-8">
              Register
            </button>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {!error && msg && <p className="text-green-500">{msg}</p>}
        <br></br>
        <p className="text-yellow-400">Don't have an account?</p>
        <ul>
          <NavLink to="/login">
            <button className="m-0 text-yellow-200 hover:underline">
              {" "}
              Login
            </button>
          </NavLink>
        </ul>
      </div>
      <div className="w-full h-full"></div>
    </motion.div>
  );
};

export default Register;
