// import Logo from '../Images/edit.jpeg';
import { useState } from "react";

const Profile=()=>{
    const [form,setForm]=useState(false);
    const url="https://cdn.racingnews365.com/Riders/Hamilton/_570x570_crop_center-center_none/f1_2024_lh_mer_lg.png?v=1708704226";
    const [email,setEmail]=useState("lhamilton@gmail.com");
    const [phone,setPhone]=useState("9998887779");
    const [city,setCity]=useState("Chicago");
    const [code,setCode]=useState("998899");

    return(
    <>
        <div className="root1">
            <div className="user">
                <div className="content">
                    <span className="nameHead">Lewis Hamilton</span>
                    <img src={url} alt={"photo"} className="img1" />
                    @lhamilton90
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
            {/* <div className="info"> */}

                {/* jfkdlsjfkdslj */}
                {/* <div className="outerContainer"> */}
                {/* <span className="title">Basic Info </span> */}
                {/* <div className="content1"> */}
                {/* <div className="qs">
                    Email       
                    <br></br>
                    Phone Number 
                    <br></br>
                    City
                    <br></br>
                    Pin Code
                    <br></br>
                    {/* Aadhar Card */}
                    {/* <br></br> */}
                {/*</div> */}
                {/* <div className="form">
                    lhamilton@gmail.com
                    <br></br>
                    9998887779 
                    <br></br>
                    Chicago
                    <br></br>
                    998899
                    <br></br>
                    <span className="greenBold">Verified</span>
                    <br></br>
                </div> */}
                {/* <div className="form">
                    <input type="text" className="formActual" value={email}></input>
                    <br></br>
                    <input type="text" className="formActual" value={phone}></input>
                    {/* 9998887779  */}
                    {/* <br></br> */}
                    {/* <input type="text" className="formActual" value={city}></input> */}
                    {/* Chicago */}
                    {/* <br></br> */}
                    {/* <input type="text" className="formActual" value={code}></input> */}
                    {/* 998899 */}
                    {/* <br></br> */}
                    {/* <span className="greenBold">Verified</span> */}
                    {/* <br></br> */}
                {/* </div> */}
                {/* </div> */}
                {/* <button className="edit"> Edit </button> */}
                {/* </div>  */}
                {/* <div className="outerContainer">
                <span className="title">Past rides</span>
                <div className="content3">
                <div className="qs">
                   
                </div>
                {/* <div className="form">

                </div> */}
                {/* </div> */}
                {/* </div>  */}
            {/* </div> */}
        <div className="info gap-y-20">
                {/* <div className="ques">
                Email:
                Phone Number:
                City:
                Code:
                </div> */}
        <form className="text-center pb-7 pt-7 mr-7 ml-7 border-solid-white">
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
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
                onChange={(e) => setCity(e.target.value)}
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
                onChange={(e) => setCode(e.target.value)}
                value={code}
              />
            </div>
            </div>
            </form>
            <form className="text-center">
            <div className="text-2xl text-white-900 mb-4 font-bold ">Vehicle Info</div>
            <div className="w-full py-2  flex items-center gap-2 rounded-md">
            <div className="w-half h-full flex flex-col md:flex-row m-auto">
              <label htmlFor="email" className="text-1xl text-yellow-400 mr-2">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full h-full text-1xl bg-transparent outline-none  placeholder:text-yellow-50 text-yellow-300 border-b-2 border-white-400 ml-2"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
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
                onChange={(e) => setCity(e.target.value)}
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
                onChange={(e) => setCode(e.target.value)}
                value={code}
              />
            </div>
            </div>
            </form>
        </div>
        </div>
    </>
    );
}
export default Profile;