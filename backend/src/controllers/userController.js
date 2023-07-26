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
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

exports.register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already Exists');
  }

  const user = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  }
});

exports.getUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    var currentUser = await User.findById(userId);
    logger.debug('User found: ' + userId);

    res.status(200).json(
      createSuccessResponse({
        status: 'Found user',
        id: currentUser._id,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
      })
    );
  } catch (error) {
    logger.error({ error, id }, 'Unable to retrieve user info');
    res.status(406).json(createErrorResponse(406, 'Error retrieving a user'));
    next(error);
  }
};

//update user info
exports.updateUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const updateFields = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    };
    await User.findOneAndUpdate({ _id: userId }, updateFields);
    logger.info(`User info for user ${userId} was successfully updated`);
    res.status(200).json(createSuccessResponse({ status: 'User info updated', id: userId }));
  } catch (error) {
    logger.error({ error, id }, 'ERROR. User info is not updated.');
    next(error);
  }
};

//delete user
exports.deleteUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    await User.findByIdAndDelete(userId);
    logger.info(`User  ${userId} was successfully deleted`);
    res.status(200).json(createSuccessResponse({ status: 'User deleted: ', id: userId }));
  } catch (error) {
    logger.error({ error, ownerId, id }, 'ERROR. User is not deleted');
    next(error);
  }
};
