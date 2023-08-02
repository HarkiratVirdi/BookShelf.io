const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const addressController = require('../controllers/addressController');
const orderController = require('../controllers/orderController');
const { protect } = require('../middlewares/authUser');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/user', protect, userController.getUser);

router.put('/user', protect, userController.updateUser);

router.delete('/user', protect, userController.deleteUser);

router.post('/user/address', protect, addressController.addAddress);

router.get('/user/address', protect, addressController.getAddress);

router.put('/user/address', protect, addressController.updateAddress);

router.delete('/user/address', protect, addressController.deleteAddress);

router.post('/user/order', protect, orderController.createOrder);

router.get('/user/orders', protect, orderController.getOrders);

module.exports = router;
