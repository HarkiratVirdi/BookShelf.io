const User = require('../models/user.js');
const { createSuccessResponse, createErrorResponse } = require('../response.js');

exports.register = (req, res) => {
  User.register(
    new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addressLine2,
      city: req.body.city,
      province: req.body.province,
      postalCode: req.body.postalCode,
      country: req.body.country,
    }),
    req.body.password,
    function (error) {
      if (error) {
        res.status(402).json(createErrorResponse(401, 'Error creating a user'));
        logger.error({ error }, 'Error creating a user');
      } else {
        res.status(201).json(createSuccessResponse({ message: 'User is successfully registered' }));
        logger.info('Register function: success');
      }
    }
  );
};
