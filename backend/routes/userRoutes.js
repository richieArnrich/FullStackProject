const express = require("express");

const userController = require("../controllers/userControlers");

const router = express.Router();

// console.log(userController);

router.post("/createuser", userController.createUser);
router.get("/getAllusers", userController.getAllUsers);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser/:id", userController.updateUser);

module.exports = router;
