const Address = require('../models/address');
const User = require('../models/user');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');
const mongoose = require('mongoose');

//post
//create new address
exports.addAddress = async (req, res) => {
  const userId = req.user.id;

  const address = new Address({
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    province: req.body.province,
    postalCode: req.body.postalCode,
    country: req.body.country,
  });

  try {
    const newAddress = await address.save();
    await User.findOneAndUpdate({ _id: userId }, { addressId: newAddress._id });
    logger.debug({ address }, 'Saving address: ');
    logger.info({ address }, 'Save address: success');
    res.status(202).json(createSuccessResponse({ message: 'Address is successfully saved' }));
  } catch (error) {
    const err = error.message;
    logger.error({ err }, 'Error saving an address');
    res.status(403).json(createErrorResponse(403, 'Error saving an address'));
  }
};
