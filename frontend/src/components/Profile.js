// import Logo from '../Images/edit.jpeg';
import { useState } from "react";
import check from '../Images/goldCheckMarkImg.png';
import checkFinalFinal from '../Images/checkFinal2.gif';
import carMoveFinal from '../Images/carMoveFinal.gif';
import Modal from "./Modal";
import Ride from './Ride';

const Profile=()=>{
    const url="https://cdn.racingnews365.com/Riders/Hamilton/_570x570_crop_center-center_none/f1_2024_lh_mer_lg.png?v=1708704226";
    const [email,setEmail]=useState("lhamilton@gmail.com");
    const [phone,setPhone]=useState("9998887779");
    const [city,setCity]=useState("Chicago");
    const [code,setCode]=useState("998899");
    const [car,setCar]=useState("Audi");
    const [type,setType]=useState("type");
    const [color,setColor]=useState("Black");
    const [no,setNo]=useState("CA 12345678");
    const [profile,setProfile]=useState({email,phone,city,code,car,type,color,no});
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
    console.log(typeof rides);

    const submitHandler=()=>{
      setChange(false);
      const newState = {email,phone,city,code,car,type,color,no};
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
      setProfile(newState);
      setModal(true);
      setTimeout(()=>{setModal(false)},3000);
    }

    return(
    <>
        <div className="root1">
            <div className="user">
                <div className="content">
                    <span className="nameHead">Lewis Hamilton</span>
                    <img src={url} alt={"photo"} className="img1" />
                    {email}
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
                        ⭐️ 5
                        <br></br>
                        <span class="bold">Rating</span>
                    </div>
                    </div>
                </div>
            </div>
        <div className="info">
        <form className="text-center pb-4 pt-7 mr-7 ml-7 border-solid-white">
            <div className="text-2xl text-white-900 mb-4 font-bold ">Personal Info</div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto">
              <label htmlFor="email" className="text-1xl text-yellow-400 mr-2">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
                onChange={(e) => {setEmail(e.target.value); setChange(true);}}
                value={email}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto ">
              <label htmlFor="text" className="text-1xl text-yellow-400 mr-2">
                Phone:
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
                onChange={(e) => {setPhone(e.target.value); setChange(true);}}
                value={phone}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto ">
              <label htmlFor="text" className="text-1xl text-yellow-400 mr-2">
                City:
              </label>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
                onChange={(e) => {setCity(e.target.value); setChange(true);}}
                value={city}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto selection:">
              <label htmlFor="text" className="text-1xl text-yellow-400 mr-2">
                Code:
              </label>
              <input
                type="text"
                placeholder="Enter Code"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
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
              <label htmlFor="text" className="text-1xl text-yellow-400 mr-2">
                Car:
              </label>
              <input
                type="text"
                placeholder="Name of Car"
                className="w-full h-full text-1xl bg-transparent outline-none placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
                onChange={(e) => {setCar(e.target.value); setChange(true);}}
                value={car}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto">
              <label htmlFor="email" className="text-1xl text-yellow-400 mr-2">
                Type:
              </label>
              <input
                type="text"
                placeholder="Enter Type"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
                onChange={(e) => {setType(e.target.value); setChange(true);}}
                value={type}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto ">
              <label htmlFor="text" className="text-1xl text-yellow-400 mr-2">
                Color:
              </label>
              <input
                type="text"
                placeholder="Enter Color"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
                onChange={(e) => {setColor(e.target.value); setChange(true);}}
                value={color}
              />
            </div>
            </div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto selection:">
              <label htmlFor="text" className="text-1xl text-yellow-400 mr-2">
                No.:
              </label>
              <input
                type="text"
                placeholder="Enter number"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
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