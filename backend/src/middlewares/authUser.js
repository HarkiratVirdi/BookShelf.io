const jwt = require('jsonwebtoken');
const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const { createErrorResponse } = require('../response.js');
const logger = require('../logger');

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, no token');
  }

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    //console.log(req.headers);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(decoded);

      const foundUser = await User.findById(decoded.id).select('-password');
      if (!foundUser) {
        logger.debug('User with this token is not found: ' + decoded.id);
        res.status(404).json(createErrorResponse({ status: 'User with bearer is not found' }));
      } else {
        req.user = foundUser;
      }

      next();
    } catch (err) {
      //console.log(err);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
});
