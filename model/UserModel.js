const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema =new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    birthDate:{
        type:Date,
    },
    role:{
        ref:"Role",
        type:Schema.Types.ObjectId
    }
})
// mongoose.model("user",userSchema);
// module.exports = userSchema;

module.exports = mongoose.model("user",userSchema);