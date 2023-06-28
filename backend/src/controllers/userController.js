const User = require('../models/user');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');

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
