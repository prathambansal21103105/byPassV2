import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ridesActions } from "../store/rides";

const fetchRides = async(data) => {
  const res=await fetch("http://localhost:4000/fetchRides",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
  })
  const resBody=res.json();
  console.log(resBody);
  return resBody;
}

const HomePage = () => {
  const dispatch = useDispatch();
  const id = useSelector((state)=>{
    return state.user.id;
  });
  const login = useSelector((state)=>{
    return state.login.login;
  })
  const navigator = useNavigate();
  const controls = useAnimation();
  // if(login){
  //   const userRides = fetchRides(id);
  //   dispatch(ridesActions.setHostRides({userRides:userRides.driver}));
  //   dispatch(ridesActions.setGuestRides({guestRides:userRides.passenger}));
  // }
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
      <p className=" title1  text-[2.5rem] font-bold mx-auto">
        "Pooling Rides
        <span className=" text-yellow-400 text-[2.5rem] ">
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
      <div className="grid grid-cols-2 ml-0 gap-56 cursor-pointer">
        <div></div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-yellow-400 rounded-lg p-3 text-gray-900 font-bold shadow-yellow-200 hover:shadow-sm hover:drop-shadow-md hover:shadow-yellow-400"
          onClick={()=>{navigator("/user/browse")}}
        >
          Get Started
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
