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

const updateUser=async(data)=>{
  const res=await fetch("http://localhost:4000/updateUser",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
  })
  const resBody=res.json();
  return resBody;
}

const Profile=()=>{
    const dispatch=useDispatch();
    const user = useSelector((state)=>{
      return state.user;
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
    const [rides, setRides]=useState([
      {"source":"Gurgaon", "destination":"Delhi", "start":"6:00 AM", "end":"6:47 AM", "date":"1 Jan", "id":"1"},
      {"source":"Delhi", "destination":"Chandigarh", "start":"7:00 AM", "end":"11:00 AM", "date":"1 Jan", "id":"2"},
      {"source":"Bangalore", "destination":"Chennai", "start":"10:00 AM", "end":"6:47 AM", "date":"2 Jan", "id":"3"},
      {"source":"Bombay", "destination":"Goa", "start":"11:00 AM", "end":"2:00 PM", "date":"3 Jan", "id":"4"},
      {"source":"Noida", "destination":"Delhi", "start":"2:00 PM", "end":"6:47 PM", "date":"4 Jan", "id":"5"},
      {"source":"Bombay", "destination":"Chennai", "start":"11:00 AM", "end":"2:00 PM", "date":"7 Jan", "id":"6"},
    ])
    
    console.log("In Profile page");
    console.log(user);
    console.log(typeof rides);

    const submitHandler=async()=>{
      setChange(false);
      const newState = {email,mobileNumber,city,code,car,type,color,carNum:no,username:user.username,rating:user.rating,password:user.password};
      let flag=0;
      for(const key in profile){
        if(profile[key] !== newState[key]){
          flag=1;
        }
      }
      if(flag==1){
        console.log(profile);
        console.log(newState);
        // redux data update
        console.log("state changed");
      }
      const resBody = await updateUser(newState);
      console.log(resBody);
      if(resBody.message === "user updated"){
        setProfile(newState);
        setModal(true);
        dispatch(userActions.setUser(newState));
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
                        2
                        <br></br>
                        <span class="bold">Ongoing</span>
                    </div>
                    <div className="card">
                        2
                        <br></br>
                        <span class="bold">Completed</span>
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
          <div className="heading">Completed Trips</div>
          <ul>
          {rides.map(ride => 
            <li key={ride["id"]}>
              <Ride ride={ride}/>
            </li>
          )}
            </ul>
        </div>
        <div className="info1">
          <div className="heading">Completed Trips</div>
          <ul>
          {rides.map(ride => 
            <li key={ride["id"]}>
              <Ride ride={ride}/>
            </li>
          )}
            </ul>
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
    </>
    );
}
export default Profile;