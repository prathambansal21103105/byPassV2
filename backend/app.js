const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 4000;
const url = process.env.URL_MONGODB;
const session = require('express-session');
const cookieParser =  require("cookie-parser");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, authorization')
  res.header('Access-Control-Allow-Origin',req.headers.origin);
  res.header('Access-Control-Allow-Methodss',"GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH");
  res.setHeader('Access-Control-Allow-Credentials', true);
res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, authorization')
res.setHeader('Content-Type', 'application/json');
res.setHeader('Access-Control-Allow-Origin','http://localhost:3001');
res.setHeader('Access-Control-Allow-METHODS',"GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH");
  next();
});

app.use(
  cors({
    origin: ["http://localhost:3001", "http://127.0.0.1:3001"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    exposedHeaders:["set-cookie"]
  })
);
app.use(cookieParser());
// const db = mongoose.connection;
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: 'AUKHHACHLREHA',
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite:'lax',
      secure: false,
      maxAge: 60 * 60 * 1000 * 24,
      httpOnly: true,
    },
    store: MongoStore.create({ mongoUrl: url }),
  })
);

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
    // console.log(user);
    if(!user){
      // console.log("No such user exists");
      res.status(404).json({"message":"User not found."});
    }
    else{
      if(user.password === data.password){
        // console.log("User logged in");
        // req.session.user= JSON.stringify(user);
        req.session.user = user;
        // console.log(req.sessionID);
        // console.log(req.session);
        // console.log("################")
        res.json({"message":"logged in","user":user});
      }
      else{
        res.status(401).json({"message":"Use valid login credentials"})
      }
    }
  })
  
  app.post("/register",async(req,res)=>{
    const data = req.body;
    // console.log(data);
    const userExists = await User.findOne({email:data.email});
    if(userExists){
      // console.log("User already exists");
      res.status(401).json({"message":"User already exists"});
    }
    else{
      // console.log("user created");
      const user = new User(data);
      const id = await user.save();
      // console.log(id);
      res.json({"message":"user created"});
    }
  })

  app.post("/updateUser",async(req,res)=>{
    // console.log("Yes");
    const data = req.body;
    // console.log(data);
    const val = await User.updateOne({email:data.email},{$set:{username:data.username, mobileNumber:data.mobileNumber, password:data.password, city:data.city, code:data.code, car:data.car, type:data.type, color:data.color, carNum:data.carNum, rating:data.rating}})
    console.log(val);
    if(val.modifiedCount===1){
      req.session.user = data;
      console.log(req.session.user);
    }
    res.json({"message":"user updated"});
  })
  
  app.post("/fetchRides", async(req,res)=>{
    const data = req.body;
    // console.log(data);
    // console.log("session");
    // console.log(req.sessionID);
    // console.log(req.session)
    // console.log(req.session.user)
    const driver = await fetchRides(data.id,true);
    const passenger = await fetchRides(data.id,false);
    // console.log(driver);
    // console.log(passenger);
    res.json({"message":"rides fetched", "driver":driver, "passenger":passenger});
  })

  app.post("/searchRides", async(req,res)=>{
    const data = req.body;
    // console.log(data);
    const rides = await Ride.find({source:{$eq: data.source}, destination:{$eq: data.destination}, passengerId:{$eq: ""}});
    // console.log(rides);
    res.json({"message":"search completed", "rides":rides});
  })

  app.post("/createRide", async(req,res)=>{
    const data = req.body;
    const ride = new Ride(data);
    const id = await ride.save();
    // console.log(id);
    res.json({"message":"ride published"});
  })

  app.post("/bookRide", async(req,res)=>{
    const data = req.body;
    const rideId = data.rideId;
    const passengerId = data.passengerId;
    const passengerContact = data.passengerContact;
    // console.log(data);
    const val = await Ride.updateOne({_id:rideId},{$set:{passengerId:passengerId, passengerContact:passengerContact}});
    if(val.modifiedCount === 1){
      res.json({"message":"booking confirmed"});
    }
    else{
      res.json({"message":"error"});
    }
  })

  app.get("/destroy", (req,res)=>{
    console.log("destroy");
    req.session.destroy();
    // console.log(req.session);
    res.status(200).json({message:"Successfully logged out"});
  })

  app.get("/getUser", (req,res)=>{
    console.log("getUser");
    if(req.session && req.session.user){
      console.log(req.session.user);
      res.status(200).json({user:req.session.user});
    }
    else{
      console.log(req.session.user);
      res.status(200).json({user:null});
    }
  })
  
  app.listen(port, async() => {
    console.log("Server is running on port:" + port);
  });
}).catch(()=> console.log("Error Connecting to Database...."))

// car image
// profile image
