const User = require("../models/userSchema");

const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.send({
      status: 200,
      message: "new user created",
    });
  } catch (error) {
    res.send({
      status: 500,
      error: error,
      message: "could not create new user",
    });
  }
};

const getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  try {
    res.send({
      status: 200,
      users: allUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getAllUsers };
