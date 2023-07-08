const User = require('../models/user');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken.js');

exports.login = asyncHandler(async (req, res) => {
  const {email, password } = req.body;

  const user = await User.findOne({ email });

  if(user && (await user.comparePassword(password))) {
      res.json({
          _id: user._id,
          email: user.email,
          password: user.password,
          token: generateToken(user._id)
      })
  }
  else {
      res.status(402)(createErrorResponse(401, 'Invalid email or password'));
      console.log({error},'Invalid email or password');
  }

});


exports.register = (req, res) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const pass = req.body.password;
  logger.debug({ user }, 'Creating user: ');

  User.register(user, req.body.password, function (error, user) {
    if (error) {
      const err = error.message;
      logger.debug({ err }, 'Register PASSED error: ');
      res.status(402).json(createErrorResponse(402, 'Error creating a user'));
      logger.error({ error }, 'Error creating a user');
    } else {
      res.status(201).json(createSuccessResponse({ message: 'User is successfully registered' }));
      logger.info('Register function: success');
    }
  });
};
