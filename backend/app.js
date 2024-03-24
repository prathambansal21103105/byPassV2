const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors({origin: '*'}))
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("Hi");
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000.");
})