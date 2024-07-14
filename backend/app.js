require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./router/register");
const authRoutes = require("./router/login");
const cookieParser = require("cookie-parser");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    //   origin: ["https://fruits-wala.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// routes
app.use("/register", userRoutes);
app.use("/login", authRoutes);

const port = process.env.PORT;
app.listen(port, console.log(`Listening on port ${port}...`));