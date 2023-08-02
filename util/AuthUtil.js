const userSchema = require("../model/UserModel");

const getUser = async(id)=>{
    

    try{
        const user = await userSchema.findById(id)
        console.log(user);
        if(user || user !== undefined || user != null || user != [] || user != {}){
            console.log("user found");
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        return false;
    }

}


const authUtil  = async(req,res,next)=>{

    var auth = req.headers.authorization;
    const auth1 = await getUser(auth);
    console.log(auth1);
    if(auth){
        if(auth1){
            next();
        }
        else{
            res.status(401).json({
                message:"unauthorized token is not valid"
            })
        }
    }
    else{
        res.status(401).json({
            message:"unauthorized token is not present"
        })
    }

}
module.exports = {authUtil}