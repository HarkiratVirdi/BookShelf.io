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
    addressLine2: ' '  || req.body.addressLine2,
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

//get user address
exports.getAddress = async (req, res, next) => {
  const userAddressId = req.user.addressId;

  try {
    if (userAddressId === '000') {
      res.status(404).json(createErrorResponse(404, 'User does not have an address saved'));
    } else {
      var userAddress = await Address.findById(userAddressId);
      logger.debug('Address found: ' + userAddressId);
      res
        .status(200)
        .json(createSuccessResponse({ status: 'Found address', address: userAddress }));
    }
  } catch (error) {
    logger.error({ error, id }, 'Unable to retrieve user address');
    next(error);
  }
};

//update user address
exports.updateAddress = async (req, res, next) => {
  const userAddressId = req.user.addressId;
  try {
    if (userAddressId === '000') {
      res.status(404).json(createErrorResponse(404, 'User does not have an address saved'));
    } else {
      const updateFields = {
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
        country: req.body.country,
      };

      await Address.findOneAndUpdate({ _id: userAddressId }, updateFields);
      logger.info(`User address ${userAddressId} was successfully updated`);
      res.status(200).json(createSuccessResponse({ status: 'Updated address', id: userAddressId }));
    }
  } catch (error) {
    logger.error({ error, id }, 'ERROR. User address is not updated.');
    next(error);
  }
};

//delete address
exports.deleteAddress = async (req, res, next) => {
  const userAddressId = req.user.addressId;
  const userId = req.user.id;
  try {
    if (userAddressId === '000') {
      res.status(404).json(createErrorResponse(404, 'User does not have an address saved'));
    } else {
      await Address.findByIdAndDelete(userAddressId);
      await User.findOneAndUpdate({ _id: userId }, { addressId: '000' });
      logger.info(`Address  ${userAddressId} was successfully deleted`);
      res
        .status(200)
        .json(createSuccessResponse({ status: 'Address deleted', address: userAddressId }));
    }
  } catch (error) {
    logger.error({ error, userAddressId }, 'ERROR. Address is not deleted');
    next(error);
  }
};
