const tokenUtil = require("./TokenUtil");

const authUser = (req, res, next) => {
  try {
    var token = req.headers.authorization;
    if (token !== undefined) {
      var user = tokenUtil.validateTOken(token);
      if (user) {
        //req.user = user;
        next();
      } else {
        res.status(401).send({ message: "Unauthorized access" });
      }
    } else {
      res.status(401).send({
        message: "Unauthorized access token or access key required..",
      });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};
module.exports = { authUser };
