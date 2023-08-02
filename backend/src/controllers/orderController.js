const Order = require('../models/order');
const User = require('../models/user');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');

//create an order
exports.createOrder = async (req, res) => {
  const userId = req.user.id;

  const order = new Order({
    bookIds: req.body.bookIds,
    totalPrice: req.body.totalPrice,
  });

  try {
    const newOrder = await order.save();
    await User.findOneAndUpdate({ _id: userId }, { $push: { orders: newOrder._id } });
    logger.debug({ order }, 'Saving order: ');
    logger.info({ order }, 'Save order: success');
    res.status(202).json(createSuccessResponse({ message: 'Order is successfully saved' }));
  } catch (error) {
    const err = error.message;
    logger.error({ err }, 'Error saving an order');
    res.status(403).json(createErrorResponse(403, 'Error saving an order'));
  }
};

//get user orders
exports.getOrders = async (req, res, next) => {
  const userOrders = req.user.orders;

  try {
    logger.debug('User found: ' + userOrders);
    res.status(200).json(createSuccessResponse({ status: 'ok', orders: userOrders }));
  } catch (error) {
    logger.error({ error, userId }, 'Unable to retrieve user orders');
    next(error);
  }
};
