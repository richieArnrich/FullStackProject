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

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.send({
      status: 200,
      deletedUser: deletedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body });
    res.send({
      status: 200,
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getAllUsers, deleteUser, updateUser };
