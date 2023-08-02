const userSchema = require("../model/UserModel");
const { isEmpaty } = require("../util/ValidationUtil");

const getAllUsersWithRole = (req, res) => {
  userSchema
    .find()
    .populate("role")
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
  if (req.body) {
    if (isEmpaty(req.body.name) && isEmpaty(req.body.email)) {
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
        });
      }
    } else {
      res.status(500).json({
        message: "name and email is required",
      });
    }
  } else {
    res.status(500).json({
      message: "body is required",
    });
  }
};

const deleteUser = async (req, res) => {
  var id = req.params.id;
  try {
    var user = await userSchema.findById(id);
    if (!user == undefined || !user == null || !user == [] || !user == {}) {
      var delres = await userSchema.findByIdAndDelete(id);
      if (
        delres !== undefined ||
        delres !== null ||
        delres !== [] ||
        delres !== {}
      ) {
        res.status(200).json({
          message: "user deleted",
          user: delres,
        });
      } else {
        res.status(404).json({
          message: "user not found",
        });
      }
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "error occured",
      error: err,
    });
  }
};

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

const updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;

  userSchema.findById(id).then((user1) => {
    if (user1 != undefined || user1 != [] || user1 != {}) {
      userSchema
        .findByIdAndUpdate(id, user)
        .then((user2) => {
          res.status(200).json({
            message: "user updated",
            user: user2,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "error occured",
            error: err,
          });
        });
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserbyName,
  addUser,
  addUser1,
  deleteUser,
  updateUser,
  getAllUsersWithRole,
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
