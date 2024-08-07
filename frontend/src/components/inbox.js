import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
import bell from '../Images/bell1.png';
import { motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notificationActions } from '../store/notifications';
import { bookRide } from './Browse';
import axios from "axios";
import NotificationCard from './NotificationCard';
import env from '../Images/env2.webp';
// import { initialRideState } from '../store/rides';
// import { userInitialState } from '../store/user';
// const socket = io.connect("http://localhost:4000");

const updateNotification = async(data) => {
    try{
        const res = await axios.post("http://localhost:4000/updateNotifications", data, {
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

const Mail = () => {
    // const dispatch = useDispatch();
    // const show = useSelector((state)=>{
    //     return state.notification.show;
    // })
    // const driver = useSelector((state)=>{
    //     return state.notification.hostRides;
    // })
    // const passenger = useSelector((state)=>{
    //     return state.notification.guestRides;
    // })
    const [show,setShow] = useState(false);
    const [driverRides,setDriverRides] = useState([]);
    const [passengerRides,setPassengerRides] = useState([]);
    const user = useSelector((state)=>{
        return state.user;
    })
    const [showResponse,setShowResponse] = useState(false);
    let classUse1 = "2";
    let classUse2 = "";
    if(!showResponse){
        classUse1 = "";
        classUse2 = "2";
    }
    console.log("user");
    console.log(user);
    const [load,setLoad] = useState(false);
    // const [notification,setNotification] = useState({});
    console.log(show);
    console.log(driverRides);
    console.log(passengerRides);
    const navigator = useNavigate();
    useEffect(()=>{
        const fetchNotifications = async(data) => {
            try{
                setLoad(true);
                const res = await axios.post("http://localhost:4000/getNotifications", data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true, // Include credentials like cookies
                });
                const resBody = await res.data;
                const driver = resBody.driver;
                const passenger = resBody.passenger;
                console.log(driver);
                console.log(passenger);
                let val=0;
                if(driver && driver.length !== 0){
                    setShow(true);
                    setDriverRides(driver);
                    // dispatch(notificationActions.setShow({show:true}));
                    // dispatch(notificationActions.setHostRides({driver:driver}));
                }
                else{
                    val=1;
                }
                if(passenger && passenger.length !== 0){
                    setShow(true);
                    setPassengerRides(passenger);
                    // dispatch(notificationActions.setShow({show:true}));
                    // dispatch(notificationActions.setGuestRides({passenger:passenger}));
                }
                else{
                    if(val==1){
                        setShow(false);
                        // dispatch(notificationActions.setShow({show:false}));
                    }
                }
                setLoad(false);
            }
            catch(e){
                console.log("error caught " + e);
            }
        }
        fetchNotifications({id:user._id});
    },[]);
    // useEffect(()=>{
    //     socket.on("from_passenger", (data)=>{
    //         console.log(data);
    //         if(data.driverId === user._id){
    //             const containsObject = driver.some(obj => obj.rideId === data.rideId && obj.driverId === data.driverId && obj.passengerId === data.passengerId);
    //             console.log(containsObject);
    //             if(!containsObject){
    //                 if(!show){
    //                     dispatch(notificationActions.setShow({show:true}));
    //                 }
    //                 dispatch(notificationActions.addHostRide({ride:data}));
    //                 console.log(data);
    //             }
    //         }
    //     })
    //     socket.on("from_driver", (data)=>{
    //         console.log(data);
    //         if(data.notification.passengerId === user._id){
    //             let flag = data.message === "YES";
    //             if(flag){
    //                 let dataNotification = data.notification;
    //                 dataNotification.status="true";
    //                 const containsObject = passenger.some(obj => obj.rideId === dataNotification.rideId && obj.driverId === dataNotification.driverId && obj.passengerId === dataNotification.passengerId);
    //                 if(!containsObject){
    //                     if(!show){
    //                         dispatch(notificationActions.setShow({show:true}));
    //                     }
    //                     dispatch(notificationActions.addGuestRide({ride:dataNotification}));
    //                 }
    //                 console.log(dataNotification);
    //             }
    //             else{
    //                 let dataNotification = data.notification;
    //                 dataNotification.status="false";
    //                 const containsObject = passenger.some(obj => obj.rideId === dataNotification.rideId && obj.driverId === dataNotification.driverId && obj.passengerId === dataNotification.passengerId);
    //                 if(!containsObject){
    //                     if(!show){
    //                         dispatch(notificationActions.setShow({show:true}));
    //                     }
    //                     dispatch(notificationActions.addGuestRide({ride:dataNotification}));
    //                 }
    //                 console.log(dataNotification);
    //             }
    //         }
    //     })
    // },[socket]);
    const submitHandler=async(notification,flag)=>{
        // setTimeout(async()=>{
            const newDriverRides = driverRides.filter((item) => item._id!==notification._id);
            console.log(newDriverRides);
            setDriverRides(newDriverRides);
            console.log({rideId:notification.rideId, passengerId:notification.passengerId, passengerContact: notification.passengerContact});
            console.log({id:notification._id, flag:false});
            if(flag){
                const res = await bookRide({rideId:notification.rideId, passengerId:notification.passengerId, passengerContact: notification.passengerContact})
                const resUpdate = await updateNotification({id:notification._id, flag:true});
                console.log(res);
                console.log(resUpdate);
                // if(res.message === "booking confirmed"){
                //     socket.emit("accept_decline_ride", {message:"YES", notification:notification});
                // }
            }
            else{
                const resUpdate = await updateNotification({id:notification._id, flag:false});
                console.log(resUpdate);
                // socket.emit("accept_decline_ride", {message:"NO", notification:notification});
            }
        // },3000); 
    }
    return(
        <>
        {load &&
        <div className='loadBox'>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*e_Loq49BI4WmN7o9ItTADg.gif" alt="loading" className='load'/>
        </div>
        }
        {!load && show && 
        <div className='messages'>
          
            <img src={env} className="env"/>
            { 
            
                <div className='messageCard1'>
                     <div className='messageType'>
                        <div className={'innerHead'+classUse1} onClick={()=>{setShowResponse(true)}}>
                        Booking Requests
                        </div>
                        <div className={'innerHead1'+classUse2} onClick={()=>{setShowResponse(false)}}>
                        Your Bookings
                        </div>
                    </div>
                </div>
            }
            { 
                <div className='messageCard'>
                    <div>
                        <ul>
                            {!showResponse && passengerRides.length === 0 &&<div className='defaultText'>You have no booking updates!!</div>}
                            {!showResponse && passengerRides.map((passengerNotification) =>
                            <li><NotificationCard notification={passengerNotification}> Hi {passengerNotification.passengerName}, {passengerNotification.driverName} has {passengerNotification.status==="true"? "accepted":"declined"} your ride request.{passengerNotification.status==="true"? ` Please contact your driver @ ${passengerNotification.driverContact}. Reach to the pickup spot by ${passengerNotification.startDate}. Have a safe ride. ${passengerNotification.source} ------- ${passengerNotification.destination}`:` Please look for more rides on the browse page. We hope you find your desired ride. You can try booking the same ride again. ${passengerNotification.source} ------- ${passengerNotification.destination}`}</NotificationCard></li>)} 
                            {showResponse && driverRides.length === 0 &&<div className='defaultText'>You have no booking requests!!</div>}
                            {showResponse && driverRides.map((driverNotification) =>
                            <li key={driverNotification._id}><NotificationCard notification={driverNotification}><div> Hey {driverNotification.driverName}, {driverNotification.passengerName} has requested a ride. From {driverNotification.source} to {driverNotification.destination} at {driverNotification.startDate}. Please send your confirmation to the request. <button onClick={()=>{submitHandler(driverNotification,true);}}><span className='green bold'>Accept</span></button> <button onClick={()=>{submitHandler(driverNotification,false);}}><span className='red bold'>Decline</span></button></div></NotificationCard></li>)}
                        </ul>
                    </div>
                </div>
            }
        </div>
        }
        {!load && !show &&
            <div className="default">
                <img className='bell' src={bell}></img>
                <p className='textBell'>No notifications yet!</p>
                <p className='textBell1'>Return to the home page</p>
                {/* <button>Home</button> */}
            <motion.div
            whileTap={{ scale: 0.8 }}
            className="bg-greenLeaf cursor-pointer rounded-lg p-2.5 text-black font-bold shadow-black-200 hover:shadow-sm hover:drop-shadow-md hover:shadow-black-400 w-max mx-auto mt-3"
            onClick={()=>{navigator("/")}}
            >
            Return to Home
            </motion.div>
            </div>
        }
        {/* {confirmModal && <div className="modal">
          <Modal open={confirmModal}>
            <div className="message">
              <img src={checkFinalFinal} className="imgCheck"></img>
              Ride booked successfully
            </div>
          </Modal>
        </div>} */}
        </>
    );
}
export default Mail;