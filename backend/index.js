const express = require("express"); //import express
const cors = require("cors");
const mongoose = require("mongoose"); // import mongoose driver

const app = express(); //instantiating express
const userRoutes = require("./routes/userRoutes");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyFsProject");
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in connecting db.. ", error);
  }
};

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use(express.json());
app.use(cors());
console.log(userRoutes);
app.use("/users", userRoutes);
app.listen(4000, () => {
  connect();
  console.log("server started on port 4000");
});
