const express = require('express');
const router = express.Router();
const userController = require("../controller/UserController");
router.get("/users",userController.getAllUsers);
router.get("/user/:id",userController.getUserById);
router.get("/user/name/:name",userController.getUserbyName);
module.exports = router;