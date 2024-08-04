import RideCard from "./RideCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ridesActions } from "../store/rides";
import { getDay,getMonth } from "./PublishRide";
import RideInfoModal from "./RideInfoModal";
import checkFinalFinal from '../Images/checkFinal2.gif';
import cross from "../Images/cross2.png";
import Modal from "./Modal";
import axios from "axios";
import sedan from '../Images/carBlack.webp';
import luxury from '../Images/luxury3.png';
import miniVan from '../Images/truck.webp';

const bookRide = async(data) => {
    // const res=await fetch("http://localhost:4000/bookRide",{
    //     method:"POST",
    //     headers:{
    //     "Content-Type":"application/json",
    //     credentials: "include",
    //     },
    //     credentials: "include",
    //     body:JSON.stringify(data)
    // })
    const res = await axios.post("http://localhost:4000/bookRide", data, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true, // Include credentials like cookies
    });
    // const resBody=await res.json();
    // console.log(resBody);
    return res.data;
}

const searchRides = async(data) => {
    // const res=await fetch("http://localhost:4000/searchRides",{
    //     method:"POST",
    //     headers:{
    //     "Content-Type":"application/json",
    //     credentials: "include",
    //     },
    //     credentials: "include",
    //     body:JSON.stringify(data)
    // })
    const res = await axios.post("http://localhost:4000/searchRides", data, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true, // Include credentials like cookies
    });
    // const resBody=await res.json();
    // console.log(resBody);
    return res.data;
}

const Browse=()=>{
    const dispatch = useDispatch();
    const [modal,setModal] = useState(false);
    const [ride,setRide] = useState("");
    const login=useSelector((state)=>{
        return state.login.login;
    })
    const search=useSelector((state)=>{
        return state.rides.search;
    })
    const rides=useSelector((state)=>{
        return state.rides.rides;
    })
    const user=useSelector((state)=>{
        return state.user;
    })
    let carType=sedan;
    if(ride.carType === "Luxury"){
        carType = luxury;
    }
    if(ride.carType === "Mini Van"){
        carType = miniVan;
    }
    // const [searchResults, setSearchResults] = useState(rides);
    const searchResults = rides;
    const [source,setSource]=useState("");
    const [destination,setDestination]=useState("");
    const [date,setDate]=useState("2024-01-01T00:00");
    const [confirmModal,setConfirmModal]=useState(false);
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
            // console.log(resBody.rides);
            // setSearchResults(resBody.rides);
            dispatch(ridesActions.setSearch({search:true}));
            dispatch(ridesActions.setRides({rides:resBody.rides}))
        }
        setSource("");
        setDestination("");
        setDate("2024-01-01T00:00");
    }
    const bookHandler = async(rideId) => {
        setModal(false);
        const data = {
            rideId:rideId,
            passengerId:user._id,
            passengerContact:user.mobileNumber,
        }
        const resBody=await bookRide(data);
        if(resBody.message === "booking confirmed"){
            // console.log("YES123");
            setConfirmModal(true);
            dispatch(ridesActions.setSearch({search:false}));
            setTimeout(()=>{setConfirmModal(false)},3000);
        }
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
        {/* {console.log("YES")} */}
        {searchResults.map((ride)=> <div onClick={()=>{setModal(true);setRide(ride);}}><RideCard data={ride}/></div>)}
    </div>}
    </div>
    <div className="modal">
        <RideInfoModal open={modal}>
            <div className="message1">
                <div className="flexRow">
                    <button onClick={()=>{setModal(false)}} className="cross"><img src={cross}></img></button>
                </div>
                <img className="carH1" src={carType}></img>
                <p className="entity1"><div className="sub">Car:</div> {ride.carName}</p>
                <p className="entity1"><div className="sub">Car Number:</div> {ride.carNumber}</p>
                <p className="entity1"><div className="sub">Car Type:</div> {ride.carType}</p>
                <p className="entity1"><div className="sub">Driver:</div> {ride.driverName} </p>
                <p className="entity1"><div className="sub">Driver Contact:</div> {ride.driverContact}</p>
                <p className="entity1"><div className="sub">From:</div> {ride.source} </p>
                <p className="entity1"><div className="sub">At:</div> {ride.startDate} </p>
                <p className="entity1"><div className="sub">To:</div> {ride.destination} </p>
                <p className="entity1"><div className="sub">At:</div> {ride.destinationDate} </p>
                <p className="entity1"><div className="sub">Rating:</div> {ride.driverRating} stars </p>
                {user._id !== ride.driverId && <button
                    className="bookBtn hover:bg-yellow-600"
                    onClick={()=>{bookHandler(ride._id)}}
                    >Book
                </button>}
            </div>
        </RideInfoModal>
        {confirmModal && <div className="modal">
          <Modal open={confirmModal}>
            <div className="message">
              <img src={checkFinalFinal} className="imgCheck"></img>
              Booking Confirmed
            </div>
          </Modal>
        </div>}
    </div>
    </>
    );
}
export default Browse;