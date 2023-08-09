const jwt = require("jsonwebtoken");
const secret = "123456";

const generateToken = (user) => {
  console.log(user);
  try {
    const token = jwt.sign(
      { user },
      secret,
      {
        expiresIn: "1h",
      },
      {
        algorithm: "RS256",
      }
    );

    return token;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const validateTOken = (token) => {
  //Bearer token
  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
    try {
      var user = jwt.verify(token, secret);
      console.log(user);
      return user;

    } catch (err) {
      console.log("errorr", err);
      throw new Error("Invalid token");
    }
  } else {
    console.log("Invalid token");
    throw new Error("Invalid token");
  }

  //return user;
};

//generateToken({name:"Rajesh",age:20})

module.exports = { generateToken, validateTOken };
