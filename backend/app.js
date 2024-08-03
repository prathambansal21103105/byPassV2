const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const temp = require("dotenv").config();
const port = 4000;
const url = process.env.URL_MONGODB;
app.use(cors({ origin: "*" }));
app.use(express.json());


mongoose.connect(url).then(()=>{ 
  const User = require("./models/User");
  const Ride = require("./models/Ride");
  const fetchRides = async(id,flag) => {
    if(flag){
      const driver = await Ride.find({driverId:{$eq: id}});
      return driver;
    }
    else{
      const passenger = await Ride.find({passengerId:{$eq: id}});
      return passenger;
    }
  }
  app.get("/",(req,res)=>{
    
  })
  
  app.post("/login",async(req,res)=>{
    const data = req.body;
    const user = await User.findOne({email:data.email});
    console.log(user);
    if(!user){
      console.log("No such user exists");
      res.status(404).json({"message":"User not found."});
    }
    else{
      if(user.password === data.password){
        console.log("User logged in");
        res.json({"message":"logged in","user":user});
      }
      else{
        res.status(401).json({"message":"Use valid login credentials"})
      }
    }
  })
  
  app.post("/register",async(req,res)=>{
    const data = req.body;
    console.log(data);
    const userExists = await User.findOne({email:data.email});
    if(userExists){
      console.log("User already exists");
      res.status(401).json({"message":"User already exists"});
    }
    else{
      console.log("user created");
      const user = new User(data);
      const id = await user.save();
      console.log(id);
      res.json({"message":"user created"});
    }
  })

  app.post("/updateUser",async(req,res)=>{
    console.log("Yes");
    const data = req.body;
    console.log(data);
    const val = await User.updateOne({email:data.email},{$set:{username:data.username, mobileNumber:data.mobileNumber, password:data.password, city:data.city, code:data.code, car:data.car, type:data.type, color:data.color, carNum:data.carNum, rating:data.rating}})
    console.log(val);
    res.json({"message":"user updated"});
  })
  
  app.post("/fetchRides", async(req,res)=>{
    const data = req.body;
    console.log(data);
    const driver = await fetchRides(data.id,true);
    const passenger = await fetchRides(data.id,false);
    console.log(driver);
    console.log(passenger);
    res.json({"message":"rides fetched", "driver":driver, "passenger":passenger});
  })

  app.post("/searchRides", async(req,res)=>{
    const data = req.body;
    console.log(data);
    const rides = await Ride.find({source:{$eq: data.source}, destination:{$eq: data.destination}, passengerId:{$eq: ""}});
    console.log(rides);
    res.json({"message":"search completed", "rides":rides});
  })

  app.post("/createRide", async(req,res)=>{
    const data = req.body;
    const ride = new Ride(data);
    const id = await ride.save();
    console.log(id);
    res.json({"message":"ride published"});
  })

  app.post("/bookRide", async(req,res)=>{
    const data = req.body;
    const rideId = data.rideId;
    const passengerId = data.passengerId;
    const passengerContact = data.passengerContact;
    console.log(data);
    const val = await Ride.updateOne({_id:rideId},{$set:{passengerId:passengerId, passengerContact:passengerContact}});
    if(val.modifiedCount === 1){
      res.json({"message":"booking confirmed"});
    }
    else{
      res.json({"message":"error"});
    }
  })
  
  app.listen(port, async() => {
    console.log("Server is running on port:" + port);
  });
}).catch(()=> console.log("Error Connecting to Database...."))


