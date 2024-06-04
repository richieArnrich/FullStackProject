const express = require("express"); //import express

const mongoose = require("mongoose"); // import mongoose driver

const app = express(); //instantiating express

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

app.listen(4000, () => {
  connect();
  console.log("server started on port 4000");
});
