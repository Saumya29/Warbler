require("dotenv").config();
const jwt = require("jsonwebtoken");

// make sure user is logged - Authentication
exports.loginRequired = function(req, res, next) {
  try { // to check for undefined tokens
    const token = req.headers.authorization.split(" ")[1] // Bearer 2edgojnriNW
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if(decoded) {
        return next()
      } else {
        return next({
          status: 401, // unauthorized
          message: "Please login first"
        });
      }
    });
  } catch(err) {
      return next({
        status: 401, // unauthorized
        message: "Please login first"
      });
    }
};

// make sure we get the correct user - Authorization
exports.ensureCorrectUser = function(req, res, next) {

};