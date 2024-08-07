import React from "react";
import { motion} from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const createRide = async(data) => {
  try{
    const res = await axios.post("http://localhost:4000/createRide", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // Include credentials like cookies
    });
    return res.data;
  }
  catch(e){
    console.log("error caught in creating Ride" + e);
  }
  return {};
}

export const getDay = (date) => {
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dat = new Date(date.substring(0,10));
  const day = weekday[dat.getDay()];
  return day;
}

export const getMonth = (date) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const dat = new Date(date.substring(0,10));
  const month = months[dat.getMonth()];
  return month;
}

const PublishRide = ({modalHandler}) => {
  const state = useSelector((state)=>{
    return state.user;
  })
  const[source,setSource] = useState("");
  const[destination,setDestination] = useState("");
  const[sourceTime,setSourceTime] = useState("2024-01-01T00:00");
  const[destinationTime,setDestinationTime] = useState("2024-01-01T00:00");
  
  const submitHandler=async()=>{
    if(source!=="" && destination!="") {
      const startDay = getDay(sourceTime);
      const endDay = getDay(destinationTime);
      const startTime = sourceTime.substring(11,16);
      const endTime = destinationTime.substring(11,16);
      const startMonth = getMonth(sourceTime);
      const endMonth = getMonth(destinationTime);
      const startDate = (sourceTime[8]==='0') ? sourceTime[9] : sourceTime.substring(8,10);
      const endDate = (destinationTime[8]==='0') ? destinationTime[9] : destinationTime.substring(8,10);
      const sDate = startTime + ", " + startDay + " " + startDate + " " +startMonth;
      const eDate = endTime + ", " + endDay + " " + endDate + " " +endMonth;
      console.log("user");
      console.log(state);
      const rideData = {
        startDate: sDate,
        destinationDate: eDate,
        source: source,
        destination: destination,
        passengerId: "",
        passengerContact: "",
        driverName: state.username,
        driverRating: state.rating,
        driverId: state._id,
        carName: state.car,
        carNumber: state.carNum,
        carType: state.type,
        driverContact: state.mobileNumber,
      };
      const resBody = await createRide(rideData);
      if(resBody.message === "ride published"){
        modalHandler("Ride published");
      }
    }
    setSource("");
    setDestination("");
    setSourceTime("2024-01-01T00:00");
    setDestinationTime("2024-01-01T00:00");
  }
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
            onChange={(e)=>{setSource(e.target.value)}}
            value={source}
            // value={searchInput}
            />
            <input
            type="dateTime-local"
            placeholder="Time"
            className="barNew2"
            onChange={(e)=>{setSourceTime(e.target.value)}}
            value={sourceTime}
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
            onChange={(e)=>{setDestination(e.target.value)}}
            value={destination}
            // value={searchInput}
            />
            <input
            type="dateTime-local"
            placeholder="Time"
            className="barNew2"
            onChange={(e)=>{setDestinationTime(e.target.value);console.log(e.target.value);}}
            value={destinationTime}
            // value={searchInput}
            />
        </div>
    </li>
    </ol>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-white cursor-pointer rounded-lg p-3 text-black font-bold shadow-black-200 hover:shadow-sm hover:drop-shadow-md hover:shadow-black-400 w-max ml-10 mt-10"
          onClick={submitHandler}
        >
          Publish ride
        </motion.div>
      </div>
    </div>
  </div>;
};

export default PublishRide;
