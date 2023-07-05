const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');
const asyncHandler = require ('express-async-handler');

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
  
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log(req.headers);
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
});