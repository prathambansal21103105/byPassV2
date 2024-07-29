import React from "react";
import { motion} from "framer-motion";
const PublishRide = () => {
  return <div>
    <div className="text-yellow-300 items-center block  mt-20 ml-10"
    >
      {" "}
      <p className=" text-white title1  text-[2.5rem] font-bold mx-auto ml-10 pt-20">
      "Share the Ride", 
        <br/>
        <span className="text-white text-[2rem] ">
        Your Affordable Travel Companion
        </span>{" "}
      </p>
      <div className="publish">
      <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="" fill="green" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <div className="searchBar2">
            <input
            type="name"
            placeholder="Pick-up"
            className="bar2"
            // value={searchInput}
            />
            <input
            type="date"
            placeholder="Time"
            className="barNew2"
            // value={searchInput}
            />
        </div>
        {/* <time class="block mb-2 text-sm font-normal leading-none text-white-400 dark:text-white">Location</time> */}
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <div className="searchBar2">
            <input
            type="name"
            placeholder="Destination"
            className="bar2"
            // value={searchInput}
            />
            <input
            type="date"
            placeholder="Time"
            className="barNew2"
            // value={searchInput}
            />
        </div>
    </li>
    </ol>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-white cursor-pointer rounded-lg p-3 text-black font-bold shadow-black-200 hover:shadow-sm hover:drop-shadow-md hover:shadow-black-400 w-max ml-10 mt-10"
          // onClick={()=>{navigator("/user/browse")}}
        >
          Publish ride
        </motion.div>
      </div>
    </div>
  </div>;
};

export default PublishRide;
