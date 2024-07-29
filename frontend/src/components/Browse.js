import { useRef } from "react";
import RideCard from "./RideCard";
import { useState } from "react";
const Browse=()=>{
    const searchInput = useRef();
    const [date,setDate]=useState("2022-01-31");
    return(
    <>
    <div className="outerMost">
    <div className="browseOuter">
    <p className="browseHeading">Where do you want to go?</p>
    <div className="browse">
        <div className="searchBar">
            <input
            type="name"
            placeholder="Leaving from"
            className="bar"
            // value={searchInput}
            />
            <input
            type="name"
            placeholder="Going to"
            className="barNew"
            // value={searchInput}
            />
            <input
            type="date"
            label="Date"
            value={date}
            className="barNewNew"
            // value={searchInput}
            />
            <button
            type="submit"
            className="searchButton hover:bg-yellow-600"
            // value={searchInput}
            >Search</button>
        </div>
    </div>
    </div>
    <div className="rideList">
            <RideCard/>
            <RideCard/>
            <RideCard/>
            <RideCard/>
    </div>
    </div>
    </>
    );
}
export default Browse;