//http package --> node js --> core module
//express module MERN -->e --> express
//import, require

const express = require('express');
const app = express();
const config =  require('./config.js');




const mongoose = require('mongoose');
app.use(express.json());
//allow url encoded data
app.use(express.urlencoded({extended:true}));
//form-data... ??
//server apache tomcat, weblogic, websphere 3rd party
//server creation
//devtool --> nodemon
const PORT = config.PORT;
const userRoutes = require("./routes/UserRoutes");
const roleRoutes = require("./routes/RoleRoutes");
const productRoutes = require("./routes/ProductRoutes");
const cartRoutes = require("./routes/CartRoutes");
const studentRoutes = require("./routes/StudentRoutes");
//const uploadRoutes = require("./routes/FileRoutes");



//db connection
const dbUrl = config.DB_URL;
console.log("db url...",dbUrl);
//mongo url --> mongodb://localhost:27017/ecom
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})



//localhost:3000/user/users
app.use("/user",userRoutes);
app.use("/role",roleRoutes);
app.use("/product",productRoutes);
app.use("/cart",cartRoutes);
app.use("/student",studentRoutes);
//app.use("/upload",uploadRoutes);

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