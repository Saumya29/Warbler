const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = function() {}

exports.signup = async function(req, res, next) {
  try {
    //create a user
    const user = await db.User.create(req.body);

    //create jwt token
    const {id, username, profileImageUrl } = user;
    const token = jwt.sign({
      id,
      username,
      profileImageUrl,
    },
    process.env.SECRET_KEY
  );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch(err) {
    // if validation fails!
    if(err.code === 11000) {
      err.message = "Sorry that email and/or username is taken";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
}