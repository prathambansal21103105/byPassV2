import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import loginImg from "../Images/loginImg.webp";
import registerImg from '../Images/sign.webp';
import homeImg from '../Images/home.webp';
import publishImg from '../Images/publish.webp';

const Home = () => {
  const controls = useAnimation();
  const location = useLocation();
  let router=location.pathname;
  let bgImg=loginImg;
  console.log(router);
  if(router.includes("login")){
    bgImg=loginImg;
  }
  if(router.includes("register")){
    bgImg=registerImg;
  }
  if(router.includes("publish")){
    bgImg=publishImg;
  }
  if(router.endsWith("/")){
    bgImg=homeImg;
  }
  return (
    <div className="text-yellow-300 items-center py-[10%] px-12 flex flex-col">
      <motion.img
        src={bgImg}
        className="rounded-3xl shadow-sm shadow-yellow-50 h-fit w-fit md:h-[550px]"
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            y: [0, -14, 0], // Y-axis movement
            scale: [1.001, 1.001, 1.001], // Scale effect
            transition: {
              duration: 4, // Duration of the animation
              repeat: Infinity, // Repeat the animation infinitely
              ease: "easeInOut", // Easing function
            },
          })
        }
      />
    </div>
  );
};

export default Home;
