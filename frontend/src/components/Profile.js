// import Logo from '../Images/edit.jpeg';
import { useState } from "react";
import check from '../Images/goldCheckMarkImg.png';
import checkFinalFinal from '../Images/checkFinal2.gif';
import carMoveFinal from '../Images/carMoveFinal.gif';
import Modal from "./Modal";
import Ride from './Ride';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { useEffect } from "react";
import { ridesActions } from "../store/rides";
import arrowImage from '../Images/arrowImg.svg';
import RideInfoModal from "./RideInfoModal";
import cross from "../Images/cross2.png";
import sedan from '../Images/carBlack.webp';
import luxury from '../Images/luxury3.png';
import miniVan from '../Images/truck.webp';
import axios from "axios";

const lastN = (arr, n = 1) => arr.slice(-n);

const fetchRides = async(data) => {
  // console.log(data);
  try{
    console.log("fetch ride call");
    console.log(data);
    const res = await axios.post("http://localhost:4000/fetchRides", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // Include credentials like cookies
    });
    return res.data;
  }
  catch(e){
    console.log("error in fetching rides" + e);
  }
  return {};
}

const updateUser=async(data)=>{
  try{
    const res = await axios.post("http://localhost:4000/updateUser", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // Include credentials like cookies
    });
    return res.data;
  }
  catch(e){
    console.log("error caught " + e);
  }
  return {};
}

