const userSchema = require("../model/UserModel");
const {isEmpaty} = require("../util/ValidationUtil");

const getAllUsers = (req, res) => {
  userSchema
    .find()
    .then((users) => {
      res.status(200).json({
        message: "users fetched",
        users: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error occured",
        error: err,
      });
    });
};
const getUserById = (req, res) => {
  var id = req.params.id;

  userSchema
    .findById(id)
    .then((user) => {
      res.status(200).json({
        message: "user fetched",
        user: user,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "user not found",
        error: err,
      });
    });
};
const getUserbyName = async (req, res) => {
  try {
    var name = req.params.name;
    var users = await userSchema.find({ name: name });
    if (users !== undefined || users.lenght > 0 || users != null) {
      res.status(200).json({
        message: "user fetched",
        user: users,
      });
    } else {
      res.status(404).json({
        message: "user not found",
        error: err,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "error occured",
    });
  }
};

const addUser1 = async (req, res) => {


    if(req.body){

        if(isEmpaty(req.body.name) && isEmpaty(req.body.email)){

            const user = new userSchema(req.body);
            try{
                var flag = await user.save();
                console.log(flag);
                if(flag != undefined || flag != null || flag != [] || flag != {}){
                    res.status(200).json({
                        message:"user added",
                        user:flag
                    })
                }else{
                    res.status(500).json({
                        message:"error occured"
                    })
                }
            }catch(err){

                res.status(500).json({
                    message:"error occured",
                })
            }
        }
        else{
            res.status(500).json({
                message:"name and email is required"

            })
        }


    }else{
        res.status(500).json({
            message:"body is required"
        })
    }
    



}

const addUser = async (req, res) => {
  // const user = req.body;
  // console.log(user);

  // res.status(200).json({
  //     message:"user added",
  // })
  if (req.body.age) {
    if (req.body.age <= 0) {
      res.status(500).json({
        message: "age should be greater than 0",
      });
    } else {
      const user = new userSchema(req.body);
      try {
        var flag = await user.save();
        console.log(flag);
        if (flag != undefined || flag != null || flag != [] || flag != {}) {
          res.status(200).json({
            message: "user added",
            user: flag,
          });
        } else {
          res.status(500).json({
            message: "error occured",
          });
        }
      } catch (err) {
        res.status(500).json({
          message: "error occured",
          error: err,
        });
      }
    }
  } else {
    res.status(500).json({
      message: "age is required",
    });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  getUserbyName,
  addUser,
  addUser1
};

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
