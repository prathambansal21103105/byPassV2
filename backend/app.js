const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const temp = require("dotenv").config();
const port = process.env.PORT || 4000;
const url = process.env.URL_MONGODB;
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/",(req,res)=>{
    
})

app.post("/login",(req,res)=>{

})

app.post("/register",(req,res)=>{

})

app.get("/fetchRides", (req,res)=>{

})

app.listen(port, () => {
  console.log("Server is running on port 4000.");
});
