//http package --> node js --> core module
//express module MERN -->e --> express
//import, require

const express = require('express');
const app = express();
const mongoose = require('mongoose');
//server apache tomcat, weblogic, websphere 3rd party
//server creation
//devtool --> nodemon
const PORT = 3000;
const userRoutes = require("./routes/UserRoutes");



//db connection

mongoose.connect("mongodb://127.0.0.1:27017/nodeevngen",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})



//localhost:3000/user/users
app.use("/user",userRoutes);

// app.get("/users",(req,res)=>{

//     userSchema.find().then((users)=>{
//         res.status(200).json({
//             message:"users fetched",
//             users:users
//         })

//     }).catch((err)=>{
//         res.status(500).json({
//             message:"error occured",
//             error:err
//         })
//     })

// })



app.listen(PORT,()=>{
    console.log("server started",PORT);
})