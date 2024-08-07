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
const http = require('http');
const { Server } = require("socket.io");
const Notification = require("./models/Notification");

// app.use
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// server.listen(4000, () => {
//   console.log("server is running");
// })


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.use(cors({ origin: "*" }));
app.use(express.json());

let users = [];

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
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
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
  const fetchNotifications = async(id,flag) => {
    if(flag){
      const driver = await Notification.find({driverId:id, status:""});
      return driver;
    }
    else{
      const passenger = await Notification.find({passengerId:id, status:{$ne:""}});
      return passenger;
    }
  }
  app.get("/",(req,res)=>{
    
  })
  
  app.post("/login",async(req,res)=>{
    const data = req.body;
    const user = await User.findOne({email:data.email});
    if(!user){
      res.status(404).json({"message":"User not found."});
    }
    else{
      if(user.password === data.password){
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
    const userExists = await User.findOne({email:data.email});
    if(userExists){
      res.status(401).json({"message":"User already exists"});
    }
    else{
      const user = new User(data);
      const id = await user.save();
      res.json({"message":"user created", "id": id});
    }
  })

  app.post("/updateUser",async(req,res)=>{
    const data = req.body;
    const val = await User.updateOne({email:data.email},{$set:{username:data.username, mobileNumber:data.mobileNumber, password:data.password, city:data.city, code:data.code, car:data.car, type:data.type, color:data.color, carNum:data.carNum, rating:data.rating}})
    // console.log(val);
    if(val.modifiedCount===1){
      req.session.user = data;
      // console.log(req.session.user);
    }
    res.json({"message":"user updated"});
  })
  
  app.post("/fetchRides", async(req,res)=>{
    const data = req.body;
    const driver = await fetchRides(data.id,true);
    const passenger = await fetchRides(data.id,false);
    res.json({"message":"rides fetched", "driver":driver, "passenger":passenger});
  })

  app.post("/searchRides", async(req,res)=>{
    const data = req.body;
    const rides = await Ride.find({source:{$eq: data.source}, destination:{$eq: data.destination}, passengerId:{$eq: ""}});
    res.json({"message":"search completed", "rides":rides});
  })

  app.post("/createRide", async(req,res)=>{
    const data = req.body;
    const ride = new Ride(data);
    const id = await ride.save();
    res.json({"message":"ride published", "id":id});
  })

  app.post("/bookRide", async(req,res)=>{
    console.log("bookRide");
    const data = req.body;
    const rideId = data.rideId;
    const passengerId = data.passengerId;
    const passengerContact = data.passengerContact;
    console.log(data);
    // notifyHost(data.driverId, {
    //   type: 'NEW_BOOKING',
    //   rideId: rideId,
    //   passengerId: passengerId,
    // });
    const val = await Ride.updateOne({_id:rideId},{$set:{passengerId:passengerId, passengerContact:passengerContact}});
    console.log(val);
    if(val.modifiedCount === 1){
      res.json({"message":"booking confirmed"});
    }
    else{
      res.json({"message":"error"});
    }
  })

  app.post("/createNotification", async(req,res)=>{
    const data = req.body;
    console.log(data);
    const notificationExists = await Notification.findOne({rideId:data.rideId, driverId:data.driverId, passengerId:data.passengerId, status:""});
    if(notificationExists){
      res.status(200).json({"message":"notification already sent!"});
    }
    else{
      const notification = new Notification(data);
      const id = await notification.save();
      console.log("notification created "+id);
      res.status(200).json({"message":"notification created", "id":id});
    }
  })

  app.post("/getNotifications", async(req,res)=>{
    const data = req.body;
    console.log("info");
    console.log(data);
    const driver = await fetchNotifications(data.id,true);
    const passenger = await fetchNotifications(data.id,false);
    console.log("driver");
    console.log(driver);
    console.log(passenger);
    res.status(200).json({driver:driver,passenger:passenger});
  })

  app.post("/updateNotifications", async(req,res)=>{
    const data = req.body;
    const id = data.id;
    const flag = data.flag;
    let val = "false";
    if(flag){
      val = "true";
    }
    else{
      val = "false";
    }
    console.log(id);
    console.log(val);
    // console.log(data);
    const updateData = await Notification.updateOne({_id:id},{$set:{status:val}})
    // console.log(updateData);
    if(updateData.modifiedCount === 1){
      res.status(200).json({message:"updated notification"})
    }
    else{
      res.status(200).json({message:"error caught"})
    }
  })

  app.get("/destroy", (req,res)=>{
    // console.log("destroy");
    req.session.destroy();
    res.status(200).json({message:"Successfully logged out"});
  })

  app.get("/getUser", (req,res)=>{
    // console.log("getUser");
    if(req.session && req.session.user){
      // console.log(req.session.user);
      res.status(200).json({user:req.session.user});
    }
    else{
      // console.log(req.session.user);
      res.status(200).json({user:null});
    }
  })

  io.on("connection",(socket)=>{
    // console.log("user connected:" + socket.id);
    socket.on("request_ride", (data)=>{
      // console.log("from_passenger");
      // console.log(data);
      socket.broadcast.emit("from_passenger", data);
    })
    socket.on("accept_decline_ride", (data)=>{
      // console.log(data);
      socket.broadcast.emit("from_driver", data);
    })
  })
  

  // Create an HTTP server and bind the Express app to it
  // const server = http.createServer(app);
  
  // WebSocket server setup
  // const wss = new WebSocket.Server({ server });
  
  // let clients = [];

  // wss.on('connection', (ws) => {
  //   clients.push(ws);

  //   ws.on('message', (message) => {
  //     console.log(`Received message: ${message}`);
  //   });

  //   ws.on('close', () => {
  //     clients = clients.filter(client => client !== ws);
  //   });
  // });

  // function notifyHost(hostId, notification) {
  //   clients.forEach(client => {
  //     if (client.hostId === hostId) {
  //       client.send(JSON.stringify(notification));
  //     }
  //   });
  // }
  
  server.listen(port, async() => {
    console.log("Server is running on port:" + port);
  });
}).catch(()=> console.log("Error Connecting to Database...."))

// profile image
