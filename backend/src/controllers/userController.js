const User = require('../models/user');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken.js');
const passport = require('passport');

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  
  if (user && (await user.comparePassword(password))) {
    res.status(200).json(createSuccessResponse({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    }));
  } else {
    res.status(401).json(createErrorResponse(401, 'Invalid email or password'));
  }
});

exports.register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json(createErrorResponse(400, 'User already exists. Please Login'));
  }

  const user = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  if (user) {
    res.status(201).json(createSuccessResponse({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    }));
  }
});
