require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./router/register");
const authRoutes = require("./router/login");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/register", userRoutes);
app.use("/login", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
