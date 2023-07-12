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

//db connection

mongoose.connect("mongodb://127.0.0.1:27017/nodeevngen",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

var users =[
    {
        name:"john",
        age:20,
        city:"bangalore"
    },{
        name:"jay",
        age:22,
        city:"bangalore"
    }
]

app.get('/test',(req,res)=>{
    console.log("test api");
    //res.send("test api");
   // res.status(201).send("test api");
   res.status(200).json({
         message:"test api",
         success:true,
   })
})

app.get('/users',(req,res)=>{
    res.status(200).json({
        message:"users api",
        data:users,
    })
})

//:id --> path parameter
app.get('/users/:id',(req,res)=>{

    var id = req.params.id;
    console.log(id);
    res.status(200).json({
        message:"users api",
        data:id,
    })

})



app.listen(PORT,()=>{
    console.log("server started",PORT);
})