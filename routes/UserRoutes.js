const express = require('express');
const router = express.Router();
const userController = require("../controller/UserController");
const authUtil = require("../util/AuthUtil")
const authtokenUtil = require("../util/AuthTokenUtil")

router.get("/user",authtokenUtil.authUser,userController.getAllUsers);
//router.get("/user",authUtil.authUtil("123455"),userController.getAllUsers);
router.get("/user/:id",userController.getUserById);
router.get("/user/name/:name",userController.getUserbyName);
router.post("/user",userController.addUser1);
router.delete('/user/:id',userController.deleteUser);
router.put('/user/:id',userController.updateUser);
router.get('/user1',userController.getAllUsersWithRole)
module.exports = router;