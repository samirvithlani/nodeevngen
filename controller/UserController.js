const userSchema = require("../model/UserModel");

const getAllUsers = (req,res)=>{

    userSchema.find().then((users)=>{
        res.status(200).json({
            message:"users fetched",
            users:users
        })

    }).catch((err)=>{
        res.status(500).json({
            message:"error occured",
            error:err
        })
    })
}
const getUserById = (req,res)=>{
    var id = req.params.id;

    userSchema.findById(id).then((user)=>{
        res.status(200).json({
            message:"user fetched",
            user:user
        })
    }).catch((err)=>{
        res.status(404).json({
            message:"user not found",
            error:err
        })
    })
}
const getUserbyName = async(req,res)=>{

    try{
        var name = req.params.name;
        var users = await userSchema.find({name:name})
        if(users!==undefined || users.lenght>0 || users!=null){
            res.status(200).json({
                message:"user fetched",
                user:users
            })
        }
        else{
            res.status(404).json({
                message:"user not found",
                error:err
            })
        }

    }catch(err){

        res.status(500).json({
            message:"error occured",
        })
    }


}
module.exports = {
    getAllUsers,
    getUserById,
    getUserbyName
}

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