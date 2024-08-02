import RideCard from "./RideCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ridesActions } from "../store/rides";
import { getDay,getMonth } from "./PublishRide";

const searchRides = async(data) => {
    const res=await fetch("http://localhost:4000/searchRides",{
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

const Browse=()=>{
    const dispatch = useDispatch();
    const login=useSelector((state)=>{
        return state.login.login;
    })
    const search=useSelector((state)=>{
        return state.rides.search;
    })
    const rides=useSelector((state)=>{
        return state.rides.rides;
    })
    // const [searchResults, setSearchResults] = useState(rides);
    const searchResults = rides;
    const [source,setSource]=useState("");
    const [destination,setDestination]=useState("");
    const [date,setDate]=useState("2024-01-01T00:00");
    const submitHandler=async()=>{
        const date1 = date;
        const startDay = getDay(date1);
        const startTime = date1.substring(11,16);
        const startMonth = getMonth(date1);
        const startDate = (date1[8]==='0') ? date1[9] : date1.substring(8,10);
        const sDate = startTime + ", " + startDay + " " + startDate + " " +startMonth;
        const searchQuery = {
            source: source,
            destination: destination,
            startDate: sDate,
        }
        const resBody = await searchRides(searchQuery);
        if(resBody.message === "search completed"){
            console.log(resBody.rides);
            // setSearchResults(resBody.rides);
            dispatch(ridesActions.setSearch({search:true}));
            dispatch(ridesActions.setRides({rides:resBody.rides}))
        }
        setSource("");
        setDestination("");
        setDate("2024-01-01T00:00");
    }
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
            value={source}
            onChange={(e)=>{setSource(e.target.value)}}
            />
            <input
            type="name"
            placeholder="Going to"
            className="barNew"
            value={destination}
            onChange={(e)=>{setDestination(e.target.value)}}
            />
            <input
            type="dateTime-local"
            label="Date"
            className="barNewNew"
            value={date}
            onChange={(e)=>{setDate(e.target.value)}}
            />
            <button
            type="submit"
            className="searchButton hover:bg-yellow-600"
            onClick={submitHandler}
            >Search</button>
        </div>
    </div>
    </div>
    { login && search && <div className="rideList">
        {console.log("YES")}
        {searchResults.map((ride)=> <RideCard data={ride}/>)}
    </div>}
    </div>
    </>
    );
}
export default Browse;