const Profile=()=>{
    const dispatch=useDispatch();
    let carType = sedan;
    const user = useSelector((state)=>{
      return state.user;
    })
    const login = useSelector((state)=>{
      return state.login;
    })
    const host = useSelector((state)=>{
      return state.rides.hostRides;
    })
    const guest = useSelector((state)=>{
      return state.rides.guestRides;
    })
    const url="https://cdn.racingnews365.com/Riders/Hamilton/_570x570_crop_center-center_none/f1_2024_lh_mer_lg.png?v=1708704226";
    const [email,setEmail]=useState(user.email);
    const [mobileNumber,setMobileNumber]=useState(user.mobileNumber);
    const [city,setCity]=useState(user.city);
    const [code,setCode]=useState(user.code);
    const [car,setCar]=useState(user.car);
    const [type,setType]=useState(user.type);
    const [color,setColor]=useState(user.color);
    const [no,setNo]=useState(user.carNum);
    const [profile,setProfile]=useState(user);
    const [change,setChange]=useState(false);
    const [modal,setModal]=useState(false);
    const [flag,setFlag]=useState(false);
    // const [rides, setRides]=useState([]);
    const [selectedRide, setSelectedRide]=useState("");
    const [confirmModal, setConfirmModal]=useState(false);
    if(selectedRide.carType === "Luxury"){
      carType = luxury;
    }
    if(selectedRide.carType === "Mini Van"){
      carType = miniVan;
    }
    let headingRides = "";
    if(flag){
      headingRides = "Published Rides";
    }
    else{
      headingRides = "Booked Rides";
    }
  
    useEffect(()=>{
      
      const fetchData = async() => {
        const userRides = await fetchRides({id:user._id});
        const driverRides = userRides.driver;
        const passengerRides = userRides.passenger;
        const message = userRides.message;
        // console.log(driverRides);
        // console.log(passengerRides);
        let x=0;
        let y=0
        if(driverRides){
          // console.log("YES");
          x = (driverRides.length > 6) ? 6:driverRides.length;
        }
        if(passengerRides){
          // console.log("NO");
          y = (passengerRides.length > 6) ? 6:passengerRides.length;
        }
        let driver=[];
        let passenger=[];
        if(driverRides){
          // driver = lastN(driverRides,x);
          // driver = driverRides.slice(0,x);
          driver = driverRides;
          driver.reverse();
          // console.log(driver);
          // console.log(driver);
        }
        if(passengerRides){
          // passenger = lastN(passengerRides,y);
          // passenger = passengerRides.slice(0,y);
          passenger = passengerRides;
          passenger.reverse();
          // console.log(passenger);
        }
        if(message === "rides fetched"){
          console.log("rides fetched");
          // console.log(driver);
          dispatch(ridesActions.setHostRides({hostRides:driver}));
          dispatch(ridesActions.setGuestRides({guestRides:passenger}));
        }
      }
      // setTimeout(()=>{
      if(login && user.id!==""){
        console.log("useEffect");
        console.log(login);
        console.log(user);
        fetchData();
      }
      // },2000)
    },[user]);
    

    const submitHandler=async()=>{
      setChange(false);
      const newState = {email,mobileNumber,city,code,car,type,color,carNum:no,username:user.username,rating:user.rating,password:user.password,_id:user._id};
      let flag=0;
      for(const key in profile){
        if(profile[key] !== newState[key]){
          flag=1;
        }
      }
      if(flag==1){
        // console.log(profile);
        // console.log(newState);
        // redux data update
        // console.log("state changed");
      }
      console.log(newState);
      setProfile(newState);
      setModal(true);
      dispatch(userActions.setUser(newState));
      const resBody = await updateUser(newState);
      // console.log(resBody);
      if(resBody.message === "user updated"){
        setTimeout(()=>{setModal(false)},3000);
      }
    }

    return(
    <>
        <div className="root1">
            <div className="user">
                <div className="content">
                    <span className="nameHead">{user.username}</span>
                    <img src={url} alt={"photo"} className="img1" />
                    {user.email}
                    <div className="root2">
                    <div className="card">
                        {host.length}
                        <br></br>
                        <span class="bold">Published</span>
                    </div>
                    <div className="card">
                        {guest.length}
                        <br></br>
                        <span class="bold">Booked</span>
                    </div>
                    <div className="card">
                        {`${user.rating} ⭐️`}
                        <br></br>
                        <span class="bold">Rating</span>
                    </div>
                    </div>
                </div>
            </div>
        <div className="info form2">
        <form className="text-center pb-4 pt-7 mr-7 ml-7 border-solid-white">
            <div className="text-2xl text-white-900 mb-4 font-bold ">Personal Info</div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto">
              <div className="labelDiv">
              <label htmlFor="email" className="text-1xl text-yellow-400 ">
                Email:
              </label>
              </div>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => {setEmail(e.target.value); setChange(true);}}
                value={email}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto ">
            <div className="labelDiv">
              <label htmlFor="text" className="text-1xl text-yellow-400 ">
                Phone:
              </label>
              </div>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => {setMobileNumber(e.target.value); setChange(true);}}
                value={mobileNumber}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto ">
            <div className="labelDiv">
              <label htmlFor="text" className="text-1xl text-yellow-400">
                City:
              </label>
              </div>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => {setCity(e.target.value); setChange(true);}}
                value={city}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto selection:">
            <div className="labelDiv">
              <label htmlFor="text" className="text-1xl text-yellow-400">
                Code:
              </label>
              </div>
              <input
                type="text"
                placeholder="Enter Code"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => { setCode(e.target.value); setChange(true);}}
                value={code}
              />
            </div>
            </div>
            </form>
            <form className="text-center pb-4 pt-7 mr-7 ml-7 border-solid-white">
            <div className="text-2xl text-white-900 mb-4 font-bold ">Vehicle Info</div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto ">
            <div className="labelDiv">
              <label htmlFor="text" className="text-1xl text-yellow-400">
                Car:
              </label>
              </div>
              <input
                type="text"
                placeholder="Name of Car"
                className="w-full h-full text-1xl bg-transparent outline-none placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => {setCar(e.target.value); setChange(true);}}
                value={car}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto">
            <div className="labelDiv">
              <label htmlFor="email" className="text-1xl text-yellow-400">
                Type:
              </label>
              </div>
              <input
                type="text"
                placeholder="Enter Type"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => {setType(e.target.value); setChange(true);}}
                value={type}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto ">
            <div className="labelDiv">
              <label htmlFor="text" className="text-1xl text-yellow-400">
                Color:
              </label>
              </div>
              <input
                type="text"
                placeholder="Enter Color"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => {setColor(e.target.value); setChange(true);}}
                value={color}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto selection:">
            <div className="labelDiv">
              <label htmlFor="text" className="text-1xl text-yellow-400">
                No.:
              </label>
              </div>
              <input
                type="text"
                placeholder="Enter number"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-4"
                onChange={(e) => {setNo(e.target.value); setChange(true);}}
                value={no}
              />
            </div>
            </div>
            </form>
            {change && <button className="checkButton" onClick={submitHandler}> <img src={check} className="check"></img></button>}
            {!change &&
              <div className="blank"> 
                <img src={carMoveFinal} className="carMove"></img> 
              </div>
            }
        </div>
        <div className="info1">
          <div className="heading">
            {headingRides}
            {flag && <button className="arrow" onClick={()=>{setFlag((state)=>!state)}}>{flag && <img src={arrowImage}></img>}</button>}
            {!flag && <button className="arrow1" onClick={()=>{setFlag((state)=>!state)}}>{!flag && <img src={arrowImage}></img>}</button>}
          </div>
          <div className="rideLists">
          <ul>
          {flag && host.map(ride => 
            <li onClick={()=>{setSelectedRide(ride);setConfirmModal(true);}} key={ride._id}>
              <Ride ride={ride}/>
            </li>
          )}
          {!flag && guest.map(ride => 
            <li onClick={()=>{setSelectedRide(ride);setConfirmModal(true);}} key={ride._id}>
              <Ride ride={ride}/>
            </li>
          )}
            </ul>
          </div>
        </div>
        </div>
        {modal && <div className="modal">
          <Modal open={modal}>
            <div className="message">
              <img src={checkFinalFinal} className="imgCheck"></img>
              Profile saved
            </div>
          </Modal>
        </div>}
      {confirmModal && <div className="modal">
        <RideInfoModal open={confirmModal}>
            <div className="message1">
                <div className="flexRow">
                    <button onClick={()=>{setConfirmModal(false)}} className="cross"><img src={cross}></img></button>
                </div>
                <img className="carH1" src={carType}></img>
                <p className="entity1"><div className="sub">Car:</div> {selectedRide.carName}</p>
                <p className="entity1"><div className="sub">Car Number:</div> {selectedRide.carNumber}</p>
                <p className="entity1"><div className="sub">Car Type:</div> {selectedRide.carType}</p>
                <p className="entity1"><div className="sub">Driver:</div> {selectedRide.driverName} </p>
                <p className="entity1"><div className="sub">Driver Contact:</div> {selectedRide.driverContact}</p>
                {selectedRide.passengerContact !=="" && <p className="entity1"><div className="sub">Guest Contact:</div> {selectedRide.passengerContact}</p>}
                <p className="entity1"><div className="sub">From:</div> {selectedRide.source} </p>
                <p className="entity1"><div className="sub">At:</div> {selectedRide.startDate} </p>
                <p className="entity1"><div className="sub">To:</div> {selectedRide.destination} </p>
                <p className="entity1"><div className="sub">At:</div> {selectedRide.destinationDate} </p>
                <p className="entity1"><div className="sub">Rating:</div> {selectedRide.driverRating} stars </p>
            </div>
        </RideInfoModal>
      </div>}
    </>
    );
}
export default Profile;