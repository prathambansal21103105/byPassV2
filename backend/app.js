const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const temp = require("dotenv").config();
const port = process.env.PORT || 4000;
const url = process.env.URL_MONGODB;
app.use(cors({ origin: "*" }));
app.use(express.json());
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB Atlas database");
  })
  .catch((err) => {
    console.log(url);
    console.log("MongoDB Atlas server not connected");
    console.error(err);
  });

app.get("/", (req, res) => {
  console.log("Hi");
});

app.listen(port, () => {
  console.log("Server is running on port 4000.");
});
